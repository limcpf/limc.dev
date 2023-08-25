export default class Series {
  id: string;
  site: string;
  topic: string;
  topicName: string;
  title: string;
  postCnt: number;
  createdAt: string;
  updatedAt: string;

  constructor(
    id: string,
    site: string,
    topic: string,
    topicName: string,
    title: string,
    postCnt: number,
    createdAt: string,
    updatedAt: string,
  ) {
    this.id = id;
    this.site = site;
    this.topic = topic;
    this.topicName = topicName;
    this.title = title;
    this.postCnt = postCnt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
