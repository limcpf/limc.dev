export default class Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  site: string;
  topic: string;
  topicName: string;
  series?: string;
  seriesName?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;

  constructor(
    id: string,
    title: string,
    summary: string,
    content: string,
    site: string,
    topic: string,
    topicName: string,
    series: string,
    seriesName: string,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
  ) {
    this.id = id;
    this.title = title;
    this.summary = summary;
    this.content = content;
    this.site = site;
    this.topic = topic;
    this.topicName = topicName;
    this.series = series;
    this.seriesName = seriesName;
    this.isPublished = isPublished;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
