import React from "react";
import { ABOUT, Container } from "./style";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <Container>
      <Navbar />
      <ABOUT>について</ABOUT>
    </Container>
  );
};

export default About;
