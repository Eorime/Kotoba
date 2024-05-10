import React from "react";
import {
  AboutText,
  AboutTitle,
  AllGradeText,
  AllGradeTitle,
  AllKanjiText,
  AllKanjiTitle,
  BodyContainer,
  Container,
  MainText,
  ResourceText,
  ResourceTitle,
  ResourcesText,
  ResourcesTitle,
} from "./style";

const LandingInfo = () => {
  return (
    <Container>
      <BodyContainer>
        <MainText>
          初<br></br>め<br></br>ま<br></br>し<br></br>て
        </MainText>
        <AllGradeTitle>Kanji By Grades</AllGradeTitle>
        <AllGradeText></AllGradeText>
        <AllKanjiTitle>All Kanji</AllKanjiTitle>
        <AllKanjiText></AllKanjiText>
        <AboutTitle>About The Project</AboutTitle>
        <AboutText></AboutText>
        <ResourcesTitle>Resources</ResourcesTitle>
        <ResourcesText></ResourcesText>
      </BodyContainer>
    </Container>
  );
};

export default LandingInfo;
