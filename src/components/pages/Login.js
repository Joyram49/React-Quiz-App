import LoginImg from "../../assets/images/signup.jpg";
import classes from "../../styles/login.module.css";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <div className={classes.login}>
      <h1>Login to your account</h1>
      <div className={classes.login_content}>
        <div className={classes.illustration}>
          <img src={LoginImg} alt='login_img' />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
