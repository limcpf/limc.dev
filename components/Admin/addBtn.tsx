"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function AddBtn({
  href,
  text = "생성",
}: {
  href: string;
  text?: string;
}) {
  const router = useRouter();

  return (
    <div className="flex w-full justify-end p-2">
      <div
        className="
                    transition cursor-pointer
                    bg-gray-300 text-gray-600
                    hover:bg-gray-400 hover:text-gray-700
                    px-5 py-1.5
                  "
        onClick={() => router.push(href)}
      >
        {text}
      </div>
    </div>
  );
}
