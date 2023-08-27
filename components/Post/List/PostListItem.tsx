"use client";

import Post from "@/libs/class/Post.class";
import React from "react";
import PostListItemBody from "@/components/Post/List/PostListItemBody";
import PostListItemFooter from "@/components/Post/List/PostListItemFooter";
import PostListItemHeader from "@/components/Post/List/PostListItemHeader";

export default function PostListItem({
  post,
  isAdmin,
}: {
  post: Post;
  isAdmin?: boolean;
}) {
  return (
    <div className="flex flex-col p-1 w-full h-fit cursor-pointer">
      <div className="flex flex-col px-2 py-1 ">
        <PostListItemHeader post={post} isAdmin={isAdmin} />
        <PostListItemBody post={post} isAdmin={isAdmin} />
        {isAdmin && (
          <PostListItemFooter
            id={post.id}
            title={post.title}
            isPublished={post.isPublished}
          />
        )}
      </div>
    </div>
  );
}
