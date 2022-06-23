import resultImage from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/summary.module.css";

const Summary = ({ score, noq }) => {
  const getKeyWord = () => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 80) {
      return "pass";
    } else {
      return "excellent";
    }
  };
  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyWord()}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PIXELS_API_KEY,
    }
  );
  const image = result ? result?.photos[0].src.medium : resultImage;
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p>
          Your Score is {score} out of {noq * 5}
        </p>
      </div>
      {loading && <div className={classes.badge}>Loading...</div>}
      {error && <div className={classes.badge}>An Error Occured</div>}
      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt='result_img' />
        </div>
      )}
    </div>
  );
};

export default Summary;
