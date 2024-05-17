import React from "react";
import {
  Container,
  NavContainer,
  NavElement,
  NavLogo,
  StyledLink,
} from "./style";
import { routes } from "../../constants/routes";

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <StyledLink to={routes.seeKanji}>
          <NavElement>Kanji Types</NavElement>
        </StyledLink>
        <StyledLink to={routes.allKanji}>
          <NavElement>All Kanji</NavElement>
        </StyledLink>
        <StyledLink to={routes.home}>
          <NavLogo>
            KO
            <br />
            TO
            <br />
            BA
          </NavLogo>
        </StyledLink>
        <StyledLink to={routes.about}>
          <NavElement>About</NavElement>
        </StyledLink>
        <StyledLink to={routes.resources}>
          <NavElement>Resources</NavElement>
        </StyledLink>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
