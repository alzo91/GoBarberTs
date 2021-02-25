import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SingIn from '../pages/SingIn';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Singup from '../pages/Singup';
import Forgot from '../pages/Forgot';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SingIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile/:id" component={Profile} isPrivate />
      <Route path="/singup" component={Singup} />
      <Route path="/forgot" component={Forgot} />
      <Route path="*" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  );
};

export default Routes;
