import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Journal from '../components/journal/Journal';
import AuthRouter from "./AuthRouter";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth.actions';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startLoadingNotes } from '../actions/notes.action';

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged ( auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    })
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <h1>Hola, espera un momento...</h1>
    )
  }

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute path="/auth" isAuth={isLoggedIn} component={AuthRouter}/>
            <PrivateRoute exact path="/" isAuth={isLoggedIn} component={Journal} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default AppRouter;
