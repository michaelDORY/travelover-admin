import { Alert, Slide, Snackbar } from '@mui/material';
import React, { createContext, useState } from 'react';

export const UIContext = createContext({});

export const UIContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
    severity: 'info',
    message: '',
  });
  const handleClose = () =>
    setAlert({
      ...alert,
      show: false,
    });

  return (
    <UIContext.Provider value={{ setAlert }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={alert.show}
        autoHideDuration={2000}
        TransitionComponent={Slide}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          severity={alert.severity}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </UIContext.Provider>
  );
};
