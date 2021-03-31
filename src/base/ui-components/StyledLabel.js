import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DARK_COLOR } from '../constants/colors';

const StyledLabel = styled.label`
  font-size: ${(props) => props.fontSize};
  line-height: 1;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.texttransform};
  color: ${(props) => props.color || DARK_COLOR};
  ${(props) => props.bold && 'font-weight: 700'};
`;

StyledLabel.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  displayBlock: PropTypes.bool,
  textTransform: PropTypes.string,
  bold: PropTypes.bool,
  fontSize: PropTypes.string,
  textAlign: PropTypes.string,
  margin: PropTypes.string,
};

StyledLabel.defaultProps = {
  disabled: false,
  displayBlock: false,
  textTransform: 'normal',
  bold: false,
  fontSize: ' 0.875rem',
  textAlign: 'justify',
};

export default StyledLabel;
