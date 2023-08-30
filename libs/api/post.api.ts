import Post from "@/libs/class/Post.class";
import Page from "@/libs/class/Page.class";
import { METHODS, NEXT_PUBLIC_SERVER_URL } from "@/libs/constant/api.const";

// export async function getPostPage(page?: string) {
//   const t = await fetch(
//     `${NEXT_PUBLIC_SERVER_URL}/api/public/post/site/DEV?page=${page || "1"}`,
//     {
//       next: { revalidate: 60 },
//     },
//   );
//   if (t.ok) {
//     const json = await t.json();
//     return json as Page<Post>;
//   } else {
//     throw new Error(t.statusText);
//   }
// }
export async function getPostPage(page?: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/public/post/site/DEV?page=${
    page || "1"
  }`;
  const response = await fetch(url, { method: METHODS.GET });
  const json = await response.json();

  if (response.ok) return json as Page<Post>;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}
export async function getPost(id: string) {
  try {
    Number(id);
  } catch (e) {
    throw new Error("옳지 않은 id 값 입니다.");
  }
  const t = await fetch(`${NEXT_PUBLIC_SERVER_URL}/api/public/post/${id}`);
  if (t.ok) {
    const json = await t.json();
    return json as Post;
  } else {
    throw new Error(t.statusText);
  }
}
