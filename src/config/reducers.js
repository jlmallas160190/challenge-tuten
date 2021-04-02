import alerts from 'alerts/reducers';
import authentication from 'auth/redux/reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  authentication,
  alerts,
});

export default reducers;
