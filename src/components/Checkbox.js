import classes from "../styles/checkbox.module.css";

const Checkbox = ({ text, className, ...rest }) => {
  return (
    <label className={`${classes.checkbox} ${className}`}>
      <input {...rest} />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
