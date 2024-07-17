import styled from "styled-components";

export const Container = styled.div``;

export const RESOURCES = styled.h1`
  position: absolute;
  left: 3%;
  top: 32%;
  color: #cbe0d5;
  font-size: 400px;
  z-index: -1;

  @media screen and (max-width: 1700px) {
    font-size: 300px;
    top: 28%;
`;

export const ResourcesTitle = styled.h1`
  margin-left: 13.5%;
  color: #313131;
  margin-top: 3%;
  font-size: 50px;

  @media screen and (max-width: 1700px) {
    font-size: 35px; 
`;

export const ResourcesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 130px;
  margin-top: 4%;

  @media screen and (max-width: 1700px) {
    margin-left: 6%;
`;

export const ResourceContainer = styled.div`
  background-color: #transparent;
  border: 2px solid #313131;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  border-radius: 12px;
  width: 350px;
  height: 400px;

  @media screen and (max-width: 1700px) {
    width: 200px;
  height: 250px;
`;

export const ResourceNameContainer = styled.div`
  background-color: transparent;
  width: 112%;
  margin-left: -6%;
  border-top: 2px solid #313131;
  height: 120px;
  margin-top: 85%;

  &: hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1700px) {
  margin-top: 90%;
`;

export const ResourceName = styled.h1`
  color: #313131;

  &: hover {
    cursor: pointer;
    color: #31a7a4;
  }

  @media screen and (max-width: 1700px) {
    font-size: 28px;
`;

export const ResourceText = styled.h1`
  position: absolute;
  color: #31a7a495;
  margin-left: 4%;

  @media screen and (max-width: 1700px) {
    font-size: 28px;
    margin-left: 3%;

`;
