import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import classes from "../styles/account.module.css";
import { useAuth } from "../context/AuthContext";
const Account = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span>
            <AccountCircleOutlinedIcon
              style={{ fontSize: "4rem" }}
              className={classes.account_icon}
            />
          </span>
          <span style={{ fontSize: "2.2rem", fontWeight: "500" }}>
            {currentUser.displayName}
          </span>
          <Link to='/signup' onClick={logout}>
            <LogoutIcon
              style={{ fontSize: "4rem" }}
              className={classes.account_icon}
            />
          </Link>
        </>
      ) : (
        <>
          <span>
            <Link to='/login'>Login</Link>
            <div />
            <Link to='/signup'>SignUp</Link>
          </span>
        </>
      )}
    </div>
  );
};

export default Account;
