import {
  METHOD,
  METHODS,
  NEXT_PUBLIC_SERVER_URL,
  URLS,
} from "@/libs/constant/api.const";

function getBasicInit(method: METHOD, isAdmin: boolean, body?: any) {
  /** Header 정의 */
  let header: Headers = new Headers();
  header.set("Content-type", "application/json");

  /** Option 정의 */
  const option: RequestInit = {
    method: method,
    headers: header,
    next: { revalidate: 60 },
  };

  /** post, patch 인 경우 body 정의 */
  if ((method === METHODS.POST || method === METHODS.PATCH) && !!body) {
    option.body = JSON.stringify(body);
  }

  if (isAdmin) option.credentials = "include";

  return option;
}

export async function limcFetch(
  url: string,
  method: METHOD,
  isAdmin: boolean,
  body?: any,
) {
  const option = getBasicInit(method, isAdmin, body);

  const response = await fetch(url, option);
  let json;

  try {
    json = await response.json();
  } catch (e) {
    json = response.ok;
  }

  if (response.ok) {
    return json;
  } else {
    throw new Error(json.error || "알 수 없는 오류입니다.");
  }
}
export const getUrl = (url: URLS, suffix?: string) => {
  return `${NEXT_PUBLIC_SERVER_URL}${url}${suffix ? suffix : ""}`;
};

export const exceptionHandler = (e: any) => {
  if (e instanceof Error) {
    if (process.env.NODE_ENV === "development") console.log(e);
    if (e.message === "Unauthorized")
      throw new Error("로그인이 필요한 서비스입니다.");
    throw new Error("알 수 없는 오류입니다.");
  }
};
