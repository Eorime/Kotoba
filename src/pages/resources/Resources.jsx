import React from "react";
import { Container, RESOURCES, ResourcesTitle } from "./style";
import Navbar from "../../components/navbar/Navbar";

const Resources = () => {
  return (
    <Container>
      <Navbar />
      <ResourcesTitle>Resources for self-study</ResourcesTitle>
      <RESOURCES>リソース</RESOURCES>
    </Container>
  );
};

export default Resources;
