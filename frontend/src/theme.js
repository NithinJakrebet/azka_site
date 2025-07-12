import { createTheme } from '@mui/material/styles';

// Define shared settings to avoid repetition
const sharedSettings = {
  typography: {
    fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Merriweather', 'Georgia', 'Times New Roman', serif",
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontFamily: "'Merriweather', 'Georgia', 'Times New Roman', serif",
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: "'Merriweather', 'Georgia', 'Times New Roman', serif",
      fontWeight: 700,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
};

// This function returns the theme configuration based on the selected mode
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light Mode Palette
          primary: { main: '#138808' },
          secondary: { main: '#FF9933' },
          info: { main: '#000080' },
          background: { default: '#f8f9fa', paper: '#ffffff' },
          text: { primary: '#212121', secondary: '#5f6368' },
        }
      : {
          // Dark Mode Palette
          primary: { main: '#5cb85c' }, // Lighter green for dark mode
          secondary: { main: '#ffb766' }, // Lighter orange for dark mode
          info: { main: '#90caf9' },
          background: { default: '#121212', paper: '#1e1e1e' },
          text: { primary: '#e0e0e0', secondary: '#b0bec5' },
        }),
  },
  ...sharedSettings,
  components: {
    MuiButton: {
      styleOverrides: {
        root: { boxShadow: 'none', '&:hover': { boxShadow: 'none' } },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
          boxShadow: mode === 'light' ? '0 4px 12px rgba(0,0,0,0.08)' : '0 4px 12px rgba(0,0,0,0.25)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: mode === 'light' ? '0 8px 24px rgba(0,0,0,0.12)' : '0 8px 24px rgba(0,0,0,0.3)',
          },
        },
      },
    },
  },
});