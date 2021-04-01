import { AUTHENTICATE_REJECTED, AUTHENTICATE_RESOLVED, AUTHENTICATE_START } from './actionsTypes';

export const authenticate = ({ email, password }) => ({
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
