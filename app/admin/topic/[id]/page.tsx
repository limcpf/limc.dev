'use client';

import AdminPostList from "@/app/admin/post/AdminPostList";
import {useEffect, useState} from "react";
import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import {getPostByTopicInAdmin, getSeriesByTopicInAdmin, getTopicInAdmin} from "@/libs/api/Admin.api";
import Topic from "@/libs/class/Topic.class";
import Series from "@/libs/class/Series.class";
import AdminSeriesList from "@/app/admin/series/AdminSeriesList";

/**
 * TODO 1: 페이지 기능...작동안함 전체 고치기
 * TODO 2: 각각 리스트 컴포넌트에서 get 해서 데이터 가져와보자 그래야 탭같은거 구현 쉬울듯?
 * TODO 2-1: 페이지 유지는 어떻게 할지 고민 해보자, 초기화 할지 말지
 * TODO 3: 주제에서 시리즈 목록 볼때 주제 명이 안가져와짐 이거 모임;
 * TODO 4: 전체적으로 추상화하기, 글로 써보자 << 이거 블로그 제작기에 한번 올려볼까?
 */
export default function AdminTopicDetail({params}: {params: {id:string}}) {
    const [topic, setTopic]
        = useState<Topic>();
    const [series, setSeries]
        = useState<Page<Series>>();
    const [posts, setPosts]
        = useState<Page<Post>>();
    const [mode, setMode]
        = useState<'post' | 'series'>('series');

    const { id } = params;

    useEffect(() => {
        getTopicInAdmin(id).then((topic) => {
            setTopic(topic);
        });
        getSeriesByTopicInAdmin(id).then((s) => {
            setSeries(s);
        });
        getPostByTopicInAdmin(id).then((p) => {
            setPosts(p);
        });
    }, []);

    return (
        <div className="w-full flex flex-col">
            {topic && (
                <div className="text-center py-3 border-b">
                    <h3 className="text-xl">{topic.site}</h3>
                    <h1 className="font-bold text-3xl">{topic.name}</h1>
                    <div className="grid grid-rows-2 grid-cols-2 px-3">
                        <div className="col-span-1 row-span-1 text-left">
                            <span className="text-sm font-extralight text-gray-500">해당 토픽 시리즈 총 개수 : </span>
                            <span className={"text-sm font-extralight"}>{topic.seriesCnt}개</span>
                        </div>
                        <div className="col-span-1 row-span-1 text-right">
                            <span className="text-sm font-extralight text-gray-500">생성일자 : </span>
                            <span className={"text-sm font-extralight"}>{new Date(topic.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="col-span-1 row-span-1 text-left">
                            <span className="text-sm font-extralight text-gray-500">해당 토픽 게시글 총 개수 : </span>
                            <span className={"text-sm font-extralight"}>{topic.postCnt}개</span>
                        </div>
                        <div className="col-span-1 row-span-1 text-right">
                            <span className="text-sm font-extralight text-gray-500">수정일자 : </span>
                            <span className={"text-sm font-extralight"}>{new Date(topic.updatedAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-full border-b overflow-x-auto whitespace-nowrap mt-2 flex">
                <div
                    className={
                        mode === 'series'
                            ? "w-20 bg-gray-200 px-4 py-2 text-center text-sm cursor-pointer"
                            : "w-20 bg-white border-r border-t px-4 py-2 text-center text-sm cursor-pointer"
                    }
                    onClick={() => setMode('series')}
                >
                    시리즈
                </div>
                <div
                    className={
                        mode === 'post'
                            ? "w-20 bg-gray-200 px-4 py-2 text-center text-sm cursor-pointer"
                            : "w-20 bg-white border-r border-t px-4 py-2 text-center text-sm cursor-pointer"
                    }
                    onClick={() => setMode('post')}
                >
                    게시글
                </div>
            </div>
            {(posts && mode === 'post') && (
                <>
                    <AdminPostList posts={posts} />
                </>
            )}
            {(series && mode === 'series') && (
                <>
                    <AdminSeriesList series={series} />
                </>
            )}
        </div>
    )
}