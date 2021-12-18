import React, { useState } from "react";

import classes from "./Tasks.module.css";
import { useSelector, useDispatch } from "react-redux";
import { tasksActions } from "../../store/tasks-slice";
import AddTask from "./AddTask";
import Input from "../UI/Input";

const Tasks = () => {
  //
  //vars
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  //
  //func
  const valueChangeHandler = (event) => {
    dispatch(
      tasksActions.editTasks({
        newValue: event.target.value,
        taskId: event.target.attributes["id"].value,
      })
    );
  };

  const taskDeleteHandler = (taskId) => {
    dispatch(tasksActions.deteleTask(taskId));
  };

  return (
    <div id={classes.tasks}>
      <div className={`text-bold ${classes.title}`}>tasks:</div>

      <AddTask />
      {tasks.length > 0 ? <hr className={classes["hr-line"]}></hr> : ""}

      {tasks.map((task) => {
        return (
          <div key={task.id} className={classes["task-box"]}>
            <div className={classes["input-placement"]}>
              <Input
                type="text"
                id={task.id}
                placeholder={task.name}
                value={task.name}
                onChange={valueChangeHandler}
              />

              <div
                className={classes["pomodoros-amount"]}
              >{`${task.pomodoroAmount} pomod'oros completed.`}</div>
            </div>
            <div className={classes.controls}>
              {/* <div>
                <div className={classes["a-link"]}>edit</div>
              </div> */}

              <div>
                <div
                  className={classes["a-link"]}
                  onClick={taskDeleteHandler.bind(null, task.id)}
                >
                  delete
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
