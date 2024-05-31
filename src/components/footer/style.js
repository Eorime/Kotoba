import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  top: 340vh;
  left: 0;
  height: 320px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1550px) {
    top: 410vh;
    height: 260px;
  }
`;

export const ContentsTitle = styled.p`
  font-size: 28px;
  color: white;
  margin-bottom: 5px;

  @media screen and (max-width: 1550px) {
    font-size: 18px;
    margin-bottom: -5px;
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15vw;

  @media screen and (max-width: 1550px) {
    padding-left: 13vw;
  }
`;

export const ContentLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-top: 20px;

  @media screen and (max-width: 1550px) {
    font-size: 14px;
  }
`;

export const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25vw;
`;

export const ResourcesTitle = styled.p`
  font-size: 28px;
  color: white;
  margin-bottom: 5px;

  @media screen and (max-width: 1550px) {
    font-size: 18px;
    margin-bottom: -5px;
  }
`;

export const ResourceLink = styled.a`
  text-decoration: none;
  color: white;
  margin-top: 20px;

  &: hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1550px) {
    font-size: 14px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25vw;
`;

export const ContactTitle = styled.p`
  font-size: 28px;
  color: white;
  margin-bottom: 5px;

  @media screen and (max-width: 1550px) {
    font-size: 18px;
    margin-bottom: -5px;
  }
`;

export const ContactLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-top: 20px;

  @media screen and (max-width: 1550px) {
    font-size: 14px;
  }
`;

export const GithubLogo = styled.img`
  width: 40px;
  margin-top: 2%;
  margin-left: 1%;

  @media screen and (max-width: 1550px) {
    width: 30px;
    margin-top: 1%;
  }
`;
