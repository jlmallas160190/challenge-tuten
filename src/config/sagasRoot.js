import authSagas from 'auth/redux/sagas';
import bookingSagas from 'booking/redux/sagas';
import { all } from 'redux-saga/effects';

export const sagasRoot = function* () {
  yield all([...authSagas, ...bookingSagas]);
};
