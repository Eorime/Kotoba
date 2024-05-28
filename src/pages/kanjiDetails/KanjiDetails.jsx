// KanjiDetails.js
import React, { useEffect, useState } from "react";
import {
  Container,
  GradeContainer,
  GradeParagraph,
  JLPText,
  Kanji,
  KanjiContainer,
  KanjiDetailsDataContainer,
  Text,
  GradeAndKanjiWrapper,
  BackButton,
  WordsHeader,
  WordContainer,
  WordsContainer,
} from "./style";
import { fetchData } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../../GlobalStyle";
import Navbar from "../../components/navbar/Navbar";

const KanjiDetails = () => {
  const { encodedCharacter } = useParams();
  const [kanjiDetailsData, setKanjiDetailsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [words, setWords] = useState(null);

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchData(
          `https://kanjiapi.dev/v1/kanji/${encodedCharacter}`
        );
        setKanjiDetailsData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (encodedCharacter) {
      fetchDetails();
    }
  }, [encodedCharacter]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetchData(
          `https://kanjiapi.dev/v1/words/${encodedCharacter}`
        );
        setWords(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (encodedCharacter) {
      fetchWords();
    }
  }, [encodedCharacter]);

  return (
    <Container>
      <BackButton onClick={handleBackButton}>🢀</BackButton>
      <Navbar />
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : error ? (
        <p>Error: {error}</p>
      ) : kanjiDetailsData ? (
        <>
          <GradeAndKanjiWrapper>
            {kanjiDetailsData.grade && (
              <GradeContainer>
                <GradeParagraph>Grade {kanjiDetailsData.grade}</GradeParagraph>
              </GradeContainer>
            )}
            <KanjiContainer>
              <Kanji>{encodedCharacter}</Kanji>
            </KanjiContainer>
          </GradeAndKanjiWrapper>

          <KanjiDetailsDataContainer>
            {kanjiDetailsData.jlpt && (
              <JLPText>JLPT N{kanjiDetailsData.jlpt}</JLPText>
            )}
            <Text>Meanings: {kanjiDetailsData.meanings.join(", ")}</Text>
            {kanjiDetailsData.kun_readings.length > 0 && (
              <Text>
                Kun Readings: {kanjiDetailsData.kun_readings.join(", ")}
              </Text>
            )}
            {kanjiDetailsData.on_readings.length > 0 && (
              <Text>
                On Readings: {kanjiDetailsData.on_readings.join(", ")}
              </Text>
            )}
            <Text>Strokes: {kanjiDetailsData.stroke_count}</Text>
          </KanjiDetailsDataContainer>
        </>
      ) : (
        <p>No data for this kanji</p>
      )}
      {words && words.length > 0 && <WordsHeader>WORDS</WordsHeader>}
      <WordsContainer>
        {words &&
          words.length > 0 &&
          words
            .flatMap((item) =>
              item.variants
                .filter((variant) => variant.pronounced)
                .map((variant) => ({
                  ...variant,
                  meanings: item.meanings,
                }))
            )
            .slice(0, 100)
            .map((variant, index) => (
              <WordContainer key={index}>
                <p>Written: {variant.written}</p>
                <p>Pronounced: {variant.pronounced}</p>
                {variant.meanings.map((meaning, i) => (
                  <p key={i}>Meanings: {meaning.glosses.join(", ")}</p>
                ))}
              </WordContainer>
            ))}
      </WordsContainer>
    </Container>
  );
};

export default KanjiDetails;
