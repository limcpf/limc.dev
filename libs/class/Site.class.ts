export default class Site {
  name: string;
  topicCnt?: number;
  seriesCnt?: number;
  postCnt?: number;
  createdAt: string;
  updatedAt: string;

  constructor(
    name: string,
    createdAt: string,
    updatedAt: string,
    topicCnt: number,
    seriesCnt?: number,
    postCnt?: number,
  ) {
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.seriesCnt = seriesCnt;
    this.postCnt = postCnt;
    this.topicCnt = topicCnt;
  }
}
