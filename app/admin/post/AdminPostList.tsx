"use client";

import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import React, { useState } from "react";
import AdminPostCard from "@/components/Admin/AdminPost/AdminPostCard/AdminPostCard";
import PageBar from "@/components/Post/PageBar";

export default function AdminPostList({
  posts,
}: {
  posts: Page<Post>;
}) {
  const [content] = useState<Post[]>(posts.content);

  return (
    <main className="w-full flex flex-col p-2">
      {content.length > 0 ? (
        content.map((post) => (
          <AdminPostCard key={`post-${post.id}`} post={post} />
        ))
      ) : (
        <div className={"h-52 flex justify-center items-center w-full "}>
          게시글이 없습니다.
        </div>
      )}
      {posts && <PageBar<Post> tPage={posts} />}
    </main>
  );
}
