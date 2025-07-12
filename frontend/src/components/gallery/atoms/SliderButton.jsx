import { IconButton } from "@mui/material";

const SliderButton = ({ onClick, disabled, children, sx }) => (
  <IconButton
    onClick={onClick}
    disabled={disabled}
    size="large"
    sx={{
      color: 'primary.contrastText',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },
      ...sx,
    }}
  >
    {children}
  </IconButton>
);

export default SliderButton;