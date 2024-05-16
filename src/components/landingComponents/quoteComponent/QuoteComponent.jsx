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
        <Quote>違う言語というのは、違う人生のビジョンである。</Quote>
        <Translation>
          A different language is a different vision of life.
        </Translation>
      </QuoteContainer>
    </Container>
  );
};

export default QuoteComponent;
