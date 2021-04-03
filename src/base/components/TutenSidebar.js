import React from 'react';
import PropTypes from 'prop-types';
import { List, Box } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { SidebarItem, SidebarItemIcon, SidebarLink } from 'base/styles/sidebar-style';

export function TutenSidebar({ routes }) {
  const location = useLocation();

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
  return <List>{createLinks()}</List>;
}

TutenSidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()),
};

TutenSidebar.defaultProps = {
  routes: [],
};

export default TutenSidebar;
