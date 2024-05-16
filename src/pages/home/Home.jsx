import React from "react";
import { HomeContainer, TickerContainer } from "./style";
import Navbar from "../../components/navbar/Navbar";
import TickerTape from "../../components/landingComponents/tickerTape/TickerTape";
import LandingInfo from "../../components/landingComponents/landingInfo/LandingInfo";
import QuoteComponent from "../../components/landingComponents/quoteComponent/QuoteComponent";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <HomeContainer>
      <TickerContainer>
        <Navbar />
        <TickerTape />
      </TickerContainer>
      <LandingInfo />
      <QuoteComponent />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
