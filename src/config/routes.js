import { AUTH_LAYOUT } from 'base/constants/paths';
import AuthenticationContainer from 'base/containers/AuthenticationContainer';

class TutenRoutes {
  static getDefaultRoutes() {
    const basicRoutes = [
      {
        path: '/login',
        name: 'Página de autenticación',
        component: AuthenticationContainer,
        layout: `/${AUTH_LAYOUT}`,
        redirect: true,
        requiredPermissions: '*',
      },
    ];
    return basicRoutes;
  }

  static getAdminRoutes() {
    const allRestringedRoutes = [];

    return allRestringedRoutes;
  }
}
export default TutenRoutes;
