import React from 'react';
import { Button, Container, Fab, Paper, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const QuestionForm = (props) => {
  const defaultQuestion = {
    title: '',
    answers: [''],
    rightAnswer: '',
  };

  const submitHandler = (e) => {
    props.setQuestions((prev) => [...prev, defaultQuestion]);
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
      <form onSubmit={submitHandler}>
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
            <TextField
              placeholder="Question"
              name="title"
              value={props.title}
            />
            <Button type="submit" size="large" color="success">
              Add
            </Button>
          </Stack>
        </Paper>
      </form>
    </Container>
  );
};

export default QuestionForm;
