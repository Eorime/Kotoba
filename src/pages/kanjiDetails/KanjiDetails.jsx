// KanjiDetails.js
import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { fetchData } from "../../api";
import { useParams } from "react-router-dom";
import { Spinner } from "../../GlobalStyle";
import Navbar from "../../components/navbar/Navbar";

const KanjiDetails = () => {
  const { encodedCharacter } = useParams();
  const [kanjiDetailsData, setKanjiDetailsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <Container>
      <Navbar />
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : error ? (
        <p>Error: {error}</p>
      ) : kanjiDetailsData ? (
        <div>
          <h2>Kanji: {encodedCharacter}</h2>
          {kanjiDetailsData &&
            kanjiDetailsData.kun_readings &&
            kanjiDetailsData.kun_readings.length > 0 && (
              <p>Kun Readings: {kanjiDetailsData.kun_readings.join(", ")}</p>
            )}

          {kanjiDetailsData &&
            kanjiDetailsData.on_readings &&
            kanjiDetailsData.on_readings.length > 0 && (
              <p>On Readings: {kanjiDetailsData.on_readings.join(", ")}</p>
            )}

          <p>Meanings: {kanjiDetailsData.meanings.join(", ")}</p>
          <p>Stroke Count: {kanjiDetailsData.stroke_count}</p>
          {kanjiDetailsData && kanjiDetailsData.grade && (
            <p>Grade : {kanjiDetailsData.grade}</p>
          )}
        </div>
      ) : (
        <p>No data available for this kanji</p>
      )}
    </Container>
  );
};

export default KanjiDetails;
