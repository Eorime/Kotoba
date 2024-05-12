import React from "react";
import { HomeContainer, TickerContainer } from "./style";
import Navbar from "../../components/navbar/Navbar";
import TickerTape from "../../components/landingComponents/tickerTape/TickerTape";
import LandingInfo from "../../components/landingComponents/landingInfo/LandingInfo";

const Home = () => {
  return (
    <HomeContainer>
      <TickerContainer>
        <Navbar />
        <TickerTape />
      </TickerContainer>
      <LandingInfo />
    </HomeContainer>
  );
};

export default Home;
