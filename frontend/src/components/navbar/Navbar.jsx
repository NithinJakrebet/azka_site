import {
  AppBar,
  Toolbar,
} from "@mui/material";
import DesktopNav from "./atoms/DestopNav";
import NavTitle from "./atoms/NavTitle";
import MobileNav from "./atoms/MobileNav";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavTitle />
        <DesktopNav />        
        <MobileNav />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;