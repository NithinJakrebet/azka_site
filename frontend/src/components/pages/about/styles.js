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
  width: 400,
  height: 400,
  border: `4px solid ${theme.palette.primary.dark}`,
  [theme.breakpoints.down('md')]: {
    width: 300,
    height: 300,
  },
}));

export const InfoContainer = styled(Grid)({
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


