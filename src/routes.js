import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import Users from './containers/Users';
import Dashboard from './containers/DashboardPage';
import Company from './containers/Company';


export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="form" component={FormPage}/>
      <Route path="users" component={Users}/>
      <Route path="company" component={Company}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
