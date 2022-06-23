import { Link, useNavigate } from "react-router-dom";
import classes from "../styles/loginForm.module.css";
import Button from "./Button";
import TextInput from "./TextInput";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/", { replace: true });
      // console.log(email, password, username);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login into account!!");
    }
  }

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <TextInput
        type='email'
        placeholder='Enter Email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type='password'
        placeholder='Enter Password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        disable={loading}
        type='submit'
        style={{ marginTop: "2rem" }}
        className={classes.formBtn}
      >
        <span>Submit Now</span>
      </Button>
      {error && <p className='form_error'>{error}</p>}
      <div className='info'>
        Already have an account? <Link to='/signup'>SignUp</Link> Instead
      </div>
    </form>
  );
};

export default LoginForm;
