import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "../ui/button";

interface DialogWrapperProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  isHideMode?: boolean;
  icon?: ReactNode;
}

const DialogWrapper = ({
  children,
  isOpen,
  onClose,
  title,
  isHideMode = false,
  icon,
}: DialogWrapperProps) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        isHideMode ? "bg-[#555555]" : "bg-black/50"
      )}
      onClick={handleBackgroundClick}
    >
      <div className="w-[800px] shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-b from-gray-700 to-gray-900 flex items-center p-2 rounded-t-lg border-b border-gray-400">
          <div className="flex items-center gap-x-2 flex-1">
            <div className="w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center">
              {icon || <span className="text-sky-600 text-lg">⚙️</span>}
            </div>
            <span className="text-gray-100 font-medium">{title}</span>
          </div>
          <Button
            onClick={onClose}
            className="!p-0 !w-6 !h-6 !min-w-6 bg-gradient-to-b from-red-600 to-red-800 rounded-sm border-2 border-white"
            aria-label="Close dialog"
          >
            <IoClose className="w-4 h-4 text-white" />
          </Button>
        </div>

        {/* Content */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DialogWrapper;
