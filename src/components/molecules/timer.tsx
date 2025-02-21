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
  const [tenMinWarningShown, setTenMinWarningShown] = useState(false);
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

      // Show red color once at exactly 10 minutes (600 seconds)
      if (remaining === 600 && !tenMinWarningShown) {
        setTenMinWarningShown(true);
        // Reset the warning after 1 second
        setTimeout(() => {
          setTenMinWarningShown(false);
        }, 1000);
      }
    };

    if (isTestStarted && endTime > Date.now() && isExamPage) {
      updateTimer();
      const interval = setInterval(updateTimer, 100);
      return () => clearInterval(interval);
    }
  }, [isTestStarted, endTime, isExamPage, tenMinWarningShown]);

  // Only show timer on exam pages and when test is started
  if (!isTestStarted || !isExamPage) return null;

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  // Show red text if:
  // 1. Exactly at 10 minutes (tenMinWarningShown is true)
  // 2. OR when 5 minutes or less remain (300 seconds)
  const timeTextClass =
    tenMinWarningShown || remainingTime <= 300 ? "text-red-500" : "";

  return (
    <div className="flex items-center gap-2">
      <Clock size={20} />
      <span className={timeTextClass}>
        {minutes}:{seconds.toString().padStart(2, "0")}{" "}
        <span className="text-xs">minutes left</span>
      </span>
    </div>
  );
};
