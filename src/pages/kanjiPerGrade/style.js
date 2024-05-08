import styled from "styled-components";

export const Container = styled.div``;

export const GradeContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;

export const GradeKanji = styled.div`
  margin-right: 20px;
  font-size: 48px;
  color: rgba(0, 0, 0, 0.8);
  transition: ease color 0.2s;

  &:hover {
    cursor: pointer;
    color: #d7717f;
  }
`;
