import React from "react";
import {
  ContactContainer,
  ContactLink,
  ContactTitle,
  Container,
  ContentLink,
  ContentsContainer,
  ContentsTitle,
  ResourceContainer,
  ResourcesTitle,
} from "./style";
import { routes } from "../../constants/routes";

const Footer = () => {
  return (
    <Container>
      <ContentsContainer>
        <ContentsTitle>KOTOBA</ContentsTitle>
        <ContentLink to={routes.home}>Home</ContentLink>
        <ContentLink to={routes.gradeKanji}>Kanji Types</ContentLink>
        <ContentLink to={routes.allKanji}>All Kanji</ContentLink>
        <ContentLink to={routes.about}>About</ContentLink>
        <ContentLink to={routes.resources}>Resources</ContentLink>
      </ContentsContainer>
      <ResourceContainer>
        <ResourcesTitle>RESOURCES</ResourcesTitle>
      </ResourceContainer>
      <ContactContainer>
        <ContactTitle>CONTACT</ContactTitle>
        <ContactLink to="mailto:elenedgebuadze83@gmail.com" target="_blank">
          elenedgebuadze83@gmail.com
        </ContactLink>
        <ContactLink as="a" href="https://wa.me/995599783532" target="_blank">
          WhatsApp
        </ContactLink>
      </ContactContainer>
    </Container>
  );
};

export default Footer;
