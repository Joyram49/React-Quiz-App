import CloseIcon from "@mui/icons-material/Close";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

import classes from "../styles/miniplayer.module.css";
const MiniPlayer = ({ title, id }) => {
  const miniplayerRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      miniplayerRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
      console.log("set status true");
    } else {
      miniplayerRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
      console.log("set status false");
    }
  }

  return (
    <div
      className={`${classes.miniplayer} ${classes.floatingBtn}`}
      ref={miniplayerRef}
      onClick={toggleMiniPlayer}
    >
      <span>
        <PlayCircleFilledIcon className={classes.open} />
      </span>
      <span>
        <CloseIcon className={classes.close} onClick={toggleMiniPlayer} />
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width='30rem'
        height='auto'
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
