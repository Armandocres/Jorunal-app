import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui.actions';
import UseForm from '../../hooks/useForm';
import validator from 'validator';
import { startLoginEmailPasswordName } from '../../actions/auth.actions';

const Register = () => {
  const dispatch = useDispatch();

  const { msgError, loading } = useSelector(state => state.ui);
  console.log(msgError);

  const [formValues, handleInputChange] = UseForm({
    name: 'armando',
    email: '',
    password: '123456',
    password2: '123456'
  })

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPasswordName(email, password, name))
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Error en name is required'));
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Error en email is required or email is not valid'));
      return false
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('Error en password'));
      return false
    }
    dispatch(removeError());
    return true
  }

  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister} class="animate__animated animate__fadeIn animate_faster">
        {
          msgError && (
          <div className='auth__alert-error'>
            {msgError}
          </div>
        )
        }
        <input
          placeholder="username"
          name="name"
          type="text"
            className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
          />
        <input
          placeholder="email"
          name="email"
          type="text"
            className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
          />
        <input
          placeholder="password"
          name="password"
          type="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          placeholder="Confirm password"
          name="password2"
          type="password"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
          />
        <button type="submit" className="btn btn-primary btn-block mb-5" disabled={loading}>Register</button>

        <Link to="/auth/login" className="link">
        Already registered?
        </Link>
      </form>
    </div>
  )
}

export default Register;
