import {
  GET_PHONE_LINE_OPTIONS,
  SET_PHONE_LINE_OPTIONS,
  SEARCH_PHONE_LINES,
  SET_SEARCH_PHONE_LINES,
  SUBMIT_PHONE_LINE,
  SUBMIT_PHONE_LINE_SUCCESS,
  SUBMIT_PHONE_LINE_ERROR,
  SUBMIT_PHONE_LINE_PER_EMPLOYEE,
} from './actionsTypes';

const initialState = {
  phonelines: [],
  phoneLineOptions: {},
  loading: false,
  lineLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONE_LINE_OPTIONS:
      return {
        ...state,
        loading: true,
      };

    case SET_PHONE_LINE_OPTIONS:
      return {
        ...state,
        loading: false,
        phoneLineOptions: action.payload,
      };

    case SEARCH_PHONE_LINES:
      return {
        ...state,
        lineLoading: true,
      };

    case SET_SEARCH_PHONE_LINES:
      return {
        ...state,
        lineLoading: false,
        phonelines: action.payload,
      };

    case SUBMIT_PHONE_LINE:
      return {
        ...state,
        submitLoading: true,
      };

    case SUBMIT_PHONE_LINE_SUCCESS:
      return {
        ...state,
        submitLoading: false,
      };

    case SUBMIT_PHONE_LINE_ERROR:
      return {
        ...state,
        submitLoading: false,
      };
    case SUBMIT_PHONE_LINE_PER_EMPLOYEE:
      return {
        ...state,
        submitLoading: false,
      };
    default:
      return state;
  }
};
