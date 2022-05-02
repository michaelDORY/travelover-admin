import React from 'react';
import { Button, Paper } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/icons/logo-yellow.svg';
import { auth } from '../../common/firebase';
import { signOut } from 'firebase/auth';

function NavPanel() {
  const logout = () => {
    signOut(auth).then(console.log('Logged out')).catch(console.log('Error'));
  };

  return (
    <Paper
      sx={{ height: '100vh', width: '15%', background: 'rgba(0, 0, 0, 0.7)' }}
    >
      <Logo />
      <Button onClick={logout}>Log OUT</Button>
    </Paper>
  );
}

export default NavPanel;
