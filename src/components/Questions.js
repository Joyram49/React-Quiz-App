import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import classes from "../styles/questions.module.css";
import Answers from "./Answers";

const Questions = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div className={classes.questions} key={index}>
      <div className={classes.questions_title}>
        <HelpOutlineOutlinedIcon className={classes.questions_title_icon} />
        <p>{answer.title}</p>
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
};

export default Questions;
