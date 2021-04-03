import { GET_BOOKING_RESOLVED, GET_BOOKING_START } from './actionsTypes';

export const getBookings = (params) => ({
  type: GET_BOOKING_START,
  data: params,
});

export const getBookingResolved = (payload) => ({
  type: GET_BOOKING_RESOLVED,
  payload,
});

export const getBookingRejected = (payload) => ({
  type: GET_BOOKING_RESOLVED,
  payload,
});
