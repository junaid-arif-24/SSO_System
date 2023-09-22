import * as React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';

function CustomCollapse(props) {
  const {children, in: open, ...rest} = props;

  return (
    <Collapse in={open} {...rest}>
      {children}
    </Collapse>
  );
}

CustomCollapse.propTypes = {
  children: PropTypes.node.isRequired,
  in: PropTypes.bool,
};

export default function StepContentWithCustomTransition(props) {
  const {children, open} = props;

  return (
    <Box sx={{position: 'relative'}}>
      <CustomCollapse in={open}>{children}</CustomCollapse>
    </Box>
  );
}

StepContentWithCustomTransition.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
};
