import AuthenticationContainer from 'auth/containers/AuthenticationContainer';
import Dashboard from 'base/components/Dashboard';
import { ADMIN_LAYOUT, AUTH_LAYOUT, BOOKING_LIST } from 'base/constants/paths';
import BookingListContainer from 'booking/containers/BookingListContainer';

import { faThLarge } from '@fortawesome/free-solid-svg-icons/index';
import { faBook } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';

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
    const allRestringedRoutes = [
      {
        path: `${ADMIN_LAYOUT}/dashboard`,
        name: 'Dashboard',
        icon: faThLarge,
        component: Dashboard,
        layout: `/${ADMIN_LAYOUT}`,
        exact: true,
        requiredPermissions: '*',
      },
      {
        path: BOOKING_LIST,
        name: 'Reservaciones',
        icon: faBook,
        component: BookingListContainer,
        layout: `/${ADMIN_LAYOUT}`,
        exact: true,
        requiredPermissions: '*',
      },
    ];

    return allRestringedRoutes;
  }
}
export default TutenRoutes;
