"use client";
import { deleteSite } from "@/libs/api/private.api";

export default function SiteListItemFooter({
  name,
}: {
  name: string;
}) {
  const className =
    "cursor-pointer transition hover:bg-gray-50 col-span-1 p-2 text-center";
  const delBtnOnClick = () => {
    if (!confirm(`'${name}'을(를) 삭제 하시겠습니까??`)) return;
    deleteSite(name).then(() => {
      alert(`해당 사이트를 삭제 하였습니다!`);
      location.reload();
    });
  };

  return (
    <div className="w-full grid grid-cols-1">
      <div className={className + " text-red-400"} onClick={delBtnOnClick}>
        삭제
      </div>
    </div>
  );
}
