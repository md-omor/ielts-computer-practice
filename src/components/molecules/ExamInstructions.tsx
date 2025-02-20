import type { ExamType } from "@/store/slices/timerSlice";
import { startTest } from "@/store/slices/timerSlice";
import type { RootState } from "@/store/store";
import { getTextSizeClass } from "@/utils/textSizeUtils";
import { Info } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

export interface ExamInstructionsProps {
  examType: ExamType;
  duration: string;
  instructions: string[];
  information: string[];
  onStart: () => void;
}

export const ExamInstructions = ({
  examType,
  duration,
  instructions,
  information,
  onStart,
}: ExamInstructionsProps) => {
  const dispatch = useDispatch();
  const { textSize } = useSelector((state: RootState) => state.settings);

  const handleStart = () => {
    dispatch(startTest(examType));
    onStart();
  };

  return (
    <div className="w-full bg-white p-3 pb-12 rounded-md shadow-xl">
      <h1
        className={`${getTextSizeClass("text-2xl", textSize)} font-bold mb-4`}
      >
        IELTS {examType}
      </h1>

      <div className="mb-6">
        <p className={`${getTextSizeClass("text-sm", textSize)} text-gray-800`}>
          Time: {duration}
        </p>
      </div>

      <div className="mb-6">
        <h2
          className={`${getTextSizeClass(
            "text-base",
            textSize
          )} font-semibold mb-5`}
        >
          INSTRUCTIONS TO CANDIDATES
        </h2>
        <ul className="list-disc pl-12">
          {instructions.map((instruction, index) => (
            <li
              key={index}
              className={`${getTextSizeClass(
                "text-sm",
                textSize
              )} text-gray-700 mb-1`}
            >
              {instruction}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2
          className={`${getTextSizeClass(
            "text-base",
            textSize
          )} font-semibold mb-5`}
        >
          INFORMATION FOR CANDIDATES
        </h2>
        <ul className="list-disc pl-12">
          {information.map((info, index) => (
            <li
              key={index}
              className={`${getTextSizeClass(
                "text-sm",
                textSize
              )} text-gray-700 mb-1`}
            >
              {info}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-zinc-800 mb-6">
          <Info size={20} />
          <p className={getTextSizeClass("text-sm", textSize)}>
            Do not click &quot;Start test&quot; until you are told to do so.
          </p>
        </div>
        <Button
          onClick={handleStart}
          className={`${getTextSizeClass(
            "text-sm",
            textSize
          )} bg-gradient-to-b from-gray-200 to-gray-300 px-8 py-2 rounded`}
        >
          Start test
        </Button>
      </div>
    </div>
  );
};

export default ExamInstructions;
