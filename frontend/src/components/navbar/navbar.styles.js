import { styled } from '@mui/material/styles';
import { Box, Button, Typography, ListItemButton} from '@mui/material';

export const DesktopNavContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'flex-end',
  // Correct way to handle responsive styles in `styled`
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const MobileNavContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'flex-end',
  // Correct way to handle responsive styles in `styled`
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));


export const StyledNavLink = styled(Button)(({ theme }) => ({
  my: 2,
  display: 'flex',
  alignItems: 'center',
  color: "white",
  display: "flex",
  gap: theme.spacing(1),
  fontWeight: 'inherit',
  // Style the link when it is active
  "&.active": {
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    fontWeight: 'bolder',
  },
}))

export const StyledNavTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "inherit",
  fontWeight: 700,
  color: "inherit",
  textDecoration: "none",
}));


export const StyledDrawerItem = styled(ListItemButton)(({ theme }) => ({
  // Style for when the link is active
  '&.active': {
    backgroundColor: theme.palette.action.selected, // Use a subtle background color from the theme
    color: theme.palette.primary.main, // Change text color to primary
    
    // Also change the icon color when active
    '.MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
  },
}));