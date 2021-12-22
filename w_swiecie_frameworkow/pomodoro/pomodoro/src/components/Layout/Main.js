import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { currentPhaseChoice } from "../../store/settings-slice";
import { settingActions } from "../../store/settings-slice";
import { tasksActions } from "../../store/tasks-slice";

import Tasks from "../Tasks/Tasks";
import Counter from "../Counter/Counter";
import CounterNavigation from "../Counter/CounterNavigation";
import PlayPauseRestartNavi from "../Counter/PlayPauseRestartNavi";
import CurrentTaskInfo from "../Counter/CurrentTaskInfo";

// import classes from "./Main.module.css";

const Main = () => {
  //
  //vars
  const dispatch = useDispatch();
  const [timeAmount, setTimeAmount] = useState(new Date());
  const [isCounting, setIsCounting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isResetVisible, setIsResetVisible] = useState(false);

  const pomodoroTimeAmount = useSelector(
    (state) => state.settings.pomodoroTimeAmount
  );
  const shortBreakTimeAmount = useSelector(
    (state) => state.settings.shortBreakTimeAmount
  );
  const longBreakTimeAmount = useSelector(
    (state) => state.settings.longBreakTimeAmount
  );
  const timerChosen = useSelector((state) => state.settings.timerChosen);
  const tasks = useSelector((state) => state.tasks.tasks);

  //
  //effects
  //choosing of Timer
  useEffect(() => {
    switch (timerChosen) {
      case currentPhaseChoice.POMODORO:
        setTimeAmount(pomodoroTimeAmount);
        break;

      case currentPhaseChoice.SHORT_BREAK:
        setTimeAmount(shortBreakTimeAmount);
        break;

      case currentPhaseChoice.LONG_BREAK:
        setTimeAmount(longBreakTimeAmount);
        break;

      default:
        setTimeAmount(pomodoroTimeAmount);
    }
  }, [
    timerChosen,
    pomodoroTimeAmount,
    shortBreakTimeAmount,
    longBreakTimeAmount,
  ]);

  //counting down in Timer
  useEffect(() => {
    const countDown = () => {
      if (isPaused) {
        clearInterval(counter);
      }
      if (isCounting) {
        setTimeAmount((lastState) => {
          return new Date(lastState.getTime() - 1000);
        });
      }
      if (timeAmount.getTime() === 0) {
        console.log("koniec liczenia");
        clearInterval(counter);

        if (tasks.length === 0) {
          resetHandler();
          return;
        }
        dispatch(tasksActions.addPomodoroToTask(tasks[0].id));

        resetHandler();
      }
    };
    const counter = setInterval(countDown, 1000);

    return () => {
      clearInterval(counter);
    };
  }, [isCounting, isPaused, timeAmount]);

  //should reset be visible
  useEffect(() => {
    if (
      timerChosen === currentPhaseChoice.POMODORO &&
      timeAmount.getTime() === pomodoroTimeAmount.getTime()
    ) {
      setIsResetVisible(false);
    } else if (
      timerChosen === currentPhaseChoice.SHORT_BREAK &&
      timeAmount.getTime() === shortBreakTimeAmount.getTime()
    ) {
      setIsResetVisible(false);
    } else if (
      timerChosen === currentPhaseChoice.LONG_BREAK &&
      timeAmount.getTime() === longBreakTimeAmount.getTime()
    ) {
      setIsResetVisible(false);
    } else {
      setIsResetVisible(true);
    }
  }, [
    timeAmount,
    pomodoroTimeAmount,
    shortBreakTimeAmount,
    longBreakTimeAmount,
    timerChosen,
  ]);

  //
  //handlers
  const switchToPomodoroHandler = () => {
    if (timerChosen === currentPhaseChoice.POMODORO) return;
    setIsCounting(false);
    dispatch(settingActions.setTimerToPomodoro());
  };

  const switchToShortBreakHandler = () => {
    if (timerChosen === currentPhaseChoice.SHORT_BREAK) return;
    setIsCounting(false);
    dispatch(settingActions.setTimerToShortBreak());
  };

  const switchToLongBreakHandler = () => {
    if (timerChosen === currentPhaseChoice.LONG_BREAK) return;
    setIsCounting(false);
    setIsPaused(false);
    dispatch(settingActions.setTimerToLongBreak());
  };

  const startHandler = () => {
    setIsCounting(true);
    setIsPaused(false);
  };

  const pauseHandler = () => {
    setIsPaused(true);
    setIsCounting(false);
  };

  const resetHandler = () => {
    setIsCounting(false);
    setIsPaused(false);

    if (timerChosen === currentPhaseChoice.POMODORO)
      setTimeAmount(pomodoroTimeAmount);

    if (timerChosen === currentPhaseChoice.SHORT_BREAK)
      setTimeAmount(shortBreakTimeAmount);

    if (timerChosen === currentPhaseChoice.LONG_BREAK)
      setTimeAmount(longBreakTimeAmount);
  };

  //
  //classes
  const startClasses = !isCounting
    ? `text-bold capital`
    : `text-bold capital disabled`;
  const pauseClasses = isCounting
    ? `text-bold capital`
    : `text-bold capital disabled`;

  return (
    <div className="main">
      <div className="container">
        <div className="main-centered">
          <div id="counter">
            <CounterNavigation
              timerChosen={timerChosen}
              onSwitchToPomodoro={switchToPomodoroHandler}
              onSwitchToShortBreak={switchToShortBreakHandler}
              onSwitchToLongBreak={switchToLongBreakHandler}
            />

            <Counter currentTime={timeAmount} />

            <PlayPauseRestartNavi
              onStart={startHandler}
              onPause={pauseHandler}
              onReset={resetHandler}
              isCounting={isCounting}
              isResetVisible={isResetVisible}
            />

            <CurrentTaskInfo tasks={tasks} />
          </div>

          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Main;
