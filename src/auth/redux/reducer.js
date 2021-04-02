import { AUTHENTICATE_REJECTED, AUTHENTICATE_RESOLVED, AUTHENTICATE_START } from './actionsTypes';

const initialState = {
  tuteData: {},
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
        tuteData: action.payload,
      };

    case AUTHENTICATE_REJECTED:
      return {
        ...state,
        authenticating: false,
      };

    default:
      return state;
  }
};
