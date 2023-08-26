'use client';

import React, {useEffect, useState} from "react";
import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import Loading from "@/components/Util/Loading";
import PostListItem from "@/components/Post/Card/PostListItem";
import PageBar from "@/components/Post/PageBar";

type getPostList = (page?:string) => Promise<Page<Post>>;
type getPostByIdList = (id:string, page?:string) => Promise<Page<Post>>

export default function PostList({
    getFunc, page, isAdmin, id
}: {
    getFunc: getPostList | getPostByIdList,
    id?:string,
    page?:string,
    isAdmin?:boolean
}) {
    const [curPagePost, setCurPagePost]
        = useState<Page<Post>>();

    const callbackPagePost = (pagePost: Page<Post>) => setCurPagePost(pagePost);

    useEffect(() => {
        if(id) getFunc(id, page || "1").then(callbackPagePost);
        else getFunc(page || "1").then(callbackPagePost);
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