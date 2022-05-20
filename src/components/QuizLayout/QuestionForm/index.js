import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import {
  Button,
  Box,
  Container,
  Fab,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

const QuestionForm = ({ id, questions, formik, index }) => {
  const defaultQuestion = {
    id: uniqid(),
    title: '',
    incorrectAnswers: ['', '', ''],
    rightAnswer: '',
  };

  const isLastQuestion = index === questions.length - 1;

  const [question, setQuestion] = useState(questions[index]);
  const [focusedAnswer, setFocusedAnswer] = useState(-1);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateQuestion(question));
  }, [question]);

  const deleteQuestion = () => {
    formik.setFieldValue(
      'questions',
      questions.filter((item) => item.id !== id),
    );
  };

  function validateQuestion(item) {
    return Boolean(
      item.title &&
        item.rightAnswer &&
        item.incorrectAnswers.every((el) => !!el),
    );
  }

  const saveQuestion = (e) => {
    // formik.setFieldValue('questions', questions.push(defaultQuestion));
  };

  const addQuestion = (e) => {
    const newQuestions = [...questions, defaultQuestion];
    newQuestions[index] = question;
    isValid && formik.setFieldValue('questions', newQuestions);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: '25px',
      }}
    >
      <Paper
        sx={{
          padding: '40px 60px',
          width: '600px',
          position: 'relative',
        }}
      >
        <Fab
          color="primary"
          disabled={formik.values.questions.length < 2}
          sx={{ position: 'absolute', right: '10px', top: '10px' }}
          size="small"
          onClick={deleteQuestion}
        >
          <ClearIcon />
        </Fab>
        <Stack
          spacing={2}
          sx={{
            '& > *': {
              width: '100%',
            },
          }}
        >
          <TextField
            label="Question text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <QuestionMarkOutlinedIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Question"
            disabled={!isLastQuestion}
            value={question.title}
            onChange={(e) =>
              setQuestion((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
          <label style={{ textAlign: 'center' }}>Answers</label>
          <TextField
            label="Right answer"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CheckCircleOutlineOutlinedIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Enter right answer"
            disabled={!isLastQuestion}
            value={question.rightAnswer}
            onChange={(e) =>
              setQuestion((prev) => {
                return { ...prev, rightAnswer: e.target.value };
              })
            }
          />
          {question.incorrectAnswers.map((answer, answerIndex) => (
            <TextField
              label="Answer"
              key={uniqid()}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CancelOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter answer"
              disabled={!isLastQuestion}
              value={answer}
              autoFocus={answerIndex === focusedAnswer}
              onChange={(e) => {
                const newArray = [...question.incorrectAnswers];
                newArray[answerIndex] = e.target.value;
                setFocusedAnswer(answerIndex);
                setQuestion({
                  ...question,
                  incorrectAnswers: newArray,
                });
              }}
            />
          ))}
          {index === questions.length - 1 && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Button
                size="large"
                color="success"
                variant="contained"
                onClick={saveQuestion}
                disabled={!isValid}
                fullWidth
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
              <Button
                size="large"
                color="success"
                variant="contained"
                onClick={addQuestion}
                disabled={!isValid}
                fullWidth
                sx={{ marginTop: '15px' }}
                startIcon={<AddIcon />}
              >
                Add question
              </Button>
            </Box>
          )}
        </Stack>
      </Paper>
    </Container>
  );
};

export default QuestionForm;
