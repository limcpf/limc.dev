"use client";

import {useEffect, useState} from "react";
import Series from "@/libs/class/Series.class";
import {getPostBySeriesInAdmin, getSeriesInAdmin} from "@/libs/api/Admin.api";
import Post from "@/libs/class/Post.class";
import Page from "@/libs/class/Page.class";
import AdminPostList from "@/app/admin/post/AdminPostList";

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
        <div className="text-center py-3 border-b">
          <h3 className="text-xl">{series.topicName}</h3>
          <h1 className="font-bold text-3xl">{series.title}</h1>
          <div className="grid grid-rows-2 grid-cols-2 px-3">
            <div className="col-span-1 row-span-full text-left">
              <span className="text-sm font-extralight text-gray-500">해당 시리즈 게시글 총 개수 : </span>
              <span className={"text-sm font-extralight"}>{series.postCnt}개</span>
            </div>
            <div className="col-span-1 row-span-1 text-right">
              <span className="text-sm font-extralight text-gray-500">생성일자 : </span>
              <span className={"text-sm font-extralight"}>{new Date(series.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="col-span-1 row-span-1 text-right">
              <span className="text-sm font-extralight text-gray-500">수정일자 : </span>
              <span className={"text-sm font-extralight"}>{new Date(series.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      )}
      {posts && (
          <>
            <AdminPostList posts={posts} />
          </>
      )}
    </div>
  );
}
