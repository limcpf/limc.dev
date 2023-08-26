'use client';

import Post from "@/libs/class/Post.class";
import React from "react";
import {useRouter} from "next/navigation";

export default function PostListItemBody({
    post,
    isAdmin
}: {
    post: Post;
    isAdmin?: boolean;
}) {
    const router = useRouter();
    const { title, id ,summary} = post;
    return (
        <div
            className="flex flex-col justify-center mb-1 gap-y-2 border-b pb-2"
            onClick={() => router.push(`${isAdmin ? '/admin' : ""}/post/${id}`)}
        >
            <div className="text-2xl sm:text-md font-bold line-clamp-3 sm:line-clamp-1">
                {title}
            </div>
            <div className="text-xs leading-5 line-clamp-3 font-light whitespace-normal break-words ">
                {summary}
            </div>
            <div className="text-es text-gray-400 text-right font-extralight">
                {new Date(post.createdAt).toLocaleString()}
            </div>
        </div>
    );
}
