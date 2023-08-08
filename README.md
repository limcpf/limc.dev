This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# limc.dev 블로그 프론트엔드
- limc.dev 블로그 프로젝트의 프론트엔드 입니다.
- **Next.js 13** 버전을 사용하였습니다.

### 개발 관련 내용
- **Vercel**을 통해 배포하고있습니다.
- **Next.js 13**이며 **App Router** 기반으로 개발되었습니다.
- Image나 기타 파일들은 **Backblaze B2** 를 사용하여 저장합니다.
- API_SERVER_URL, NEXT_PUBLIC_SERVER_URL 라는 **서버 용 환경변수, 클라이언트 용 환경변수** 두개를 사용하고 있습니다.
- css 적인 부분은 **Tailwind Css** 를 사용하였습니다.
- **Next.js**를 제외한 라이브러리는 아래와 같이 사용하였습니다.
  - **marked-react** : 마크다운을 React 코드로 파싱할 수 있게 돕는 라이브러리입니다.
  - ~~ideavim, neovim : vim을 애용합시다.~~
### 사이트 관련 내용
- 모든 글들은 site -> topic -> series(없을 수도 있음) -> post 구조로 이루어 집니다.
- site의 경우엔 개발 블로그가 아닌 서브 도메인으로 일상 블로그를 운영할 수도 있음을 염두해 두고 만든 도메인입니다.
- topic 아래 시리즈물로 기획하고 싶은 post들은 series 라는 도메인에 묶여 포스팅됩니다.
- 하지만 일반 글이라면 series 상관 없이 topic 아래에 글 생성이 가능합니다.
- 댓글 기능은 **disqus**나 **github issue** 를 이용할 예정입니다.

### 패치 노트
1.0.0
- 포스트 목록, 조회만 가능 한 최초 배포