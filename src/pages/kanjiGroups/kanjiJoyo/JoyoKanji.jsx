import React, { useEffect, useState } from "react";
import { Container } from "../style";
import { fetchData } from "../../../api";
import { Spinner } from "../../../GlobalStyle";
import SeeKanji from "../../seeKanji/SeeKanji";

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

  return (
    <Container>
      <SeeKanji />
      {loading ? <Spinner color="#ef1548" size={100} /> : <>{joyoData}</>}
    </Container>
  );
};

export default JoyoKanji;
