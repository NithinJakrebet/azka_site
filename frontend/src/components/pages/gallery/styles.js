import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, CardActions, IconButton, MobileStepper } from '@mui/material';

// --- AlbumCard Styles ---
export const StyledAlbumCard = styled(Card)({
  // The base card styles (shadow, transition) are in the global theme.
});

export const AlbumCardContent = styled(CardContent)({
  textAlign: 'center',
});

export const AlbumEditorActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

export const SliderWrapper = styled(Box)({
  width: '100%',
  margin: '0 auto', // Center the slider
  aspectRatio: '16 / 9',

});

export const AlbumCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'center',
  padding: theme.spacing(2),
}));


// --- ImageSlider Styles ---
export const SliderContainer = styled(Box)({
  position: 'relative',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
});

export const ImageTrack = styled(Box)({
  height: '100%',
  width: '100%',
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
});

export const SliderImage = styled('img')({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  flexShrink: 0, // Prevent images from shrinking
});

// Base styles for both arrow buttons
const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}));

// Specific styles for left and right arrows
export const LeftArrowButton = styled(ArrowButton)(({ theme }) => ({
  left: theme.spacing(2),
}));

export const RightArrowButton = styled(ArrowButton)(({ theme }) => ({
  right: theme.spacing(2),
}));

export const StyledStepper = styled(MobileStepper)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  justifyContent: 'center',
  background: 'transparent',
  '.MuiMobileStepper-dot': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  '.MuiMobileStepper-dotActive': {
    backgroundColor: theme.palette.primary.main,
  },
}));