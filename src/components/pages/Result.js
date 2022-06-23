import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswerList from "../../hooks/useAnswerList";
import classes from "../../styles/result.module.css";
import Analysis from "../Analysis";
import Summary from "../Summary";

const Result = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { newQuestions } = state;
  // console.log(newQuestions);
  const { loading, error, answers } = useAnswerList(id);
  // console.log(answers);

  function calculate() {
    let score = 0;
    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (newQuestions[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });
    return score;
  }

  const userScore = calculate();

  return (
    <div className={classes.result}>
      {loading && <div>Loading....yes</div>}
      {error && <div>An error occured!!</div>}
      {!loading && !error && answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </div>
  );
};

export default Result;
