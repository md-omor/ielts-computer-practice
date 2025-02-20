"use client";

import { RootState } from "@/store/store";
import { Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Timer = () => {
  const { isTestStarted, endTime } = useSelector(
    (state: RootState) => state.timer
  );
  const [remainingTime, setRemainingTime] = useState(0);
  const pathname = usePathname();

  // Check if current path is an exam page
  const isExamPage = pathname?.match(
    /\/(listening|reading|writing|speaking)$/i
  );

  useEffect(() => {
    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
      setRemainingTime(remaining);
    };

    if (isTestStarted && endTime > Date.now() && isExamPage) {
      updateTimer();
      const interval = setInterval(updateTimer, 100);
      return () => clearInterval(interval);
    }
  }, [isTestStarted, endTime, isExamPage]);

  // Only show timer on exam pages and when test is started
  if (!isTestStarted || !isExamPage) return null;

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="flex items-center gap-2">
      <Clock size={20} />
      <span>
        {minutes}:{seconds.toString().padStart(2, "0")}{" "}
        <span className="text-xs">minutes left</span>
      </span>
    </div>
  );
};
