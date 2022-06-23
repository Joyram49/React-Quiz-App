import classes from "../styles/layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={classes.main}>
        <div className={classes.container}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
