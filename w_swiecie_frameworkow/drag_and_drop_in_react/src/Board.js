import React from "react";

const Board = React.forwardRef((props, ref) => {
  return (
    <div
      id={props.id}
      className="bg-white overflow-hidden rounded-md p-30 mx-5 max-w-xs flex-1 flex flex-col"
      {...props}
      ref={ref}
    >
      <h2 className="text-4xl p-5 text-center">{props.name}</h2>
      <main className="p-10 bg-gray-300 flex-1">{props.children}</main>
    </div>
  );
});

export default Board;
