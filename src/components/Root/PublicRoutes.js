import React from 'react';
import { Routes } from 'react-router-dom';

function PublicRoutes({ children }) {
  return <Routes>{children}</Routes>;
}

export default PublicRoutes;
