import React from "react";
import Topic from "@/libs/class/Topic.class";
import TopicListItemBody from "@/components/Topic/List/TopicListItemBody";
import TopicListItemFooter from "@/components/Topic/List/TopicListItemFooter";

export default function TopicListItem({
  topic,
  isAdmin,
}: { topic: Topic; isAdmin?: boolean }) {
  return (
    <div className="border-b-gray-300 border-b">
      <TopicListItemBody topic={topic} isAdmin={isAdmin} />
      {isAdmin && <TopicListItemFooter name={topic.name} id={topic.id} />}
    </div>
  );
}
