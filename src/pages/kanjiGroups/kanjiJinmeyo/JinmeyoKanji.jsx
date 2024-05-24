import React, { useEffect, useState } from "react";
import { fetchData } from "../../../api";
import { Spinner } from "../../../GlobalStyle";
import SeeKanji from "../../seeKanji/SeeKanji";
import { Container } from "./style";

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

  return (
    <Container>
      <SeeKanji />
      {loading ? <Spinner color="#ef1548" size={100} /> : <>{jinmeyoData}</>}
    </Container>
  );
};

export default JinmeyoKanji;
