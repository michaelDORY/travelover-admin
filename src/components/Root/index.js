import { auth } from 'common/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthLayout from '../../pages/AuthLayout';
import Dashboard from '../../pages/Dashboard';

import LoadingPage from '../../pages/LoadingPage';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

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
        <ProtectedRoutes>
          <Route path="/*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="/" />
            <Route path="statistics" />
            <Route path="add-place" />
            <Route path="comments" />
            <Route path="add-quiz" />
          </Route>
        </ProtectedRoutes>
      ) : (
        <PublicRoutes>
          <Route path="/login" element={<AuthLayout />} />
          <Route path="/*" element={<Navigate replace to="/login" />} />
        </PublicRoutes>
      )}
    </>
  );
}

export default Root;
