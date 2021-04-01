import { AUTH_LAYOUT } from 'base/constants/paths';
import TutenRoutes from 'config/routes';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AuthLayout = () => {
  const getRoutes = (routes) =>
    routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === `/${AUTH_LAYOUT}`) {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      }
      return null;
    });

  const routes = TutenRoutes.getDefaultRoutes();
  return (
    <div>
      <div>
        <Switch>{getRoutes(routes)}</Switch>
      </div>
    </div>
  );
};

export default AuthLayout;
