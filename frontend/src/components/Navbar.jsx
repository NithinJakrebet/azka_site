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
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Newsletter", path: "/newsletter" },
  { name: "Contact", path: "/contact" },
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
        color: "white",
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
        <Typography
          variant="h4"
          noWrap
          component={RouterLink}
          to="/"
          sx={{
            mr: 2,
            flexGrow: { xs: 1, md: 0 },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
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
              {page.name}
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}