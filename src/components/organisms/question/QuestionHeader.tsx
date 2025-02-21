"use client";

import { mockQuestionData } from "@/config/mockQuestions";
import { useAppSelector } from "@/hooks/reduxHooks";

const QuestionHeader = () => {
  const currentPart = useAppSelector((state) => state.question.currentPart);
  const currentQuestion = mockQuestionData[currentPart - 1];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold text-lg">{currentQuestion.title}</h2>
      <p className="text-gray-600">{currentQuestion.description}</p>
    </div>
  );
};

export default QuestionHeader;
