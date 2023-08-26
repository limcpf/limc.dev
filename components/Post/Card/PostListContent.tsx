import React from "react";
import Post from "@/libs/class/Post.class";
import PostListItemHeader from "@/components/Post/Card/PostListItemHeader";
import PostListItemBody from "@/components/Post/Card/PostListItemBody";
import PostListItemFooter from "@/components/Post/Card/PostListItemFooter";

export default function PostListContent({
  post,
  isAdmin,
}: {
  post: Post;
  isAdmin?: boolean;
}) {
  return (
    <div className="px-2 py-1 col-span-full row-span-5 flex flex-col ">
      <PostListItemHeader post={post} isAdmin={isAdmin} />
      <PostListItemBody post={post} isAdmin={isAdmin} />
      {
          isAdmin && (
              <PostListItemFooter
                  id={post.id}
                  title={post.title}
                  isPublished={post.isPublished}
              />
          )
      }
    </div>
  );
}
