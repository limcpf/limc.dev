'use client';

import Menu from "@/components/Root/Menu";
import {usePathname, useRouter} from "next/navigation";
import React from "react";

const menus = [
  {to: "/topic", text: "주제"},
  {to: "/series", text: "시리즈"},
  {to: "/me", text: "소개"}
]
export default function RootMenu() {
  const pathname = usePathname();
  const router = useRouter();

  return (
      <div className="flex items-center justify-between w-full p-5 border-b-gray-500 border-b">
        <div className="home-box" onClick={() => router.push("/")}>L</div>
        <div className="menu-box">
          {
            menus.map(
              (m, i) =>
                  (
                      <Menu key={`root-menu-${i}`} to={m.to} text={m.text} isActive={m.to === pathname} />
                  )
            )
          }
        </div>
      </div>
  )
}