import Post from "@/libs/class/Post.class";
import PostTitle from "@/components/Post/PostTitle";
import PostContent from "@/components/Post/PostContent";

export default function PostWrapper({post}: {
  post:Post
}) {
  return (
      <div className="post-wrapper w-full flex flex-col p-5">
        <div className="w-full flex flex-col">
          <PostTitle title={post.title} />
          <PostContent content={post.content} />
        </div>
      </div>
  )
}