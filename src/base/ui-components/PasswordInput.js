import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledInput from './StyledInput';

const PasswordInput = styled(StyledInput).attrs({
  type: 'password',
})``;

PasswordInput.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object.isRequired,
};

PasswordInput.defaultProps = {
  theme: {
    mediaQueries: {},
    fonts: {},
    colors: {},
    fontWeights: {},
  },
};
export default PasswordInput;
