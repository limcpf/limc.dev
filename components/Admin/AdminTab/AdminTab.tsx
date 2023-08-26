"use client";

import { Dispatch, SetStateAction } from "react";
import AdminTabBtn from "@/components/Admin/AdminTab/AdminTabBtn";

export default function AdminTab({
  buttons,
  curMode,
  setMode,
}: {
  buttons: {
    text: string;
    mode: string;
  }[];
  curMode: string;
  setMode: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-full border-b overflow-x-auto whitespace-nowrap mt-2 flex">
      {buttons.map((b) => (
        <AdminTabBtn
          key={b.mode + b.text}
          text={b.text}
          isActive={curMode === b.mode}
          mode={b.mode}
          setFunc={setMode}
        />
      ))}
    </div>
  );
}
