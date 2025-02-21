"use client";

import NavigationArrow from "@/components/atoms/NavigationArrow";
import ReviewCheckbox from "@/components/atoms/ReviewCheckbox";
import QuestionPartGroup from "@/components/molecules/QuestionPartGroup";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  setCurrentPart,
  setCurrentQuestion,
  toggleReviewMode,
} from "@/store/slices/questionSlice";

const QuestionPagination = () => {
  const dispatch = useAppDispatch();
  const {
    currentPart,
    currentQuestion,
    answeredQuestions,
    examType,
    isReviewMode,
  } = useAppSelector((state) => state.question);

  const totalParts = examType === "listening" ? 4 : 2;
  const questionsPerPart = examType === "listening" ? 10 : 1;

  const handleQuestionClick = (part: number, question: number) => {
    dispatch(setCurrentPart(part));
    dispatch(setCurrentQuestion(question));
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      dispatch(setCurrentQuestion(currentQuestion - 1));
      if (currentQuestion % questionsPerPart === 1) {
        dispatch(setCurrentPart(currentPart - 1));
      }
    }
  };

  const handleNext = () => {
    const totalQuestions = totalParts * questionsPerPart;
    if (currentQuestion < totalQuestions) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
      if (currentQuestion % questionsPerPart === 0) {
        dispatch(setCurrentPart(currentPart + 1));
      }
    }
  };

  return (
    <div className="bg-white py-1 px-2 shadow-sm w-full">
      <div className="flex items-start gap-2">
        <ReviewCheckbox
          isChecked={isReviewMode}
          onChange={() => dispatch(toggleReviewMode())}
        />

        <div className="flex-1">
          <div className="flex gap-x-2">
            {[1, 2, 3, 4].map((part) => (
              <QuestionPartGroup
                key={part}
                part={part}
                questionsPerPart={10}
                startQuestion={(part - 1) * 10 + 1}
                currentQuestion={currentQuestion}
                answeredQuestions={answeredQuestions}
                onQuestionClick={handleQuestionClick}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-1">
          <NavigationArrow direction="left" onClick={handlePrevious} />
          <NavigationArrow direction="right" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default QuestionPagination;
