import React from 'react';
import style from './style.module.css';
import { Button, Container, Paper, TextField } from '@mui/material';

function AddPlace(props) {
  return (
    <Container
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <form>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 30px',
          }}
        >
          <TextField />
          <TextField multiline />
          <Button>Ok</Button>
        </Paper>
      </form>
    </Container>
  );
}

export default AddPlace;
