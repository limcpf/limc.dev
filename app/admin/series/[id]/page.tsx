"use client";

import { useEffect, useState } from "react";
import Series from "@/libs/class/Series.class";
import { getPostBySeriesInAdmin, getSeriesInAdmin } from "@/libs/api/Admin.api";
import Post from "@/libs/class/Post.class";
import Page from "@/libs/class/Page.class";
import AdminPostList from "@/app/admin/post/AdminPostList";

// TODO : 스타일 꾸미자!

export default function AdminPostInSeries({
  params,
}: { params: { id: string } }) {
  const [series, setSeries] = useState<Series>();
  const [posts, setPosts] = useState<Page<Post>>();

  const { id } = params;

  useEffect(() => {
    getSeriesInAdmin(id).then((series) => {
      setSeries(series);
    });
    getPostBySeriesInAdmin(id).then((p) => {
      setPosts(p);
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      {series && (
        <div className="text-center">
          <h1>{series.title}</h1>
        </div>
      )}
      {posts && <AdminPostList posts={posts} />}
    </div>
  );
}
