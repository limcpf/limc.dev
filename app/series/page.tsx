'use client';

import {getSeriesPageBySite} from "@/libs/api/public.api";
import React from "react";
import SeriesList from "@/components/Series/List/SeriesList";

export default function SeriesHome() {
  return (
      <>
        <title>LimC | 시리즈</title>
        <SeriesList getFunc={getSeriesPageBySite} />
      </>
  )
}
