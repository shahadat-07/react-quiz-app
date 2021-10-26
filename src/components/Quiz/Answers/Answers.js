import React from "react";
import CheckBox from "./../../Signup/CheckBox/CheckBox";
import classes from "./Answers.module.css";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="Test Answer" />
    </div>
  );
};

export default Answers;
