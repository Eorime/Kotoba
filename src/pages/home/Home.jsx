import React from "react";
import { HomeContainer, TickerContainer } from "./style";
import Navbar from "../../components/navbar/Navbar";
import TickerTape from "../../components/landingComponents/tickerTape/TickerTape";
import LandingCircle from "../../components/landingComponents/landingInfo/LandingInfo";

const Home = () => {
  return (
    <HomeContainer>
      <TickerContainer>
        <Navbar />
        <TickerTape />
      </TickerContainer>
      <LandingCircle />
    </HomeContainer>
  );
};

export default Home;
