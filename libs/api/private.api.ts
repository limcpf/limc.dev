import { AdminDto } from "@/libs/dto/admin/AdminDto";
import LoginDto from "@/libs/dto/admin/LoginDto";
import Page from "../class/Page.class";
import Post from "../class/Post.class";
import { METHOD, METHODS, URLS } from "@/libs/constant/api.const";
import PostDto from "@/libs/dto/admin/PostDto";
import Series from "@/libs/class/Series.class";
import SeriesDto from "@/libs/dto/admin/SeriesDto";
import TopicDto from "@/libs/dto/admin/TopicDto";
import Topic from "@/libs/class/Topic.class";
import Site from "@/libs/class/Site.class";
import SiteDto from "@/libs/dto/admin/SiteDto";
// @ts-ignore
import { exceptionHandler, getUrl, limcFetch } from "@/libs/api/common.api";

/**
 * common Function
 */
async function adminFetch(url: string, method: METHOD, body?: any) {
  return await limcFetch(url, method, true, body);
}

/**
 * common Function
 */
async function getPageInAdmin<T>(url: URLS, page?: string) {
  try {
    const response = await adminFetch(
      getUrl(url, `?page=${page || "1"}`),
      METHODS.GET,
    );
    return response as Page<T>;
  } catch (e) {
    exceptionHandler(e);
  }
}
async function getOneInAdmin<T>(url: URLS, id: string) {
  try {
    const response = await adminFetch(getUrl(url, `/${id}`), METHODS.GET);
    return response as T;
  } catch (e) {
    exceptionHandler(e);
  }
}
async function getOnePageByOneInAdmin<T>(url: URLS, id: string, page?: string) {
  try {
    const response = await adminFetch(
      getUrl(url, `/${id}?page=${page || "1"}`),
      METHODS.GET,
    );
    return response as Page<T>;
  } catch (e) {
    exceptionHandler(e);
  }
}
async function deleteOne(url: URLS, id: string) {
  try {
    await adminFetch(getUrl(url, `/${id}`), METHODS.DELETE);
    return true;
  } catch (e) {
    exceptionHandler(e);
  }
}
async function getOneList(url: URLS, id?: string) {
  try {
    const suffix = `/list${id ? "/" + id : ""}`;
    const response = await adminFetch(getUrl(url, suffix), METHODS.GET);
    return response as { key: string; value: string };
  } catch (e) {
    exceptionHandler(e);
  }
}
async function addOrUpdate<T>(url: URLS, isUpdate: boolean, body: any) {
  try {
    const response = await adminFetch(
      getUrl(url),
      isUpdate ? METHODS.PATCH : METHODS.POST,
      body,
    );
    return response as T;
  } catch (e) {
    exceptionHandler(e);
  }
}

/**
 * export Function
 */
export async function togglePublished(id: string) {
  try {
    const response = await adminFetch(
      getUrl(URLS.togglePublished, `${id}`),
      METHODS.GET,
    );
    return response as boolean;
  } catch (e) {
    exceptionHandler(e);
  }
}
export async function login(adminDto: AdminDto) {
  try {
    const url = getUrl(URLS.login);
    const response = await adminFetch(url, METHODS.POST, adminDto);

    return response as LoginDto;
  } catch (e: any) {
    exceptionHandler(e);
  }
}

export const getPostPageInAdmin = async (page?: string) =>
  await getPageInAdmin<Post>(URLS.postPri, page);
export const getSeriesPageInAdmin = async (page?: string) =>
  await getPageInAdmin<Series>(URLS.seriesPri, page);
export const getTopicPageInAdmin = async (page?: string) =>
  await getPageInAdmin<Topic>(URLS.topicPri, page);
export const getSitePageInAdmin = async (page?: string) =>
  await getPageInAdmin<Site>(URLS.sitePri, page);
export const getPostInAdmin = async (id: string) =>
  await getOneInAdmin<Post>(URLS.postPri, id);
export const getSeriesInAdmin = async (id: string) =>
  await getOneInAdmin<Series>(URLS.seriesPri, id);
export const getTopicInAdmin = async (id: string) =>
  await getOneInAdmin<Topic>(URLS.topicPri, id);
export const getSiteInAdmin = async (id: string) =>
  await getOneInAdmin<Site>(URLS.sitePri, id);
export const getPostPageBySeries = async (id: string, page?: string) => {
  return await getOnePageByOneInAdmin<Post>(
    URLS.getPostPageBySeriesPub,
    id,
    page,
  );
};
export const getPostPageByTopic = async (id: string, page?: string) => {
  return await getOnePageByOneInAdmin<Post>(
    URLS.getPostPageByTopicPub,
    id,
    page,
  );
};
export const getSeriesPageByTopic = async (id: string, page?: string) => {
  return await getOnePageByOneInAdmin<Post>(
    URLS.getPostPageByTopicPub,
    id,
    page,
  );
};
export const getPostPageBySiteInAdmin = async (id: string, page?: string) => {
  return await getOnePageByOneInAdmin<Post>(
    URLS.getPostPageBySitePub,
    id,
    page,
  );
};
export const getSeriesByTopicInAdmin = async (id: string, page?: string) => {
  return await getOnePageByOneInAdmin<Series>(
    URLS.getSeriesPageByTopicPub,
    id,
    page,
  );
};
export const getSeriesBySiteInAdmin = async (id: string, page?: string) => {
  return await getOnePageByOneInAdmin<Series>(
    URLS.getSeriesPageBySitePub,
    id,
    page,
  );
};
export const getTopicBySiteInAdmin = async (name: string, page?: string) => {
  return await getOnePageByOneInAdmin<Topic>(
    URLS.getTopicPageBySitePub,
    name,
    page,
  );
};
export const deletePost = async (id: string) =>
  await deleteOne(URLS.postPri, id);
export const deleteSeries = async (id: string) =>
  await deleteOne(URLS.seriesPri, id);
export const deleteTopic = async (id: string) =>
  await deleteOne(URLS.topicPri, id);
export const deleteSite = async (id: string) =>
  await deleteOne(URLS.sitePri, id);
export const getSiteList = async () => await getOneList(URLS.sitePri);
export const getTopicList = async (id?: string) =>
  await getOneList(URLS.topicPri, id);
export const getSeriesList = async (id?: string) =>
  await getOneList(URLS.seriesPri, id);
export const addPost = async (postDto: PostDto) =>
  await addOrUpdate<Post>(URLS.postPri, false, postDto);
export const addSeries = async (seriesDto: SeriesDto) =>
  await addOrUpdate<Series>(URLS.seriesPri, false, seriesDto);
export const addTopic = async (topicDto: TopicDto) =>
  await addOrUpdate<Topic>(URLS.topicPri, false, topicDto);
export const addSite = async (siteDto: SiteDto) =>
  await addOrUpdate<Site>(URLS.sitePri, false, siteDto);
export const updatePost = async (postDto: PostDto) =>
  await addOrUpdate<Post>(URLS.postPri, true, postDto);
export const updateSeries = async (seriesDto: SeriesDto) =>
  await addOrUpdate<Series>(URLS.seriesPri, true, seriesDto);
export const updateTopic = async (topicDto: TopicDto) =>
  await addOrUpdate<Topic>(URLS.topicPri, true, topicDto);

// export async function logout() {
//   const url = `${NEXT_PUBLIC_SERVER_URL}/api/public/logout`;
//   const response = await adminFetch(url, METHODS.GET);
//
//   return response.ok;
// }
