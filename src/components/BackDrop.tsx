import React from 'react';
import { Backdrop, CircularProgress, Box } from '@material-ui/core';
import { useLoading } from './useContext/LoadingContext';
const BackDrop = () => {
  const loading = useLoading();
  return (
    <Box zIndex="tooltip" color="white">
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default BackDrop;
