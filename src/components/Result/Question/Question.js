import React from "react";
import Answers from "../../Quiz/Answers/Answers";
import classes from "./Question.module.css";

const Question = () => {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
};

export default Question;
