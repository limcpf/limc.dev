"use client";

import Post from "@/libs/class/Post.class";
import {useRouter} from "next/navigation";
import PostListItem from "@/components/Post/Card/PostListItem";

export default function PostCard({
  post,
  isAdmin,
}: {
  post: Post;
  isAdmin?: boolean;
}) {
  const router = useRouter();
  return (
    <div
      className="
          flex flex-col
            p-1 w-full h-fit
            border-b-gray-300 border-b
            first:border-t-0
          "
    >
      <PostListItem post={post} isAdmin={isAdmin} />
    </div>
  );
}
