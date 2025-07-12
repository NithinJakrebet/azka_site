import { useState } from "react";
import { Link as RouterLink, useMatch, useResolvedPath } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import TempleHinduRoundedIcon from '@mui/icons-material/TempleHinduRounded';

const pages = [
  { name: "Home", path: "/", icon: <HomeRoundedIcon /> },
  { name: "About Us", path: "/about", icon: <EmojiPeopleRoundedIcon /> },
  { name: "Gallery", path: "/gallery", icon: <PhotoLibraryRoundedIcon /> },
  { name: "Newsletter", path: "/newsletter", icon: <NewspaperRoundedIcon /> },
  { name: "Contact", path: "/contact" , icon: <MailOutlineRoundedIcon /> },
  // { name: "Settings", path: "/settings" },
];

// A new component to correctly handle the hook calls
const NavLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Button
      component={RouterLink}
      to={to}
      sx={{
        my: 2,
        color: "inherit",
        display: "block",
        textDecoration: isActive ? "underline" : "none",
        textUnderlineOffset: "4px",
      }}
    >
      {children}
    </Button>
  );
};

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <TempleHinduRoundedIcon sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: 'primary.contrastText' }} />
        <Typography
          variant="h3"
          noWrap
          component={RouterLink}
          to="/"
          sx={{
            fontFamily: "inherit",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          AZ Konkanis
        </Typography>

        {/* Mobile Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: 'flex-end' }}>
          <IconButton
            size="large"
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu} component={RouterLink} to={page.path}>
                  <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end' }}>
          {pages.map((page) => (
            <NavLink key={page.name} to={page.path}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {page.icon}{page.name}
              </Box>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}