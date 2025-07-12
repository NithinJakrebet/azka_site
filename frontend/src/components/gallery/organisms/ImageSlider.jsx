import { useState } from 'react';
import { Box, IconButton, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export function ImageSlider({ imageUrls }) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imageUrls.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  // Return null or a placeholder if there are no images
  if (maxSteps === 0) {
    return <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey.200' }}>No Images</Box>;
  }

  return (
    <Box sx={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
      {/* Image container that slides */}
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${activeStep * 100}%)`,
        }}
      >
        {imageUrls.map((url, index) => (
          <Box
            key={index}
            component="img"
            src={url}
            alt={`Gallery image ${index + 1}`}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              flexShrink: 0, // Prevent images from shrinking
            }}
          />
        ))}
      </Box>

      {/* Left Arrow */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Dots Indicator */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          justifyContent: 'center',
          background: 'transparent',
          '.MuiMobileStepper-dot': {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          },
          '.MuiMobileStepper-dotActive': {
            backgroundColor: 'primary.main',
          },
        }}
      />
    </Box>
  );
}