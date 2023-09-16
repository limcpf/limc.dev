"use client";

import React from "react";
import {getTopicPageInAdmin} from "@/libs/api/private.api";
import TopicList from "@/components/Topic/List/TopicList";

export default function AdminTopic() {
  return <TopicList getFunc={getTopicPageInAdmin} isAdmin={true} />;
}
