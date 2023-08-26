import PostCard from "@/components/Post/Card/PostCard";
import Post from "@/libs/class/Post.class";
import AdminPostCardFooter from "@/components/Post/Card/PostListItemFooter";

export default function AdminPostCard({ post }: { post: Post }) {
  return (
    <div className="border-b-gray-300 border-b">
      <PostCard post={post} isAdmin={true} />
      <AdminPostCardFooter
        id={post.id}
        title={post.title}
        isPublished={post.isPublished}
      />
    </div>
  );
}
