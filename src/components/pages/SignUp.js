import SignupImg from "../../assets/images/login.jpg";
import classes from "../../styles/signUp.module.css";
import SignUpForm from "../SignUpForm";

const SignUp = () => {
  return (
    <div className={classes.signUp}>
      <h1>Create an Account</h1>
      <div className={classes.signUp_content}>
        <div className={classes.illustration}>
          <img src={SignupImg} alt='signUp_img' />
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
