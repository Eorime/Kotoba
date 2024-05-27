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
} from "./style";
import { fetchData } from "../../api";
import { useParams } from "react-router-dom";
import { Spinner } from "../../GlobalStyle";
import Navbar from "../../components/navbar/Navbar";

const KanjiDetails = () => {
  const { encodedCharacter } = useParams();
  const [kanjiDetailsData, setKanjiDetailsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [words, setWords] = useState(null);

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
      <Navbar />
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : error ? (
        <p>Error: {error}</p>
      ) : kanjiDetailsData ? (
        <div>
          {kanjiDetailsData && kanjiDetailsData.grade && (
            <GradeContainer>
              <GradeParagraph>
                Grade {""}
                {kanjiDetailsData.grade}
              </GradeParagraph>
            </GradeContainer>
          )}
          <KanjiContainer>
            <Kanji>{encodedCharacter}</Kanji>
          </KanjiContainer>

          <KanjiDetailsDataContainer>
            {kanjiDetailsData && kanjiDetailsData.jlpt && (
              <JLPText> JLPT N{kanjiDetailsData.jlpt}</JLPText>
            )}
            <Text>Meanings: {kanjiDetailsData.meanings.join(", ")}</Text>
            {kanjiDetailsData &&
              kanjiDetailsData.kun_readings &&
              kanjiDetailsData.kun_readings.length > 0 && (
                <Text>
                  Kun Readings: {kanjiDetailsData.kun_readings.join(", ")}
                </Text>
              )}
            {kanjiDetailsData &&
              kanjiDetailsData.on_readings &&
              kanjiDetailsData.on_readings.length > 0 && (
                <Text>
                  On Readings: {kanjiDetailsData.on_readings.join(", ")}
                </Text>
              )}

            <Text>Strokes: {kanjiDetailsData.stroke_count}</Text>
          </KanjiDetailsDataContainer>
        </div>
      ) : (
        <p>No data for this kanji</p>
      )}
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
          .slice(0, 20)
          .map((variant, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <p>Written: {variant.written}</p>
              <p>Pronounced: {variant.pronounced}</p>
              {variant.meanings.map((meaning, i) => (
                <p key={i}>Meanings: {meaning.glosses.join(", ")}</p>
              ))}
            </div>
          ))}
    </Container>
  );
};

export default KanjiDetails;
