import { exceptionHandler, getUrl, limcFetch } from "@/libs/api/common.api";
import { METHODS, URLS } from "@/libs/constant/api.const";
import Topic from "@/libs/class/Topic.class";
import Page from "@/libs/class/Page.class";
import Series from "@/libs/class/Series.class";

export const getTopicById = async (id: string) => {
  try {
    const url = getUrl(URLS.topicPub, `/${id}`);
    const topic = await limcFetch(url, METHODS.GET, false);

    return topic as Topic;
  } catch (e) {
    exceptionHandler(e);
  }
};
export const getSeriesById = async (id: string) => {
  try {
    const url = getUrl(URLS.seriesPub, `/${id}`);
    const series = await limcFetch(url, METHODS.GET, false);

    return series as Series;
  } catch (e) {
    exceptionHandler(e);
  }
};
export const getSeriesPageBySite = async (page?: string) => {
  try {
    const url = getUrl(URLS.getSeriesPageBySitePub, `/DEV?page=${page || "1"}`);
    const seriesPage = await limcFetch(url, METHODS.GET, false);

    return seriesPage as Page<Series>;
  } catch (e) {
    exceptionHandler(e);
  }
};
export const getTopicPageBySite = async (page?: string) => {
  try {
    const url = getUrl(URLS.getTopicPageBySitePub, `/DEV?page=${page || "1"}`);
    const topicPage = await limcFetch(url, METHODS.GET, false);

    return topicPage as Page<Topic>;
  } catch (e) {
    exceptionHandler(e);
  }
};
