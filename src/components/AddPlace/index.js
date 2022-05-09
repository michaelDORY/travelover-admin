import React from 'react';
import style from './style.module.css';
import { Box, Button, Container, Paper, TextField } from '@mui/material';

function AddPlace(props) {
  return (
    <Box
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

            '& > *': {
              width: '100%',
            },
          }}
        >
          <TextField placeholder="Paris Cafe" />
          <TextField multiline placeholder="Very nice...." />
          <Button variant="contained" component="label">
            Upload File
            <input type="file" accept="image/*" hidden />
          </Button>
          <Button>Ok</Button>
        </Paper>
      </form>
    </Box>
  );
}

export default AddPlace;
