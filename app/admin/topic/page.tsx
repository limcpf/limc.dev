"use client";

import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import {getTopicPageInAdmin} from "@/libs/api/Admin.api";
import TopicList from "@/components/Topic/List/TopicList";

export default function AdminTopic({ searchParams }: { searchParams: Params }) {
  const page = searchParams.page;

  return <TopicList getFunc={getTopicPageInAdmin} page={page} isAdmin={true} />
}
