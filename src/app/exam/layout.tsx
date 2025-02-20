"use client";

import Topbar from "@/components/organisms/topbar";
import { useAppSelector } from "@/hooks/reduxHooks";
import { getTextSizeClass } from "@/utils/textSizeUtils";

export default function ExamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { textSize, screenResolution } = useAppSelector(
    (state) => state.settings
  );
  const [width, height] = screenResolution.split("x").map(Number);

  return (
    <div
      data-route="exam"
      className="flex flex-col items-center min-h-screen bg-gray-100"
    >
      <div style={{ width: `${width}px` }}>
        <Topbar />
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`bg-white overflow-hidden ${getTextSizeClass(
            "text-base",
            textSize
          )}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
