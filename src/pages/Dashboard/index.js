import React from 'react';
import NavPanel from '../../components/NavPanel';
import { Box, Container } from '@mui/material';
import style from './style.module.css';
import { Routes, Route } from 'react-router-dom';
import Statistics from '../../components/Statistics';
import AddPlace from '../../components/AddPlace';
import CommentsLayout from '../../components/CommentsLayout';
import QuizLayout from '../../components/QuizLayout';

function Dashboard(props) {
  return (
    <>
      <Box
        className={style.Box}
        sx={{
          display: 'flex',
          background: 'url(/images/backDash.jpg) center / cover no-repeat',
        }}
      >
        <NavPanel />
        <Routes>
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/add-place" element={<AddPlace />} />
          <Route path="/add-quiz" element={<QuizLayout />} />
          <Route path="/comments" element={<CommentsLayout />} />
        </Routes>
      </Box>
    </>
  );
}

export default Dashboard;
