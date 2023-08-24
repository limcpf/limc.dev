export default class SeriesDto {
    id?: string;
    site: string;
    topic: string;
    title: string;

    constructor(
        site: string,
        topic: string,
        title: string,
        id?: string
    ) {
       this.id = id;
       this.site = site;
       this.topic = topic;
       this.title = title;
    }
}