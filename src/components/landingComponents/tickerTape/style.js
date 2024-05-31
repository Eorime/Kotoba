import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 20px;
  padding-bottom: -20px;
`;

const tickerScroll = keyframes`
0% {
    transform: translateX(0%);
}
100% {
    transform: translate(-100%);
}
`;

export const TickerJapanese = styled.h1`
  display: inline-block;
  font-size: 120px;
  margin-top: 25px;
  margin-bottom: -20px;
  animation: ${tickerScroll} 30s linear infinite;
  animation-fill-mode: both;
  color: #ef154860;

  @media screen and (max-width: 1550px) {
    font-size: 70px;
    margin-top: 5px;
  }
`;

export const TickerEnglish = styled.h6`
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  font-size: 60px;
  margin-top: 90px;
  margin-bottom: 115px;
  animation: ${tickerScroll} 30s linear infinite;
  animation-fill-mode: both;

  @media screen and (max-width: 1550px) {
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 40px;
  }
`;
