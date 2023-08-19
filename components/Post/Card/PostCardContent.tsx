import PostCardTitle from "@/components/Post/Card/PostCardTitle";
import PostCardDesc from "@/components/Post/Card/PostCardDesc";
import Post from "@/libs/class/Post.class";

export default function PostCardContent({
  post,
  isAdmin,
}: {
  post: Post;
  isAdmin?: boolean;
}) {
  const { id, summary } = post;

  return (
    <div
      className="
          px-3 py-2
          col-span-full
          row-span-5
          flex flex-col
        "
    >
      <PostCardTitle post={post} isAdmin={isAdmin} />
      <PostCardDesc id={id} summary={summary} isAdmin={isAdmin} />
    </div>
  );
}
