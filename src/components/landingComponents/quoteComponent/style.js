import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  position: absolute;
  height: 800px;
  left: 0;
  margin-top: 1800px;
  background-color: #f1e7db;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1700px) {
    height: 600px;
    margin-top: 1300px;
  }
`;

export const QuoteWrapper = styled.div`
  position: relative;
`;

export const QuoteContainer = styled.div`
  background-color: #ef154860;
  border: solid 3px #302e2c;
  border-radius: 15px;
  width: 100%;
  height: 50%;
  align-self: center;
  margin-left: 15px;
  margin-top: 180px;

  @media screen and (max-width: 1700px) {
    margin-top: 150px;
  }
`;

export const Quote = styled.h6`
  color: #302e2c;
  font-size: 52px;
  margin-left: 70px;
  margin-right: 10px;

  @media screen and (max-width: 1700px) {
    font-size: 42px;
    margin-top: 9%;
  }
`;

export const Translation = styled.h3`
  color: #302e2c;
  font-size: 36px;
  margin-left: 110px;
  margin-top: -60px;

  @media screen and (max-width: 1700px) {
    font-size: 26px;
  }
`;

export const SpinContainer = styled.div`
  border: solid 3px #302e2c;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background-color: #f1e7db;
  position: absolute;
  left: -25px;
  top: 150px;
  display: flex;
  justify-content: center;
  animation: ${rotate} 8s linear infinite;

  @media screen and (max-width: 1700px) {
    width: 70px;
    height: 70px;
    top: 125px;
    left: -18px;
  }
`;

export const SpinText = styled.h6`
  font-size: 28px;
  color: #302e2c;
  align-self: center;

  @media screen and (max-width: 1700px) {
    font-size: 22px;
  }
`;
