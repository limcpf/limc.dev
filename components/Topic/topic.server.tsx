import React from "react";
import {
  getPostPageByTopic,
  getSeriesByTopicInAdmin,
} from "@/libs/api/private.api";
import TopicHeader from "@/app/admin/topic/[id]/TopicHeader";
import Topic from "@/libs/class/Topic.class";
import Tab from "@/components/Util/Tab";
import PostListSC from "@/components/Post/List/PostList.server";
import { undefined } from "zod";
import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import Series from "@/libs/class/Series.class";
import SeriesListSC from "@/components/Series/List/SeriesList.server";
import { notFound } from "next/navigation";

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

export default async function TopicDetail({
  topic,
  page,
  mode,
}: {
  topic: Topic | undefined;
  page: string;
  mode: string;
}) {
  if (!topic) notFound();

  let postPage: Page<Post> | undefined;
  let seriesPage: Page<Series> | undefined;

  if (mode === "post") postPage = await getPostPageByTopic(topic.id, page);
  else if (mode === "series")
    seriesPage = await getSeriesByTopicInAdmin(topic.id, page);

  return (
    <div className="w-full flex flex-col">
      <TopicHeader topic={topic} />

      <Tab buttons={buttons} curMode={mode} />

      {mode === "post" && (
        <main className="w-full flex flex-col p-2">
          <PostListSC postPage={postPage} />
        </main>
      )}
      {mode === "series" && <SeriesListSC seriesPage={seriesPage} />}
    </div>
  );
}
