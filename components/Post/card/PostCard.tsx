"use client";

import Post from "@/libs/class/Post.class";
import PostCardContent from "@/components/Post/card/PostCardContent";
import { useRouter } from "next/navigation";

export default function PostCard({
  post,
}: {
  post: Post;
}) {
  const router = useRouter();
  // const goPost = () => router.push(`/post/${post.id}`);
  const goPost = () => router.push(`/post/test`);

  return (
    <div
      className="
          flex flex-col
            p-1 w-full h-fit
            border-b-gray-300 border-b
            first:border-t-0
          "
    >
      {/*<PostCardThumbnail url="https://files.limc.dev/file/limckr/test.png" goPost={goPost}/>*/}
      <PostCardContent post={post} goPost={goPost} />
      <div className="text-es text-gray-400 text-right font-extralight">
        {new Date(post.createdAt).toLocaleString()}
      </div>
    </div>
  );
}
