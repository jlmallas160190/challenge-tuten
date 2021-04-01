import styled from 'styled-components';
import Paragraph from './Paragraph';

const InputError = styled(Paragraph)`
  margin-top: 0;
  color: ${(props) => props.theme.colors.tomato};
`;

InputError.defaultProps = {
  theme: {
    mediaQueries: {},
    fonts: {},
    colors: {},
    fontWeights: {},
  },
};

export default InputError;
