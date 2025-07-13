import TempleHinduRoundedIcon from '@mui/icons-material/TempleHinduRounded';
import { NavLink as RouterNavLink } from "react-router-dom";
import { StyledNavTitle } from "../navbar.styles";

const NavTitle = () => {
      return (
            <>
                  <TempleHinduRoundedIcon sx={{ mr: 2, display: { xs: "none", md: "flex" } }} />
                  <StyledNavTitle variant="h4" component={RouterNavLink} to="/">AZ Konkanis</StyledNavTitle>
            </>
            
      )
};

export default NavTitle;