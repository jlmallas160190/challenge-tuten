import PropTypes from 'prop-types';
import React from 'react';

const AuthenticationContainer = ({ classes }) => (
  // const { kernoData, isSaving } = useSelector((state) => state[AUTHENTICATION][USER_LOGGED]);
  // const userLogged = authUtil.getUserLoggedIn();
  // if (!isSaving && kernoData.accessToken) {
  //   authUtil.setUserLoggedIn(kernoData);
  // }
  // if (userLogged && userLogged.accessToken) {
  //   return <Redirect to={`/${ADMIN_LAYOUT}`} />;
  // }

  <div className={classes.container} />
);
AuthenticationContainer.propTypes = {
  classes: PropTypes.shape({ container: PropTypes.string }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default AuthenticationContainer;
