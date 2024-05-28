import React from "react";
import { ABOUT, Container } from "./style";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <Container>
      <Navbar />
      <ABOUT>について</ABOUT>
    </Container>
  );
};

export default About;
