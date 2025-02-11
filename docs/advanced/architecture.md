---
title: 아키텍처
---

Quartz는 정적 사이트 생성기입니다. 어떻게 작동할까요?

이 질문은 사용자(여러분!)가 명령줄에서 `npx quartz build`를 실행할 때 무슨 일이 일어나는지 추적해보면 가장 잘 답할 수 있습니다:

## 서버 측

1. `npx quartz build`를 실행하면, npm은 `package.json`에서 `quartz`의 `bin` 항목을 찾아 `./quartz/bootstrap-cli.mjs`를 가리킵니다.
2. 이 파일의 상단에는 [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) 라인이 있어 npm에게 Node를 사용해 실행하라고 알려줍니다.
3. `bootstrap-cli.mjs`는 다음과 같은 여러 가지 작업을 담당합니다:
   1. [yargs](http://yargs.js.org/)를 사용하여 명령줄 인수를 파싱합니다.
   2. [esbuild](https://esbuild.github.io/)를 사용하여 나머지 Quartz(Typescript로 작성됨)를 일반 JavaScript로 트랜스파일하고 번들링합니다. 여기서 `esbuild` 설정은 [esbuild-sass-plugin v2](https://www.npmjs.com/package/esbuild-sass-plugin)를 사용하여 `.scss` 파일 임포트도 처리한다는 점에서 약간 특별합니다. 또한 컴포넌트가 선언한 '인라인' 클라이언트 측 스크립트(모든 `.inline.ts` 파일)를 브라우저용으로 번들링하는 커스텀 `esbuild` 플러그인을 사용하여 번들링합니다. 두 유형의 모듈 모두 일반 텍스트로 임포트됩니다.
   3. `--serve` 플래그가 설정된 경우 로컬 미리보기 서버를 실행합니다. 이는 두 개의 서버를 시작합니다:
      1. 핫 리로드 신호를 처리하기 위한 포트 3001의 WebSocket 서버. 이는 모든 인바운드 연결을 추적하고 서버 측 변경(콘텐츠 또는 설정)이 감지되면 '재빌드' 메시지를 보냅니다.
      2. 실제 웹사이트 파일을 제공하기 위한 사용자 정의 포트(일반적으로 8080)의 HTTP 파일 서버.
   4. `--serve` 플래그가 설정된 경우, 소스 코드 변경(예: `.ts`, `.tsx`, `.scss` 또는 패키저 파일)을 감지하기 위한 파일 감시자도 시작합니다. 변경이 있으면 esbuild의 [rebuild API](https://esbuild.github.io/api/#rebuild)를 사용하여 모듈을 다시 빌드하는데, 이는 빌드 시간을 크게 줄여줍니다.
   5. 메인 Quartz 빌드 모듈(`quartz/build.ts`)을 트랜스파일한 후, 이를 캐시 파일 `.quartz-cache/transpiled-build.mjs`에 쓰고 `await import(cacheFile)`을 사용하여 동적으로 임포트합니다. 하지만 Node의 [import cache](https://github.com/nodejs/modules/issues/307)를 현명하게 처리해야 하므로 랜덤 쿼리 문자열을 추가하여 Node가 새로운 모듈이라고 생각하도록 속입니다. 그러나 이는 메모리 누수를 일으키므로 사용자가 한 세션에서 설정을 너무 많이 핫 리로드하지 않기를 바랄 뿐입니다 :)) (각 리로드마다 약 ~350kB의 메모리가 누수됩니다). 모듈을 임포트한 후, 이를 호출하여 이전에 파싱한 명령줄 인수와 클라이언트에 새로 고침을 신호하는 콜백 함수를 전달합니다.
4. `build.ts`에서는 먼저 이전에 도입한 쿼리 문자열 캐시 버스팅 해킹을 처리하기 위해 소스 맵 지원을 수동으로 설치합니다. 그런 다음 콘텐츠 처리를 시작합니다:
   1. 출력 디렉토리를 정리합니다.
   2. `.gitignore`를 존중하면서 `content` 폴더의 모든 파일을 재귀적으로 glob합니다.
   3. 마크다운 파일을 파싱합니다.
      1. Quartz는 사용 가능한 스레드 수를 감지하고 파싱할 콘텐츠가 >128개인 경우 워커 스레드를 생성할지 결정합니다(대략적인 휴리스틱). 워커를 생성해야 하는 경우, esbuild를 다시 호출하여 워커 스크립트 `quartz/worker.ts`를 트랜스파일합니다. 그런 다음 작업 도둑질 [workerpool](https://www.npmjs.com/package/workerpool)이 생성되고 128개 파일의 배치가 워커에 할당됩니다.
      2. 각 워커(또는 동시성이 없는 경우 메인 스레드)는 [[configuration]]에 정의된 플러그인을 기반으로 [unified](https://github.com/unifiedjs/unified) 파서를 생성합니다.
      3. 파싱은 세 단계로 이루어집니다:
         1. 파일을 [vfile](https://github.com/vfile/vfile)로 읽습니다.
         2. 콘텐츠에 대해 플러그인이 정의한 텍스트 변환을 적용합니다.
         3. 파일 경로를 슬러그화하고 파일의 데이터에 저장합니다. Quartz에서 경로 로직이 어떻게 작동하는지에 대한 자세한 내용은 [[paths]] 페이지를 참조하세요(스포일러: 복잡합니다).
         4. [remark-parse](https://www.npmjs.com/package/remark-parse)를 사용하여 마크다운 파싱(텍스트에서 [mdast](https://github.com/syntax-tree/mdast)로).
         5. 플러그인이 정의한 마크다운-마크다운 변환을 적용합니다.
         6. [remark-rehype](https://github.com/remarkjs/remark-rehype)를 사용하여 마크다운을 HTML로 변환([mdast](https://github.com/syntax-tree/mdast)에서 [hast](https://github.com/syntax-tree/hast)로).
         7. 플러그인이 정의한 HTML-HTML 변환을 적용합니다.
   4. 플러그인을 사용하여 원하지 않는 콘텐츠를 필터링합니다.
   5. 플러그인을 사용하여 파일을 내보냅니다.
      1. 각 이미터 플러그인이 선언한 모든 정적 리소스(예: 외부 CSS, JS 모듈 등)를 수집합니다.
      2. HTML 파일을 내보내는 이미터는 여기서 약간의 추가 작업을 수행합니다. 파싱 단계에서 생성된 [hast](https://github.com/syntax-tree/hast)를 JSX로 변환해야 하기 때문입니다. 이는 [Preact](https://preactjs.com/) 런타임과 함께 [hast-util-to-jsx-runtime](https://github.com/syntax-tree/hast-util-to-jsx-runtime)을 사용하여 수행됩니다. 마지막으로 JSX는 [preact-render-to-string](https://github.com/preactjs/preact-render-to-string)을 사용하여 HTML로 렌더링됩니다(즉, `useState`, `useEffect` 또는 다른 React/Preact 인터랙티브 비트는 신경 쓰지 않습니다). 여기서 우리는 `quartz.layout.ts`에서 페이지 [[layout]]을 조립하고, 실제로 클라이언트에 전달되는 모든 인라인 스크립트를 조립하고, 모든 트랜스파일된 스타일을 조립하는 등 재미있는 작업을 많이 합니다. 이 로직의 대부분은 `quartz/components/renderPage.tsx`에서 찾을 수 있습니다. 주목할 만한 다른 재미있는 것들:
         1. CSS는 [Lightning CSS](https://github.com/parcel-bundler/lightningcss)를 사용하여 최소화되고 변환되어 벤더 접두사를 추가하고 구문을 낮춥니다.
         2. 스크립트는 `beforeDOMLoaded`와 `afterDOMLoaded`로 나뉘어 각각 `<head>`와 `<body>`에 삽입됩니다.
      3. 마지막으로 각 이미터 플러그인은 자체 내보낸 파일을 디스크에 쓰는 책임이 있습니다.
   6. `--serve` 플래그가 감지된 경우, 콘텐츠 변경(`.md` 파일만)을 감지하기 위한 또 다른 파일 감시자도 설정합니다. 각 슬러그에 대해 파싱된 AST와 플러그인 데이터를 추적하는 콘텐츠 맵을 유지하고 파일 변경 시 이를 업데이트합니다. 새로 추가되거나 수정된 경로는 다시 빌드되어 콘텐츠 맵에 추가됩니다. 그런 다음 모든 필터와 이미터가 결과 콘텐츠 맵에 대해 실행됩니다. 이 파일 감시자는 250ms의 임계값으로 디바운스됩니다. 성공하면 전달된 콜백 함수를 사용하여 클라이언트 새로 고침 신호를 보냅니다.

## 클라이언트 측

1. 브라우저가 Quartz 페이지를 열고 HTML을 로드합니다. `<head>`는 또한 페이지 스타일(`public/index.css`로 내보내짐)과 페이지 중요 JS(`public/prescript.js`로 내보내짐)를 링크합니다.
2. 그런 다음 본문이 로드되면 브라우저는 중요하지 않은 JS(`public/postscript.js`로 내보내짐)를 로드합니다.
3. 페이지 로딩이 완료되면 페이지는 사용자 정의 합성 브라우저 이벤트 `"nav"`를 디스패치합니다. 이는 컴포넌트가 선언한 클라이언트 측 스크립트가 페이지 DOM에 접근해야 하는 모든 것을 '설정'할 수 있도록 사용됩니다.
   1. [[configuration]]에서 [[SPA Routing|enableSPA 옵션]]이 활성화된 경우, 이 `"nav"` 이벤트는 컴포넌트가 이벤트 핸들러와 상태를 등록 해제하고 다시 등록할 수 있도록 클라이언트 탐색에서도 발생합니다.
   2. 그렇지 않은 경우, SPA와 비SPA 컨텍스트 모두에서 상태가 일관되게 설정되도록 페이지 로드 후 한 번만 `"nav"` 이벤트가 발생하도록 연결합니다.

플러그인 시스템의 아키텍처와 설계는 [[making plugins|자신만의 플러그인 만들기]] 가이드에서 더 자세히 설명되어 있으므로 여기서는 의도적으로 모호하게 남겨두었습니다.
