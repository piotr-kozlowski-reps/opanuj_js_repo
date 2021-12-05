import React from "react";

const Card = (props) => {
  const customWidthHeight = {
    margin: "1rem 0",
    textAlign: "center",
    width: props.widthProp,
    height: props.heightProp,
  };

  return <div style={customWidthHeight}>{props.children}</div>;
};

export default Card;
