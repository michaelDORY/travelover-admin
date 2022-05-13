import { Stack } from '@mui/material';
import React from 'react';
import { PacmanLoader } from 'react-spinners';

function LoadingPage(props) {
  return (
    <Stack
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <PacmanLoader loading={props.loading} size={60} />
    </Stack>
  );
}

export default LoadingPage;
