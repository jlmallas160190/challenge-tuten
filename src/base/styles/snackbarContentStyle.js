import {
  BLACK,
  GRAY,
  GREEN,
  hexToRgb,
  LIGHT_BLUE,
  TOMATO,
  WHITE,
  YELLOW,
} from '../constants/colors';

const snackbarContentStyle = {
  root: {
    flexWrap: 'unset',
    position: 'relative',
    padding: '20px 15px',
    lineHeight: '20px',
    marginBottom: '20px',
    fontSize: '14px',
    backgroundColor: WHITE,
    color: GRAY,
    borderRadius: '3px',
    boxShadow: `0 12px 20px -10px rgba(${hexToRgb(WHITE)}, 0.28), 0 4px 20px 0px rgba(${hexToRgb(
      BLACK,
    )}, 0.12), 0 7px 8px -5px rgba(${hexToRgb(WHITE)}, 0.2)`,
  },
  top20: {
    top: '20px',
  },
  top40: {
    top: '40px',
  },
  info: {
    backgroundColor: LIGHT_BLUE,
    color: WHITE,
  },
  success: {
    backgroundColor: GREEN,
    color: WHITE,
  },
  warning: {
    backgroundColor: TOMATO,
    color: WHITE,
  },
  danger: {
    backgroundColor: TOMATO,
    color: WHITE,
  },
  primary: {
    backgroundColor: LIGHT_BLUE,
    color: WHITE,
  },

  message: {
    padding: '0',
    display: 'block',
    maxWidth: '89%',
  },
  close: {
    width: '11px',
    height: '11px',
  },
  iconButton: {
    width: '24px',
    height: '24px',
    padding: '0',
  },
  icon: {
    width: '38px',
    height: '38px',
    display: 'block',
    left: '15px',
    position: 'absolute',
    marginTop: '-39px',
    fontSize: '20px',
    backgroundColor: WHITE,
    padding: '9px',
    borderRadius: '50%',
    maxWidth: '38px',
    boxShadow: `0 10px 30px -12px rgba(${hexToRgb(BLACK)}, 0.42), 0 4px 25px 0px rgba(${hexToRgb(
      BLACK,
    )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(BLACK)}, 0.2)`,
  },
  infoIcon: {
    color: GREEN,
  },
  successIcon: {
    color: GREEN,
  },
  warningIcon: {
    color: YELLOW,
  },
  dangerIcon: {
    color: TOMATO,
  },
  primaryIcon: {
    color: LIGHT_BLUE,
  },
  iconMessage: {
    paddingLeft: '50px',
    display: 'block',
  },
};

export default snackbarContentStyle;
