import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(videoID) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const questionsRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(questionsRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        setLoading(false);
        // console.log(snapshot.val());
        if (snapshot.exists()) {
          // setVideos([...Object.values(snapshot.val())]);
          setQuestions((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
