import { styled } from '@mui/material/styles';
import { Box, IconButton, MobileStepper } from '@mui/material';

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
export const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
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