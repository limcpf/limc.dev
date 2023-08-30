"use client";

import React, {useEffect, useState} from "react";
import Series from "@/libs/class/Series.class";
import {getPostPageBySeries, getSeriesInAdmin,} from "@/libs/api/private.api";
import PostList from "@/components/Post/List/PostList";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export default function AdminSeriesDetail({
  params,
  searchParams,
}: { params: { id: string }; searchParams: Params }) {
  const [series, setSeries] = useState<Series>();

  const { id } = params;
  const page = searchParams.page;

  useEffect(() => {
    getSeriesInAdmin(id).then((series) => {
      setSeries(series);
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
              <span className="text-sm font-extralight text-gray-500">
                해당 시리즈 게시글 총 개수 :{" "}
              </span>
              <span className={"text-sm font-extralight"}>
                {series.postCnt}개
              </span>
            </div>
            <div className="col-span-1 row-span-1 text-right">
              <span className="text-sm font-extralight text-gray-500">
                생성일자 :{" "}
              </span>
              <span className={"text-sm font-extralight"}>
                {new Date(series.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="col-span-1 row-span-1 text-right">
              <span className="text-sm font-extralight text-gray-500">
                수정일자 :{" "}
              </span>
              <span className={"text-sm font-extralight"}>
                {new Date(series.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      )}
      {series && (
        <>
          <main className="w-full flex flex-col p-2">
            <PostList
              getFunc={getPostPageBySeries}
              page={page}
              id={id}
              isAdmin={true}
            />
          </main>
        </>
      )}
    </div>
  );
}
