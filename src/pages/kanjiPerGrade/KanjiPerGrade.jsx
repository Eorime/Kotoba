import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import {
  AllGradeContainer,
  Container,
  GradeContainer,
  GradeKanji,
} from "./style";
import SeeKanji from "../seeKanji/SeeKanji";
import { Spinner } from "../../GlobalStyle";

const KanjiPerGrade = () => {
  const [gradeKanjiData, setGradeKanjiData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { gradeID } = useParams();

  const navigate = useNavigate();

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

  const handleKanjiClick = (kanji) => {
    if (kanji) {
      navigate(`/kanjiDetails/${kanji}`);
    }
  };

  return (
    <Container>
      <SeeKanji />
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : (
        { gradeKanjiData } && (
          <AllGradeContainer>
            {gradeKanjiRow.map((row, index) => (
              <GradeContainer key={index}>
                {row.map((kanji, subIndex) => (
                  <GradeKanji
                    key={subIndex}
                    onClick={() => handleKanjiClick(kanji)}
                  >
                    {kanji}
                  </GradeKanji>
                ))}
              </GradeContainer>
            ))}
          </AllGradeContainer>
        )
      )}
      {gradeKanjiData.length}
    </Container>
  );
};

export default KanjiPerGrade;
