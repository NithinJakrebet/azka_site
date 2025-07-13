import { useState } from 'react';
import { Box } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  SliderContainer,
  ImageTrack,
  SliderImage,
  ArrowButton,
  StyledStepper,
} from './styles';

export function ImageSlider({ imageUrls }) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imageUrls.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  if (maxSteps === 0) {
    return <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey.200' }}>No Images</Box>;
  }

  return (
    <SliderContainer>
      <ImageTrack sx={{ transform: `translateX(-${activeStep * 100}%)` }}>
        {imageUrls.map((url, index) => (
          <SliderImage
            key={index}
            src={url}
            alt={`Gallery image ${index + 1}`}
          />
        ))}
      </ImageTrack>

      <ArrowButton onClick={handleBack} sx={{ left: 16 }}>
        <KeyboardArrowLeft />
      </ArrowButton>

      <ArrowButton onClick={handleNext} sx={{ right: 16 }}>
        <KeyboardArrowRight />
      </ArrowButton>

      <StyledStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
      />
    </SliderContainer>
  );
}