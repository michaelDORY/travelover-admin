import ClearIcon from '@mui/icons-material/Clear';
import { Button, Container, Fab, Paper, Stack, TextField } from '@mui/material';
import React from 'react';
import uniqid from 'uniqid';
import { InputAdornment } from '@mui/material';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const QuestionForm = (props) => {
  const defaultQuestion = {
    id: uniqid(),
    title: '',
    answers: [''],
    rightAnswer: '',
  };

  const deleteQuestion = () => {
    props.setQuestions((prev) => prev.filter((item) => item.id !== props.id));
  };

  const submitHandler = () => {
    props.setQuestions((prev) => [...prev, defaultQuestion]);
    window.scrollBy(0, 300);
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
      <form onSubmit={submitHandler}>
        <Paper
          sx={{
            padding: '40px 60px',
            width: '600px',
            position: 'relative',
          }}
        >
          <Fab
            color="primary"
            disabled={props.questions.length < 2}
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
            <label>Question text</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <QuestionMarkOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Question"
              name="title"
              value={props.title}
            />
            <label>Answers</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CheckCircleOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Right answer"
              name="firstAnswer"
              value={props.title}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CancelOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Second answer"
              name="secondAnswer"
              value={props.title}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CancelOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Third answer"
              name="thirdAnswer"
              value={props.title}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CancelOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Fourth answer"
              name="fourtAnswer"
              value={props.title}
            />
            <Button
              type="submit"
              size="large"
              color="success"
              variant="contained"
              disabled={
                props.id !== props.questions[props.questions.length - 1].id
              }
            >
              Add
            </Button>
          </Stack>
        </Paper>
      </form>
    </Container>
  );
};

export default QuestionForm;
