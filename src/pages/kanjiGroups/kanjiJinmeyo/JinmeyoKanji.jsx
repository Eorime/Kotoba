import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api";
import { Spinner } from "../../../GlobalStyle";
import SeeKanji from "../../seeKanji/SeeKanji";
import {
  AllJinmeyoContainer,
  Container,
  JinmeyoContainer,
  JinmeyoText,
  JinmeyoTitle,
  Kanji,
  TextContainer,
} from "./style";
import { useNavigate } from "react-router-dom";

const JinmeyoKanji = () => {
  const [jinmeyoData, setJinmeyoData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJinmeyo = async () => {
      try {
        const response = await fetchData(
          "https://kanjiapi.dev/v1/kanji/jinmeiyo"
        );
        setJinmeyoData(response);
      } catch (error) {
        setError("couldn't fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchJinmeyo();
  }, []);

  const jinmeyoSliced = jinmeyoData ? jinmeyoData.slice(0, 100) : [];
  const jinmeyoRowSize = 20;
  const jinmeyoKanjiRow = Array.from(
    { length: Math.ceil(jinmeyoSliced.length / jinmeyoRowSize) },
    (_, index) =>
      jinmeyoSliced.slice(
        index * jinmeyoRowSize,
        index * jinmeyoRowSize + jinmeyoRowSize
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
        <AllJinmeyoContainer>
          {jinmeyoKanjiRow.map((row, index) => (
            <JinmeyoContainer key={index}>
              {row.map((kanji, subIndex) => (
                <Kanji key={subIndex} onClick={() => handleKanjiClick(kanji)}>
                  {kanji}
                </Kanji>
              ))}
            </JinmeyoContainer>
          ))}
        </AllJinmeyoContainer>
      )}
      <JinmeyoTitle>What are the Jinmeiyō Kanji?</JinmeyoTitle>
      <TextContainer>
        <JinmeyoText>
          Jinmeyo Kanji, or "Kanji for Personal Names," is a separate list of
          kanji characters approved for use in personal names in Japan. This
          list includes around 863 kanji characters and was first introduced in
          1981, with revisions in 2004 and 2010. The Jinmeyo Kanji list serves a
          specific purpose: to provide a wider range of kanji characters that
          can be used in naming Japanese individuals.{" "}
          <JinmeyoText>
            While the Joyo Kanji list focuses on kanji characters used in
            general writing and communication, the Jinmeyo Kanji list allows for
            more variety and cultural significance in personal names. The
            Jinmeyo Kanji list includes kanji characters with desirable
            meanings, such as those related to virtues, nature, or positive
            attributes. It also includes some uncommon kanji characters that are
            not part of the Joyo Kanji list but hold cultural or historical
            significance in naming traditions. Furthermore, the Jinmeyo Kanji
            list contains some kanji characters that were once part of the Joyo
            Kanji list but were later removed due to changes in usage or
            relevance.
          </JinmeyoText>{" "}
          These kanji characters may still be used in personal names, even
          though they are no longer considered part of the standard set for
          general use. It's important to note that while the Joyo Kanji and
          Jinmeyo Kanji lists are separate, there is a significant overlap
          between them. Many of the kanji characters used in personal names are
          also part of the Joyo Kanji list, as they are commonly used in general
          writing as well.
        </JinmeyoText>
      </TextContainer>
    </Container>
  );
};

export default JinmeyoKanji;
