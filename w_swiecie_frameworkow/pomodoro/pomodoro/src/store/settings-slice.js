import { createSlice } from "@reduxjs/toolkit";

export const currentPhaseChoice = {
  POMODORO: "POMODORO",
  SHORT_BREAK: "SMALL_BREAK",
  LONG_BREAK: "LONG_BREAK",
};

const initialState = {
  pomodoroTimeAmount: new Date(1500 * 1000),
  shortBreakTimeAmount: new Date(300 * 1000),
  longBreakTimeAmount: new Date(900 * 1000),
  isModalVisible: false,
  timerChosen: currentPhaseChoice.POMODORO,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setIsModalVisibleToTrue(state) {
      state.isModalVisible = true;
    },
    setIsModalVisibleToFalse(state) {
      state.isModalVisible = false;
    },
    setPomodoroTimeAmount(state, action) {
      state.pomodoroTimeAmount = new Date(action.payload * 60 * 1000);
    },
    setShortBreakTimeAmount(state, action) {
      state.shortBreakTimeAmount = new Date(action.payload * 60 * 1000);
    },
    setLongBreakTimeAmount(state, action) {
      state.longBreakTimeAmount = new Date(action.payload * 60 * 1000);
    },
    setTimerToPomodoro(state) {
      if (state.timerChosen === currentPhaseChoice.POMODORO) return;
      state.timerChosen = currentPhaseChoice.POMODORO;
    },
    setTimerToShortBreak(state) {
      if (state.timerChosen === currentPhaseChoice.SHORT_BREAK) return;
      state.timerChosen = currentPhaseChoice.SHORT_BREAK;
    },
    setTimerToLongBreak(state) {
      if (state.timerChosen === currentPhaseChoice.LONG_BREAK) return;
      state.timerChosen = currentPhaseChoice.LONG_BREAK;
    },
  },
});

export const settingActions = settingsSlice.actions;
export default settingsSlice;
