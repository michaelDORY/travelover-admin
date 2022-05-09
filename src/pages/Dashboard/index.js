import React from 'react';
import NavPanel from '../../components/NavPanel';
import { Box, Container } from '@mui/material';
import style from './style.module.css';
import { Routes, Route } from 'react-router-dom';
import Statistics from '../../components/Statistics';
import AddPlace from '../../components/AddPlace';
import CommentsLayout from '../../components/CommentsLayout';
import QuizLayout from '../../components/QuizLayout';
import backImg from '../../assets/images/backDash.jpg';

function Dashboard(props) {
  return (
    <>
      <Box
        className={style.Box}
        sx={{
          display: 'flex',
          background: `url(${backImg}) center / cover no-repeat`,
          minHeight: '100vh',
        }}
      >
        <NavPanel />
        <Container sx={{ ml: '300px', paddingY: '50px' }}>
          <Routes>
            <Route path="/statistics" element={<Statistics />} />
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
