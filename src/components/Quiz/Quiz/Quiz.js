import React from "react";
import MiniPlayer from "../MiniPlayer/MiniPlayer";
import Answers from "./../Answers/Answers";
import ProgressBar from "./../ProgressBar/ProgressBar";

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
