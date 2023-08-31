import React from "react";
import {getPostPageBySeries} from "@/libs/api/private.api";
import Series from "@/libs/class/Series.class";
import PostListSC from "@/components/Post/List/PostList.server";
import {notFound} from "next/navigation";

export default async function SeriesDetail({
  series,
  page,
}: {
  series: Series | undefined;
  page: string;
}) {
  if (!series) notFound();

  const postPage = await getPostPageBySeries(series.id, page);

  return (
    <div className="w-full flex flex-col">
      <title>{'LimC | series - ' + series.title}</title>
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
        <main className="w-full flex flex-col p-2">
          <PostListSC postPage={postPage} />
        </main>
      )}
    </div>
  );
}
