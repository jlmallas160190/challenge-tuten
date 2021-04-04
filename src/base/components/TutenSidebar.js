import { Box, List } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { history } from 'App';
import { logoutUser } from 'auth/redux/actions';
import { SidebarItem, SidebarItemIcon, SidebarLink } from 'base/styles/sidebar-style';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { faSignOutAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';

export function TutenSidebar({ routes }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const onClick = (values) => {
    history.push('/auth/login');
    dispatch(logoutUser(values));
  };
  const generateItemMenu = (route, key) => (
    <SidebarItem key={key}>
      <SidebarLink selected={location.pathname?.includes(route.path)} to={`/${route.path}`}>
        <Box display="flex" justifyContent="center">
          <SidebarItemIcon icon={route.icon} />
        </Box>
      </SidebarLink>
    </SidebarItem>
  );

  const createLinks = () => routes.map((prop, key) => {
    if (prop.redirect) {
      return null;
    }

    return generateItemMenu(prop, key);
  });
  return (
    <div>
      <List>{createLinks()}</List>
      <Divider />
      <Box display="flex" justifyContent="center">
        <Box position="relative">
          <IconButton color="primary" onClick={onClick}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

TutenSidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()),
};

TutenSidebar.defaultProps = {
  routes: [],
};

export default TutenSidebar;
