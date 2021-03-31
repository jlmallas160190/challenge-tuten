import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LIGHT_GRAY, MEDIUM_GRAY, PRIMARY_COLOR } from 'base/constants/colors';

export const SidebarItem = styled(ListItem)`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const SidebarItemIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  width: 50px;
  height: 50px;
`;

export const SidebarLink = styled(NavLink)`
  width: 100%;
  color: ${({ selected }) => (selected ? PRIMARY_COLOR : MEDIUM_GRAY)};
  border-left: 5px solid ${({ selected }) => (selected ? PRIMARY_COLOR : 'transparent')};
  background-color: ${({ selected }) => selected && LIGHT_GRAY};
`;
