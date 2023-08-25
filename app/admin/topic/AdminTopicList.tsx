import Page from "@/libs/class/Page.class";
import PageBar from "@/components/Post/PageBar";
import React from "react";
import Topic from "@/libs/class/Topic.class";
import AdminTopicCard from "@/components/Admin/AdminTopic/AdminTopicCard";
import AdminTopicCardFooter from "@/components/Admin/AdminTopic/AdminTopicCardFooter";

export default function AdminTopicList({ topics }: { topics: Page<Topic> }) {
    const content = topics.content;

    const title = " text-center font-light";
    return (
        <main className="w-full flex flex-col p-3">
            <div className="hidden sm:grid sm:grid-cols-4 sm:border-b sm:border-b-gray-300 sm:pb-3">
                <div className={title}>사이트</div>
                <div className={title + " col-span-3"}>주제명</div>
            </div>

            {content.length > 0 ? (
                content.map((topic) => {
                    return (
                        <div className="border-b-gray-300 border-b">
                            <AdminTopicCard topic={topic} />
                            <AdminTopicCardFooter name={topic.name} id={topic.id} />
                        </div>
                    );
                })
            ) : (
                <div>등록된 토픽이 없습니다.</div>
            )}
            {topics && <PageBar<Topic> tPage={topics} />}
        </main>
    );
}
