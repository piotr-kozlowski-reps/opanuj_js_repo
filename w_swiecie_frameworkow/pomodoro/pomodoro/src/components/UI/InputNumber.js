import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      min={props.min}
      max={props.max}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      id={props.id}
    ></input>
  );
};

export default Input;
