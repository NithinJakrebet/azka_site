import { DesktopNavContainer, StyledNavLink } from "../navbar.styles";
import { NavLink as RouterNavLink } from "react-router-dom";
import { pages } from "../../../constants";

const DesktopNav = () => {
      return (
            <DesktopNavContainer>
                  {pages.map((page) => (
                        <StyledNavLink
                              key={page.name}
                              component={RouterNavLink}
                              to={page.path}
                        >
                              {page.icon}
                              {page.name}
                        </StyledNavLink>
                  ))}
            </DesktopNavContainer>
      )
}


export default DesktopNav;