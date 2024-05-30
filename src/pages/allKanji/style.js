import styled from "styled-components";

export const Container = styled.div``;

export const ContainerAllKanji = styled.div`
  margin-left: 13.5%;
  border: 1px solid black;
  border-radius: 12px;
  margin-right: 12%;
  padding: 20px;
  margin-top: 65px;
`;

export const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  margin-left: 1%;
  margin-bottom: 2.5%;
  margin-top: 2.5%;
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
`;

export const KANJI = styled.h1`
  position: absolute;
  left: 3%;
  top: 8%;
  color: #f8cfcf;
  font-size: 500px;
  z-index: -1;
`;
