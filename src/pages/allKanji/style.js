import styled from "styled-components";

export const Container = styled.div``;

export const AllContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
`;

export const Kanji = styled.div`
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    color: #ef1548;
  }
`;
