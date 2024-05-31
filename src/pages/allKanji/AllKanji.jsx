import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import {
  AllContainer,
  AllKanjiHeader,
  AllKanjiText,
  Container,
  ContainerAllKanji,
  KANJI,
  Kanji,
  TextContainer,
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

  useEffect(() => {}, [kanjiData]);

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
      <AllKanjiHeader>All available Kanji</AllKanjiHeader>
      <TextContainer>
        <AllKanjiText>
          Presented above is the comprehensive list of all available Kanji
          characters, encompassing an impressive total of 13,000. This extensive
          collection showcases the vast richness and complexity of the Kanji
          script. However, please note that this list includes only the meanings
          and stroke counts of the characters. Unlike the graded Kanji lists, it
          does not provide associated words, grades, JLPT levels, or the kunyomi
          and onyomi readings.
        </AllKanjiText>
      </TextContainer>
    </Container>
  );
};

export default AllKanji;
