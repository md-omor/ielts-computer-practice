"use client";

import type { RootState } from "@/store/store";
import { getTextSizeClass } from "@/utils/textSizeUtils";
import { useSelector } from "react-redux";

export default function ListeningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { textSize } = useSelector((state: RootState) => state.settings);

  return (
    <div className={`${getTextSizeClass("text-sm", textSize)}`}>{children}</div>
  );
}
