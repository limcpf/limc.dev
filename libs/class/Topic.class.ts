export default class Topic {
  id: string;
  site: string;
  name: string;
  seriesCnt?: number;
  postCnt?: number;
  createdAt: string;
  updatedAt: string;

  constructor(
    id: string,
    site: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    seriesCnt?: number,
    postCnt?: number,
  ) {
    this.id = id;
    this.site = site;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.seriesCnt = seriesCnt;
    this.postCnt = postCnt;
  }
}
