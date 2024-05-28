import styled, { css } from "styled-components";

const buttonStyles = css`
  border: 2px solid #e4acad;
  border-radius: 20px;
  padding: 10px 15px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 35px;
  font-size: 24px;
  background-color: transparent;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #e4acad;
  }

  /* Apply background color when active */
  &.active {
    background-color: #e4acad;
  }
`;

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
  ${buttonStyles}
`;

export const GroupContainer = styled.div``;

export const GroupButton = styled.button`
  ${buttonStyles}
`;

export const KANJI = styled.h1`
  position: absolute;
  left: 3%;
  top: 8%;
  color: #f8cfcf;
  font-size: 500px;
  z-index: -1;
`;
