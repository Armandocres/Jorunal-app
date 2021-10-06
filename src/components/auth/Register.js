import React from 'react';
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          placeholder="username"
          name="name"
          type="text"
            className="auth__input"
            autoComplete="off"
          />
        <input
          placeholder="email"
          name="email"
          type="text"
            className="auth__input"
            autoComplete="off"
          />
        <input
          placeholder="password"
          name="password"
          type="password"
          className="auth__input"
        />
        <input
          placeholder="Confirm password"
          name="password2"
          type="password"
          className="auth__input"
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
