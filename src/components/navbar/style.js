import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid #ef154885;
  border-radius: 20px;
  width: 75%;
  margin: 150px auto;
  padding-bottom: 30%;
`;

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

  &:hover {
    color: #ef1548;
  }
`;

export const NavLogo = styled.h1`
  font-size: 28px;
  line-height: 25px;
  letter-spacing: 4px;
`;
