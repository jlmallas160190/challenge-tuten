import Close from '@material-ui/icons/Close';
import cx from 'classnames';
import { relative } from 'path';
import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Snack from '@material-ui/core/Snackbar';
import withStyles from '@material-ui/core/styles/withStyles';

import snackbarContentStyle from '../styles/snackbarContentStyle';

function Snackbar(props) {
  const { classes, message, color, close, icon, place, open, closeNotification } = props;
  let action = [];
  const messageClasses = cx({
    [classes.iconMessage]: icon !== undefined,
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={() => closeNotification()}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  const iconClasses = cx({
    [classes.icon]: classes.icon,
    [classes.infoIcon]: color === 'info',
    [classes.successIcon]: color === 'success',
    [classes.warningIcon]: color === 'warning',
    [classes.dangerIcon]: color === 'danger',
    [classes.primaryIcon]: color === 'primary',
    [classes.roseIcon]: color === 'rose',
  });
  return (
    <Snack
      classes={{
        anchorOriginTopCenter: classes.top20,
        anchorOriginTopRight: classes.top40,
        anchorOriginTopLeft: classes.top40,
      }}
      anchorOrigin={{
        vertical: place.indexOf('t') === -1 ? 'bottom' : 'top',
        horizontal:
          place.indexOf('l') !== -1 ? 'left' : place.indexOf('c') !== -1 ? 'center' : 'right',
      }}
      open={open}
      message={(
        <div>
          {icon !== undefined ? <props.icon className={iconClasses} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      )}
      style={{ position: relative }}
      action={action}
      ContentProps={{
        classes: {
          root: `${classes.root} ${classes[color]}`,
          message: classes.message,
        },
      }}
    />
  );
}

Snackbar.defaultProps = {
  color: 'info',
  closeNotification: () => {},
  message: null,
  icon: null,
  open: false,
  close: false,
  place: 'tl',
};

Snackbar.propTypes = {
  classes: PropTypes.shape().isRequired,
  message: PropTypes.string,
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'primary', 'rose']),
  close: PropTypes.bool,
  icon: PropTypes.shape(),
  place: PropTypes.oneOf(['tl', 'tr', 'tc', 'br', 'bl', 'bc']),
  open: PropTypes.bool,
  closeNotification: PropTypes.func,
};

export default withStyles(snackbarContentStyle)(Snackbar);
