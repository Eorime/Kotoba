import React from "react";
import { Character, Container, Text, TextRingContainer } from "./style";

const TextCircle = ({ text }) => {
  const chars = text.split("");
  const radius = 60;

  return (
    <Container>
      <TextRingContainer>
        <Text>
          {chars.map((char, index) => (
            <Character
              key={index}
              rotation={(360 / chars.length) * index}
              radius={radius}
            >
              {char}
            </Character>
          ))}
        </Text>
      </TextRingContainer>
    </Container>
  );
};

export default TextCircle;
