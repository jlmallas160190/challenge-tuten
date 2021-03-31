import styled from 'styled-components';
import { Box, Drawer as DrawerMaterial } from '@material-ui/core';
import { LIGHT_GRAY } from 'base/constants/colors';

export const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 999px;
  padding: 5px;
  width: 50px;
  height: 50px;
`;

export const Logo = styled.img`
  width: 100%;
  margin-top: -5px;
`;

export const Content = styled.main`
  width: 100%;
  background-color: ${LIGHT_GRAY};
  padding: 30px 20px;
  height: 100vh;
`;

export const Drawer = styled(DrawerMaterial)`
  width: 75px;

  .MuiDrawer-paperAnchorDockedLeft {
    width: 75px;
    border: none;
  }
`;
