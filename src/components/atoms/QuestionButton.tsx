import { cn } from "@/lib/utils";

interface QuestionButtonProps {
  number: number;
  isActive: boolean;
  isAnswered: boolean;
  onClick: () => void;
}

const QuestionButton = ({
  number,
  isActive,
  isAnswered,
  onClick,
}: QuestionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-6 h-6 text-xs rounded flex items-center justify-center transition-all",
        isActive && "bg-sky-200 text-black",
        isAnswered && !isActive && "bg-white text-black",
        !isAnswered && !isActive && "bg-black text-white"
      )}
    >
      {number}
    </button>
  );
};

export default QuestionButton;
