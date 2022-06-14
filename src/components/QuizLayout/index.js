import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Paper,
  TextField,
} from '@mui/material';
import { db } from 'common/firebase';
import validationSchema from 'components/QuizLayout/validationSchema';
import { UIContext } from 'components/UIContext';
import { addDoc, collection } from 'firebase/firestore';
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { uploadImageToStorage } from 'server/storage';
import uniqid from 'uniqid';
import NoPlaceImage from '../../assets/images/no-place.jpg';
import QuestionForm from './QuestionForm';

const QuizLayout = () => {
  const defaultQuestion = {
    id: uniqid(),
    title: '',
    incorrectAnswers: ['', '', ''],
    rightAnswer: '',
  };

  const [preview, setPreview] = useState(null);

  const alertContent = {
    show: true,
    severity: 'error',
    message: 'Sorry, something went wrong(',
    anchor: { vertical: 'top', horizontal: 'right' },
  };
  const { setAlert } = useContext(UIContext);

  const initialValues = {
    image: {},
    nameOfQuiz: '',
    description: '',
    questions: [defaultQuestion],
    time: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const imageId = await uploadImageToStorage(values.image);
        await addDoc(collection(db, 'quizzes'), {
          ...values,
          image: imageId,
        });
        formik.resetForm();
        setPreview('');
        setAlert({
          ...alertContent,
          severity: 'success',
          message: 'Successfully added a new Quiz',
        });
      } catch (e) {
        setAlert(alertContent);
      }
    },
  });

  useEffect(async () => {
    await formik.validateForm();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    formik.values.image = file;
    setPreview(objectUrl);
  };

  const addDefaultQuestion = async () => {
    await formik.setFieldValue('questions', [
      ...formik.values.questions,
      defaultQuestion,
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
    if (!formik.isValid) {
      setAlert({
        ...alertContent,
        severity: 'info',
        message: 'All fields should be filled',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 30px',
            maxWidth: '600px',

            '& > *': {
              width: '100%',
            },
          }}
        >
          <Grid container spacing={4}>
            <Grid
              item
              lg={6}
              md={12}
              sm={12}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  height: '150px',
                  borderRadius: '15px',
                  mb: '20px',
                  maxWidth: '250px',
                  minWidth: '167px',
                }}
              >
                <img
                  src={preview ? preview : NoPlaceImage}
                  alt="image of place"
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                    borderRadius: '15px',
                    border:
                      !preview && formik.touched.image
                        ? '1px solid #f44336'
                        : null,
                  }}
                />
              </Box>
              <Button
                disabled={formik.isSubmitting}
                startIcon={<FileUploadOutlinedIcon />}
                variant="contained"
                component="label"
                sx={{ maxWidth: '250px', minWidth: '150px' }}
              >
                Upload Image
                <input
                  disabled={formik.isSubmitting}
                  name="image"
                  onChange={handleImageChange}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </Button>
            </Grid>
            <Grid container item spacing={4} lg={6} md={12} sm={12}>
              <Grid item md={12} sm={12}>
                <TextField
                  disabled={formik.isSubmitting}
                  label="Name of quiz"
                  value={formik.values.nameOfQuiz}
                  name="nameOfQuiz"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.nameOfQuiz &&
                    Boolean(formik.errors.nameOfQuiz)
                  }
                  helperText={
                    formik.touched.nameOfQuiz && formik.errors.nameOfQuiz
                  }
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
              </Grid>
              <Grid item md={12} sm={12}>
                <TextField
                  disabled={formik.isSubmitting}
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
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <TextField
                disabled={formik.isSubmitting}
                label="Quiz description"
                value={formik.values.description}
                name="description"
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
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
            </Grid>
          </Grid>
        </Paper>
        {formik.values.questions.map((item, index) => (
          <QuestionForm
            disabled={formik.isSubmitting}
            key={item.id}
            index={index}
            formik={formik}
            id={item.id}
            questions={formik.values.questions}
            name={`questions[${index}]`}
          />
        ))}
        <Button
          disabled={formik.isSubmitting}
          size="large"
          color="success"
          variant="contained"
          onClick={addDefaultQuestion}
          sx={{ marginBottom: '40px' }}
          startIcon={<AddIcon />}
        >
          Add question
        </Button>
        <LoadingButton
          disabled={formik.isSubmitting}
          type="submit"
          color="secondary"
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
