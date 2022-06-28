import React from 'react';
import { Routes } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  return <Routes>{children}</Routes>;
}

export default ProtectedRoutes;
