import React from 'react';
import { Paper } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/icons/logo-yellow.svg';

function NavPanel() {
  return (
    <Paper sx={{ height: '100vh', width: '15%', background: 'rgba(0, 0, 0, 0.7)' }}>
      <Logo />
    </Paper>
  )
}

export default NavPanel