import { AUTH_LAYOUT } from 'base/constants/paths';
import TutenRoutes from 'config/routes';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AuthLayout = ({ classes }) => {
  const getRoutes = (routes) => routes.map((prop, key) => {
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
    <div className={classes.wrapper}>
      <div className={classes.fullPage}>
        <Switch>{getRoutes(routes)}</Switch>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default AuthLayout;
