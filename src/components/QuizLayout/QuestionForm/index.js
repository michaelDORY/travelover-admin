import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import {
  Button,
  Container,
  Fab,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import React from 'react';
import uniqid from 'uniqid';

const QuestionForm = (props) => {
  const defaultQuestion = {
    id: uniqid(),
    title: '',
    incorrectAnswers: ['', '', ''],
    rightAnswer: '',
  };

  // const validationSchema = yup.object({
  //   title: yup
  //     .string('Enter title')
  //     .min(8, 'Title should be of minimum 8 characters length')
  //     .required('Password is required'),
  //   rightAnswer: yup.string('Enter answer').required('Password is required'),
  // });
  //
  // const formik = useFormik({
  //   initialValues: defaultQuestion,
  //   validationSchema,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  const deleteQuestion = () => {
    props.setQuestions((prev) => prev.filter((item) => item.id !== props.id));
  };

  // const submitHandler = () => {
  //   props.setQuestions((prev) => [...prev, defaultQuestion]);
  //   window.scrollBy(0, 300);
  // };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: '25px',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
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
              name={`${props.name}.title`}
              value={props.value.title}
              onChange={props.onChange}
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
              name="rightAnswer"
              value={formik.values.rightAnswer}
              onChange={formik.handleChange}
            />
            {formik.values.incorrectAnswers.map((answer, index) => (
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
                name={`incorrectAnswers[${index}]`}
                value={formik.values.incorrectAnswers[index]}
                onChange={formik.handleChange}
              />
            ))}
            {/*<TextField*/}
            {/*  InputProps={{*/}
            {/*    startAdornment: (*/}
            {/*      <InputAdornment position="start">*/}
            {/*        <CancelOutlinedIcon />*/}
            {/*      </InputAdornment>*/}
            {/*    ),*/}
            {/*  }}*/}
            {/*  placeholder="Second answer"*/}
            {/*  name="secondAnswer"*/}
            {/*  value={formik.values.incorrectAnswers[0]}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*/>*/}
            {/*<TextField*/}
            {/*  InputProps={{*/}
            {/*    startAdornment: (*/}
            {/*      <InputAdornment position="start">*/}
            {/*        <CancelOutlinedIcon />*/}
            {/*      </InputAdornment>*/}
            {/*    ),*/}
            {/*  }}*/}
            {/*  placeholder="Third answer"*/}
            {/*  name="thirdAnswer"*/}
            {/*  value={formik.values.incorrectAnswers[1]}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*/>*/}
            {/*<TextField*/}
            {/*  InputProps={{*/}
            {/*    startAdornment: (*/}
            {/*      <InputAdornment position="start">*/}
            {/*        <CancelOutlinedIcon />*/}
            {/*      </InputAdornment>*/}
            {/*    ),*/}
            {/*  }}*/}
            {/*  placeholder="Fourth answer"*/}
            {/*  name="fourthAnswer"*/}
            {/*  value={formik.values.incorrectAnswers[2]}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*/>*/}
            <Button
              type="submit"
              size="large"
              color="success"
              variant="contained"
              disabled={!formik.isValid}
              onChange={formik.handleChange}
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
