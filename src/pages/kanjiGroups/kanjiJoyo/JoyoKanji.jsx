import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api";
import { Spinner } from "../../../GlobalStyle";
import SeeKanji from "../../seeKanji/SeeKanji";
import { AllJoyoContainer, Container, JoyoContainer, Kanji } from "./style";

const JoyoKanji = () => {
  const [joyoData, setJoyoData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJoyo = async () => {
      try {
        const response = await fetchData("https://kanjiapi.dev/v1/kanji/joyo");
        setJoyoData(response);
      } catch (error) {
        setError("couldn't fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchJoyo();
  }, []);

  const joyoSliced = joyoData ? joyoData.slice(0, 100) : [];
  const joyoRowSize = 20;
  const joyoKanjiRow = Array.from(
    { length: Math.ceil(joyoSliced.length / joyoRowSize) },
    (_, index) =>
      joyoSliced.slice(index * joyoRowSize, index * joyoRowSize + joyoRowSize)
  );

  return (
    <Container>
      <SeeKanji />
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : (
        <AllJoyoContainer>
          {joyoKanjiRow.map((row, index) => (
            <JoyoContainer key={index}>
              {row.map((kanji, subIndex) => (
                <Kanji key={subIndex}>{kanji}</Kanji>
              ))}
            </JoyoContainer>
          ))}
        </AllJoyoContainer>
      )}
      {joyoData && <p>Length: {joyoData.length}</p>}
    </Container>
  );
};

export default JoyoKanji;
