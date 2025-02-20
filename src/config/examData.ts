export type ExamType = "LISTENING" | "READING" | "WRITING" | "SPEAKING";

interface ExamConfig {
  examType: ExamType;
  duration: string;
  instructions: string[];
  information: string[];
  route: string;
}

export const examConfigurations: Record<ExamType, ExamConfig> = {
  LISTENING: {
    examType: "LISTENING",
    duration: "Approximately 30 minutes",
    instructions: [
      "Answer all the questions.",
      "You can change your answers at any time during the test.",
    ],
    information: [
      "There are 40 questions in this test.",
      "Each question carries one mark.",
      "There are four parts to the test.",
      "You will hear each part once.",
      "For each part of the test there will be time for you to look through the questions and time for you to check your answers.",
    ],
    route: "/exam/listening",
  },
  READING: {
    examType: "READING",
    duration: "60 minutes",
    instructions: [
      "Answer all the questions.",
      "You can change your answers at any time during the test.",
    ],
    information: [
      "There are 40 questions in this test.",
      "Each question carries one mark.",
      "There are three sections to the test.",
      "The texts become progressively more difficult.",
    ],
    route: "/exam/reading",
  },
  WRITING: {
    examType: "WRITING",
    duration: "60 minutes",
    instructions: [
      "Answer both tasks.",
      "You can change your answers at any time during the test.",
    ],
    information: [
      "There are 2 tasks in this test.",
      "You should spend about 20 minutes on Task 1.",
      "You should spend about 40 minutes on Task 2.",
      "Task 2 contributes twice as much as Task 1 to the Writing score.",
    ],
    route: "/exam/writing",
  },
  SPEAKING: {
    examType: "SPEAKING",
    duration: "11-14 minutes",
    instructions: [
      "Answer all questions.",
      "Speak clearly into the microphone.",
    ],
    information: [
      "The test is in three parts.",
      "Part 1: Introduction and interview.",
      "Part 2: Individual long turn.",
      "Part 3: Two-way discussion.",
    ],
    route: "/exam/speaking",
  },
};
