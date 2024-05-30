import React from "react";
import {
  ABOUT,
  AboutText,
  AboutTitle,
  Container,
  TextContainer,
} from "./style";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Navbar />
      <AboutTitle>What is KOTOBA?</AboutTitle>
      <TextContainer>
        <AboutText>
          As a lifelong language lover, the world of kanji has always captivated
          me. It's this fascination that inspired me to create KOTOBA - my
          one-man kanji dictionary website. With a neat and user-friendly
          design, KOTOBA is a true passion project that offers a comprehensive
          dictionary of kanji characters, displaying their readings, stroke
          orders, meanings and associated words. From beginners to advanced
          learners, KOTOBA aims to be a helpful companion on one's journey to
          kanji mastery. KOTOBA uses{" "}
          <Link
            to="/https://kanjiapi.dev"
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <strong> kanjiapi.dev</strong>
          </Link>{" "}
          as its main data source to display all available kanji characters.
        </AboutText>
      </TextContainer>
      <ABOUT>について</ABOUT>
    </Container>
  );
};

export default About;
