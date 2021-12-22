import React from "react";

const PlayPauseRestartNavi = (props) => {
  const { isCounting, isResetVisible, onStart, onPause, onReset } = props;

  return (
    <div className="start-stop">
      <button disabled={isCounting} onClick={onStart}>
        start
      </button>
      <button disabled={!isCounting} onClick={onPause}>
        pause
      </button>
      <button disabled={!isResetVisible} onClick={onReset}>
        reset
      </button>
    </div>
  );
};

export default PlayPauseRestartNavi;
