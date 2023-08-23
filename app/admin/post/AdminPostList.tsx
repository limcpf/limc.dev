'use client';

import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import AdminPostCard from "@/components/Admin/AdminPost/AdminPostCard/AdminPostCard";
import PostPageBar from "@/components/Post/PostPageBar";

export default function AdminPostList({ posts }: {
    posts: Page<Post>
}) {
    const [content] = useState<Post[]>(posts.content);
    const router = useRouter();

    return (
        <main className="w-full flex flex-col p-2">
            <div className="flex w-full justify-end pb-2">
                <div
                    className="
                    transition cursor-pointer
                    bg-gray-300 text-gray-600
                    hover:bg-gray-400 hover:text-gray-700
                    px-5 py-1.5
                  "
                    onClick={() => router.push("/admin/post")}
                >
                    작성
                </div>
            </div>
            {content.length > 0 ? (
                content.map((post) => (
                    <AdminPostCard key={`post-${post.id}`} post={post} />
                ))
            ) : (
                <div className={"h-52 flex justify-center items-center w-full "}>
                    게시글이 없습니다.
                </div>
            )}
            {posts && <PostPageBar postPage={posts} />}
        </main>
    )
}