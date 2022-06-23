import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/navbar.module.css";
import Account from "./Account";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__brand}>
        <Link to='/'>
          <img src={logo} alt='logo_img' />
          <h3>Learn With Sumit</h3>
        </Link>
      </div>
      <Account />
    </div>
  );
};

export default Navbar;
