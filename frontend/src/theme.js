import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#328210', // Vibrant Green
      light: '#66bb6a',
      dark: '#005500',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#cc690c', // Rich Orange/Brown
      light: '#ff9a40',
      dark: '#953d00',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#fdfdfd', // A very light grey for the page background
      paper: '#ffffff',   // White for elements like cards
    },
    text: {
      primary: '#212121', // Dark grey for primary text
      secondary: '#5f6368', // Lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontWeight: 700,
      fontSize: '3.5rem', // 56px, from your .title class
      color: '#328210', // Primary Green
    },
    h2: {
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#212121',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#cc690c', // Secondary Orange/Brown
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: '#212121',
    },
    h5: {
      fontWeight: 'bold', // Bolder for card titles
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      color: '#5f6368',
    },
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 8, // Slightly more rounded corners for components
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  },
});

export default theme;