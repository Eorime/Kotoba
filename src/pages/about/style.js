import styled from "styled-components";

export const Container = styled.div``;

export const ABOUT = styled.h1`
  position: absolute;
  left: 3%;
  top: 22%;
  color: #f8cfcf;
  font-size: 400px;
  z-index: -1;

  @media screen and (max-width: 1700px) {
    font-size: 300px; 
`;

export const AboutTitle = styled.h1`
  margin-left: 13.5%;
  color: #313131;
  margin-top: 3%;
  font-size: 50px;

  @media screen and (max-width: 1700px) {
    font-size: 35px; 
`;

export const TextContainer = styled.div`
  margin-left: 13.5%;
  margin-right: 12%;
  background-color: #ef154850;
  border-radius: 12px;
  border: solid 2px #313131;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Text = styled.p`
  font-size: 28px;

  @media screen and (max-width: 1700px) {
    font-size: 18px; 
`;

export const GoalsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  margin-top: 1%;
  justify-content: space-between;

  @media screen and (max-width: 1700px) {
  }
`;

export const ReasonsTextContainer = styled.div`
  margin-left: 13.5%;
  width: 34%;
  flex-shrink: 0;
  background-color: transparent;
  border: solid 2px #313131;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 12px;
`;

export const GoalTextContainer = styled.div`
  margin-right: 12%;
  flex-shrink: 0;
  width: 34%;
  background-color: transparent;
  border: solid 2px #313131;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 12px;

  @media screen and (max-width: 1700px) {
    width: 33%;
  }
`;
