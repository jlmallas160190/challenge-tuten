import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { animated, Transition } from 'react-spring/renderprops';

import Done from '@material-ui/icons/Done';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

import { clearFloatingAlert } from '../actions/index';

import { ERROR_ALERT } from '../constants/actionTypes';
import Snackbar from 'base/ui-components/Snackbar';

const AlertContainer = () => {
  const dispatch = useDispatch();
  const handleDismiss = (alertId) => {
    dispatch(clearFloatingAlert(alertId));
  };
  const alerts = useSelector((state) => state.alerts);

  return (
    <Transition
      native
      items={alerts}
      keys={(alert) => alert.id}
      from={{ position: 'relative', opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {(alert) => (commonProps) => (
        <animated.div style={commonProps}>
          <Snackbar
            key={alert.id}
            place="br"
            color={alert.displayType}
            icon={alert.alertType === ERROR_ALERT ? ErrorOutline : Done}
            message={alert.alertMessage}
            closeNotification={() => handleDismiss(alert.id)}
            open
            close
          />
        </animated.div>
      )}
    </Transition>
  );
};

export default AlertContainer;
