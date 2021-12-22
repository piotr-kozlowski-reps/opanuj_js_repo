import React, { useState } from "react";

// import classes from "./Tasks.module.css";
import { useSelector, useDispatch } from "react-redux";
import { tasksActions } from "../../store/tasks-slice";
import AddTask from "./AddTask";
import Input from "../UI/Input";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  const onDragEndHandler = (result) => {
    const { source, destination } = result;

    if (destination === null) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const currentTasksArray = tasks.slice();
    const add = tasks[source.index];

    currentTasksArray.splice(source.index, 1);
    currentTasksArray.splice(destination.index, 0, add);

    dispatch(tasksActions.replaceTasks(currentTasksArray));
  };

  //
  //jsx
  return (
    <div id="tasks">
      <div className="text-bold title">tasks:</div>

      <AddTask />
      {tasks.length > 0 ? <hr className="hr-line"></hr> : ""}

      <DragDropContext onDragEnd={onDragEndHandler}>
        <Droppable droppableId="TodosList">
          {(provided) => (
            <div
              className="tasks-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => {
                return (
                  <Draggable draggableId={task.id} index={index} key={task.id}>
                    {(provided) => (
                      <div
                        key={task.id}
                        className="task-box"
                        index={index}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="input-placement">
                          <Input
                            type="text"
                            id={task.id}
                            placeholder={task.name}
                            value={task.name}
                            onChange={valueChangeHandler}
                          />

                          <div className="pomodoros-amount">{`${task.pomodoroAmount} pomod'oros completed.`}</div>
                        </div>
                        <div className="controls">
                          <div>
                            <div
                              className="a-link"
                              onClick={taskDeleteHandler.bind(null, task.id)}
                            >
                              delete
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
