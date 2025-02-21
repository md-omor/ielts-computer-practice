import QuestionButton from "../atoms/QuestionButton";

interface QuestionPartGroupProps {
  part: number;
  questionsPerPart: number;
  startQuestion: number;
  currentQuestion: number;
  answeredQuestions: number[];
  onQuestionClick: (part: number, question: number) => void;
}

const QuestionPartGroup = ({
  part,
  questionsPerPart,
  startQuestion,
  currentQuestion,
  answeredQuestions,
  onQuestionClick,
}: QuestionPartGroupProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs mb-1">Part {part}</span>
      <div className="flex gap-[2px]">
        {Array.from(
          { length: questionsPerPart },
          (_, i) => startQuestion + i
        ).map((qNum) => (
          <QuestionButton
            key={qNum}
            number={qNum}
            isActive={currentQuestion === qNum}
            isAnswered={answeredQuestions.includes(qNum)}
            onClick={() => onQuestionClick(part, qNum)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionPartGroup;
