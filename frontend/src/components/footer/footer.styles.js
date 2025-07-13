import { styled } from '@mui/material/styles';
import { Box, Stack, IconButton, Link } from '@mui/material';

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
  marginLeft: theme.spacing(1),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));