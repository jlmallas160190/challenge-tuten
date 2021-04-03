import { GET_BOOKING_REJECTED, GET_BOOKING_RESOLVED, GET_BOOKING_START } from './actionsTypes';

const initialState = {
  bookings: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKING_START:
      return {
        ...state,
        loading: true,
      };

    case GET_BOOKING_RESOLVED:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };

    case GET_BOOKING_REJECTED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
