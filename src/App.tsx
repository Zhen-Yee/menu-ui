import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Menu } from './components/Menu';
import { menuData } from './data/menuData';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontSize: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: '0.9rem',
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.75rem',
    },
    caption: {
      fontSize: '0.7rem',
      display: 'block',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:1200px)': {
            maxWidth: '1400px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 20%)
          `,
          pointerEvents: 'none',
        }} />
        <Menu menu={menuData} />
      </div>
    </ThemeProvider>
  );
}

export default App;
