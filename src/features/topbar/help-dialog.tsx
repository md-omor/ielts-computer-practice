import DialogWrapper from "@/components/molecules/dialog-wrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Infromation from "./tabs/information";
import TaskHelp from "./tabs/task-help";
import TestHelp from "./tabs/test-help";

interface HelpDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpDialog = ({ isOpen, onClose }: HelpDialogProps) => {
  const [activeTab, setActiveTab] = useState("information");

  const renderTabContent = () => {
    switch (activeTab) {
      case "information":
        return <Infromation />;
      case "test-help":
        return <TestHelp />;
      case "task-help":
        return <TaskHelp />;
    }
  };

  return (
    <DialogWrapper isOpen={isOpen} onClose={onClose} title="Help">
      <div className="bg-gradient-to-b from-sky-50 to-sky-100 py-5 pt-7 rounded-b-lg">
        <div className="flex gap-x-2 border-b px-5 mx-3">
          {["information", "test-help", "task-help"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1 text-sm border-t border-r border-l rounded-t-md border-gray-300 ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "information"
                ? "Information"
                : tab === "test-help"
                ? "Test help"
                : "Task help"}
            </button>
          ))}
        </div>
        {renderTabContent()}
        <div className="flex justify-center mt-6">
          <Button
            onClick={onClose}
            className="px-8 py-1.5 h-8 !font-bold bg-gradient-to-b from-gray-200 to-gray-300 hover:bg-gray-300 text-gray-700 rounded shadow-sm"
          >
            OK
          </Button>
        </div>
      </div>
    </DialogWrapper>
  );
};

export default HelpDialog;
