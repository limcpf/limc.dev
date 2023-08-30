import Page from "@/libs/class/Page.class";
import Series from "@/libs/class/Series.class";
import React from "react";
import PageBar from "@/components/Post/PageBar";
import SeriesListItem from "@/components/Series/List/SeriesListItem";
import AddBtn from "@/components/Admin/addBtn";

export default function SeriesListSC({
    seriesPage,
  isAdmin
}: {
  seriesPage: Page<Series> | undefined;
  isAdmin?: boolean;
}) {

  const title = " text-center font-light";

  return (
    <main className="w-full flex flex-col p-3">
      {isAdmin && <AddBtn href="/admin/series/add" text={"생성"} />}
      <div className="hidden sm:grid sm:grid-cols-4 sm:border-b sm:border-b-gray-300 sm:pb-3">
        <div className={title}>주제</div>
        <div className={title + " col-span-3"}>제목</div>
      </div>
      {
        seriesPage && seriesPage.content.length > 0 ? (
          seriesPage.content.map((series,i) => (
            <SeriesListItem key={`series-${i}`} series={series} isAdmin={isAdmin} />
          ))
        ) : (
          <div className={"h-52 flex justify-center items-center w-full "}>
            등록된 시리즈가 없습니다.
          </div>
        )
      }

      <PageBar<Series> tPage={seriesPage} />
    </main>
  );
}
