import React from "react";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {getSeriesById} from "@/libs/api/public.api";
import SeriesDetail from "@/components/Series/series.server";

export default async function SeriesDetailPage({
  params,
  searchParams,
}: { params: { id: string }; searchParams: Params }) {
  const { id } = params;
  const page = searchParams.page;

  const series = await getSeriesById(id);

  return <SeriesDetail series={series} page={page} />;
}