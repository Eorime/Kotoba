import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  height: 1900px;
  margin-top: 25px;

  @media screen and (max-width: 1550px) {
    height: 1350px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const MainText = styled.h1`
  color: black;
  font-size: 164px;
  position: absolute;
  margin-top: 100px;
  left: 47vw;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  line-height: 300px;

  @media screen and (max-width: 1550px) {
    font-size: 120px;
    left: 45vw;
    margin-top: 50px;
    line-height: 230px;
  }
`;

export const AllGradeTitle = styled.h6`
  color: white;
  font-size: 42px;
  position: absolute;
  top: 250px;
  left: 290px;

  &: hover {
    color: #f36276;
    cursor: pointer;
  }

  @media screen and (max-width: 1550px) {
    font-size: 28px;
    top: 200px;
    left: 170px;
  }
`;

export const AllGradeText = styled.p`
  color: white;
  position: absolute;
  top: 400px;
  left: 290px;
  font-size: 26px;

  @media screen and (max-width: 1550px) {
    font-size: 20px;
    top: 300px;
    left: 170px;
  }
`;

export const AllKanjiTitle = styled.h6`
  color: white;
  font-size: 42px;
  position: absolute;
  top: 500px;
  right: 380px;

  &: hover {
    color: #f36276;
    cursor: pointer;
  }

  @media screen and (max-width: 1550px) {
    font-size: 28px;
    right: 280px;
    top: 450px;
  }
`;

export const AllKanjiText = styled.p`
  color: white;
  position: absolute;
  top: 650px;
  right: 255px;
  font-size: 26px;

  @media screen and (max-width: 1550px) {
    font-size: 18px;
    right: 190px;
    top: 550px;
  }
`;

export const AboutTitle = styled.h6`
  color: white;
  font-size: 42px;
  position: absolute;
  top: 850px;
  left: 290px;

  @media screen and (max-width: 1550px) {
    font-size: 28px;
    left: 170px;
    top: 700px;
  }

  &: hover {
    color: #f36276;
    cursor: pointer;
  }
`;

export const AboutText = styled.p`
  color: white;
  position: absolute;
  top: 1000px;
  left: 290px;
  font-size: 26px;

  @media screen and (max-width: 1550px) {
    font-size: 18px;
    top: 800px;
    left: 170px;
  }
`;

export const ResourcesTitle = styled.h6`
  color: white;
  font-size: 42px;
  position: absolute;
  top: 1200px;
  right: 360px;

  &: hover {
    color: #f36276;
    cursor: pointer;
  }

  @media screen and (max-width: 1550px) {
    font-size: 28px;
    right: 260px;
    top: 950px;
  }
`;

export const ResourcesText = styled.p`
  color: white;
  position: absolute;
  top: 1350px;
  right: 210px;
  font-size: 26px;

  @media screen and (max-width: 1550px) {
    font-size: 18px;
    right: 150px;
    top: 1050px;
  }
`;

export const GradeRotationContainer = styled.div`
  position: absolute;
  top: 265px;
  left: 180px;

  @media screen and (max-width: 1550px) {
    top: 190px;
    left: 70px;
  }
`;

export const AllRotationContainer = styled.div`
  position: absolute;
  top: 510px;
  right: 440px;

  @media screen and (max-width: 1550px) {
    top: 440px;
    right: 290px;
  }
`;

export const AboutRotationContainer = styled.div`
  position: absolute;
  top: 860px;
  left: 180px;

  @media screen and (max-width: 1550px) {
    top: 690px;
    left: 70px;
  }
`;

export const ResourcesRotationContainer = styled.div`
  position: absolute;
  top: 1210px;
  right: 450px;

  @media screen and (max-width: 1550px) {
    right: 285px;
    top: 940px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
