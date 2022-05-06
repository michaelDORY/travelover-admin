import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import LoadingPage from '../../pages/LoadingPage';
import Dashboard from '../../pages/Dashboard';
import AuthLayout from '../../pages/AuthLayout';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import { auth } from '../../common/firebase';

function Root() {
  const [loading, setLoading] = useState(true);
  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUserLogged(true);
      setLoading(false);
    } else {
      setIsUserLogged(false);
      setLoading(false);
    }
  });

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      {isUserLogged ? (
        <PublicRoutes>
          <Route path="/*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="statistics" />
            <Route path="add-place" />
            <Route path="comments" />
            <Route path="add-quiz" />
          </Route>
        </PublicRoutes>
      ) : (
        <ProtectedRoutes>
          <Route path="/login" element={<AuthLayout />} />
          <Route path="/*" element={<Navigate replace to="/login" />} />
        </ProtectedRoutes>
      )}
    </>
  );
}

export default Root;
