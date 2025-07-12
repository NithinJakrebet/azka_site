import { Fab, useTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon

const DarkModeSwitch = ({ toggleColorMode }) => {
  const theme = useTheme();

  return (
    <Fab
      color="secondary"
      aria-label="toggle dark mode"
      onClick={toggleColorMode}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
      }}
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </Fab>
  );
};

export default DarkModeSwitch;