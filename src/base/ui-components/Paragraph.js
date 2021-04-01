import PropTypes from 'prop-types';
import styled from 'styled-components';

const getColor = (props) => {
  if (props.alert) {
    return props.theme.colors.white;
  }
  if (props.color) {
    return props.color;
  }
  return props.theme.colors.tomato;
};

const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin || '1rem 0'};
  color: ${(props) => getColor(props)};
`;

Paragraph.propTypes = {
  alert: PropTypes.shape(),
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape(),
  lineHeight: PropTypes.string,
};

Paragraph.defaultProps = {
  theme: {
    mediaQueries: {},
    fonts: {},
    colors: {},
    fontWeights: {},
  },
  fontSize: '1rem',
  lineHeight: '1',
};

/** @component */
export default Paragraph;
