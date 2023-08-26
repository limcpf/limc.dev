"use client";

import Post from "@/libs/class/Post.class";
import PostListContent from "@/components/Post/Card/PostListContent";
import {useRouter} from "next/navigation";

export default function PostListItem({
    post,
    isAdmin,
}: {
    post: Post;
    isAdmin?: boolean;
}) {
    const router = useRouter();
    return(
        <div className="flex flex-col p-1 w-full h-fit  first:border-t-0">
            <PostListContent post={post} isAdmin={isAdmin} />
        </div>
    );
}
