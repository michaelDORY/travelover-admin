import CommentIcon from '@mui/icons-material/Comment';
import LogoutIcon from '@mui/icons-material/Logout';
import PlaceIcon from '@mui/icons-material/Place';
import QuizIcon from '@mui/icons-material/Quiz';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { Box, Button, Container, Paper, Stack } from '@mui/material';
import { auth } from 'common/firebase';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo-yellow.svg';
import style from './style.module.css';

function NavPanel() {
  const location = useLocation();

  const logout = () => {
    signOut(auth).catch(() => console.log('Error'));
  };

  const btnData = [
    {
      id: 1,
      title: 'Statistics',
      icon: <StackedLineChartIcon />,
      path: '/',
    },
    { id: 2, title: 'Add quiz', icon: <QuizIcon />, path: '/add-quiz' },
    {
      id: 3,
      title: 'Comments',
      icon: <CommentIcon />,
      path: '/comments',
    },
    { id: 4, title: 'Add place', icon: <PlaceIcon />, path: '/add-place' },
  ];

  return (
    <Paper
      sx={{
        height: '100vh',
        width: '330px',
        background: 'rgba(15,15,13,0.89)',
        position: 'fixed',
        borderRadius: '0px 60px 30px 0px',
      }}
    >
      <Container
        sx={{
          padding: '45px 0 50px',
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
                <Link key={item.path} to={item.path}>
                  <Button
                    className={`${style.btn} ${
                      location.pathname === item.path ? style.active : null
                    }`}
                    variant="outlined"
                    startIcon={item.icon}
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
          startIcon={<LogoutIcon />}
        >
          Log OUT
        </Button>
      </Container>
    </Paper>
  );
}

export default NavPanel;
