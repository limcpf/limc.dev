"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import { getSeriesPageInAdmin } from "@/libs/api/Admin.api";
import SeriesList from "@/components/Series/List/SeriesList";

export default function AdminSeries({
  searchParams,
}: { searchParams: Params }) {
  const page = searchParams.page;

  return (
    <SeriesList getFunc={getSeriesPageInAdmin} isAdmin={true} page={page} />
  );
}
