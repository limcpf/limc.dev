"use client";
import { useRouter } from "next/navigation";
import { deleteSeries } from "@/libs/api/Admin.api";

export default function SeriesListItemFooter({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const router = useRouter();

  const className =
    "cursor-pointer transition hover:bg-gray-50 col-span-1 p-2 text-center";
  const updBtnOnClick = () => router.push(`/admin/series/${id}/update`);
  const delBtnOnClick = () => {
    if (!confirm(`'${title}'을(를) 삭제 하시겠습니까??`)) return;
    deleteSeries(id).then(() => {
      alert(`해당 시리즈를 삭제 하였습니다!`);
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
