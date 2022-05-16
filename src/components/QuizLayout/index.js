import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';
import QuestionForm from './QuestionForm';
import { InputAdornment } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UIContext } from 'components/UIContext';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

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
  const alertContent = {
    show: true,
    severity: 'error',
    message: 'Sorry, something went wrong(',
  };
  const { setAlert } = useContext(UIContext);
  const initialValues = {
    nameOfQuiz: '',
    description: '',
    time: '',
  };

  const validationSchema = yup.object({
    nameOfQuiz: yup.string('Enter name').required('Name is required'),
    description: yup
      .string('Enter description')
      .required('Description is required'),
    time: yup.string().required('Time is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        formik.resetForm();
        setPreview('');
        setAlert({
          ...alertContent,
          severity: 'success',
          message: 'Successfully added a new Quiz',
        });
      } catch (e) {
        console.log(e.message);
        setAlert(alertContent);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: '50px',
        }}
      >
        <Paper
          sx={{
            padding: '40px 60px',
            width: '600px',
          }}
        >
          <Stack
            spacing={4}
            sx={{
              '& > *': {
                width: '100%',
              },
            }}
          >
            <TextField
              label="Name of quiz"
              value={formik.values.nameOfQuiz}
              name="nameOfQuiz"
              onChange={formik.handleChange}
              error={
                formik.touched.nameOfQuiz && Boolean(formik.errors.nameOfQuiz)
              }
              helperText={formik.touched.nameOfQuiz && formik.errors.nameOfQuiz}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreateIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter name of quiz"
              fullWidth
            />
            <TextField
              label="Quiz description"
              value={formik.values.description}
              name="description"
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter quiz description"
              fullWidth
            />
            <TextField
              label="Quiz time"
              value={formik.values.time}
              name="time"
              onChange={formik.handleChange}
              error={formik.touched.time && Boolean(formik.errors.time)}
              helperText={formik.touched.time && formik.errors.time}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccessTimeOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter quiz time in minutes"
              fullWidth
            />
          </Stack>
        </Paper>
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
        <LoadingButton
          type="submit"
          loading={formik.isSubmitting}
          loadingPosition="start"
          startIcon={formik.isSubmitting ? <SaveIcon /> : <AddIcon />}
          variant="contained"
          size="large"
        >
          {formik.isSubmitting ? 'Adding' : 'Add quiz'}
        </LoadingButton>
      </Box>
    </form>
  );
};

export default QuizLayout;
