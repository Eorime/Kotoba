import styled from "styled-components";

export const Container = styled.div``;

export const AllJoyoContainer = styled.div`
  margin-left: 13%;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 12%;
  padding: 20px;
`;

export const JoyoContainer = styled.div`
  display: flex;
  flex-direction: row;
    flex-wrap: wrap;

  margin-top: 2%;
  margin-left: 1%;
  margin-bottom: 4%;

  @media screen and (max-width: 1700px) {
    margin-top: 0.5%;
    margin-bottom: 2%;
`;

export const Kanji = styled.div`
  margin-right: 20px;
  font-size: 48px;
  color: rgba(0, 0, 0, 0.8);
  transition: ease color 0.2s;

  &:hover {
    cursor: pointer;
    color: #d7717f;
  }

  @media screen and (max-width: 1700px) {
    font-size: 35px;
    margin-right: 12px;
`;

export const JoyoTitle = styled.h1`
  font-size: 50px;
  color: #313131;
  margin-left: 13%;
  margin-top: 7%;

  @media screen and (max-width: 1700px) {
    font-size: 35px;
`;

export const TextContainer = styled.div`
  margin-left: 13.5%;
  margin-right: 12%;
  margin-bottom: 100px;
`;

export const JoyoText = styled.p`
  font-size: 28px;

  @media screen and (max-width: 1700px) {
    font-size: 20px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  position: absolute;
  right: 13.5%;
  margin-top: 1.5%;
`;

export const PageNavButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 50px;
  margin-right: 15%;
  font-weight: bold;
  -webkit-text-stroke-width: 1.7px;
  -webkit-text-stroke-color: black;
  color: #e4acad;

  &: hover {
    color: #f8bebf;
    cursor: pointer;
  }

  @media screen and (max-width: 1700px) {
    font-size: 35px;
  }
`;
