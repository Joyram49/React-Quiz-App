import classes from "../styles/button.module.css";
const Button = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={`${classes.formBtn} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
