import TutenSidebar from 'base/components/TutenSidebar';
import { ADMIN_LAYOUT } from 'base/constants/paths';
import { Content, Drawer } from 'base/styles/layout-style';
import React from 'react';
import { Switch } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ProtectedRoute from 'config/ProtectedRoute';
import TutenRoutes from 'config/routes';

export default function AdminLayout() {
  const routes = TutenRoutes.getAdminRoutes();

  const getRoutes = (routesParam) => routesParam.map((prop, key) => {
    if (prop.collapse) {
      return getRoutes(prop.views);
    }

    if (prop.layout === `/${ADMIN_LAYOUT}`) {
      return (
        <ProtectedRoute
          path={`/${prop.path}`}
          component={prop.component}
          key={key}
          exact={prop.exact}
          permissions={prop.requiredPermissions}
        />
      );
    }
    return null;
  });

  return (
    <Box display="flex">
      <Drawer variant="permanent" anchor="left">
        <TutenSidebar routes={routes} />
      </Drawer>
      <Content>
        <Container maxWidth="lg">
          <Grid item xs={12} md={12} lg={12}>
            <Switch>{getRoutes(routes)}</Switch>
          </Grid>
        </Container>
      </Content>
    </Box>
  );
}
