import React from "react";

import classes from "./Counter.module.css";

const Counter = ({ currentTime }) => {
  // const currentTimeMinutes =
  //   Math.round(currentTime / 1000 / 60).toFixed(2) > 9
  //     ? `${Math.round(currentTime / 1000 / 60).toFixed(2)}`
  //     : `0${Math.round(currentTime / 1000 / 60).toFixed(2)}`;
  // const currentTimeSeconds =
  //   Math.round(currentTime / 1000 / 60).toFixed(2) % 60 > 9
  //     ? `${Math.round((currentTime / 1000 / 60).toFixed(2)) % 60}`
  //     : `0${Math.round((currentTime / 1000 / 60).toFixed(2)) % 60}`;

  const minutesAmount = currentTime.getMinutes();
  const secondsAmount = currentTime.getSeconds();
  const currentTimeMinutes =
    minutesAmount > 9 ? `${minutesAmount}` : `0${minutesAmount}`;
  const currentTimeSeconds =
    secondsAmount > 9 ? `${secondsAmount}` : `0${secondsAmount}`;

  return (
    <div className={classes.clock}>
      <span className={classes.minutes}>{currentTimeMinutes}</span>
      <span className={classes.minutes}>:</span>
      <span className={classes.seconds}>{currentTimeSeconds}</span>
    </div>
  );
};

export default Counter;
