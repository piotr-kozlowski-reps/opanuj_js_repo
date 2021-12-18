import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./settings-slice";
import tasksSlice from "./tasks-slice";

const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
    tasks: tasksSlice.reducer,
  },
});

export default store;
