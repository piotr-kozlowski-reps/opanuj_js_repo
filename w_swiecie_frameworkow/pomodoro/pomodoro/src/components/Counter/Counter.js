import React from "react";

import classes from "./Counter.module.css";

const Counter = ({ currentTime }) => {
  const currentTimeMinutes =
    currentTime / 60 > 9 ? `${currentTime / 60}` : `0${currentTime / 60}`;
  const currentTimeSeconds =
    currentTime % 60 > 9 ? `${currentTime % 60}` : `0${currentTime % 60}`;

  return (
    <div className={classes.clock}>
      <span className={classes.minutes}>{currentTimeMinutes}</span>
      <span className={classes.minutes}>:</span>
      <span className={classes.seconds}>{currentTimeSeconds}</span>
    </div>
  );
};

export default Counter;
