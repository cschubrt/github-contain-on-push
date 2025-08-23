import App from './App';
import theme from './theme';
import { StrictMode } from 'react';
import Box from '@mui/material/Box';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

//StrictMode for dev
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <App />
      </Box>
    </ThemeProvider>
  </StrictMode>,
)