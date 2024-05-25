import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AllGradeCcontainer,
  AllGradeContainer,
  Container,
  ContainerGrades,
  GradeContainer,
  GradeKanji,
} from "./style";
import Navbar from "../../components/navbar/Navbar";
import SeeKanji from "../seeKanji/SeeKanji";
import { Spinner } from "../../GlobalStyle";

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

  const gradeSliced = gradeKanjiData.slice(0, 100);
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
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : (
        <AllGradeContainer>
          {gradeKanjiRow.map((row, index) => (
            <GradeContainer key={index}>
              {row.map((kanji, subIndex) => (
                <GradeKanji key={subIndex}>{kanji}</GradeKanji>
              ))}
            </GradeContainer>
          ))}
        </AllGradeContainer>
      )}
      {gradeKanjiData.length}
    </Container>
  );
};

export default KanjiPerGrade;
