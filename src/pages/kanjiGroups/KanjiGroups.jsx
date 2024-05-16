import React from "react";
import { fetchData } from "../../api";
import { useState, useEffect } from "react";
import { Container } from "./style";
import Navbar from "../../components/navbar/Navbar";
import { Spinner } from "../../GlobalStyle";

const KanjiGroups = () => {
  const [joyoData, setJoyoData] = useState();
  const [jinmeyoData, setJinmeyoData] = useState();
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

  useEffect(() => {
    const fetchJinmeyo = async () => {
      try {
        const resp = await fetchData("https://kanjiapi.dev/v1/kanji/jinmeyo");
        setJinmeyoData(resp);
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
      <Navbar />
      {loading ? (
        <Spinner color="#ef1548" size={100} />
      ) : (
        <>
          {joyoData}
          {jinmeyoData}
        </>
      )}
    </Container>
  );
};

export default KanjiGroups;
