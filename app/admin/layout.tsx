import React from "react";
import { cookies } from "next/headers";
import AdminLogin from "@/components/Admin/AdminLogin";
import AdminMenuBtn from "@/components/Admin/AdminMenuBtn";

const adminMenu = [
  {
    href: "",
    text: "Back",
  },
  {
    href: "/admin",
    text: "글",
  },
  {
    href: "/admin/series",
    text: "시리즈",
  },
  {
    href: "/admin/topic",
    text: "주제",
  },
  {
    href: "/admin/site",
    text: "사이트",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = cookies();
  const token = cookie.get("Authorization");

  return (
    <>
      {!!token ? (
        <>
          <div className="w-full gap-2  whitespace-nowrap flex px-4 py-3 border-b border-b-gray overflow-x-auto">
            {adminMenu.map(({ href, text }) => (
              <AdminMenuBtn href={href} text={text} />
            ))}
          </div>
          {children}
        </>
      ) : (
        <AdminLogin />
      )}
    </>
  );
}
