import PostCard from "@/components/Post/card/PostCard";
import {getPostPage} from "@/libs/api/Post.api";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import PostPageBar from "@/components/Post/PostPageBar";

export default async function Home({
  searchParams,
}: {
  searchParams: Params;
}) {
  const page = searchParams.page;
  const postPage = await getPostPage(page);
  const { content } = postPage;
  return (
    <main className="w-full flex flex-col p-2">
      {content.length > 0 ? (
        content.map((post) => <PostCard key={`post-${post.id}`} post={post} />)
      ) : (
        <div className={"h-52 flex justify-center items-center w-full "}>
          게시글이 없습니다.
        </div>
      )}
      <PostPageBar postPage={postPage} />
    </main>
  );
}
