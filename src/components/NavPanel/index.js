import React from 'react';
import { Button, Paper } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/icons/logo-yellow.svg';
import { auth } from '../../common/firebase';
import { signOut } from 'firebase/auth';
import DeleteIcon from '@mui/icons-material/Delete';
import AssessmentIcon from '@mui/icons-material/Assessment';
import style from './style.module.css';

function NavPanel() {
  const logout = () => {
    signOut(auth).then(console.log('Logged out')).catch(console.log('Error'));
  };

  return (
    <Paper
      sx={{
        height: '100vh',
        width: '20%',
        background: 'black',
      }}
    >
      <Logo style={{ margin: '10px 20px' }} />
      <Button
        className={style.Button}
        onClick={logout}
        variant="outlined"
        startIcon={<AssessmentIcon style={{ width: '5vh' }} />}
      >
        Statistics
      </Button>
      <Button
        className={style.Button}
        onClick={logout}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Updates
      </Button>
      <Button
        className={style.Button}
        onClick={logout}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        bla
      </Button>
      <Button
        className={style.Button}
        onClick={logout}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        bla
      </Button>
      <Button
        className={style.Button}
        onClick={logout}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Log OUT
      </Button>
    </Paper>
  );
}

export default NavPanel;
