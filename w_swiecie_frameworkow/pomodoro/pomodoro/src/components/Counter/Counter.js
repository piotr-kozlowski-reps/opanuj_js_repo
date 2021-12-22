import React from "react";

const Counter = ({ currentTime }) => {
  const minutesAmount = currentTime.getMinutes();
  const secondsAmount = currentTime.getSeconds();
  const currentTimeMinutes =
    minutesAmount > 9 ? `${minutesAmount}` : `0${minutesAmount}`;
  const currentTimeSeconds =
    secondsAmount > 9 ? `${secondsAmount}` : `0${secondsAmount}`;

  return (
    <div className="clock">
      <span className="minutes">{currentTimeMinutes}</span>
      <span className="minutes">:</span>
      <span className="seconds">{currentTimeSeconds}</span>
    </div>
  );
};

export default Counter;
