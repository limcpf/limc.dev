"use client";

import Post from "@/libs/class/Post.class";
import PostCardContent from "@/components/Post/Card/PostCardContent";
import { useRouter } from "next/navigation";

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
      onClick={() =>
        router.push(isAdmin ? `/admin/post/${post.id}` : `/post/${post.id}`)
      }
    >
      <PostCardContent post={post} isAdmin={isAdmin} />
      <div className="text-es text-gray-400 text-right font-extralight">
        {new Date(post.createdAt).toLocaleString()}
      </div>
    </div>
  );
}
