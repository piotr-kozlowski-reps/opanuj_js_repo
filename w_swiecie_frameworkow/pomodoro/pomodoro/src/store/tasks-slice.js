import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid4 } from "uuid";
import { currentPhaseChoice } from "./settings-slice";

const initialState = {
  tasks: [
    {
      id: "t1",
      name: "task 1 name here.",
      pomodoroAmount: 0,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasksStore",
  initialState: initialState,
  reducers: {
    // addTasks
    addTask(state, action) {
      console.log("addTask");
      console.log(`payload: ${action.payload}`);

      state.tasks.push({
        id: uuid4(),
        name: action.payload,
        pomodoroAmount: 0,
      });
    },
    // deleteTasks
    deteleTask(state, action) {
      console.log("deleteTask");
      console.log(`payload: ${action.payload}`);
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // editTasks
    editTasks(state, action) {
      const currentTask = state.tasks.find(
        (task) => task.id === action.payload.taskId
      );

      currentTask.name = action.payload.newValue;
    },
    // add one pomodoro to Task
    addPomodoroToTask(state, action) {
      const currentTask = state.tasks.find(
        (task) => task.id === action.payload
      );
      currentTask.pomodoroAmount++;
    },
    // replace Tasks with update array
    replaceTasks(state, action){
      state.tasks = action.payload
    }
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice;
