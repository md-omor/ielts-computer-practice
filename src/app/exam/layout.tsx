"use client";

import Topbar from "@/components/organisms/topbar";
import type { RootState } from "@/store/store";
import { getTextSizeClass } from "@/utils/textSizeUtils";
import { useSelector } from "react-redux";

export default function ExamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { textSize } = useSelector((state: RootState) => state.settings);

  return (
    <>
      <Topbar />
      <div className={`${getTextSizeClass("text-sm", textSize)}`}>
        {children}
      </div>
    </>
  );
}
