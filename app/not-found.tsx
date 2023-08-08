"use client";

import Image from "next/image";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center w-full py-10 px-5 h-screen">
      <div className="font-bold text-3xl">찾으시는 페이지가 없어요</div>
      <Image
        src="/404.webp"
        loading="eager"
        priority
        width={535}
        height={374}
        alt={"서버 에러 시 나오는 이미지"}
      />
      <div className="text-center leading-8">
        현재 찾으시는 페이지는 존재하지 않습니다.
        <br />
        찾으시는 포스트나 컨텐츠가 삭제되었을 가능성도 있습니다.
        <br />
        기타 문의 사항은 daeseong0226@gmail.com 으로 주시면 감사하겠습니다.
      </div>
    </div>
  );
}
