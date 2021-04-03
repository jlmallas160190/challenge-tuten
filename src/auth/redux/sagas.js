import { addAlert, clearFloatingAlert } from 'alerts/actions/index';
import { ERROR_ALERT } from 'alerts/constants/actionTypes';
import { history } from 'App';
import { ADMIN_LAYOUT } from 'base/constants/paths';
import { setUserLoggedIn } from 'base/utils/helpers';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { authenticateRejected, authenticateResolved } from './actions';
import { AUTHENTICATE_START } from './actionsTypes';
import { autenticateService } from './services';

function* loginHandler({ data }) {
  try {
    const user = yield call(() => autenticateService({ method: 'PUT', url: `user/${data.email}`, password: data.password }),);
    yield put(authenticateResolved(user));
    setUserLoggedIn(user);
    yield put(history.push(`/${ADMIN_LAYOUT}/dashboard`));
  } catch (e) {
    yield put(
      authenticateRejected('Error al intentar entrar. Revisá los datos e intentalo nuevamente.'),
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

export default [takeLatest(AUTHENTICATE_START, loginHandler)];
