import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return initialInputState;
  }

  return initialInputState;
};

const useInput = (validateValue) => {
  //
  //vars

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const { value: enteredValue, isTouched } = inputState;

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  //
  //func
  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  //
  //return
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset: reset,
  };
};

export default useInput;
