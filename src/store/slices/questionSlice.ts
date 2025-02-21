import { mockQuestionData } from "@/config/mockQuestions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  currentPart: number;
  currentSection: number;
  currentQuestion: number;
  answeredQuestions: number[];
  examType: "listening" | "writing";
  isReviewMode: boolean;
  answers: Record<number, string>;
  questions: typeof mockQuestionData;
}

const initialState: QuestionState = {
  currentPart: 1,
  currentSection: 0,
  currentQuestion: 1,
  answeredQuestions: [],
  examType: "listening",
  isReviewMode: false,
  answers: {},
  questions: mockQuestionData,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestions: (state) => {
      console.log("Setting questions:", mockQuestionData);
      state.questions = mockQuestionData;
    },
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    setCurrentPart: (state, action: PayloadAction<number>) => {
      state.currentPart = action.payload;
      state.currentSection = 0;
    },
    toggleReviewMode: (state) => {
      state.isReviewMode = !state.isReviewMode;
    },
    setAnswer: (
      state,
      action: PayloadAction<{ questionId: number; answer: string }>
    ) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
      if (!state.answeredQuestions.includes(questionId)) {
        state.answeredQuestions.push(questionId);
      }
    },
  },
});

export const {
  setQuestions,
  setCurrentQuestion,
  setCurrentPart,
  toggleReviewMode,
  setAnswer,
} = questionSlice.actions;
export default questionSlice.reducer;
