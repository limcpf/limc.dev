'use client';

import PostPageBar from "@/components/Post/PostPageBar";
import { getPostPageInAdmin } from "@/libs/api/Admin.api";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, {useEffect, useState} from "react";
import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import AdminPostCard from "@/components/Admin/AdminPost/AdminPostCard/AdminPostCard";
import {useRouter} from "next/navigation";

export default function adminMain(
    { searchParams } : {searchParams:Params}
) {
    const [postPage, setPostPage] = useState<Page<Post>>()
    const [content, setContent] = useState<Post[]>([])
    const router = useRouter();
    const page = searchParams.page;

    useEffect(() => {
        getPostPageInAdmin(page)
            .then((page: Page<Post>) => {
                setContent(page.content);
                setPostPage(page)
            })
    }, [])


  return (
      <main className="w-full flex flex-col p-2">
          <div className="flex w-full justify-end pb-2">
              <div
                  className="
                    transition cursor-pointer
                    bg-gray-300 text-gray-600
                    hover:bg-gray-400 hover:text-gray-700
                    px-5 py-1.5
                  "
                  onClick={() => router.push("/admin/post")}
              >
                  작성
              </div>
          </div>
          {content.length > 0 ? (
              content.map((post) => <AdminPostCard key={`post-${post.id}`} post={post} />)
          ) : (
              <div className={"h-52 flex justify-center items-center w-full "}>
                  게시글이 없습니다.
              </div>
          )}
          { postPage && <PostPageBar postPage={postPage} /> }
      </main>
  )
}
