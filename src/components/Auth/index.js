import style from './style.module.css';
import {
  Alert,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../common/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../common/firebase';

function Auth() {
  const [alert, setAlert] = useState({
    status: 'error',
    isOpen: false,
    message: 'Oops',
  });

  const handleCloseAlert = () => {
    setAlert((prev) => {
      return { ...prev, isOpen: false };
    });
  };

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
      const q = query(collection(db, 'admins'), where('email', '==', email));

      const querySnapshot = await getDocs(q);

      let isSuchAdmin = false;
      querySnapshot.forEach((item) => {
        isSuchAdmin = true;
      });
      if (isSuchAdmin) {
        signInWithEmailAndPassword(auth, email, password)
          .then((user) =>
            setAlert({ status: 'success', message: 'Welcome', isOpen: true }),
          )
          .catch((error) => {
            setAlert({ status: 'error', message: error.message, isOpen: true });
          });
      } else {
        setAlert({ status: 'error', message: 'No such admin', isOpen: true });
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
            variant="standard"
            autoComplete="off"
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
            sx={{ width: '100%' }}
          >
            Войти
          </Button>
        </Container>
      </form>
      <Snackbar
        open={alert.isOpen}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.status}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Auth;
