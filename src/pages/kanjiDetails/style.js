import styled from "styled-components";

export const Container = styled.div``;

export const GradeAndKanjiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5%;
  margin-left: -30%;
`;

export const KanjiContainer = styled.div`
  background-color: #f1e7db;
  border: 1px solid black;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Kanji = styled.p`
  font-size: 160px;
  -webkit-text-stroke-width: 1.7px;
  -webkit-text-stroke-color: black;
  color: #3cc3bf;
`;

export const KanjiDetailsDataContainer = styled.div`
  text-align: left;
  position: absolute;
  margin-top: -14%;
  margin-left: 48%;
`;

export const GradeParagraph = styled.p`
  color: black;
  font-size: 22px;
  margin-top: 60px;
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
  position: absolute;
  z-index: -1;
  top: 210px;
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

export const BackButton = styled.button`
  position: fixed;
  border: none;
  background-color: transparent;
  font-size: 50px;
  left: 15%;
  top: 20%;
  font-weight: bold;
  -webkit-text-stroke-width: 1.7px;
  -webkit-text-stroke-color: black;
  color: #3cc3bf;
  z-index: 1;

  &: hover {
    color: #13dbd5;
    cursor: pointer;
  }
`;
