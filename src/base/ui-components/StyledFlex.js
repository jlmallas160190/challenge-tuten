import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  border:2rem;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin : ${(props) => props.margin};
  margin-top ${(props) => props.marginTop};
  margin-bottom ${(props) => props.marginBottom};
  padding: ${(props) => props.padding};
  justify-content: ${(props) => props.justifyContent}
  align-items: ${(props) => (props.align ? props.align : 'end')};
  align-self: ${(props) => props.alignSelf};
  width: ${(props) => props.width};
  height:${(props) => props.height};
  background:${(props) => props.background};
  @media (max-width: ${(props) => props.theme.mediaQueries.phone}) {
    flex-direction: column;
    width:100%;
    font-size: 1rem;
  }
`;
StyledFlex.propTypes = {
  theme: PropTypes.shape(),
  direction: PropTypes.string,
};
StyledFlex.defaultProps = {
  theme: {
    mediaQueries: {},
    fonts: {},
    colors: {},
    fontWeights: {},
  },
};
export default StyledFlex;
