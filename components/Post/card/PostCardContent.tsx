import PostCardTitle from "@/components/Post/card/PostCardTitle";
import PostCardDesc from "@/components/Post/card/PostCardDesc";
import Post from "@/libs/class/Post.class";

export default function PostCardContent({
  post,
}: {
  post: Post;
}) {
  const {  id, summary } = post;

  return (
    <div
      className="
          px-3 py-2
          col-span-full
          row-span-5
          flex flex-col
        "
    >
      <PostCardTitle post={post} />
      <PostCardDesc id={id} summary={summary} />
    </div>
  );
}
