import React, { useState, useEffect } from "react";

import Tasks from "../Tasks/Tasks";
import Counter from "../Counter/Counter";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Main.module.css";

import { currentPhaseChoice } from "../../store/settings-slice";
import { settingActions } from "../../store/settings-slice";
import { tasksActions } from "../../store/tasks-slice";

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

        //TODO: dokoncz logike - dodaj 1 pomodoro to aktualnego zadania
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
    ? `text-bold ${classes.capital}`
    : `text-bold ${classes.capital} ${classes.disabled}`;
  const pauseClasses = isCounting
    ? `text-bold ${classes.capital}`
    : `text-bold ${classes.capital} ${classes.disabled}`;
  const pomodoroLink =
    timerChosen === currentPhaseChoice.POMODORO
      ? `${classes["a-link-active"]}`
      : `${classes["a-link"]}`;
  const shortBreakLink =
    timerChosen === currentPhaseChoice.SHORT_BREAK
      ? `${classes["a-link-active"]}`
      : `${classes["a-link"]}`;
  const longBreakLink =
    timerChosen === currentPhaseChoice.LONG_BREAK
      ? `${classes["a-link-active"]}`
      : `${classes["a-link"]}`;

  return (
    <div className={classes.main}>
      <div className="container">
        <div className={classes["main-centered"]}>
          <div id={classes.counter}>
            <div className={classes["counter-nav"]}>
              <div className={classes["counter-link"]}>
                <div className={pomodoroLink} onClick={switchToPomodoroHandler}>
                  <span className="text-base">pomod’</span>
                  <span className="text-bold">oro</span>
                </div>
              </div>

              <div className={classes["counter-link"]}>
                <div
                  className={shortBreakLink}
                  onClick={switchToShortBreakHandler}
                >
                  <span className="text-bold">short</span>
                  <span className="text-base">break</span>
                </div>
              </div>

              <div className={classes["counter-link"]}>
                <div
                  className={longBreakLink}
                  onClick={switchToLongBreakHandler}
                >
                  <span className="text-bold">long</span>
                  <span className="text-base">break</span>
                </div>
              </div>
            </div>

            <Counter currentTime={timeAmount} />

            <div className={classes["start-stop"]}>
              <button disabled={isCounting} onClick={startHandler}>
                start
              </button>
              <button disabled={!isCounting} onClick={pauseHandler}>
                pause
              </button>
              <button disabled={!isResetVisible} onClick={resetHandler}>
                reset
              </button>
            </div>

            <div className={classes["task-info"]}>
              <div className={classes.start}>
                <div className={classes.title}>
                  <span className={classes["thin-text"]}>current</span> task:
                </div>
                <div className={classes["current-task"]}>
                  {tasks.length > 0 ? tasks[0].name : `current task undefined.`}
                </div>
              </div>
            </div>
          </div>

          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Main;
