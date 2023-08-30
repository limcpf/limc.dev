import { getTopicPageBySite } from "@/libs/api/public.api";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import TopicListSC from "@/components/Topic/List/TopicList.server";

const title = "LimC - 주제 목록";
const description = "LimC 블로그 내 모든 주제 목록입니다.";

export default async function TopicHome({
  searchParams,
}: {
  searchParams: Params;
}) {
  const page = searchParams.page;

  const topicPage = await getTopicPageBySite(page);

  return <TopicListSC topicPage={topicPage} isAdmin={false} />;
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
