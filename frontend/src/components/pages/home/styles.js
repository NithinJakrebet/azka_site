import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, CardActions, Typography, Accordion, Button } from '@mui/material';

// --- UpcomingEvents Styles ---
export const UpcomingEventsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

// FIX: Changed from (({ theme }) => ({...})) to (({ theme }) => ({...}))
export const AddButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

// --- EventCard Styles ---
// FIX: Added the theme callback to properly access theme values if needed in the future.
// This also ensures consistency.
export const StyledEventCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
}));

export const CardEditorActions = styled(Box)({
  position: 'absolute',
  top: 16,
  right: 16,
});

export const EventDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'center',
  paddingBottom: theme.spacing(2),
}));

// --- ArchivedEvents Styles ---
export const ArchivedEventsContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
}));