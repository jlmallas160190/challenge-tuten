import { ADD_ALERT, REMOVE_ALERT } from '../constants/actionTypes';

export function clearFloatingAlert(id) {
  return {
    type: REMOVE_ALERT,
    id,
  };
}
export function addAlert({ id, alertMessage, alertType, displayType }) {
  return {
    id,
    alertMessage,
    type: ADD_ALERT,
    displayType,
    alertType,
  };
}
