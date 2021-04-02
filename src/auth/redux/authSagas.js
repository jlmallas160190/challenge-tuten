import { call, put, takeLatest } from 'redux-saga/effects';
import { authenticate, authenticateRejected, authenticateResolved } from './actions';
import { AUTHENTICATE_START } from './actionsTypes';

function* loginHandler({ data }) {
  try {
    console.log(data);
    const { data: user } = yield call(authenticate, data);

    if (user.user.type === 'Usuario') {
      yield put(authenticateResolved(user));
    } else {
      yield put(authenticateRejected());
      // yield put(displayModal({
      //   type: 'custom',
      //   content: <ContentModal
      //     title="¡Usuario incorrecto!"
      //     text="Por favor ingresá con una cuenta válida. Gracias!"
      //   />
      // }));
    }
  } catch (e) {
    yield put(
      authenticateRejected('Error al intentar entrar. Revisá los datos e intentalo nuevamente.'),
    );
    // yield put(displayModal({
    //   type: 'custom',
    //   content: <ContentModal
    //     title="Hubo un error!"
    //     text="La información no es válida."
    //   />
    // }));
  }
}

export default [takeLatest(AUTHENTICATE_START, loginHandler)];
