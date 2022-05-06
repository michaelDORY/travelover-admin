import React from 'react';
import style from './style.module.css';
import { Box, Button, Container, Paper, Stack } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/icons/logo-yellow.svg';
import { auth } from '../../common/firebase';
import { signOut } from 'firebase/auth';
import DeleteIcon from '@mui/icons-material/Delete';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link } from 'react-router-dom';

function NavPanel() {
  const logout = () => {
    signOut(auth).then(console.log('Logged out')).catch(console.log('Error'));
  };

  const btnData = [
    {
      id: 1,
      title: 'Statistics',
      icon: <AssessmentIcon />,
      path: '/statistics',
    },
    { id: 2, title: 'Add quiz', icon: <AssessmentIcon />, path: '/add-quiz' },
    {
      id: 3,
      title: 'Manage comments',
      icon: <AssessmentIcon />,
      path: '/comments',
    },
    { id: 4, title: 'Add place', icon: <AssessmentIcon />, path: '/add-place' },
  ];

  const toggleActive = (e) => {
    e.target.classList.toggle('activee');
  };

  return (
    <Paper
      sx={{
        height: '100vh',
        width: '300px',
        background: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
      }}
    >
      <Container
        sx={{
          padding: '20px 0 50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Box>
          <Link to="/">
            <Logo style={{ margin: '10px 20px' }} />
          </Link>
          <Stack spacing={3} sx={{ mt: '50px' }}>
            {btnData.map((item) => {
              return (
                <Link to={item.path}>
                  <Button
                    className={style.btn}
                    variant="outlined"
                    startIcon={item.icon}
                    onClick={toggleActive}
                    sx={{
                      '&.Mui-active': {
                        color: 'red',
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              );
            })}
          </Stack>
        </Box>
        <Button
          className={style.btn}
          onClick={logout}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Log OUT
        </Button>
      </Container>
    </Paper>
  );
}

export default NavPanel;
