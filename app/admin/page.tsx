'use client';
import PostPageBar from "@/components/Post/PostPageBar";
import { getPostPageInAdmin } from "@/libs/api/Admin.api";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, {useState} from "react";
import PostCard from "@/components/Post/card/PostCard";
import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";

export default  function adminMain(
    { searchParams } : {searchParams:Params}
) {
    const [postPage, setPostPage] = useState<Page<Post>>()
    const [content, setContent] = useState<Post[]>([])
    const page = searchParams.page;
    getPostPageInAdmin(page)
        .then((page: Page<Post>) => {
            setContent(page.content);
            setPostPage(page)
        })
        .catch(e => console.log(e));

  return (
      <main className="w-full flex flex-col p-2">
          {content.length > 0 ? (
              content.map((post) => <PostCard key={`post-${post.id}`} post={post} />)
          ) : (
              <div className={"h-52 flex justify-center items-center w-full "}>
                  게시글이 없습니다.
              </div>
          )}
          { postPage && <PostPageBar postPage={postPage} /> }
      </main>
  )
}
