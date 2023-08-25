'use client';

import Topic from "@/libs/class/Topic.class";
import {useRouter} from "next/navigation";
import {FormEventHandler, useEffect, useRef, useState} from "react";
import {addTopic, getSiteList, updateTopic} from "@/libs/api/Admin.api";
import PostInputWrapper from "@/components/Admin/AdminPost/PostInputWrapper";
import PostSelect from "@/components/Admin/AdminPost/PostSelect";
import {inputStyle} from "@/components/Admin/AdminConstantClassNames";
import TopicDto from "@/libs/dto/admin/TopicDto";

export default function TopicAddOrUpdate({topic}:{
    topic?: Topic
}) {
    const router = useRouter();

    const isUpdate = !!topic;

    const [site, setSite] = useState(isUpdate ? topic.site : "");
    const nameRef = useRef<HTMLInputElement>(null);

    const setTopicField = (name: string | undefined) => {
        if (nameRef.current) nameRef.current.value = name || "";
    };

    useEffect(() => {
        if (isUpdate) setTopicField(topic.name);
    }, []);

    const addOrUpdateCallback = (t: Topic) => {
        if (t.id) {
            alert("토픽이 등록되었습니다!");
            router.push(`/admin/topic/${t.id}`);
        }
    };

    const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();

        /**
         * select 를 제외한 필드요소 정합성은 html 요소를 사용
         * select 는 state 를 사용하기 때문에 해당 state 값 관련 정합성만 실행
         */
        if (!site) {
            alert("site 값을 확인해주세요.");
            return;
        }
        if (!nameRef.current) {
            alert("ref 설정이 올바르지 않습니다.");
            return;
        }

        const topicDto = new TopicDto(
            site,
            nameRef.current.value,
            topic ? topic.id : ""
        );

        if (isUpdate) updateTopic(topicDto).then(addOrUpdateCallback);
        else addTopic(topicDto).then(addOrUpdateCallback);
    };

    return (
        <div className="w-full py-3">
            <div className="text-center text-2xl font-bold mb-5">
                주제 {isUpdate ? "수정" : "작성"}
            </div>
            <form onSubmit={onSubmit} className="w-full grid grid-cols-8 px-6 gap-3">
                <PostInputWrapper title="사이트" >
                    <PostSelect
                        value={site}
                        isChild={false}
                        setFunction={setSite}
                        dataFunction={getSiteList}
                    />
                </PostInputWrapper>
                <PostInputWrapper title="주제명">
                    <input className={inputStyle} ref={nameRef} type="text" required />
                </PostInputWrapper>
                <button
                    type="submit"
                    className="
                        col-start-8 col-end-9
                        cursor-pointer
                        bg-gray-300 text-gray-600
                        hover:bg-gray-400 hover:text-gray-700
                        px-3 py-2 text-center
                "
                >
                    {isUpdate ? "수정" : "저장"}
                </button>
            </form>
        </div>
    );

}