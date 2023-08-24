'use client';

import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import AdminPostCard from "@/components/Admin/AdminPost/AdminPostCard/AdminPostCard";
import PageBar from "@/components/Post/PageBar";
import AddBtn from "@/components/Admin/addBtn";

export default function AdminPostList({ posts }: {
    posts: Page<Post>
}) {
    const [content] = useState<Post[]>(posts.content);
    const router = useRouter();

    return (
        <main className="w-full flex flex-col p-2">
            {content.length > 0 ? (
                content.map((post) => (
                    <AdminPostCard key={`post-${post.id}`} post={post} />
                ))
            ) : (
                <div className={"h-52 flex justify-center items-center w-full "}>
                    게시글이 없습니다.
                </div>
            )}
            {posts && <PageBar<Post> tPage={posts} />}
        </main>
    )
}