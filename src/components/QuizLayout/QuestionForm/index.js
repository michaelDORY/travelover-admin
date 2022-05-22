import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import {
  Container,
  Fab,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import React from 'react';

const QuestionForm = ({ id, questions, formik, name, index }) => {
  const deleteQuestion = () => {
    formik.setFieldValue(
      'questions',
      questions.filter((item) => item.id !== id),
    );
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
            name={`${name}.title`}
            value={questions[index].title}
            onChange={formik.handleChange}
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
            name={`${name}.rightAnswer`}
            value={questions[index].rightAnswer}
            onChange={formik.handleChange}
          />
          {questions[index].incorrectAnswers.map((answer, answerIndex) => (
            <TextField
              label="Answer"
              key={answerIndex}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CancelOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter answer"
              name={`${name}.incorrectAnswers[${answerIndex}]`}
              value={questions[index].incorrectAnswers[answerIndex]}
              onChange={formik.handleChange}
            />
          ))}
        </Stack>
      </Paper>
    </Container>
  );
};
export default QuestionForm;
