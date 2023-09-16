'use client';

import {getTopicPageBySite} from "@/libs/api/public.api";
import React from "react";
import TopicList from "@/components/Topic/List/TopicList";

export default function TopicHome() {
  return (
      <>
        <title>LimC | 주제</title>
        <TopicList getFunc={getTopicPageBySite} />
      </>
  )
}
