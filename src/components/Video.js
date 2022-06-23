import classes from "../styles/video.module.css";

const Video = ({ title, id, noq }) => {
  return (
    <div className={classes.video}>
      <img
        src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.video_desc}>
        <p>{noq} Qustions</p>
        <p>Total Points: {noq * 5} </p>
      </div>
    </div>
  );
};

export default Video;
