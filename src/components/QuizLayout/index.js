import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import QuestionForm from './QuestionForm';
import { InputAdornment } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

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
            <label>Name of quiz</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreateIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter name of quiz"
            />
            <label>Quiz description</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              multiline
              placeholder="Enter quiz description"
            />
            <label>Quiz time</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccessTimeOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter quiz time in minutes"
            />
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
