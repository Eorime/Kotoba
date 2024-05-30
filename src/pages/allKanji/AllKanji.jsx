import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import {
  AllContainer,
  Container,
  ContainerAllKanji,
  KANJI,
  Kanji,
} from "./style";
import { Spinner } from "../../GlobalStyle";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const AllKanji = () => {
  const [kanjiData, setKanjiData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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

  const sliced = kanjiData.slice(0, 140);
  const rowSize = 20;
  const kanjiRow = Array.from(
    { length: Math.ceil(sliced.length / rowSize) },
    (_, index) => sliced.slice(index * rowSize, index * rowSize + rowSize)
  );

  const handleKanjiClick = (kanji) => {
    if (kanji) {
      navigate(`/kanjiDetails/${kanji}`);
    }
  };

  return (
    <Container>
      <Navbar />
      <KANJI>漢字</KANJI>
      {loading ? (
        <Spinner color={"#ef1548"} size={100} />
      ) : (
        <ContainerAllKanji>
          {kanjiRow.map((row, rowIndex) => (
            <AllContainer key={rowIndex}>
              {row.map((kanji, index) => (
                <Kanji key={index} onClick={() => handleKanjiClick(kanji)}>
                  {kanji}
                </Kanji>
              ))}
            </AllContainer>
          ))}
        </ContainerAllKanji>
      )}
    </Container>
  );
};

export default AllKanji;
