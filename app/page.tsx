import { getPostPage } from "@/libs/api/post.api";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import PostListSC from "@/components/Post/List/PostList.server";

export default async function Home({
  searchParams,
}: {
  searchParams: Params;
}) {
  const page = searchParams.page;

  const postPage = await getPostPage(page);

  return (
    <main className="w-full flex flex-col p-2">
      <PostListSC postPage={postPage} />
    </main>
  );
}
