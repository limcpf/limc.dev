import "./post.css";
import PostWrapper from "@/components/Post/PostWrapper";
import {getPost} from "@/libs/api/post.api";

export default async function RootPost({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

  return <PostWrapper post={post} />;
}

