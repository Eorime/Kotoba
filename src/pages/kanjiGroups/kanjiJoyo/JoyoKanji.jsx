import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api";
import { Spinner } from "../../../GlobalStyle";
import SeeKanji from "../../seeKanji/SeeKanji";
import {
  AllJoyoContainer,
  Container,
  JoyoContainer,
  JoyoTitle,
  Kanji,
} from "./style";
import { useNavigate } from "react-router-dom";

const JoyoKanji = () => {
  const [joyoData, setJoyoData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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
        <AllJoyoContainer>
          {joyoKanjiRow.map((row, index) => (
            <JoyoContainer key={index}>
              {row.map((kanji, subIndex) => (
                <Kanji key={subIndex} onClick={() => handleKanjiClick(kanji)}>
                  {kanji}
                </Kanji>
              ))}
            </JoyoContainer>
          ))}
        </AllJoyoContainer>
      )}
      <JoyoTitle>What are the Jōyō Kanji?</JoyoTitle>
    </Container>
  );
};

export default JoyoKanji;
