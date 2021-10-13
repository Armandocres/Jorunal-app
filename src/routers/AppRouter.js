import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Journal from '../components/journal/Journal';
import AuthRouter from "./AuthRouter";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth.actions';


const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
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
            <Route path="/auth" component={AuthRouter}/>
            <Route exact path="/" component={Journal}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default AppRouter;
