import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import {
  AllGradeContainer,
  Container,
  GradeContainer,
  GradeKanji,
  GradeText,
  GradeTitle,
  TextContainer,
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
      <GradeTitle>What are the Kyōiku Kanji?</GradeTitle>
      <TextContainer>
        <GradeText>
          In Japan, the learning of kanji characters, an integral part of the
          Japanese writing system, follows a carefully structured approach known
          as the Kyōiku Kanji (教育漢字), or "Educational Kanji." This system
          organizes kanji into different grade levels based on their complexity
          and frequency of use, providing a progressive and systematic
          introduction to these characters. The Kyōiku Kanji framework is
          implemented across Japanese elementary, middle, and high schools,
          ensuring a consistent and standardized learning experience.{" "}
          <GradeText>
            Students are first introduced to the most fundamental and frequently
            used kanji in the lower grades, laying a solid foundation. As they
            advance through the educational system, they encounter increasingly
            complex and specialized kanji characters, with each grade building
            upon the knowledge acquired in the previous one. This well-defined
            progression not only aids in the effective acquisition of kanji but
            also facilitates a deeper understanding and mastery of the Japanese
            writing system. By breaking down the vast number of kanji into
            manageable levels, the Kyōiku Kanji system allows learners, both
            native Japanese speakers and language students, to solidify their
            grasp of the writing system before advancing to more advanced
            characters.{" "}
          </GradeText>
          Overall, the Kyōiku Kanji system plays a crucial role in promoting
          literacy and proficiency in the Japanese language, providing a
          structured framework that supports the gradual and comprehensive
          learning of kanji characters.
        </GradeText>
      </TextContainer>
    </Container>
  );
};

export default KanjiPerGrade;
