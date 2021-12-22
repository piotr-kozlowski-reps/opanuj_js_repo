import React from "react";

import { currentPhaseChoice } from "../../store/settings-slice";

const CounterNavigation = (props) => {
  const {
    timerChosen,
    onSwitchToPomodoro,
    onSwitchToShortBreak,
    onSwitchToLongBreak,
  } = props;

  const pomodoroLink =
    timerChosen === currentPhaseChoice.POMODORO ? `a-link-active` : `a-link`;
  const shortBreakLink =
    timerChosen === currentPhaseChoice.SHORT_BREAK ? `a-link-active` : `a-link`;
  const longBreakLink =
    timerChosen === currentPhaseChoice.LONG_BREAK ? `a-link-active` : `a-link`;

  return (
    <div className="counter-nav">
      <div className="counter-link">
        <div className={pomodoroLink} onClick={onSwitchToPomodoro}>
          <span className="text-base">pomod’</span>
          <span className="text-bold">oro</span>
        </div>
      </div>

      <div className="counter-link">
        <div className={shortBreakLink} onClick={onSwitchToShortBreak}>
          <span className="text-bold">short</span>
          <span className="text-base">break</span>
        </div>
      </div>

      <div className="counter-link">
        <div className={longBreakLink} onClick={onSwitchToLongBreak}>
          <span className="text-bold">long</span>
          <span className="text-base">break</span>
        </div>
      </div>
    </div>
  );
};

export default CounterNavigation;
