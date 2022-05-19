import { Box, Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import backImg from '../../assets/images/backDash.jpg';
import AddPlace from '../../components/AddPlace';
import CommentsLayout from '../../components/CommentsLayout';
import NavPanel from '../../components/NavPanel';
import QuizLayout from '../../components/QuizLayout';
import Statistics from '../../components/Statistics';

function Dashboard() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          background: `url(${backImg}) center / cover no-repeat`,
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      >
        <NavPanel />
        <Container sx={{ ml: '300px', paddingY: '50px' }}>
          <Routes>
            <Route path="/" element={<Statistics />} />
            <Route path="/add-place" element={<AddPlace />} />
            <Route path="/add-quiz" element={<QuizLayout />} />
            <Route path="/comments" element={<CommentsLayout />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default Dashboard;
