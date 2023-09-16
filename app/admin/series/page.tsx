"use client";

import React from "react";
import {getSeriesPageInAdmin} from "@/libs/api/private.api";
import SeriesList from "@/components/Series/List/SeriesList";

export default function AdminSeries() {
  return <SeriesList getFunc={getSeriesPageInAdmin} isAdmin={true} />
}
