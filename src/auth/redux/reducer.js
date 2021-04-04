import {
  AUTHENTICATE_REJECTED,
  AUTHENTICATE_RESOLVED,
  AUTHENTICATE_START,
  LOGOUT,
} from './actionsTypes';

const initialState = {
  tutenData: {},
  authenticating: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_START:
      return {
        ...state,
        authenticating: true,
      };

    case AUTHENTICATE_RESOLVED:
      return {
        ...state,
        authenticating: false,
        tutenData: action.payload,
      };

    case AUTHENTICATE_REJECTED:
      return {
        ...state,
        authenticating: false,
      };
    case LOGOUT:
      return {
        ...state,
        tutenData: action.payload,
        authenticating: false,
      };
    default:
      return state;
  }
};
