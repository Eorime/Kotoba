import styled from "styled-components";

export const Container = styled.div``;

export const AllGradeContainer = styled.div`
  margin-left: 13.5%;
  border: 1px solid black;
  border-radius: 12px;
  margin-right: 12%;
  padding: 20px;
`;

export const GradeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  margin-left: 1%;
  margin-bottom: 4%;
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
