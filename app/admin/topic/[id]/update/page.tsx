"use client";

import { useEffect, useState } from "react";
import { getTopicInAdmin } from "@/libs/api/Admin.api";
import Topic from "@/libs/class/Topic.class";
import TopicAddOrUpdate from "@/app/admin/topic/TopicAddOrUpdate";

export default function AdminTopicUpdate({
  params,
}: { params: { id: string } }) {
  const [topic, setTopic] = useState<Topic>();
  const { id } = params;

  useEffect(() => {
    getTopicInAdmin(id).then((topic) => {
      setTopic(topic);
    });
  }, []);

  return <>{topic ? <TopicAddOrUpdate topic={topic} /> : <></>}</>;
}
