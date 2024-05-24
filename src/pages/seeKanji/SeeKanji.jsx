import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import Navbar from "../../components/navbar/Navbar";
import {
  ButtonsContainer,
  Container,
  GradeButton,
  GradeContainer,
  GroupButton,
  GroupContainer,
} from "./style";

const SeeKanji = () => {
  const navigate = useNavigate();
  const buttonArray = [1, 2, 3, 4, 5, 6];

  const handleGradeClick = (grade) => {
    navigate(routes.gradeKanji.replace("/:gradeID", `/${grade}`));
  };

  const handleJoyoClick = (group) => {
    navigate(routes.kanjiJoyo);
  };

  const handleJinmeyoClick = (group) => {
    navigate(routes.kanjiJinmeyo);
  };

  return (
    <Container>
      <Navbar />
      <ButtonsContainer>
        <GradeContainer>
          {buttonArray.map((grade) => (
            <GradeButton key={grade} onClick={() => handleGradeClick(grade)}>
              GRADE {grade}
            </GradeButton>
          ))}
        </GradeContainer>

        <GroupContainer>
          <GroupButton onClick={handleJinmeyoClick}>JINMEIYO</GroupButton>
          <GroupButton onClick={handleJoyoClick}>JOYO</GroupButton>
        </GroupContainer>
      </ButtonsContainer>
    </Container>
  );
};

export default SeeKanji;
