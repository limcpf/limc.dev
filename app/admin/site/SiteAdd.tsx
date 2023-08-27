"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, useRef } from "react";
import { addSite } from "@/libs/api/Admin.api";
import AdminInputWrapper from "@/components/Admin/Input/AdminInputWrapper";
import { inputStyle } from "@/components/Admin/AdminConstantClassNames";
import SiteDto from "@/libs/dto/admin/SiteDto";

export default function SiteAdd() {
  const router = useRouter();

  const nameRef = useRef<HTMLInputElement>(null);
  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    if (!nameRef.current) {
      alert("ref 설정이 올바르지 않습니다.");
      return;
    }

    const siteDto = new SiteDto(nameRef.current.value);

    addSite(siteDto).then((s) => {
      if (s.name) {
        alert("토픽이 등록되었습니다!");
        router.push(`/admin/site/${s.name}`);
      }
    });
  };

  return (
    <div className="w-full py-3">
      <div className="text-center text-2xl font-bold mb-5">사이트 생성</div>
      <form onSubmit={onSubmit} className="w-full grid grid-cols-8 px-6 gap-3">
        <AdminInputWrapper title="주제명">
          <input className={inputStyle} ref={nameRef} type="text" required />
        </AdminInputWrapper>
        <button
          type="submit"
          className="
                        col-start-8 col-end-9
                        cursor-pointer
                        bg-gray-300 text-gray-600
                        hover:bg-gray-400 hover:text-gray-700
                        px-3 py-2 text-center
                "
        >
          저장
        </button>
      </form>
    </div>
  );
}
