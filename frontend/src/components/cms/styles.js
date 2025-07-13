import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));