import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  height: 2200px;
  margin-top: 25px;
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
  margin-top: 150px;
  left: 47.5vw;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  line-height: 300px;
`;

export const AllGradeTitle = styled.h6`
  color: white;
  font-size: 42px;
  position: absolute;
  top: 250px;
  left: 290px;
  transition: color 0.5s ease;

  &: hover {
    color: #f36276;
    cursor: pointer;
  }
`;

export const AllGradeText = styled.p`
  color: white;
  position: absolute;
  top: 400px;
  left: 290px;
  font-size: 26px;
`;

export const AllKanjiTitle = styled.h6`
  color: white;
  font-size: 42px;
  position: absolute;
  top: 500px;
  right: 380px;
  transition: color 0.5s ease;

  &: hover {
    color: #f36276;
    cursor: pointer;
  }
`;

export const AllKanjiText = styled.p`
  color: white;
  position: absolute;
  top: 650px;
  right: 255px;
  font-size: 26px;
`;

export const AboutTitle = styled.h6`
  color: white;
  font-size: 42px;
  position: absolute;
  top: 850px;
  left: 290px;
  transition: color 0.5s ease;

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
`;

export const ResourcesTitle = styled.h6`
  color: white;
  font-size: 42px;
  position: absolute;
  top: 1200px;
  right: 360px;
  transition: color 0.5s ease;

  &: hover {
    color: #f36276;
    cursor: pointer;
  }
`;

export const ResourcesText = styled.p`
  color: white;
  position: absolute;
  top: 1350px;
  right: 210px;
  font-size: 26px;
`;

export const GradeRotationContainer = styled.div`
  position: absolute;
  top: 265px;
  left: 180px;
`;

export const AllRotationContainer = styled.div`
  position: absolute;
  top: 510px;
  right: 440px;
`;

export const AboutRotationContainer = styled.div`
  position: absolute;
  top: 860px;
  left: 180px;
`;

export const ResourcesRotationContainer = styled.div`
  position: absolute;
  top: 1210px;
  right: 450px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
