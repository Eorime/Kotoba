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
  margin-top: 1850px;
  background-color: #f1e7db;
  display: flex;
  justify-content: center;
`;

export const QuoteContainer = styled.div`
  background-color: #ef154860;
  border: solid 3px #302e2c;
  border-radius: 15px;
  width: 70%;
  height: 50%;
  align-self: center;
  margin-top: -40px;
`;

export const Quote = styled.h6`
  color: #302e2c;
  font-size: 52px;
  margin-left: 70px;
  margin-right: 10px;
  margin-top: 90px;
`;

export const Translation = styled.h3`
  color: #302e2c;
  font-size: 36px;
  margin-left: 70px;
  margin-top: -60px;
`;

export const SpinContainer = styled.div`
  border: solid 3px #302e2c;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background-color: #f1e7db;
  position: absolute;
  left: 240px;
  top: 130px;
  display: flex;
  justify-content: center;
  animation: ${rotate} 8s linear infinite;
`;

export const SpinText = styled.h6`
  font-size: 28px;
  color: #302e2c;
  align-self: center;
`;
