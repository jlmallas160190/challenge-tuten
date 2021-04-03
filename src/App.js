import AlertContainer from 'alerts/containers/AlertContainer';
import { ADMIN_LAYOUT, AUTH_LAYOUT } from 'base/constants/paths';
import AdminLayout from 'base/layouts/AdminLayout';
import AuthLayout from 'base/layouts/AuthLayout';
import ProtectedRoute from 'config/ProtectedRoute';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';

export const history = createBrowserHistory();

const App = () => (
  <>
    <Router history={history}>
      <Switch>
        <Route path={`/${AUTH_LAYOUT}`} component={AuthLayout} />
        <ProtectedRoute path={`/${ADMIN_LAYOUT}`} component={AdminLayout} permissions="*" />
        <Redirect from="/" to={`/${ADMIN_LAYOUT}/dashboard`} />
      </Switch>
    </Router>
    <AlertContainer />
  </>
);

export default App;
