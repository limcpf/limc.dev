import { getSeriesPageBySite } from "@/libs/api/public.api";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import SeriesListSC from "@/components/Series/List/SeriesList.server";

const title = "LimC - 시리즈 목록";
const description = "LimC 블로그 내 모든 시리즈 목록입니다.";

export default async function SeriesHome({
  searchParams,
}: {
  searchParams: Params;
}) {
  const page = searchParams.page;

  const seriesPage = await getSeriesPageBySite(page);

  return <SeriesListSC seriesPage={seriesPage} />;
}
export async function generateMetadata() {
  return {
    title: title,
    description: description,
    authors: {
      url: "https://github.com/limcpf",
      name: "LimC",
    },
    openGraph: {
      title: title,
      description: description,
      emails: "limcdevblog@gmail.com",
      siteName: "limc.dev",
      type: "website",
    },
  };
}
