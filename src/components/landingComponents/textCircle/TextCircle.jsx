import React from "react";
import { Container, Text, TextRingContainer } from "./style";

const TextCircle = ({ text }) => {
  return (
    <Container>
      <TextRingContainer>
        <Text>{text}</Text>
      </TextRingContainer>
    </Container>
  );
};

export default TextCircle;
