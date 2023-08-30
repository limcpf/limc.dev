import React from "react";
import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import PostListItem from "@/components/Post/List/PostListItem";
import PageBar from "@/components/Post/PageBar";
import AddBtn from "@/components/Admin/addBtn";

export default function PostListSC({
  postPage,
  isAdmin,
}: {
  postPage: Page<Post> | undefined;
  isAdmin?: boolean;
}) {
  return (
    <div className="w-full flex flex-col">
      {isAdmin && <AddBtn href="/admin/post" text={"작성"} />}
      {postPage && postPage.content.length > 0 ? (
        postPage.content.map((post, i) => {
          return (
            <PostListItem key={`post-${i}`} post={post} isAdmin={isAdmin} />
          );
        })
      ) : (
        <div className={"h-52 flex justify-center items-center w-full "}>
          게시글이 없습니다.
        </div>
      )}

      <PageBar<Post> tPage={postPage} />
    </div>
  );
}
