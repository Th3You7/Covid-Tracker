import React from "react";
import classes from "./navbar.module.css";
import img from "../../imgs/coronavirus.png";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={img} alt="covid-19" />
      <div className={classes.title}>COVID TRACKER</div>
    </div>
  );
};

export default Navbar;
