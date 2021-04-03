import { addAlert, clearFloatingAlert } from 'alerts/actions/index';
import { ERROR_ALERT } from 'alerts/constants/actionTypes';
import { getUserLoggedIn } from 'base/utils/helpers';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { getBookingRejected, getBookingResolved } from './actions';
import { GET_BOOKING_START } from './actionsTypes';
import { getBookings } from './services';

function* getBookingsHandler({ data }) {
  try {
    const user = getUserLoggedIn();
    yield call(() => getBookings({
      method: 'GET',
      url: `user/${data.email}/bookings?current=true`,
      token: user.sessionTokenBck,
      email: user.email,
    }),);
    yield put(getBookingResolved(user));
  } catch (e) {
    yield put(
      getBookingRejected('Error al intentar entrar. Revisá los datos e intentalo nuevamente.'),
    );
    const id = uuidv4();
    yield put(
      addAlert({
        id,
        alertMessage: e.response.data,
        displayType: 'danger',
        alertType: ERROR_ALERT,
      }),
    );
    yield delay(3000);
    yield put(clearFloatingAlert(id));
  }
}

export default [takeLatest(GET_BOOKING_START, getBookingsHandler)];
