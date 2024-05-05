import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import { Container } from "./style";
import { PuffLoader } from "react-spinners";
import { Spinner } from "../../GlobalStyle";

const AllKanji = () => {
  const [kanjiData, setKanjiData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetchData("https://kanjiapi.dev/v1/kanji/all");
        setKanjiData(response);
        console.log(kanjiData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [kanjiData]);

  return (
    <Container>
      {loading ? (
        <Spinner>
          <PuffLoader />
        </Spinner>
      ) : (
        kanjiData.map((kanji, index) => <div key={index}>{kanji.kanji}</div>)
      )}
    </Container>
  );
};

export default AllKanji;
