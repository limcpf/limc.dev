'use client';

import Series from "@/libs/class/Series.class";
import {useRouter} from "next/navigation";
import {FormEventHandler, useEffect, useRef, useState} from "react";
import SeriesDto from "@/libs/dto/admin/SeriesDto";
import Post from "@/libs/class/Post.class";
import {addSeries, getSiteList, getTopicList, updateSeries} from "@/libs/api/Admin.api";
import PostInputWrapper from "@/components/Admin/AdminPost/PostInputWrapper";
import PostSelect from "@/components/Admin/AdminPost/PostSelect";
import {inputStyle} from "@/components/Admin/AdminConstantClassNames";

export default function SeriesAddOrUpdate({series}:{
    series?: Series
}) {
    const router = useRouter();

    const isUpdate = !!series;

    const [site, setSite] = useState(isUpdate ? series.site : "");
    const [topic, setTopic] = useState(isUpdate ? series.topic : "");
    const titleRef = useRef<HTMLInputElement>(null);

    const setSeriesField = (
        title: string | undefined
    ) => {
        if(titleRef.current) titleRef.current.value = title || "";
    }

    useEffect(() => {
       if(isUpdate) setSeriesField(series.title);
    }, [])


    const addOrUpdateCallback = (s: Series) => {
        if (s.id) {
            alert("시리즈가 등록되었습니다!");
            router.push(`/admin/series/${s.id}`);
        }
    };

    const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();

        /**
         * select 를 제외한 필드요소 정합성은 html 요소를 사용
         * select 는 state 를 사용하기 때문에 해당 state 값 관련 정합성만 실행
         */
        if (!(site && topic)) {
            alert("site, topic 값을 확인해주세요");
            return;
        }
        if (!titleRef.current) {
            alert("ref 설정이 올바르지 않습니다.");
            return;
        }

        const seriesDto = new SeriesDto(
            site,
            topic,
            titleRef.current.value,
            series ? series.id : ""
        );

        if(isUpdate) updateSeries(seriesDto).then(addOrUpdateCallback);
        else addSeries(seriesDto).then(addOrUpdateCallback);
    }

    return (
        <div className="w-full py-3">
            <div className="text-center text-2xl font-bold mb-5">
                시리즈 {isUpdate ? "수정" : "작성"}
            </div>
            <form onSubmit={onSubmit} className="w-full grid grid-cols-8 px-6 gap-3">
                <PostInputWrapper title="사이트" span={4}>
                    <PostSelect
                        value={site}
                        isChild={false}
                        setFunction={setSite}
                        dataFunction={getSiteList}
                    />
                </PostInputWrapper>
                <PostInputWrapper title="주제" span={4}>
                    <PostSelect
                        value={topic}
                        isChild={true}
                        parentValue={site}
                        setFunction={setTopic}
                        dataFunction={getTopicList}
                    />
                </PostInputWrapper>
                <PostInputWrapper title="제목">
                    <input className={inputStyle} ref={titleRef} type="text" required />
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
    )
}