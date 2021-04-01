import { isUserLoggedIn } from 'base/utils/helper';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, permissions, ...rest }) {
  const componentRender = () => Component;
  const ComponentToRender = componentRender();
  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedIn() ? (
          <ComponentToRender {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  location: PropTypes.shape({}),
  component: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func]),
  permissions: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
ProtectedRoute.defaultProps = {
  location: {},
  component: null,
  permissions: [],
};

export default ProtectedRoute;
