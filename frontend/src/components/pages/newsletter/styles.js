import { styled } from '@mui/material/styles';
import { Card, CardActionArea, CardMedia, Box } from '@mui/material';

export const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': { 
    transform: 'scale(1.01)', 
  } 
});

export const StyledCardActionArea = styled(CardActionArea)({
  // flexGrow: 1,
});

export const StyledCardMedia = styled(CardMedia)({
  // aspectRatio: '16/ 9',
  width: '800px',
  height: '400px',
  objectFit: 'cover',
  transition: 'transform 0.2s ease-in-out',
});
// A container for the editor actions to give them consistent padding and alignment
export const EditorActionsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
}));