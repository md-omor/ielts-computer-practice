"use client";

import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa"; // Make sure to install react-icons

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [isRunning] = useState(false);
  const [shouldBlink, setShouldBlink] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  // Handle blinking effect for 10-minute mark
  useEffect(() => {
    if (timeLeft === 600) {
      // 10 minutes
      setShouldBlink(true);
      setTimeout(() => setShouldBlink(false), 1000);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const getTimerColor = () => {
    if (timeLeft <= 300) return "text-red-500"; // 5 minutes or less
    if (shouldBlink) return "text-red-500"; // 10 minute blink
    return "text-white";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`flex items-center gap-2 text-2xl font-bold ${getTimerColor()}`}
      >
        <FaClock />
        <span className="text-lg font-bold">{formatTime(timeLeft)} </span>{" "}
        <span className="text-sm font-medium  ">minutes left</span>
      </div>
    </div>
  );
};

export default Timer;
