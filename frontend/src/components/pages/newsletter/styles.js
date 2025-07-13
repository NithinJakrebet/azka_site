import { styled } from '@mui/material/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';

export const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const StyledCardActionArea = styled(CardActionArea)({
  flexGrow: 1, // Make the clickable area fill the available space
});

export const StyledCardMedia = styled(CardMedia)({
  // Using aspectRatio instead of a fixed height makes the image container
  // responsive while maintaining a consistent shape (e.g., 4:3).
  // This ensures all cards look uniform regardless of the grid width.
  aspectRatio: '16/ 9',
  
  // objectFit ensures the image fills the container without being stretched or distorted.
  // objectFit: 'cover',
});

export const StyledCardContent = styled(CardContent)({
  // No specific styles needed now, but good to have for future changes
});

export const TitleTypography = styled(Typography)({
  textAlign: 'center',
});

// A container for the editor actions to give them consistent padding and alignment
export const EditorActionsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
}));