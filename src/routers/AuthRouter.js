import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import login from '../components/auth/login';
import Register from '../components/auth/Register';
import Journal from '../components/journal/Journal';


const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route path="/auth/login" component={login} />
          <Route path="/auth/register" component={Register} />
          <Redirect to="/" component={Journal} />
        </Switch>
      </div>
    </div>
  )
}

export default AuthRouter;
