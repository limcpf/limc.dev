"use client";

import React, { useEffect, useState } from "react";
import {
  getPostPageBySiteInAdmin,
  getSeriesBySiteInAdmin,
  getSiteInAdmin,
  getTopicBySiteInAdmin,
} from "@/libs/api/private.api";
import PostList from "@/components/Post/List/PostList";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import AdminTab from "@/components/Admin/Tab/AdminTab";
import Loading from "@/components/Util/Loading";
import SeriesList from "@/components/Series/List/SeriesList";
import Site from "@/libs/class/Site.class";
import TopicList from "@/components/Topic/List/TopicList";
import SiteHeader from "@/app/admin/site/[name]/SiteHeader";

const buttons = [
  {
    text: "주제",
    mode: "topic",
  },
  {
    text: "시리즈",
    mode: "series",
  },
  {
    text: "게시글",
    mode: "post",
  },
];

export default function AdminSiteDetail({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: Params;
}) {
  const [site, setSite] = useState<Site>();
  const [mode, setMode] = useState<string>("topic");

  const { name } = params;
  const page = searchParams.page;

  useEffect(() => {
    getSiteInAdmin(name).then((site) => {
      setSite(site);
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      {site ? <SiteHeader site={site} /> : <Loading />}

      <AdminTab buttons={buttons} curMode={mode} setMode={setMode} />

      {site && mode === "topic" && (
        <TopicList
          getFunc={getTopicBySiteInAdmin}
          isAdmin={true}
          page={page}
          id={name}
        />
      )}
      {site && mode === "post" && (
        <main className="w-full flex flex-col p-2">
          <PostList
            getFunc={getPostPageBySiteInAdmin}
            page={page}
            id={name}
            isAdmin={true}
          />
        </main>
      )}
      {site && mode === "series" && (
        <SeriesList
          getFunc={getSeriesBySiteInAdmin}
          isAdmin={true}
          page={page}
          id={name}
        />
      )}
    </div>
  );
}
