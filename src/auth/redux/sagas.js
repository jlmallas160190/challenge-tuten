import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getOptions,
  getSearchPhoneLines,
  postSubmitPhoneLine,
  postSubmitPhoneLinePerEmployee,
} from './services';
import {
  GET_PHONE_LINE_OPTIONS,
  SEARCH_PHONE_LINES,
  SUBMIT_PHONE_LINE,
  SUBMIT_PHONE_LINE_PER_EMPLOYEE,
} from './actionsTypes';
import {
  setPhoneOptions,
  setSearchPhoneLine,
  submitPhoneLineSuccess,
  submitPhoneLineError,
} from './actions';
import { addAlert } from 'app/alerts/actions/index';
import { ERROR_ALERT } from 'app/alerts/constants/actionTypes';
import { history } from 'App';

function* getPhoneLineOptions() {
  try {
    const { data } = yield call(getOptions);

    yield put(setPhoneOptions(data));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

function* searchPhoneLine({ payload }) {
  try {
    const {
      data: {
        result: { lines },
      },
    } = yield call(getSearchPhoneLines, payload);

    yield put(setSearchPhoneLine(lines));
  } catch (err) {
    yield put(
      addAlert({
        alertMessage: 'Error al obtener opciones!',
        displayType: 'danger',
        alertType: ERROR_ALERT,
      }),
    );
  }
}

function* submitPhoneLine({ payload }) {
  try {
    yield call(postSubmitPhoneLine, payload);

    yield put(submitPhoneLineSuccess());
    yield history.goBack();
    yield put(
      addAlert({
        alertMessage: '¡Se han almacenado los datos con exito!',
        displayType: 'success',
      }),
    );
  } catch (err) {
    yield put(
      addAlert({
        alertMessage: '¡No se pudieron almacenar los datos!',
        displayType: 'danger',
        alertType: ERROR_ALERT,
      }),
    );
    submitPhoneLineError();
  }
}

function* submitPhoneLinePerEmployee({ payload }) {
  try {
    yield call(postSubmitPhoneLinePerEmployee, payload);

    yield put(submitPhoneLineSuccess());
    yield history.goBack();
    yield put(
      addAlert({
        alertMessage: '¡Se han almacenado los datos con exito!',
        displayType: 'success',
      }),
    );
  } catch (err) {
    yield put(
      addAlert({
        alertMessage: '¡No se pudieron almacenar los datos!',
        displayType: 'danger',
        alertType: ERROR_ALERT,
      }),
    );
    submitPhoneLineError();
  }
}

export default [
  takeLatest(GET_PHONE_LINE_OPTIONS, getPhoneLineOptions),
  takeLatest(SEARCH_PHONE_LINES, searchPhoneLine),
  takeLatest(SUBMIT_PHONE_LINE, submitPhoneLine),
  takeLatest(SUBMIT_PHONE_LINE_PER_EMPLOYEE, submitPhoneLinePerEmployee),
];
