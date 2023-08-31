import React from "react";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import TopicDetail from "@/components/Topic/topic.server";
import {getTopicById} from "@/libs/api/public.api";

/**
 * TODO 6: 관리자에서 public 으로 포스트 가져오는 애들 발행 안된애들도 가져오는지 체크해야할듯...? 분리해야지 따로 써야하니깐
 * TODO 2: 각각 리스트 컴포넌트에서 get 해서 데이터 가져와보자 그래야 탭같은거 구현 쉬울듯? << Post 까지만 해놓음
 * TODO 4: 전체적으로 추상화하기, 글로 써보자 << 이거 블로그 제작기에 한번 올려볼까?
 */

export default async function TopicDetailPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: Params;
}) {
  const { id } = params;
  const page = searchParams.page;
  const mode = searchParams.mode || "series";

  const topic = await getTopicById(id);

  return <TopicDetail topic={topic} page={page} mode={mode} />;
}

