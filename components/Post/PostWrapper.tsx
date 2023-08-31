import "github-markdown-css/github-markdown-light.css";
import Post from "@/libs/class/Post.class";
import PostTitle from "@/components/Post/PostTitle";
import PostContent from "@/components/Post/PostContent";

export default async function PostWrapper({
  post,
}: {
  post: Post;
}) {
  return (
        <article className="markdown-body post-wrapper w-full flex flex-col">
          <div className="flex flex-col">
            <PostTitle post={post} />
            <PostContent content={post.content} />
          </div>
        </article>
  );
}
