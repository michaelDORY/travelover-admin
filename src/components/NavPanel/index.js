import React from 'react';
import style from './style.module.css';
import {Box, Button, Container, Paper, Stack} from '@mui/material';
import {ReactComponent as Logo} from '../../assets/icons/logo-yellow.svg';
import {auth} from '../../common/firebase';
import {signOut} from 'firebase/auth';
import DeleteIcon from '@mui/icons-material/Delete';
import AssessmentIcon from '@mui/icons-material/Assessment';

function NavPanel() {
  const logout = () => {
    signOut(auth).then(console.log('Logged out')).catch(console.log('Error'));
  };

  const btnData = [
    {id: 1, title: 'Statistics', icon: <AssessmentIcon/>},
    {id: 2, title: 'Add quiz', icon: <AssessmentIcon/>},
    {id: 3, title: 'Manage comments', icon: <AssessmentIcon/>},
    {id: 4, title: 'Add place', icon: <AssessmentIcon/>},
  ];

  return (
    <Paper
      sx={{
        height: '100vh',
        width: '300px',
        background: 'black',
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
          <Logo style={{margin: '10px 20px'}}/>
          <Stack spacing={3} sx={{mt: '50px'}}>
            {btnData.map((item) => {
              return (
                <Button
                  className={style.btn}
                  variant="outlined"
                  startIcon={item.icon}
                  onClick={}
                >
                  {item.title}
                </Button>
              );
            })}
          </Stack>
        </Box>
        <Button
          className={style.btn}
          onClick={logout}
          variant="outlined"
          startIcon={<DeleteIcon/>}
        >
          Log OUT
        </Button>
      </Container>
    </Paper>
  );
}

export default NavPanel;
