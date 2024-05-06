import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import { AllContainer, AllKanjij, Container, Kanji } from "./style";
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
  }, []);

  useEffect(() => {
    console.log(kanjiData);
  }, [kanjiData]);

  const sliced = kanjiData.slice(0, 20);

  return (
    <Container>
      {loading ? (
        <Spinner color={"#ef1548"} size={100} />
      ) : (
        <AllContainer>
          {sliced.map((kanji, index) => (
            <Kanji key={index}>{kanji}</Kanji>
          ))}
        </AllContainer>
      )}
    </Container>
  );
};

export default AllKanji;
