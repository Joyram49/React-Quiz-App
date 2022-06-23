import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import classes from "../../styles/quiz.module.css";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initalState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTIONS":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "ANSWERS":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { error, loading, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [newQuestions, dispatch] = useReducer(reducer, initalState);
  const { currentUser } = useAuth();
  // console.log(currentUser);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { videoTitle } = state;

  useEffect(() => {
    dispatch({
      type: "QUESTIONS",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "ANSWERS",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  async function handleSubmit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: newQuestions,
    });
    navigate(`/result/${id}`, {
      state: {
        newQuestions,
      },
    });
  }

  const progressWidth =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <h2>Loading......</h2>}
      {error && <h2>An Error Occured!!!</h2>}
      {!loading && !error && newQuestions && newQuestions.length > 0 && (
        <div className={classes.quiz}>
          <h1>{newQuestions[currentQuestion].title}</h1>
          <h4>Question can have multiple answer</h4>
          <Answers
            input
            options={newQuestions[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={progressWidth}
            submit={handleSubmit}
          />
          <MiniPlayer id={id} title={videoTitle} />
        </div>
      )}
    </>
  );
};

export default Quiz;
