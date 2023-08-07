'use client';

import Image from "next/image";

export default function ErrorPage() {
  return (<div className="flex flex-col items-center w-full py-10 px-5 h-screen">
        <div className="font-bold text-3xl">서버 오류</div>
        <Image src="/500.webp" loading="eager" priority width={535} height={374} alt={"서버 에러 시 나오는 이미지"} />
        <div className="text-center leading-8">
          죄송합니다. 서버측에 에러가 발생하였습니다.
          <br/>
          해당 화면이 다시 발생 시 daeseong0226@gmail.com 로 제보해주시면 감사하겠습니다.
          <br/>
          블로그 이용 중 불편을 드려 죄송합니다.
        </div>
  </div>)
}