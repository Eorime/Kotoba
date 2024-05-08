import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, GradeContainer, GradeKanji } from "./style";
import Navbar from "../../components/navbar/Navbar";
import SeeKanji from "../seeKanji/SeeKanji";

const KanjiPerGrade = () => {
  const [gradeKanjiData, setGradeKanjiData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { gradeID } = useParams();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetchData(
          `https://kanjiapi.dev/v1/kanji/grade-${gradeID}`
        );
        setGradeKanjiData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [gradeID]);

  const gradeSliced = gradeKanjiData.slice(0, 1200);
  const gradeRowSize = 20;
  const gradeKanjiRow = Array.from(
    { length: Math.ceil(gradeSliced.length / gradeRowSize) },
    (_, index) =>
      gradeSliced.slice(
        index * gradeRowSize,
        index * gradeRowSize + gradeRowSize
      )
  );

  return (
    <Container>
      <SeeKanji />
      {gradeKanjiRow.map((row, index) => (
        <GradeContainer key={index}>
          {row.map((kanji, subIndex) => (
            <GradeKanji key={subIndex}>{kanji}</GradeKanji>
          ))}
        </GradeContainer>
      ))}
    </Container>
  );
};

export default KanjiPerGrade;
