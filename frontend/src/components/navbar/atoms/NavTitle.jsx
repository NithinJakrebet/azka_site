import { NavLink as RouterNavLink } from "react-router-dom";
import { StyledNavTitle } from "../navbar.styles";
import { Box } from '@mui/material';


const NavTitle = () => {
      return (
            <>
                  {/* <TempleHinduRoundedIcon sx={{ mr: 2, display: { xs: "none", md: "flex" } }} /> */}
                   <Box
                        component="img"
                        // Reference the image directly from the public folder
                        src="/om.png" 
                        alt="AZ Konkanis Logo"
                        sx={{ 
                              mr: 2, 
                              display: { xs: "none", md: "flex" },
                              height: 40 // Control the size of the logo
                        }} 
                  />
                  <StyledNavTitle variant="h4" component={RouterNavLink} to="/">AZ Konkanis</StyledNavTitle>
            </>
            
      )
};

export default NavTitle;