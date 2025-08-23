import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#5c715e',
    },
    secondary: {
      main: '#E9ECE9',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});
export default theme;