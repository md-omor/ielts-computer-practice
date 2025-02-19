import DialogWrapper from "@/components/molecules/dialog-wrapper";
import { Button } from "@/components/ui/button";
import { Tv } from "lucide-react";

interface HideDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const HideDialog = ({ isOpen, onClose }: HideDialogProps) => {
  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Screen hidden"
      isHideMode={true}
      icon={<Tv className="w-4 h-4 text-sky-600" />}
    >
      <div className="space-y-3 text-sm text-gray-600 w-full bg-gradient-to-b from-sky-50 to-sky-100 p-6 rounded-b-lg">
        <p>Your answers have been stored</p>
        <p>
          Please note that the clock is still running. The time has not been
          paused.
        </p>
        <p>If you wish to leave the room, please tell your invigilator.</p>
        <p className="text-sm text-gray-600">
          Click the button below to go back to your test.
        </p>
        <div className="flex justify-center py-2">
          <Button
            onClick={onClose}
            className="px-8 py-1.5 h-8 !font-bold bg-gradient-to-b from-gray-200 to-gray-300 hover:bg-gray-300 text-gray-700 rounded shadow-sm"
          >
            Resume test
          </Button>
        </div>
      </div>
    </DialogWrapper>
  );
};

export default HideDialog;
