import React from 'react';
import style from './style.module.css';
import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function AddPlace(props) {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <form>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 30px',
            width: '500px',

            '& > *': {
              width: '100%',
            },
          }}
        >
          <Stack
            spacing={2}
            sx={{
              '& > *': {
                width: '100%',
              },
            }}
          >
            <label>Name of place</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreateIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter name of place"
            />
            <label>Country name</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlagOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter country name"
            />
            <label>City, address of place</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PlaceOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Enter address of place"
            />
            <label>Description about place</label>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              multiline
              placeholder="Enter description about place"
            />
            <label>Uploading a photo</label>
            <Button
              startIcon={<FileUploadOutlinedIcon />}
              variant="contained"
              component="label"
            >
              Upload File
              <input type="file" accept="image/*" hidden />
            </Button>
            <Button>Ok</Button>
          </Stack>
        </Paper>
      </form>
    </Box>
  );
}

export default AddPlace;
