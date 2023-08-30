"use client";

import React, {useEffect, useState} from "react";
import {getPostPageByTopic, getSeriesByTopicInAdmin, getTopicInAdmin,} from "@/libs/api/private.api";
import Topic from "@/libs/class/Topic.class";
import PostList from "@/components/Post/List/PostList";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import AdminTab from "@/components/Admin/Tab/AdminTab";
import TopicHeader from "@/app/admin/topic/[id]/TopicHeader";
import Loading from "@/components/Util/Loading";
import SeriesList from "@/components/Series/List/SeriesList";

/**
 * TODO 6: 관리자에서 public 으로 포스트 가져오는 애들 발행 안된애들도 가져오는지 체크해야할듯...? 분리해야지 따로 써야하니깐
 * TODO 2: 각각 리스트 컴포넌트에서 get 해서 데이터 가져와보자 그래야 탭같은거 구현 쉬울듯? << Post 까지만 해놓음
 * TODO 4: 전체적으로 추상화하기, 글로 써보자 << 이거 블로그 제작기에 한번 올려볼까?
 */

const buttons = [
  {
    text: "시리즈",
    mode: "series",
  },
  {
    text: "게시글",
    mode: "post",
  },
];
export default function AdminTopicDetail({
  params,
  searchParams,
}: { params: { id: string }; searchParams: Params }) {
  const [topic, setTopic] = useState<Topic>();
  const [mode, setMode] = useState<string>("series");

  const { id } = params;
  const page = searchParams.page;

  useEffect(() => {
    getTopicInAdmin(id).then((topic) => {
      setTopic(topic);
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      {topic ? <TopicHeader topic={topic} /> : <Loading />}

      <AdminTab buttons={buttons} curMode={mode} setMode={setMode} />

      {topic && mode === "post" && (
        <main className="w-full flex flex-col p-2">
          <PostList
            getFunc={getPostPageByTopic}
            page={page}
            id={id}
            isAdmin={true}
          />
        </main>
      )}
      {topic && mode === "series" && (
        <>
          <SeriesList
            getFunc={getSeriesByTopicInAdmin}
            isAdmin={true}
            page={page}
            id={id}
          />
        </>
      )}
    </div>
  );
}
