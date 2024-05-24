import styled from "styled-components";

export const Container = styled.div``;

export const ContainerAllKanji = styled.div`
  margin-top: 50px;
`;

export const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  margin-left: 15%;
  margin-top: 40px;
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
