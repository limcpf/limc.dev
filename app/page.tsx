"use client";

import {getPostPage} from "@/libs/api/Post.api";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import PostList from "@/components/Post/List/PostList";

export default async function Home({
  searchParams,
}: {
  searchParams: Params;
}) {
  const page = searchParams.page;

  return (
    <main className="w-full flex flex-col p-2">
      <PostList getFunc={getPostPage} page={page} />
    </main>
  );
}
