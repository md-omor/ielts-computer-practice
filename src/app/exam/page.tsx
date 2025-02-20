"use client";

import ExamInstructions from "@/components/molecules/ExamInstructions";
import { examConfigurations } from "@/config/examData";
import { useRouter } from "next/navigation";

const Exam = () => {
  const router = useRouter();
  const examType = "Listening"; // This could be dynamic based on your needs
  const examData = examConfigurations[examType];

  const handleStartTest = () => {
    router.push(examData.route);
  };

  return (
    <div className="w-full px-5 py-6 bg-gradient-to-b from-sky-50 via-white to-sky-100 h-screen">
      <ExamInstructions {...examData} onStart={handleStartTest} />
    </div>
  );
};

export default Exam;
