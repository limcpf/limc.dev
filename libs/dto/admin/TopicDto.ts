export default class TopicDto {
  id?: string;
  site: string;
  name: string;
  seriesCnt?: number;
  postCnt?: number;

  constructor(
    site: string,
    name: string,
    id?: string,
    seriesCnt?: number,
    postCnt?: number,
  ) {
    this.id = id;
    this.site = site;
    this.name = name;
    this.seriesCnt = seriesCnt;
    this.postCnt = postCnt;
  }
}
