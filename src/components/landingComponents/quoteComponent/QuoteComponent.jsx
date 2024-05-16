import React from "react";
import {
  Container,
  Quote,
  QuoteContainer,
  SpinContainer,
  SpinText,
  Translation,
} from "./style";

const QuoteComponent = () => {
  return (
    <Container>
      <SpinContainer>
        <SpinText>引用</SpinText>
      </SpinContainer>
      <QuoteContainer>
        <Quote>「新しい言語は新しい人生の始まり。」</Quote>
        <Translation>
          A new language is the beginning of a new life.
        </Translation>
      </QuoteContainer>
    </Container>
  );
};

export default QuoteComponent;
