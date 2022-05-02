import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Cairo, Montserrat, sans-serif',
      color: "#ffd93d",
      '@media(max-width: 720px)': {
        fontSize: '50px'
      }
    },
    h2: {
      fontFamily: 'Cairo, Montserrat, sans-serif'
    },
    h3: {
      fontFamily: 'Cairo, Montserrat, sans-serif'
    }
  },
  palette: {
    primary: {
      main: '#F6FF8A',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputProps: {
          sx: {
            color: '#fff',
          },
        },
      },
    },
  },
});

export default theme;
