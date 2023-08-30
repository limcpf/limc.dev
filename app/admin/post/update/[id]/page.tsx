"use client";

import { getPostInAdmin } from "@/libs/api/private.api";
import PostAddOrUpdate from "@/app/admin/post/PostAddOrUpdate";
import { useEffect, useState } from "react";
import Post from "@/libs/class/Post.class";

export default function postUpdatePage({
  params,
}: {
  params: { id: string };
}) {
  const [post, setPost] = useState<Post>();
  const { id } = params;

  useEffect(() => {
    getPostInAdmin(id).then((post) => {
      setPost(post);
    });
  }, []);

  return <>{post ? <PostAddOrUpdate post={post} /> : <></>}</>;
}
