import { ThemeProvider } from '@mui/material';
import { UIContextProvider } from 'components/UIContext';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './common/firebase';
import './index.css';
import theme from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UIContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UIContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
