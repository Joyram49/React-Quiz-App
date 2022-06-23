import classes from "../styles/TextInput.module.css";

const TextInput = ({ icon, ...rest }) => {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className='form_icon'>{icon}</span>
    </div>
  );
};

export default TextInput;
