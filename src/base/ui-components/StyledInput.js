import styled, { css } from 'styled-components';

export const inputStyles = css`
  font-size: 1rem;
  line-height: normal;
  border-color: ${(props) => props.theme.colors.gray};
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 0.0625rem;
  box-shadow: inset 0 0.125rem 0.375rem rgba(186, 188, 193, 0.3);
  height: 2rem;
  padding: 0.5rem;
  width: 100%;
  outline: none;
  font-weight: normal;
`;
const StyledInput = styled.input`
  ${inputStyles};
  :focus {
    border-color: ${(props) => props.theme.colors.lightBlue};
    border-width: 0.125rem !important;
    box-shadow: none;
  }
  :active {
    border-color: ${(props) => props.theme.colors.lightBlue};
    border-width: 0.125rem !important;
    box-shadow: none;
  }
  ${(props) =>
    props.error &&
    `
    border-color: ${props.theme.colors.tomato};
    :focus {
      border-color: ${props.theme.colors.tomato};
    }
    :active {
      border-color: ${props.theme.colors.tomato};
    }
  `};
`;
StyledInput.defaultProps = {
  theme: {
    mediaQueries: {},
    fonts: {},
    colors: {},
    fontWeights: {},
  },
};
export default StyledInput;
