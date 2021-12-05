import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  if (props.isActive) {
    return <button onClick={props.onClick}>{props.children}</button>;
  } else {
    return <button disabled>{props.children}</button>;
  }
};

export default Button;
