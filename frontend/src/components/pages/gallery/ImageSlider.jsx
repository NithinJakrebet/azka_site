import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {
  SliderContainer,
  ImageTrack,
  SliderImage,
  LeftArrowButton,
  RightArrowButton,
  StyledStepper,
} from './styles';

export function ImageSlider({ imageUrls }) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imageUrls.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (maxSteps === 0) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Typography>No images in this album.</Typography>
      </Box>
    );
  }

  return (
    <SliderContainer>
      <ImageTrack style={{ transform: `translateX(-${activeStep * 100}%)` }}>
        {imageUrls.map((url, index) => (
          <SliderImage key={index} src={url} alt={`Album image ${index + 1}`} />
        ))}
      </ImageTrack>

      <LeftArrowButton onClick={handleBack} disabled={activeStep === 0}>
        <KeyboardArrowLeft />
      </LeftArrowButton>

      <RightArrowButton onClick={handleNext} disabled={activeStep === maxSteps - 1}>
        <KeyboardArrowRight />
      </RightArrowButton>

      <StyledStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={<></>}
        nextButton={<></>}
      />
    </SliderContainer>
  );
}