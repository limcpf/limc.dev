'use client';

import React, {useEffect, useState} from "react";
import Page from "@/libs/class/Page.class";
import Post from "@/libs/class/Post.class";
import Loading from "@/components/Util/Loading";
import PostListItem from "@/components/Post/List/PostListItem";
import {getListFunc} from "@/libs/api/api";
import AddBtn from "@/components/Admin/addBtn";
import PageBar from "@/components/Post/PageBar";

export default function PostList({
  getFunc,
  isAdmin,
  id,
}: {
  getFunc: getListFunc<Post>;
  id?: string;
  isAdmin?: boolean;
}) {
  const [curPage, setCurPage] = useState(1)
  const [curPagePost, setCurPagePost] = useState<Page<Post>>();

  const callbackPagePost = (pagePost?: Page<Post>) => setCurPagePost(pagePost);

  useEffect(() => {
    if (id) getFunc(id, `${curPage}`).then(callbackPagePost);
    else getFunc(`${curPage}`).then(callbackPagePost);
  }, [curPage]);

  return (
    <div className="w-full flex flex-col">
      {isAdmin && <AddBtn href="/admin/post" text={"작성"} />}
      {curPagePost ? (
        curPagePost.content.length > 0 ? (
          curPagePost.content.map((post) => {
            return <PostListItem post={post} isAdmin={isAdmin} />;
          })
        ) : (
          <div className={"h-52 flex justify-center items-center w-full "}>
            게시글이 없습니다.
          </div>
        )
      ) : (
        <Loading />
      )}
      {curPagePost && <PageBar<Post> tPage={curPagePost} setPage={setCurPage} />}
    </div>
  );
}
