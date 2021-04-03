import alerts from 'alerts/reducers';
import authentication from 'auth/redux/reducer';
import booking from 'booking/redux/reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  authentication,
  alerts,
  booking,
});

export default reducers;
