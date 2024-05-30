import React from "react";
import {
  ContactContainer,
  ContactLink,
  ContactTitle,
  Container,
  ContentLink,
  ContentsContainer,
  ContentsTitle,
  GithubLogo,
  ResourceContainer,
  ResourceLink,
  ResourcesTitle,
} from "./style";
import { routes } from "../../constants/routes";
import Logo from "../../assets/images/github-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <ContentsContainer>
        <ContentsTitle>KOTOBA</ContentsTitle>
        <ContentLink to={routes.home}>Home</ContentLink>
        <ContentLink to={routes.seeKanji}>Kanji Types</ContentLink>
        <ContentLink to={routes.allKanji}>All Kanji</ContentLink>
        <ContentLink to={routes.about}>About</ContentLink>
        <ContentLink to={routes.resources}>Resources</ContentLink>
      </ContentsContainer>
      <ResourceContainer>
        <ResourcesTitle>RESOURCES</ResourcesTitle>
        <ResourceLink
          href="https://mfadhillah.wordpress.com/wp-content/uploads/2012/12/basic-kanji-book-1.pdf"
          target="_blank"
        >
          Basic Kanji I
        </ResourceLink>
        <ResourceLink
          href="https://mfadhillah.wordpress.com/wp-content/uploads/2012/12/basic-kanji-book-2_.pdf"
          target="_blank"
        >
          Basic Kanji II
        </ResourceLink>
        <ResourceLink href="https://jlptstudy.net" target="_blank">
          JLPT Study
        </ResourceLink>
        <ResourceLink href="https://www.japanesepod101.com" target="_blank">
          JapanesePod101
        </ResourceLink>
      </ResourceContainer>
      <ContactContainer>
        <ContactTitle>CONTACT</ContactTitle>
        <ContactLink to="mailto:elenedgebuadze83@gmail.com" target="_blank">
          elenedgebuadze83@gmail.com
        </ContactLink>
        <ContactLink as="a" href="https://wa.me/995599783532" target="_blank">
          WhatsApp
        </ContactLink>
        <ContactLink as="a" href="http://github.com/eorime" target="_blank">
          <GithubLogo src={Logo} />
        </ContactLink>
      </ContactContainer>
    </Container>
  );
};

export default Footer;
