export const NEXT_PUBLIC_SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_SERVER_URL;
export const METHODS = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE",
} as const;

export type METHOD = typeof METHODS[keyof typeof METHODS];

export const URLS = {
    login: "/api/public/login",
    postPri: "/api/private/post",
    seriesPri: "/api/private/series",
    topicPri: "/api/private/topic",
    sitePri: "/api/private/site",
    postPub: "/api/public/post",
    seriesPub: "/api/public/series",
    topicPub: "/api/public/topic",
    sitePub: "/api/public/site",
    getPostPageBySeriesPub: "/api/public/post/series",
    getPostPageByTopicPub: "/api/public/post/topic",
    getPostPageBySitePub: "/api/public/post/site",
    getSeriesPageByTopicPub: "/api/public/series/topic",
    getSeriesPageBySitePub: "/api/public/series/site",
    getTopicPageBySitePub: "/api/public/topic/site",
    togglePublished: "/api/private/post/publish",
} as const;

export type URLS = typeof URLS[keyof typeof URLS];
