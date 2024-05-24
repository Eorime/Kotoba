import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api";
import { Spinner } from "../../../GlobalStyle";
import SeeKanji from "../../seeKanji/SeeKanji";
import { Container, JinmeyoContainer, Kanji } from "./style";

const JinmeyoKanji = () => {
  const [jinmeyoData, setJinmeyoData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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

  return (
    <Container>
      <SeeKanji />
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : (
        <>
          {jinmeyoKanjiRow.map((row, index) => (
            <JinmeyoContainer key={index}>
              {row.map((kanji, subIndex) => (
                <Kanji key={subIndex}>{kanji}</Kanji>
              ))}
            </JinmeyoContainer>
          ))}
        </>
      )}
    </Container>
  );
};

export default JinmeyoKanji;
