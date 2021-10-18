import React from "react";
import signUpImage from "../../../assets/images/signup.svg";
import classes from "./Illustration.module.css";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={signUpImage} alt="Login" />
    </div>
  );
};

export default Illustration;
