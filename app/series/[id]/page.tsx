import React from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getSeriesById } from "@/libs/api/public.api";
import SeriesDetail from "@/components/Series/series.server";

let title: string;
let description: string;

export default async function SeriesDetailPage({
  params,
  searchParams,
}: { params: { id: string }; searchParams: Params }) {
  const { id } = params;
  const page = searchParams.page;

  const series = await getSeriesById(id);

  if (series) {
    title = "LimC | 시리즈 - " + series.title;
    description =
      series.title + "이라는 이름의 시리즈의 게시글 목록 페이지입니다.";
  }

  return <SeriesDetail series={series} page={page} />;
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
