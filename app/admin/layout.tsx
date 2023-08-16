import React from "react";
import {cookies} from "next/headers";
import AdminLogin from "@/components/Admin/AdminLogin";

export default function AdminLayout({
    children
                                    }: {
  children: React.ReactNode;
}) {
  const cookie= cookies();
  const token = cookie.get("Authorization");

  return (<>
    {
      !!token
        ? <>{children}</>
        : (<AdminLogin  />)
    }
  </>);
}