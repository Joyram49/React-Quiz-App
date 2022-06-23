import { Fragment } from "react";
import Checkbox from "../components/Checkbox";
import classes from "../styles/answers.module.css";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className={classes.answers}>
      {/* {console.log(options)} */}
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              type='checkbox'
              text={option.title}
              className={classes.answer}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              type='checkbox'
              text={option.title}
              className={`${classes.answer} ${classes.noHover} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
