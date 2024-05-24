import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import {
  AllContainer,
  AllKanjij,
  Container,
  ContainerAllKanji,
  Kanji,
} from "./style";
import { PuffLoader } from "react-spinners";
import { Spinner } from "../../GlobalStyle";
import Navbar from "../../components/navbar/Navbar";

const AllKanji = () => {
  const [kanjiData, setKanjiData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetchData("https://kanjiapi.dev/v1/kanji/all");
        setKanjiData(response);
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

  const sliced = kanjiData.slice(0, 160);
  const rowSize = 20;
  const kanjiRow = Array.from(
    { length: Math.ceil(sliced.length / rowSize) },
    (_, index) => sliced.slice(index * rowSize, index * rowSize + rowSize)
  );

  return (
    <Container>
      <Navbar />
      {loading ? (
        <Spinner color={"#ef1548"} size={100} />
      ) : (
        <ContainerAllKanji>
          {kanjiRow.map((row, rowIndex) => (
            <AllContainer key={rowIndex}>
              {row.map((kanji, index) => (
                <Kanji key={index}>{kanji}</Kanji>
              ))}
            </AllContainer>
          ))}
        </ContainerAllKanji>
      )}
    </Container>
  );
};

export default AllKanji;
