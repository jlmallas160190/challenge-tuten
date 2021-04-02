import authSagas from 'auth/redux/authSagas';
import { all } from 'redux-saga/effects';

export const sagasRoot = function* () {
  yield all([...authSagas]);
};
