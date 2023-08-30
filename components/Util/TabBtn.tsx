"use client";

import { usePathname, useRouter } from "next/navigation";

export default function TabBtn({
  text,
  isActive,
  mode,
}: {
  text: string;
  isActive: boolean;
  mode: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  let className = `${
    isActive ? "bg-gray-200" : "bg-white border-r border-t"
  } w-20 px-4 py-2 text-center text-sm cursor-pointer`;
  return (
    <div
      className={className}
      onClick={() => {
        if (!isActive) router.push(pathname + `?mode=${mode}`);
      }}
    >
      {text}
    </div>
  );
}
