export default class PostDto {
  id?: string;
  title: string;
  summary?: string;
  content: string;
  site: string;
  topic: string;
  series?: string;

  constructor(
    title: string,
    content: string,
    site: string,
    topic: string,
    series?: string,
    id?: string,
    summary?: string,
  ) {
    this.id = id;
    this.title = title;
    this.summary = summary;
    this.content = content;
    this.site = site;
    this.topic = topic;
    this.series = series;
  }
}
