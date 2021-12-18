import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { tasksActions } from "../../store/tasks-slice";
import useInput from "../../hooks/use-input";
import classes from "./AddTask.module.css";
import Input from "../UI/Input";

const AddTask = () => {
  //
  //vars
  const {
    value,
    hasError,
    isValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput(validateInput);
  const dispatch = useDispatch();

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isValid) return;

    dispatch(tasksActions.addTask(value));
    reset();
  };

  return (
    <div className={classes["task-box"]}>
      <form onSubmit={submitFormHandler}>
        <Input
          type="text"
          placeholder="Add new Task."
          value={value}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
        />
        {/* <input
          type="text"
          placeholder="Add new Task."
          value={value}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
        ></input> */}

        <div className={classes.controls}>
          <div>
            <button onClick={submitFormHandler} disabled={!isValid}>
              add
            </button>
          </div>
        </div>
      </form>
      {hasError && <p>task nie może być pusty</p>}
    </div>
  );
};

export default AddTask;

//
//utils
const validateInput = (value) => value.trim() !== "";
