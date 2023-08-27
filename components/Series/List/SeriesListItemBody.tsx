"use client";

import {useRouter} from "next/navigation";
import Series from "@/libs/class/Series.class";

export default function SeriesListItemBody({ series, isAdmin }: { series: Series, isAdmin?:boolean }) {
  const router = useRouter();
  const { id, topicName, title } = series;

  const gridCommon =
    " grid sm:row-span-full cursor-pointer text-center hover:bg-gray-50 cursor-pointer";
  const topic =
    " col-span-full row-span-1 sm:col-span-1 sm:row-span-full flex flex-row justify-center items-center text-xl font-bold ";

  return (
    <div
      onClick={() => router.push(`${isAdmin ? "/admin" : ""}/series/${id}`)}
      className={
        gridCommon +
        " grid-cols-1 grid-rows-3 sm:grid-cols-4 sm:grid-rows-2 gap-x-1 py-3 border-b  sm:mt-1"
      }
    >
      <div className={topic}>{topicName}</div>
      <div
        className={
          gridCommon +
          " flex justify-center items-center col-span-full row-span-2 sm:col-span-3  pt-2 sm:pt-0 sm:py-2 hover:bg-gray-50"
        }
      >
        <div className="col-span-full row-span-full text-center">{title}</div>
      </div>
    </div>
  );
}
