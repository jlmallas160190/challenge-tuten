import { ADD_ALERT, REMOVE_ALERT } from '../constants/actionTypes';

export const initialState = [];

export default function kernoApiAlerts(state = initialState, action) {
  switch (action.type) {
    case ADD_ALERT: {
      const { id, alertMessage, displayType, alertType } = action;
      return [
        ...state,
        {
          id,
          alertMessage,
          displayType,
          alertType,
        },
      ];
    }
    case REMOVE_ALERT: {
      const indexToRemove = state.findIndex((alert) => alert.id === action.id);
      return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
    }
    default:
      return state;
  }
}
