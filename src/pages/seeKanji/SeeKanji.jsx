import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const SeeKanji = () => {
  const [gradeKanjiData, setGradeKanjiData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { gradeID } = useParams();
  const navigate = useNavigate();

  const handleGradeClick = () => {
    navigate(routes.gradeKanji);
  };

  const buttonArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      {buttonArray.map((grade) => (
        <button key={grade} onClick={() => handleGradeClick(grade)}>
          Grade {grade} Kanji
        </button>
      ))}
    </div>
  );
};

export default SeeKanji;
