import Series from "@/libs/class/Series.class";
import Page from "@/libs/class/Page.class";
import AdminSeriesCard from "@/components/Admin/AdminSeries/AdminSeriesCard";
import AdminSeriesCardFooter from "@/components/Admin/AdminSeries/AdminSeriesCardFooter";
import PageBar from "@/components/Post/PageBar";
import React from "react";

export default function AdminSeriesList({ series }: { series: Page<Series> }) {
  const content = series.content;

  const title = " text-center font-light";
  return (
    <main className="w-full flex flex-col p-3">
      <div className="hidden sm:grid sm:grid-cols-4 sm:border-b sm:border-b-gray-300 sm:pb-3">
        <div className={title}>주제</div>
        <div className={title + " col-span-3"}>제목</div>
      </div>

      {content.length > 0 ? (
        content.map((series) => {
          return (
            <div className="border-b-gray-300 border-b">
              <AdminSeriesCard series={series} />
              <AdminSeriesCardFooter title={series.title} id={series.id} />
            </div>
          );
        })
      ) : (
        <div>등록된 시리즈가 없습니다.</div>
      )}
      {series && <PageBar<Series> tPage={series} />}
    </main>
  );
}
