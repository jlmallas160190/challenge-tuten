import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function GridContainer({ ...props }) {
  const { children, customStyles, ...rest } = props;
  return (
    <Grid style={customStyles} container {...rest}>
      {children}
    </Grid>
  );
}
GridContainer.propTypes = {
  children: PropTypes.node,
  customStyles: PropTypes.shape(),
};
GridContainer.defaultProps = {
  customStyles: {},
  children: null,
};
export default GridContainer;
