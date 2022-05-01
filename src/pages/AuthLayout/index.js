import { Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import style from './style.module.css';

const AuthLayout = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={style.container}>
      <Typography variant="h1">
        TraveLover Admin
      </Typography>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <Container
          maxWidth="sm"
          sx={{
            '& > .MuiTextField-root': {
              width: '100%',
              mb: '35px',
            },
          }}
        >
          <TextField
            label="Email"
            name="email"
            id="email"
            focused
            variant="standard"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            variant="standard"
            autoComplete='off'
            name='password'
            id='password'
            focused
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button type='submit' size="large" variant="contained" sx={{ width: '100%' }}>
            Войти
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default AuthLayout;
