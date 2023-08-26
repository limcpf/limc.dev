'use client';

import React, {useEffect, useState} from "react";
import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import Loading from "@/components/Util/Loading";
import PostListItem from "@/components/Post/Card/PostListItem";
import PageBar from "@/components/Post/PageBar";

export default function PostList({
    getFunc, page, isAdmin
}: {
    getFunc: (page?:string) => Promise<Page<Post>>,
    page?:string,
    isAdmin?:boolean
}) {
    const [curPagePost, setCurPagePost]
        = useState<Page<Post>>();

    useEffect(() => {
        getFunc(page)
            .then((pagePost) => {
                setCurPagePost(pagePost);
            });
    }, [page]);

    return (
        <div className="w-full flex flex-col">
            {
                curPagePost
                    ? curPagePost.content.length > 0
                        ? (
                            curPagePost.content.map((post) => {
                                return <PostListItem post={post} isAdmin={isAdmin} />
                            })
                        )
                        : (
                            <div className={"h-52 flex justify-center items-center w-full "}>
                                게시글이 없습니다.
                            </div>
                        )
                    : <Loading />
            }
            {
                curPagePost
                    && <PageBar<Post> tPage={curPagePost} />
            }
        </div>
    )
}