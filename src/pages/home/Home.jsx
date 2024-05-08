import React from "react";
import { Container } from "./style";
import Navbar from "../../components/navbar/Navbar";
import TickerTape from "../../components/landingComponents/tickerTape/TickerTape";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <TickerTape />
    </Container>
  );
};

export default Home;
