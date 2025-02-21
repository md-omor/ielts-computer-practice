"use client";

import QuestionField from "@/components/molecules/question/QuestionField";
import { mockQuestionData } from "@/config/mockQuestions";
import { cn } from "@/lib/utils";

interface QuestionContentProps {
  className?: string;
}

const QuestionContent = ({ className }: QuestionContentProps) => {
  // Force use mockQuestionData directly
  const currentQuestionData = mockQuestionData[0]; // Always show first part
  const currentSectionData = currentQuestionData.content[0]; // Always show first section

  return (
    <div
      className={cn(
        "bg-white p-6 shadow-sm h-[calc(100vh-180px)] overflow-y-auto",
        className
      )}
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold">{currentQuestionData.title}</h3>
        <p className="text-gray-600">{currentQuestionData.description}</p>
      </div>

      <div className="space-y-6">
        {currentSectionData.categories.map((category, idx) => (
          <div key={idx}>
            <div className="font-medium mb-2">{category.label}</div>
            {category.items ? (
              category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="ml-4 mb-4">
                  <div className="font-medium mb-2">{item.label}</div>
                  <div className="space-y-2">
                    {item.questions?.map((question) => (
                      <QuestionField
                        key={question.id}
                        question={question}
                        value={""}
                        onChange={(value) => {
                          console.log("Answer:", question.id, value);
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="ml-4 space-y-2">
                {category.text && <p className="text-sm">{category.text}</p>}
                {category.questions?.map((question) => (
                  <QuestionField
                    key={question.id}
                    question={question}
                    value={""}
                    onChange={(value) => {
                      console.log("Answer:", question.id, value);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionContent;
