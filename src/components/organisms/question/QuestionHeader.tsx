"use client";

interface QuestionHeaderProps {
  part: string;
  questionRange: string;
}

const QuestionHeader = ({ part, questionRange }: QuestionHeaderProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold text-lg">Part {part}</h2>
      <p className="text-gray-600">Questions {questionRange}</p>
    </div>
  );
};

export default QuestionHeader;
