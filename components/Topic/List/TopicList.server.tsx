import Page from "@/libs/class/Page.class";
import React from "react";
import PageBar from "@/components/Post/PageBar";
import Topic from "@/libs/class/Topic.class";
import TopicListItem from "@/components/Topic/List/TopicListItem";
import AddBtn from "@/components/Admin/addBtn";

export default function TopicListSC({
    topicPage,
    isAdmin,
}: {
    topicPage:Page<Topic> | undefined
    isAdmin?:boolean
}) {
    const title = " text-center font-light";

    return (
        <main className="w-full flex flex-col p-3">
            {isAdmin && <AddBtn href="/admin/topic/add" text={"생성"} />}
            <div className="hidden sm:grid sm:grid-cols-4 sm:border-b sm:border-b-gray-300 sm:pb-3">
                <div className={title}>사이트</div>
                <div className={title + " col-span-3"}>주제명</div>
            </div>
            {
                (topicPage && topicPage.content.length > 0) ? (
                    topicPage.content.map((topic, i) => (
                        <TopicListItem key={`topic-${i}`} topic={topic} isAdmin={isAdmin} />
                    ))
                ) : (
                    <div className={"h-52 flex justify-center items-center w-full "}>
                        등록된 주제가 없습니다.
                    </div>
                )
            }
            <PageBar<Topic> tPage={topicPage} />
        </main>
    );
}
