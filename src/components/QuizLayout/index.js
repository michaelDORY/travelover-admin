import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Fab,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import QuestionForm from './QuestionForm';

const QuizLayout = () => {
  const defaultQuestion = {
    title: '',
    answers: [''],
    rightAnswer: '',
  };

  const [questions, setQuestions] = useState([]);
  // const questions = [];

  useEffect(() => {
    setQuestions((prev) => {
      return [...prev, defaultQuestion];
    });
  }, []);

  const addQuestion = () => {
    setQuestions((prev) => [...prev, defaultQuestion]);
  };

  console.log(questions);

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
            <Button>OK</Button>
          </Stack>
        </Paper>
      </form>
      <QuestionForm />
      {/*{questions.map((item) => {*/}
      {/*  <QuestionForm*/}
      {/*    title={item.title}*/}
      {/*    answers={item.answers}*/}
      {/*    rightAnswer={item.rightAnswer}*/}
      {/*    setQuestions={setQuestions()}*/}
      {/*  />;*/}
      {/*})}*/}

      {/*<Fab color="primary" aria-label="add" onClick={addQuestion}>*/}
      {/*  <AddIcon />*/}
      {/*</Fab>*/}
      <Button variant="contained" size="large">
        Add quiz
      </Button>
    </Box>
  );
};

export default QuizLayout;
