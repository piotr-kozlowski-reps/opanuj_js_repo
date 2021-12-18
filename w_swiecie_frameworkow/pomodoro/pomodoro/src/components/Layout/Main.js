import React, { useState, useEffect } from "react";

import Tasks from "../Tasks/Tasks";
import Counter from "../Counter/Counter";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Main.module.css";

import { currentPhaseChoice } from "../../store/settings-slice";
import { settingActions } from "../../store/settings-slice";

const Main = () => {
  const dispatch = useDispatch();
  const [timeAmountInSeconds, setTimeAmountInSeconds] = useState(0);
  const [timer, setTimer] = useState(new Date());
  const [isCounting, setIsCounting] = useState(false);
  //
  //vars
  const pomodoroSeconds = useSelector(
    (state) => state.settings.pomodoroSecondsAmount
  );
  const smallBreakSeconds = useSelector(
    (state) => state.settings.smallBreakSecondsAmount
  );
  const longBreakSeconds = useSelector(
    (state) => state.settings.longBreakSecondsAmount
  );
  const timerChosen = useSelector((state) => state.settings.timerChosen);
  const tasks = useSelector((state) => state.tasks.tasks);

  //
  //effects
  useEffect(() => {
    switch (timerChosen) {
      case currentPhaseChoice.POMODORO:
        setTimeAmountInSeconds(pomodoroSeconds);
        break;

      case currentPhaseChoice.SMALL_BREAK:
        setTimeAmountInSeconds(smallBreakSeconds);
        break;

      case currentPhaseChoice.LONG_BREAK:
        setTimeAmountInSeconds(longBreakSeconds);
        break;

      default:
        setTimeAmountInSeconds(pomodoroSeconds);
    }
  }, [timerChosen, pomodoroSeconds, smallBreakSeconds, longBreakSeconds]);

  //handlers
  const switchToPomodoroHandler = () => {
    dispatch(settingActions.setTimerToPomodoro());
  };

  const switchToSmallBreakHandler = () => {
    dispatch(settingActions.setTimerToSmallBreak());
  };

  const switchToLongBreakHandler = () => {
    dispatch(settingActions.setTimerToLongBreak());
  };

  // const startHandler = () => {
  //   setIsCounting(true);

  //   const countDown = () => {
  //     if (timeAmountInSeconds === 0) {
  //       setIsCounting(false);
  //       console.log("finished counting");
  //       clearInterval(counter);
  //       //TODO: finished counting application
  //       return;
  //     }
  //     setTimeAmountInSeconds((lastState) => lastState - 1);
  //   };
  //   const counter = setInterval(countDown, 1000);

  //   console.log("startHandler");
  // };

  const startHandler = () => {
    setIsCounting(true);

    const countDown = () => {
      if (timeAmountInSeconds === 0) {
        // setIsCounting(false);
        // console.log("finished counting");
        // clearInterval(counter);
        // //TODO: finished counting application
        // return;
      }

      setTimeAmountInSeconds((lastState) => lastState - 1);
    };
    const counter = setInterval(countDown, 1000);

    console.log("startHandler");
  };

  const pauseHandler = () => {
    setIsCounting(false);
    console.log("pauseHandler");
  };

  //
  //classes
  const startClasses = !isCounting
    ? `text-bold ${classes.capital}`
    : `text-bold ${classes.capital} ${classes.disabled}`;

  const pauseClasses = isCounting
    ? `text-bold ${classes.capital}`
    : `text-bold ${classes.capital} ${classes.disabled}`;

  return (
    <div className={classes.main}>
      <div className="container">
        <div className={classes["main-centered"]}>
          <div id={classes.counter}>
            <div className={classes["counter-nav"]}>
              <div className={classes["counter-link"]}>
                <div
                  className={classes["a-link"]}
                  onClick={switchToPomodoroHandler}
                >
                  <span className="text-base">pomod’</span>
                  <span className="text-bold">oro</span>
                </div>
              </div>

              <div className={classes["counter-link"]}>
                <div
                  className={classes["a-link"]}
                  onClick={switchToSmallBreakHandler}
                >
                  <span className="text-bold">short</span>
                  <span className="text-base">break</span>
                </div>
              </div>

              <div className={classes["counter-link"]}>
                <div
                  className={classes["a-link"]}
                  onClick={switchToLongBreakHandler}
                >
                  <span className="text-bold">long</span>
                  <span className="text-base">break</span>
                </div>
              </div>
            </div>

            <Counter currentTime={timeAmountInSeconds} />

            <div className={classes["start-stop"]}>
              <button disabled={isCounting} onClick={startHandler}>
                start
              </button>
              <button disabled={!isCounting} onClick={pauseHandler}>
                pause
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
