"use client";

import { useRouter } from "next/navigation";
import { deletePost, togglePublished } from "@/libs/api/private.api";
import { useState } from "react";

export default function PostListItemFooter({
  id,
  title,
  isPublished,
}: { id: string; title: string; isPublished: boolean }) {
  const router = useRouter();
  const [isPub, setIsPub] = useState<boolean>(isPublished);
  const className =
    "cursor-pointer transition hover:bg-gray-50 col-span-1 py-2 text-center";
  const getPubWord = () => (isPub ? "발행 취소" : "발행");
  const pubBtnOnClick = () => {
    if (!confirm(`'${title}'을(를) ${getPubWord()}하시겠습니까??`)) return;
    togglePublished(id).then((changedIsPublished) => {
      alert(`해당 게시글을 ${getPubWord()}하였습니다!`);
      setIsPub(!!changedIsPublished);
    });
  };

  const updBtnOnClick = () => {
    router.push(`/admin/post/update/${id}`);
  };

  const delBtnOnClick = () => {
    if (!confirm(`'${title}'을(를) 삭제 하시겠습니까??`)) return;
    deletePost(id).then(() => {
      alert(`해당 게시글을 삭제 하였습니다!`);
      location.reload();
    });
  };
  return (
    <div className="w-full grid grid-cols-3 border-b">
      <div className={className} onClick={pubBtnOnClick}>
        {isPub ? "발행 취소" : "발행"}
      </div>
      <div className={className + " text-blue-400"} onClick={updBtnOnClick}>
        수정
      </div>
      <div className={className + " text-red-400"} onClick={delBtnOnClick}>
        삭제
      </div>
    </div>
  );
}
