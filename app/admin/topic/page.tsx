"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { useEffect, useState } from "react";
import Page from "@/libs/class/Page.class";
import { getTopicPageInAdmin } from "@/libs/api/Admin.api";
import AddBtn from "@/components/Admin/addBtn";
import Topic from "@/libs/class/Topic.class";
import AdminTopicList from "@/app/admin/topic/AdminTopicList";

export default function AdminTopic({ searchParams }: { searchParams: Params }) {
  const [topics, setTopics] = useState<Page<Topic>>();
  const [page, setPage] = useState<string>(searchParams.page);

  useEffect(() => {
    getTopicPageInAdmin(page).then((page) => {
      setTopics(page);
    });
  }, [page]);

  return (
    <>
      <AddBtn href="/admin/topic/add" text={"생성"} />
      {topics ? <AdminTopicList topics={topics} /> : <></>}
    </>
  );
}
