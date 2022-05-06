import React from 'react';
import { Button, Container, Fab, Paper, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const QuestionForm = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: '50px',
      }}
    >
      <form>
        <Paper
          sx={{
            padding: '40px 60px',
            width: '600px',
          }}
        >
          <Stack
            spacing={2}
            sx={{
              '& > *': {
                width: '100%',
              },
            }}
          >
            <TextField placeholder="Question" />
            <Button size="large" color="success">
              Add
            </Button>
          </Stack>
        </Paper>
      </form>
    </Container>
  );
};

export default QuestionForm;
