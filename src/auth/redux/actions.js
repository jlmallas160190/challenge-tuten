import { userLogout } from 'base/utils/helpers';
import {
  AUTHENTICATE_REJECTED,
  AUTHENTICATE_RESOLVED,
  AUTHENTICATE_START,
  LOGOUT,
} from './actionsTypes';

export const authenticateStart = ({ email, password }) => ({
  type: AUTHENTICATE_START,
  data: { email, password },
});

export const authenticateResolved = (payload) => ({
  type: AUTHENTICATE_RESOLVED,
  payload,
});

export const authenticateRejected = (payload) => ({
  type: AUTHENTICATE_REJECTED,
  payload,
});
export const logoutUser = () => {
  userLogout();
  return {
    type: LOGOUT,
    payload: {},
  };
};
