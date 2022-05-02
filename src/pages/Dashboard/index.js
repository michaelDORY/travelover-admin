import React from 'react';
import NavPanel from '../../components/NavPanel';
import { Box, Container } from '@mui/material';
import style from './style.module.css';

function Dashboard(props) {
  return (
    <Box className={style.Box} sx={{ display: 'flex' }}>
      <NavPanel />
      <Container>bla</Container>
    </Box>
  );
}

export default Dashboard;
