"use client";

import { getPostPageInAdmin } from "@/libs/api/Admin.api";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import PostList from "@/components/Post/List/PostList";

export default function adminMain({ searchParams }: { searchParams: Params }) {
  const page = searchParams.page;

  return (
    <main className="w-full flex flex-col p-2">
      <PostList getFunc={getPostPageInAdmin} page={page} isAdmin={true} />
    </main>
  );
}
