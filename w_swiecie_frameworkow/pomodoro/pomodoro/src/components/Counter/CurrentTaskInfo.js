import React from "react";

const CurrentTaskInfo = (props) => {
  const { tasks } = props;
  return (
    <div className="task-info">
      <div className="start">
        <div className="title">
          <span className="thin-text">current</span> task:
        </div>
        <div className="current-task">
          {tasks.length > 0 ? tasks[0].name : `current task undefined.`}
        </div>
      </div>
    </div>
  );
};

export default CurrentTaskInfo;
