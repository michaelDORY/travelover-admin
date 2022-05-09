import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import QuestionForm from './QuestionForm';

const QuizLayout = () => {
  const defaultQuestion = {
    id: uniqid(),
    title: '',
    answers: [''],
    rightAnswer: '',
  };

  const [questions, setQuestions] = useState([defaultQuestion]);

  // const addQuestion = () => {
  //   setQuestions((prev) => [...prev, defaultQuestion]);
  // };

  return (
    <Box
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
          </Stack>
        </Paper>
      </form>
      {questions.map((item) => (
        <QuestionForm
          key={uniqid()}
          id={item.id}
          title={item.title}
          answers={item.answers}
          rightAnswer={item.rightAnswer}
          setQuestions={setQuestions}
          questions={questions}
        />
      ))}
      <Button variant="contained" size="large">
        Add quiz
      </Button>
    </Box>
  );
};

export default QuizLayout;
