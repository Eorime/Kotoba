import React from "react";
import {
  ABOUT,
  Text,
  AboutTitle,
  Container,
  TextContainer,
  ReasonsTextContainer,
  GoalTextContainer,
} from "./style";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Navbar />
      <AboutTitle>What is KOTOBA? 🌸</AboutTitle>
      <TextContainer>
        <Text>
          As a lifelong language lover, the world of kanji has always captivated
          me. It's this fascination that inspired me to create KOTOBA - my
          one-man kanji dictionary website. With a neat and user-friendly
          design, KOTOBA is a true passion project that offers a comprehensive
          dictionary of kanji characters, displaying their readings, stroke
          orders, meanings and associated words. From beginners to advanced
          learners, KOTOBA aims to be a helpful companion on one's journey to
          kanji mastery. KOTOBA uses{" "}
          <a
            href="https://kanjiapi.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <strong>kanjiapi.dev</strong>
          </a>{" "}
          {""}
          as its main data source to display all available kanji characters.
        </Text>
      </TextContainer>
      <ReasonsTextContainer>
        <Text>
          My good understanding of the challenges and joys of language learning
          drove me to craft this website as a thoughtfully designed and
          user-friendly experience. I wanted to go beyond just listing kanji - I
          aimed to create a comprehensive resource that makes learning
          enjoyable, offering study materials and insights into one of the
          Japanese writing systems.
        </Text>
      </ReasonsTextContainer>
      <GoalTextContainer>
        <Text>
          After creating KOTOBA, my aim is to develop a website that will offer
          interactive tools for learning multiple languages. This site will be
          in Georgian, since most language learning sites are English-based. My
          goal is to provide the Georgian-speaking community with a space to
          learn languages. It's a vision I'm passionate about, and I look
          forward to bringing it to life.
        </Text>
      </GoalTextContainer>
      <ABOUT>について</ABOUT>
    </Container>
  );
};

export default About;
