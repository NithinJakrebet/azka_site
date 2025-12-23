import { styled } from '@mui/material/styles';
import { Avatar, Grid2 as Grid, Typography} from '@mui/material';

export const StyledCardGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

export const AvatarContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 300,
  height: 300,
  border: `4px solid ${theme.palette.primary.dark}`,
  borderRadius: '5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    width: 250,
    height: 250,
  },
}));

export const InfoContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});
export const NameTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
}));


