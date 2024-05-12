import React from "react";
import {
  AboutRotationContainer,
  AboutText,
  AboutTitle,
  AllGradeText,
  AllGradeTitle,
  AllKanjiText,
  AllKanjiTitle,
  AllRotationContainer,
  BodyContainer,
  Container,
  GradeRotationContainer,
  MainText,
  ResourcesRotationContainer,
  ResourcesText,
  ResourcesTitle,
  StyledLink,
} from "./style";
import TextCircle from "../textCircle/TextCircle";
import { routes } from "../../../constants/routes";

const LandingInfo = () => {
  return (
    <Container>
      <BodyContainer>
        <MainText>
          初<br></br>め<br></br>ま<br></br>し<br></br>て
        </MainText>
        <StyledLink to={routes.gradeKanji}>
          <AllGradeTitle>Kanji By Grade and Groups</AllGradeTitle>
        </StyledLink>
        <AllGradeText>
          See all grades and groups and their <br></br> corresponding kanji
          characters.
        </AllGradeText>
        <GradeRotationContainer>
          <TextCircle text="学年別の漢字" />
        </GradeRotationContainer>
        <StyledLink to={routes.allKanji}>
          <AllKanjiTitle>All Kanji</AllKanjiTitle>
        </StyledLink>
        <AllKanjiText>
          View all available 13 000 <br></br>
          kanji characters.
        </AllKanjiText>
        <AllRotationContainer>
          <TextCircle text="すべての漢字" />
        </AllRotationContainer>
        <StyledLink to={routes.about}>
          <AboutTitle>About The Project</AboutTitle>
        </StyledLink>
        <AboutText>
          Learn more about the project, <br></br>and why it was created.
        </AboutText>
        <AboutRotationContainer>
          <TextCircle text="プロジェクトについて" />
        </AboutRotationContainer>
        <StyledLink to={routes.resources}>
          <ResourcesTitle>Resources</ResourcesTitle>
        </StyledLink>
        <ResourcesText>
          Check out some peer reviewed <br></br>and recommended resources
          <br></br>for effective learning.
        </ResourcesText>
        <ResourcesRotationContainer>
          <TextCircle text="学ぶためのリソース" />
        </ResourcesRotationContainer>
      </BodyContainer>
    </Container>
  );
};

export default LandingInfo;
