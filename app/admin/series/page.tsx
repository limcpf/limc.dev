"use client";

import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import {getSeriesPageInAdmin} from "@/libs/api/Admin.api";
import AddBtn from "@/components/Admin/addBtn";
import SeriesList from "@/components/Series/List/SeriesList";

export default function AdminSeries({
  searchParams,
}: { searchParams: Params }) {
  const page = searchParams.page;

  return (
    <>
      <AddBtn href="/admin/series/add" text={"생성"} />
      <SeriesList getFunc={getSeriesPageInAdmin} isAdmin={true} page={page} />
      {/*{series ? <AdminSeriesList series={series} /> : <></>}*/}
    </>
  );
}
