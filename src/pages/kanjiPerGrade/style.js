import styled from "styled-components";

export const Container = styled.div``;

export const GradeContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;

export const GradeKanji = styled.div`
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    color: #ef1548;
  }
`;
