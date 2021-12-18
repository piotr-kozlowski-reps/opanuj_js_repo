import { createSlice } from "@reduxjs/toolkit";

export const currentPhaseChoice = {
  POMODORO: "POMODORO",
  SMALL_BREAK: "SMALL_BREAK",
  LONG_BREAK: "LONG_BREAK",
};

const initialState = {
  pomodoroSecondsAmount: 1500,
  smallBreakSecondsAmount: 300,
  longBreakSecondsAmount: 900,
  isModalVisible: false,
  timerChosen: currentPhaseChoice.POMODORO,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setIsModalVisibleToTrue(state) {
      console.log("setIsModalVisibleToTrue");
      state.isModalVisible = true;
    },
    setIsModalVisibleToFalse(state) {
      state.isModalVisible = false;
    },
    setPomodoroSeconds(state, action) {
      state.pomodoroSecondsAmount = action.payload;
    },
    setSmallBreakSeconds(state, action) {
      state.smallBreakSecondsAmount = action.payload;
    },
    setLongBreakSeconds(state, action) {
      state.longBreakSecondsAmount = action.payload;
    },
    setTimerToPomodoro(state) {
      if (state.timerChosen === currentPhaseChoice.POMODORO) return;
      state.timerChosen = currentPhaseChoice.POMODORO;
    },
    setTimerToSmallBreak(state) {
      if (state.timerChosen === currentPhaseChoice.SMALL_BREAK) return;
      state.timerChosen = currentPhaseChoice.SMALL_BREAK;
    },
    setTimerToLongBreak(state) {
      if (state.timerChosen === currentPhaseChoice.LONG_BREAK) return;
      state.timerChosen = currentPhaseChoice.LONG_BREAK;
    },
  },
});

export const settingActions = settingsSlice.actions;
export default settingsSlice;
