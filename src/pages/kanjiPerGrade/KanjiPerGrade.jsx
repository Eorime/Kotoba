import React, { useEffect, useState } from "react";
import { fetchData } from "../../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const KanjiPerGrade = () => {
  const [gradeKanjiData, setGradeKanjiData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { gradeID } = useParams();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetchData(
          `https://kanjiapi.dev/v1/kanji/grade-${gradeID}`
        );
        setGradeKanjiData(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [gradeID]);

  return <div></div>;
};

export default KanjiPerGrade;
