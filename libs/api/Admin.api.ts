import { AdminDto } from "@/libs/dto/admin/AdminDto";
import LoginDto from "@/libs/dto/admin/LoginDto";
import { NEXT_PUBLIC_SERVER_URL } from "@/libs/constant/Api.constant";
import Page from "../class/Page.class";
import Post from "../class/Post.class";
import { METHOD, METHODS } from "./Constant.api";
import PostDto from "@/libs/dto/admin/PostDto";
import Series from "@/libs/class/Series.class";
import SeriesDto from "@/libs/dto/admin/SeriesDto";
import TopicDto from "@/libs/dto/admin/TopicDto";
import Topic from "@/libs/class/Topic.class";

async function adminFetch(url: string, method: METHOD, body?: any) {
  let header: Headers = new Headers();
  header.set("Content-type", "application/json");
  const option: RequestInit = {
    method: method,
    headers: header,
    credentials: "include",
    next: { revalidate: 60 },
  };

  if ((method === METHODS.POST || method === METHODS.PATCH) && !!body) {
    option.body = JSON.stringify(body);
  }

  return await fetch(url, option);
}

export async function login(adminDto: AdminDto) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/public/login`;
  const response = await adminFetch(url, METHODS.POST, adminDto);
  const json = await response.json();

  if (response.ok) return json as LoginDto;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function getPostPageInAdmin(page?: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/post?page=${page || "1"}`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as Page<Post>;
  else {
    if (json.status === 404) return Page.getEmptyPage() as Page<Post>;
    else throw new Error(json.error || "알 수 없는 오류입니다.");
  }
}

export async function getSeriesPageInAdmin(page: string) {
  // const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/image/site/DEV?page=${page || "1"}`;
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/series?page=${
    page || "1"
  }`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as Page<Series>;
  else {
    if (json.status === 404) return Page.getEmptyPage() as Page<Series>;
    else throw new Error(json.error || "알 수 없는 오류입니다.");
  }
}

export async function getTopicPageInAdmin(page: string) {
  // const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/image/site/DEV?page=${page || "1"}`;
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/topic?page=${page || "1"}`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as Page<Topic>;
  else {
    if (json.status === 404) return Page.getEmptyPage() as Page<Topic>;
    else throw new Error(json.error || "알 수 없는 오류입니다.");
  }
}

export async function getPostInAdmin(id: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/post/${id}`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as Post;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function getSeriesInAdmin(id: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/series/${id}`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as Series;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function getTopicInAdmin(id: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/topic/${id}`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as Topic;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function getPostBySeriesInAdmin(id: string, page?: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/public/post/series/${id}?page=${
    page || "1"
  }`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as Page<Post>;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function getSeriesByTopicInAdmin(id: string, page?: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/public/series/topic/${id}?page=${
    page || "1"
  }`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as Page<Series>;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}
export async function getPostByTopicInAdmin(id: string, page?: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/public/post/topic/${id}?page=${
    page || "1"
  }`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as Page<Post>;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function logout() {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/public/logout`;
  const response = await adminFetch(url, METHODS.GET);

  return response.ok;
}

export async function togglePublished(id: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/post/publish/${id}`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as boolean;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function deletePost(id: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/post/${id}`;
  const response = await adminFetch(url, METHODS.DELETE);

  if (response.ok) {
    return true;
  } else {
    const json = await response.json();
    throw new Error(json.error || "알 수 없는 오류입니다.");
  }
}

export async function deleteSeries(id: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/series/${id}`;
  const response = await adminFetch(url, METHODS.DELETE);

  if (response.ok) {
    return true;
  } else {
    const json = await response.json();
    throw new Error(json.error || "알 수 없는 오류입니다.");
  }
}

export async function deleteTopic(id: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/topic/${id}`;
  const response = await adminFetch(url, METHODS.DELETE);

  if (response.ok) {
    return true;
  } else {
    const json = await response.json();
    throw new Error(json.error || "알 수 없는 오류입니다.");
  }
}

export async function getSiteList() {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/site/list`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as { key: string; value: string };
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}
export async function getTopicList(name?: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/topic/list/${name}`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as { key: string; value: string };
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function getSeriesList(name?: string) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/series/list/${name}`;
  const response = await adminFetch(url, METHODS.GET);
  const json = await response.json();

  if (response.ok) return json as { key: string; value: string };
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function addPost(postDto: PostDto) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/post`;
  const response = await adminFetch(url, METHODS.POST, postDto);
  const json = await response.json();

  if (response.ok) return json as Post;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function addSeries(seriesDto: SeriesDto) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/series`;
  const response = await adminFetch(url, METHODS.POST, seriesDto);
  const json = await response.json();

  if (response.ok) return json as Series;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function addTopic(topicDto: TopicDto) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/topic`;
  const response = await adminFetch(url, METHODS.POST, topicDto);
  const json = await response.json();

  if (response.ok) return json as Topic;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function updatePost(postDto: PostDto) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/post`;
  const response = await adminFetch(url, METHODS.PATCH, postDto);
  const json = await response.json();

  if (response.ok) return json as Post;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function updateSeries(seriesDto: SeriesDto) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/series`;
  const response = await adminFetch(url, METHODS.PATCH, seriesDto);
  const json = await response.json();

  if (response.ok) return json as Series;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function updateTopic(topicDto: TopicDto) {
  const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/topic`;
  const response = await adminFetch(url, METHODS.PATCH, topicDto);
  const json = await response.json();

  if (response.ok) return json as Topic;
  else throw new Error(json.error || "알 수 없는 오류입니다.");
}
