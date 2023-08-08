import Post from "@/libs/class/Post.class";
import Page from "@/libs/class/Page.class";

const NEXT_PUBLIC_SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_SERVER_URL;

export async function getPostPage(page?: string) {
  const t = await fetch(
    `${NEXT_PUBLIC_SERVER_URL}/api/post/site/DEV?page=${page || "1"}`,
  );
  if (t.ok) {
    const json = await t.json();
    return json as Page<Post>;
  } else {
    throw new Error("통신 실패");
  }
}
export async function getPost(id: string) {
  try {
    Number(id);
  } catch (e) {
    throw new Error("옳지 않은 id 값 입니다.");
  }
  const t = await fetch(`${NEXT_PUBLIC_SERVER_URL}/api/post/${id}`);
  if (t.ok) {
    const json = await t.json();
    return json as Post;
  } else {
    throw new Error("통신 실패");
  }
}
