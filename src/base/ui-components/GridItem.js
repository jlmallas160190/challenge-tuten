import React from 'react';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const GridItem = ({ ...props }) => {
  const { children, customStyles, ...rest } = props;
  return (
    <Grid style={customStyles} item {...rest}>
      {children}
    </Grid>
  );
};
GridItem.propTypes = {
  customStyles: PropTypes.shape(),
  children: PropTypes.node,
  className: PropTypes.func,
};
GridItem.defaultProps = {
  customStyles: { padding: '0 1rem 0 0' },
  children: null,
  className: null,
};
export default GridItem;
