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
  PageNavButton,
  PaginationContainer,
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

  const kanjiPerPage = 140;
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(kanjiData.length / kanjiPerPage);

  const handleKanjiClick = (kanji) => {
    if (kanji) {
      navigate(`/kanjiDetails/${kanji}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * kanjiPerPage;
  const currentKanjiData = kanjiData.slice(
    startIndex,
    startIndex + kanjiPerPage
  );

  const rowSize = 20;
  const kanjiRow = Array.from(
    { length: Math.ceil(currentKanjiData.length / rowSize) },
    (_, index) =>
      currentKanjiData.slice(index * rowSize, index * rowSize + rowSize)
  );

  return (
    <Container>
      <Navbar />
      <KANJI>漢字</KANJI>
      {loading ? (
        <Spinner color={"#ef1548"} size={100} />
      ) : (
        <>
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
          <PaginationContainer>
            <PageNavButton
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              🢀
            </PageNavButton>
            <PageNavButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              🢂
            </PageNavButton>
          </PaginationContainer>
        </>
      )}
      <AllKanjiHeader>All available Kanji</AllKanjiHeader>
      <TextContainer>
        <AllKanjiText>
          Presented above is the comprehensive list of all available Kanji
          characters, encompassing an impressive total of 13,000. This extensive
          collection showcases the vast richness and complexity of the Kanji
          script. Please note that this list includes meanings, stroke counts,
          associated words, grades, JLPT levels, and the kunyomi and onyomi
          readings for <strong>some kanji</strong>, but not for all. The level
          of detail varies across the characters.
        </AllKanjiText>
      </TextContainer>
    </Container>
  );
};

export default AllKanji;
