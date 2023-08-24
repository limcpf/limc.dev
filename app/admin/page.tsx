"use client";

import { getPostPageInAdmin } from "@/libs/api/Admin.api";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { useEffect, useState } from "react";
import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import AdminPostList from "@/app/admin/post/AdminPostList";
import AddBtn from "@/components/Admin/addBtn";

export default function adminMain({ searchParams }: { searchParams: Params }) {
  const [postPage, setPostPage] = useState<Page<Post>>();
  const [page, setPage] = useState<string>(searchParams.page);

  useEffect(() => {
    getPostPageInAdmin(page).then((page: Page<Post>) => {
      setPostPage(page);
    });
  }, [page]);

  return (<>
    <AddBtn href={"/admin/post"} text={"작성"} />
        {
          postPage
            ? (<AdminPostList posts={postPage} />)
            : (<></>)
        }
    </>)
}
