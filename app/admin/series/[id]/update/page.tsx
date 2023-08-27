"use client";

import { useEffect, useState } from "react";
import Series from "@/libs/class/Series.class";
import { getSeriesInAdmin } from "@/libs/api/Admin.api";
import SeriesAddOrUpdate from "@/app/admin/series/SeriesAddOrUpdate";

export default function AdminSeriesUpdate({
  params,
}: { params: { id: string } }) {
  const [series, setSeries] = useState<Series>();
  const { id } = params;

  useEffect(() => {
    getSeriesInAdmin(id).then((series) => {
      setSeries(series);
    });
  }, []);

  return <>{series ? <SeriesAddOrUpdate series={series} /> : <></>}</>;
}
