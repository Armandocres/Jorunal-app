import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Journal from '../components/journal/Journal';
import AuthRouter from "./AuthRouter";


const AppRouter = () => {
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
