import IeltsInput from "@/components/atoms/input/IeltsInput";
import { IELTSQuestion } from "@/types/question";

interface QuestionFieldProps {
  question: IELTSQuestion;
  value: string;
  onChange: (value: string) => void;
}

const QuestionField = ({ question, value, onChange }: QuestionFieldProps) => {
  if (question.type === "static") {
    return <div className="text-sm">{question.text}</div>;
  }

  return (
    <div className="flex items-center gap-2">
      {question.prefix && <span className="text-sm">{question.prefix}</span>}
      <IeltsInput
        value={value}
        onChange={onChange}
        className="w-24 h-7"
        type={question.type}
        placeholder={question.placeholder}
      />
      {question.suffix && <span className="text-sm">{question.suffix}</span>}
    </div>
  );
};

export default QuestionField;
