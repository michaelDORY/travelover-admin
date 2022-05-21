import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
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
import { UIContext } from 'components/UIContext';
import { doc, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { uploadImageToStorage } from 'server/storage';
import * as yup from 'yup';
import NoPlaceImage from '../../assets/images/no-place.jpg';

function AddPlace() {
  const [preview, setPreview] = useState(null);

  const alertContent = {
    show: true,
    severity: 'error',
    message: 'Sorry, something went wrong(',
  };
  const { setAlert } = useContext(UIContext);

  const initialValues = {
    image: {},
    title: '',
    description: '',
    country: '',
    address: '',
    // geoPoint: {
    //   longitude: 0,
    //   latitude: 0,
    // },
  };
  const validationSchema = yup.object({
    image: yup
      .mixed()
      .test('empty-check', 'Choose an image', (image) => image.name),
    title: yup.string('Enter title').required('Title is required'),
    description: yup
      .string('Enter description')
      .required('Description is required'),
    country: yup.string().required('Country is required'),
    address: yup.string().required('Address is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const imageId = await uploadImageToStorage(values.image);
        await setDoc(doc(db, 'places', imageId), { ...values, image: imageId });
        formik.resetForm();
        setPreview('');
        setAlert({
          ...alertContent,
          severity: 'success',
          message: 'Successfully added a new place',
        });
      } catch (e) {
        console.log(e.message);
        setAlert(alertContent);
      }
    },
  });

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

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 30px',
            maxWidth: '600px',
            borderRadius: '20px',

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
                startIcon={<FileUploadOutlinedIcon />}
                variant="contained"
                component="label"
                sx={{ maxWidth: '250px', minWidth: '150px' }}
              >
                Upload Image
                <input
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
                  label="Name of place"
                  value={formik.values.title}
                  name="title"
                  onChange={formik.handleChange}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreateIcon />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter name of place"
                  fullWidth
                />
              </Grid>
              <Grid item md={12} sm={12}>
                <TextField
                  label="Country name"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlagOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter country name"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <TextField
                label="City, address of place"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PlaceOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter address of place"
                fullWidth
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <TextField
                label="Description about place"
                name="description"
                value={formik.values.description}
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
                multiline
                placeholder="Enter description about place"
                fullWidth
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <LoadingButton
                type="submit"
                loading={formik.isSubmitting}
                loadingPosition="start"
                startIcon={formik.isSubmitting ? <SaveIcon /> : <AddIcon />}
                variant="contained"
                size="large"
                fullWidth
              >
                {formik.isSubmitting ? 'Adding' : 'Add'}
              </LoadingButton>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Box>
  );
}

export default AddPlace;
