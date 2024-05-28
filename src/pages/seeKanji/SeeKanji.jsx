import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import Navbar from "../../components/navbar/Navbar";
import {
  ButtonsContainer,
  Container,
  GradeButton,
  GradeContainer,
  GroupButton,
  GroupContainer,
  KANJI,
} from "./style";

const SeeKanji = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const buttonArray = [1, 2, 3, 4, 5, 6];
  const joyoRoute = routes.kanjiJoyo;
  const jinmeyoRoute = routes.kanjiJinmeyo;

  const handleGradeClick = (grade) => {
    navigate(routes.gradeKanji.replace(":gradeID", grade));
  };

  const handleJoyoClick = () => {
    navigate(joyoRoute);
  };

  const handleJinmeyoClick = () => {
    navigate(jinmeyoRoute);
  };

  return (
    <Container>
      <Navbar />
      <KANJI>漢字</KANJI>
      <ButtonsContainer>
        <GradeContainer>
          {buttonArray.map((grade) => (
            <GradeButton
              key={grade}
              onClick={() => handleGradeClick(grade)}
              className={
                location.pathname ===
                routes.gradeKanji.replace(":gradeID", grade.toString())
                  ? "active"
                  : ""
              }
            >
              GRADE {grade}
            </GradeButton>
          ))}
        </GradeContainer>

        <GroupContainer>
          <GroupButton
            onClick={handleJoyoClick}
            className={location.pathname === joyoRoute ? "active" : ""}
          >
            JOYO
          </GroupButton>
          <GroupButton
            onClick={handleJinmeyoClick}
            className={location.pathname === jinmeyoRoute ? "active" : ""}
          >
            JINMEIYO
          </GroupButton>
        </GroupContainer>
      </ButtonsContainer>
    </Container>
  );
};

export default SeeKanji;
