"use client";

import {getPostPageInAdmin} from "@/libs/api/private.api";
import React from "react";
import PostList from "@/components/Post/List/PostList";

export default function AdminMain() {
  return (
    <main className="w-full flex flex-col p-2">
      <PostList getFunc={getPostPageInAdmin} isAdmin={true} />
    </main>
  );
}
