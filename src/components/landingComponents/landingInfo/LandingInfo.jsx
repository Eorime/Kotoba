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
} from "./style";
import TextCircle from "../textCircle/TextCircle";

const LandingInfo = () => {
  return (
    <Container>
      <BodyContainer>
        <MainText>
          初<br></br>め<br></br>ま<br></br>し<br></br>て
        </MainText>
        <AllGradeTitle>Kanji By Grades</AllGradeTitle>
        <AllGradeText></AllGradeText>
        <GradeRotationContainer>
          <TextCircle text="学年別の漢字" />
        </GradeRotationContainer>
        <AllKanjiTitle>All Kanji</AllKanjiTitle>
        <AllKanjiText></AllKanjiText>
        <AllRotationContainer>
          <TextCircle text="すべての漢字" />
        </AllRotationContainer>
        <AboutTitle>About The Project</AboutTitle>
        <AboutText></AboutText>
        <AboutRotationContainer>
          <TextCircle text="プロジェクトについて" />
        </AboutRotationContainer>
        <ResourcesTitle>Resources</ResourcesTitle>
        <ResourcesText></ResourcesText>
        <ResourcesRotationContainer>
          <TextCircle text="学ぶためのリソース" />
        </ResourcesRotationContainer>
      </BodyContainer>
    </Container>
  );
};

export default LandingInfo;
