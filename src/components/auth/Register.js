import React from 'react';
import { Link } from "react-router-dom"
import UseForm from '../../hooks/useForm';
import validator from 'validator';

const Register = () => {

  const [formValues, handleInputChange] = UseForm({
    name: 'armando',
    email: 'nando1@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('formulario correcto');
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log('no netra name');
      return false
    } else if (!validator.isEmail(email)) {
      console.log('no netra email');
      return false
    } else if (password !== password2 || password.length < 5) {
      console.log('no netra password');
      return false
    }
    return true
  }

  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className='auth__alert-error'>
          
        </div>
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
        <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>

        <Link to="/auth/login" className="link">
        Already registered?
        </Link>
      </form>
    </div>
  )
}

export default Register;
