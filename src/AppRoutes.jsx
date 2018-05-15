import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/users/sign_in/Login';
import UserList from './components/users';
import NewUser from './components/users/NewUser';
import EditUser from './components/users/EditUser';

const AppRoutes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/users" component={UserList} />
      <Route exact path="/users/new" component={NewUser} />
      <Route path="/users/edit/:userId" component={EditUser} />
    </Switch>
  </div>
);

export default AppRoutes;
