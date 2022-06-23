import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef, useState } from "react";
import classes from "../styles/progressbar.module.css";

const ProgressBar = ({ next, prev, progress, submit }) => {
  const [toolTip, setToolTip] = useState(false);
  const toolTipRef = useRef();

  const handleToolTip = () => {
    if (toolTip) {
      setToolTip(false);
      toolTipRef.current.style.display = "none";
    } else {
      setToolTip(true);
      toolTipRef.current.style.left = `calc(${progress}% - 56px)`;
      toolTipRef.current.style.display = "block";
    }
  };
  return (
    <div className={classes.progressbar}>
      <div className={classes.backButton} onClick={prev}>
        <ArrowBackIcon fontSize='30' className={classes.quiz_icon} />
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={toolTipRef}>
          <span>{progress}% complete!!</span>
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={handleToolTip}
            onMouseOut={handleToolTip}
          ></div>
        </div>
      </div>
      <div
        className={classes.result}
        onClick={progress === 100 ? submit : next}
      >
        {progress === 100 ? (
          <span>Submit Now</span>
        ) : (
          <span>Next Question</span>
        )}
        <ArrowForwardIcon className={classes.quiz_icon} />
      </div>
    </div>
  );
};

export default ProgressBar;
