import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export type ExamType = "LISTENING" | "READING" | "WRITING" | "SPEAKING";

interface TimerState {
  isTestStarted: boolean;
  endTime: number; // Absolute timestamp when the test should end
  examType: ExamType | null;
}

const initialState: TimerState = {
  isTestStarted: false,
  endTime: 0,
  examType: null,
};

const getExamDuration = (examType: ExamType): number => {
  switch (examType) {
    case "LISTENING":
      return 60; // 60 minutes
    case "READING":
      return 60; // 60 minutes
    case "WRITING":
      return 40; // 40 minutes
    case "SPEAKING":
      return 30; // 30 minutes
    default:
      return 60;
  }
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTest: (state, action: PayloadAction<ExamType>) => {
      const durationInMinutes = getExamDuration(action.payload);
      const durationInMs = durationInMinutes * 60 * 1000;

      state.isTestStarted = true;
      state.endTime = Date.now() + durationInMs;
      state.examType = action.payload;
    },
    resetTimer: (state) => {
      state.isTestStarted = false;
      state.endTime = 0;
      state.examType = null;
    },
  },
});

// Configure persistence
const persistConfig = {
  key: "timer",
  storage,
  whitelist: ["isTestStarted", "endTime", "examType"],
};

export const { startTest, resetTimer } = timerSlice.actions;
export default persistReducer(persistConfig, timerSlice.reducer);
