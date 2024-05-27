import styled from "styled-components";

export const Container = styled.div``;

export const KanjiContainer = styled.div`
  background-color: #f1e7db;
  border: 1px solid black;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  margin-left: 27%;
  margin-top: 5%;
  justify-content: center;
  align-items: center;
`;

export const Kanji = styled.p`
  font-size: 150px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  color: #3cc3bf;
`;

export const KanjiDetailsDataContainer = styled.div`
  margin-left: 48%;
  margin-top: -14%;
`;

export const GradeParagraph = styled.p`
  color: black;
  font-size: 22px;
  margin-top: 65px;
`;

export const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3cc3bf;
  height: 100px;
  width: 100px;
  border: solid 1px black;
  border-radius: 12px;
  margin-left: 30.8%;
  margin-top: 11%;
  position: absolute;
  z-index: -1;
`;

export const JLPText = styled.h3`
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 24px;
  max-width: 500px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
`;
