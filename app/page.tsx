'use client';

import {getPostPage} from "@/libs/api/post.api";
import PostList from "@/components/Post/List/PostList";

export default async function Home() {
  return (
    <main className="w-full flex flex-col p-2">
      <PostList getFunc={getPostPage} />
    </main>
  );
}
