import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "../../../constants";
import { MobileNavContainer, StyledDrawerItem } from "../navbar.styles";

const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const DrawerList = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <StyledDrawerItem component={RouterNavLink} to={page.path}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.name} />
            </StyledDrawerItem>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <MobileNavContainer>
      <IconButton
        size="large"
        aria-label="open navigation menu"
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top" 
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <DrawerList />
      </Drawer>
    </MobileNavContainer>
  );
};

export default MobileNav;