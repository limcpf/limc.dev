import Markdown from "@/components/Util/Markdown";

export default function Home() {
  const content = `
  ## 소개
  안녕하세요. limc.dev 블로그를 운영하고 있는 20대 후반 남성입니다.
  
  현재 보험회사의 수행사에 재직하면서 보험 기간계 유지보수 업무를 맡고있습니다.
  
  해당 블로그는 제가 공부한 내용을 올리기 위한 블로그로 각 게시글의 내용이 정확하지 않을 수 있습니다.
    - 만약 내용 정정이나 개인 의견을 전하고 싶으시다면 하단의 이메일로 보내주시면 적극 반영하겠습니다.
    - 그 외에 블로그 내에서 불편하다거나 추가되었으면 좋겠다 하는 기능에 대한 건의사항도 보내주시면 적극 반영하겠습니다.
  
  ## 개발 관련
  현재 저는 백엔드, 프론트엔드 두 분야 모두 관심을 가지고 있습니다.
  
  하지만 현재 밥벌이(?)를 하고 있는 분야는 백엔드로 보험사의 기간계 운영 유지보수를 맡고있습니다.
  
  - 백엔드
      - Java, Spring, SpringBoot 관련하여 꾸준히 공부중입니다.
  - 프론트엔드
      - Next.js 관련하여 공부중입니다만, 프론트엔드 쪽으로 많이 부족하다고 생각합니다.
      - 이전 회사에서는 Vue.js 를 사용한 플랫폼 개발도 참여하였습니다.
  
  ## Contact
  - Email : limcdevblog@gmail.com
  
  2023.08.06
  `;
  return (
    <main className="flex flex-col p-3 min-h-screen w-full leading-8 list-disc">
      <Markdown content={content} />
    </main>
  );
}
