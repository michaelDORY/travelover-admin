import { Button, Container, TextField, Typography } from '@mui/material';
import { UIContext } from 'components/UIContext';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { loginAdmin } from 'server/admins';
import * as yup from 'yup';
import style from './style.module.css';

function Auth() {
  const alertContent = {
    show: true,
    severity: 'error',
    message: 'Sorry, something went wrong(',
  };
  const { setAlert } = useContext(UIContext);

  const [isBtnActive, setIsBtnActive] = useState(true);

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
    onSubmit: async ({ email, password }) => {
      setIsBtnActive(false);
      try {
        const res = await loginAdmin(email, password);
        if (res) {
          setAlert({
            ...alertContent,
            severity: 'success',
            message: 'Welcome on board!',
          });
        } else {
          setAlert({
            ...alertContent,
            message: 'There is no such admin account',
          });
        }
      } catch (e) {
        setAlert(alertContent);
      } finally {
        setIsBtnActive(true);
      }
    },
  });

  return (
    <>
      <Typography variant="h1">TraveLover Admin</Typography>
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
            variant="standard"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            type="password"
            variant="standard"
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ width: '100%', fontWeight: 'bold' }}
            disabled={!isBtnActive}
          >
            Authorize
          </Button>
        </Container>
      </form>
    </>
  );
}

export default Auth;
