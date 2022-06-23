import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswerList(videoID) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const answersRef = ref(db, "answers/" + videoID + "/questions");
      const answerQuery = query(answersRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answerQuery);
        setLoading(false);
        // console.log(snapshot.val());
        if (snapshot.exists()) {
          // setVideos([...Object.values(snapshot.val())]);
          setAnswers((prevAnswer) => {
            return [...prevAnswer, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchAnswers();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
}
