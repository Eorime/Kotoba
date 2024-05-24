import styled from "styled-components";

export const Container = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: 15%;
  margin-bottom: 2%;
`;

export const GradeContainer = styled.div``;

export const GradeButton = styled.button`
  border: 2px solid #d7717f80;
  border-radius: 20px;
  padding: 10px 15px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 35px;
  font-size: 24px;
  background-color: transparent;
  font-weight: bold;

  &: hover {
    cursor: pointer;
    background-color: #d7717f80;
  }
`;

export const GroupContainer = styled.div``;

export const GroupButton = styled.button`
  border: 2px solid #d7717f80;
  border-radius: 20px;
  padding: 10px 15px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 35px;
  font-size: 24px;
  background-color: transparent;
  font-weight: bold;

  &: hover {
    cursor: pointer;
    background-color: #d7717f80;
  }
`;
