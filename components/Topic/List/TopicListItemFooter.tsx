"use client";
import { useRouter } from "next/navigation";
import { deleteTopic } from "@/libs/api/private.api";

export default function TopicListItemFooter({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const router = useRouter();

  const className =
    "cursor-pointer transition hover:bg-gray-50 col-span-1 p-2 text-center";
  const updBtnOnClick = () => router.push(`/admin/topic/${id}/update`);
  const delBtnOnClick = () => {
    if (!confirm(`'${name}'을(를) 삭제 하시겠습니까??`)) return;
    deleteTopic(id).then(() => {
      alert(`해당 주제를 삭제 하였습니다!`);
      location.reload();
    });
  };

  return (
    <div className="w-full grid grid-cols-2">
      <div className={className + " text-blue-400"} onClick={updBtnOnClick}>
        수정
      </div>
      <div className={className + " text-red-400"} onClick={delBtnOnClick}>
        삭제
      </div>
    </div>
  );
}
