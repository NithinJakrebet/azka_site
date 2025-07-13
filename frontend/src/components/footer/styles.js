import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, IconButton, Link, Button } from '@mui/material';

export const FooterBox = styled(Box)(({ theme }) => ({
  py: theme.spacing(3),
  px: theme.spacing(2),
  mt: theme.spacing(4),
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
}));

export const SocialStack = styled(Stack)({
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  spacing: 1,
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(['transform', 'color'], {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    transform: 'scale(1.2)',
    color: theme.palette.primary.main,
  },
}));

export const EmailLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));


export const StyledDonateButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5), // e.g., 4px 12px
  fontSize: '0.75rem', // Smaller font size

  // Default "grayed out" state
  color: theme.palette.text.secondary,
  borderColor: theme.palette.grey[500],
  transition: theme.transitions.create(['color', 'border-color', 'background-color']),

  // State on hover
  '&:hover': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));