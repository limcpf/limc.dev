"use client";

import Page from "@/libs/class/Page.class";
import React, {useEffect, useState} from "react";
import {getListFunc} from "@/libs/api/api";
import Loading from "@/components/Util/Loading";
import Topic from "@/libs/class/Topic.class";
import TopicListItem from "@/components/Topic/List/TopicListItem";
import AddBtn from "@/components/Admin/addBtn";
import PageBar from "@/components/Post/PageBar";

export default function TopicList({
  id,
  getFunc,
  isAdmin,
}: {
  id?: string;
  getFunc: getListFunc<Topic>;
  isAdmin?: boolean;
}) {
  const [curPage, setCurPage] = useState(1)
  const [curPageTopic, setCurPageTopic] = useState<Page<Topic>>();

  const callbackPageTopic = (pageTopic?: Page<Topic>) => {
    setCurPageTopic(pageTopic);
  };

  useEffect(() => {
    if (id) getFunc(id, `${curPage}`).then(callbackPageTopic);
    else getFunc(`${curPage}`).then(callbackPageTopic);
  }, [curPage]);

  const title = " text-center font-light";

  return (
    <main className="w-full flex flex-col p-3">
      {isAdmin && <AddBtn href="/admin/topic/add" text={"생성"} />}
      <div className="hidden sm:grid sm:grid-cols-4 sm:border-b sm:border-b-gray-300 sm:pb-3">
        <div className={title}>사이트</div>
        <div className={title + " col-span-3"}>주제명</div>
      </div>
      {curPageTopic ? (
        curPageTopic.content.length > 0 ? (
          curPageTopic.content.map((topic, i) => (
            <TopicListItem
              key={`${topic}-${i}`}
              topic={topic}
              isAdmin={isAdmin}
            />
          ))
        ) : (
          <div className={"h-52 flex justify-center items-center w-full "}>
            등록된 주제가 없습니다.
          </div>
        )
      ) : (
        <Loading />
      )}

      {curPageTopic && <PageBar<Topic> tPage={curPageTopic} setPage={setCurPage}/>}
    </main>
  );
}
