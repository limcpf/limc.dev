'use client';

import "./post.css";
import PostWrapper from "@/components/Post/PostWrapper";
import {getPostInAdmin} from "@/libs/api/Admin.api";
import {useEffect, useState} from "react";
import Post from "@/libs/class/Post.class";


export default function AdminPost({
  params,
}: {
  params: { id: string };
}) {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    getPostInAdmin(params.id)
        .then(post => {
          setPost(post);
        });
  }, [])


  return <>{ post ? <PostWrapper post={post} /> : <div>로딩중...</div>}</>;
}
