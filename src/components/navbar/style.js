import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const NavContainer = styled.div`
  display: flex;
  flex-direcion: row;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const NavElement = styled.p`
  margin: 20px 70px;
  font-size: 24px;
  transition: color 0.2s;
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    color: #d7717f;
  }

  @media screen and (max-width: 1550px) {
    font-size: 16px;
  }
`;

export const NavLogo = styled.h1`
  font-size: 28px;
  line-height: 25px;
  letter-spacing: 4px;
  color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 1550px) {
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 2px;
  }
`;
