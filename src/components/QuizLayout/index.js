import React, { useState } from 'react';
import { Button, Container, Fab, Paper, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import QuestionForm from './QuestionForm';

const QuizLayout = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions((prev) => [...prev, <QuestionForm />]);
  };

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
            <TextField placeholder="English Quiz" />
            <TextField multiline placeholder="Very nice quix..." />
            <Stack direction="row" justifyContent="space-between">
              <TextField placeholder="1.5h" />
              <TextField placeholder="1.5h" />
            </Stack>
            <Button>OK</Button>
          </Stack>
        </Paper>
      </form>

      {questions}

      <Fab color="primary" aria-label="add" onClick={addQuestion}>
        <AddIcon />
      </Fab>
      <Button variant="contained">Add</Button>
    </Container>
  );
};

export default QuizLayout;
