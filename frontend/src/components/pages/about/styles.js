import { styled } from '@mui/material/styles';
import { Avatar, Grid2 as Grid, Typography} from '@mui/material';

export const StyledCardGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(6),
}));

export const AvatarContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 300,
  height: 300,
  border: `4px solid ${theme.palette.primary.dark}`,
  [theme.breakpoints.down('md')]: {
    width: 200,
    height: 200,
  },
}));

export const InfoContainer = styled(Grid)({
  // Add these styles to make the container a flex column
  // and center its content vertically.
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});
export const NameTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const PositionTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

export const BioTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));