import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Singup from '../pages/Singup';
import Forgot from '../pages/Forgot';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SingIn} />
      <Route exact path="/dashboard/:name" component={Dashboard} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/singup" component={Singup} />
      <Route exact path="/forgot" component={Forgot} />
    </Switch>
  );
};

export default Routes;
