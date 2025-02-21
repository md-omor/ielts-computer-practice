"use client";

import { Timer } from "@/components/molecules/timer";
import UserNumber from "@/components/molecules/user-number";

import HelpDialog from "@/features/topbar/help-dialog";
import HideDialog from "@/features/topbar/hide-dialog";
import SettingsDialog from "@/features/topbar/settings-dialog";
import { useState } from "react";
import { PiQuestionMarkFill } from "react-icons/pi";
import Sound from "../atoms/sound";
import { Button } from "../ui/button";

const Topbar = () => {
  const [activeDialog, setActiveDialog] = useState<
    "settings" | "help" | "hide" | null
  >(null);

  const handleCloseDialog = () => setActiveDialog(null);

  return (
    <>
      <div className="flex justify-between items-center bg-gray-800 text-white py-2 px-10 w-full">
        <UserNumber />
        <Timer />
        <div className="flex items-center gap-x-2">
          <Button
            className="!py-0 !px-3 !h-8 !text-sm font-medium"
            onClick={() => setActiveDialog("settings")}
          >
            Settings
          </Button>
          <Button
            className="!py-0 !px-3 !h-8 !text-sm font-medium "
            onClick={() => setActiveDialog("help")}
          >
            Help <PiQuestionMarkFill className="text-slate-600" />{" "}
          </Button>
          <Button
            className="!py-0 !px-3 !h-8 !text-sm font-medium "
            onClick={() => setActiveDialog("hide")}
          >
            Hide
          </Button>
          <Sound />
        </div>
      </div>

      <SettingsDialog
        isOpen={activeDialog === "settings"}
        onClose={handleCloseDialog}
      />

      <HelpDialog
        isOpen={activeDialog === "help"}
        onClose={handleCloseDialog}
      />

      <HideDialog
        isOpen={activeDialog === "hide"}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default Topbar;
