import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link, useNavigate } from "react-router-dom";
import classes from "../styles/signUpForm.module.css";
import Button from "./Button";
import Checkbox from "./Checkbox";
import TextInput from "./TextInput";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignUpForm = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== cPassword) {
      return setError(`passwords don't match!!!!`);
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/", { replace: true });
      // console.log(email, password, username);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!!");
    }
  }

  return (
    <form className={classes.signUpForm} onSubmit={handleSubmit}>
      <TextInput
        type='text'
        placeholder='Enter Name'
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        icon={
          <PersonOutlineOutlinedIcon
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
          />
        }
      />
      <TextInput
        type='email'
        placeholder='Enter Email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={
          <AlternateEmailOutlinedIcon
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
          />
        }
      />
      <TextInput
        type='password'
        placeholder='Create Password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={
          <LockOutlinedIcon style={{ fontSize: "2.5rem", cursor: "pointer" }} />
        }
      />
      <TextInput
        type='password'
        placeholder='Confirm Password'
        required
        value={cPassword}
        onChange={(e) => setCPassword(e.target.value)}
        icon={
          <LockClockOutlinedIcon
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
          />
        }
      />
      <Checkbox
        required
        type='checkbox'
        text='I agree to the Terms &amp; Conditions'
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button disabled={loading} type='submit' className={classes.formBtn}>
        <span>Submit Now</span>
      </Button>

      {error && <p className='form_error'>{error}</p>}

      <div className='info'>
        Already have an account? <Link to='/login'>Login</Link> Instead
      </div>
    </form>
  );
};

export default SignUpForm;
