import Link from "next/link";
import Post from "@/libs/class/Post.class";
import React from "react";

export default function PostListItemBody({
    post,
}: {
    post: Post;
    isAdmin?: boolean;
}) {
    const { topicName, topic, seriesName, series, title, id ,summary} = post;
    return (
        <div className="flex flex-col justify-center mb-1 gap-y-2 border-b pb-2">
            <div className="text-2xl sm:text-md font-bold line-clamp-3 sm:line-clamp-1">
                <Link href={`/post/${id}`}>{title}</Link>
            </div>
            <div className="text-xs leading-5 line-clamp-3 font-light whitespace-normal break-words ">
                <Link href={`/post/${id}`}>{summary}</Link>
            </div>
            <div className="text-es text-gray-400 text-right font-extralight">
                {new Date(post.createdAt).toLocaleString()}
            </div>
        </div>
    );
}
