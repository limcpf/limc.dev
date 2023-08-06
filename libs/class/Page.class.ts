export default class Page<T> {
  content: [T];
  pageable: {
    sort: {
      empty: boolean,
      sorted: boolean,
      unsorted: boolean
    },
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean
  };

  last: boolean;
  totalPages: number;
  totalElements: number;
  first:boolean;
  size:number;
  sort: {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
  };
  numberOfElements: number;
  empty: boolean;

  constructor(
      content: [T],
      pageable: {
        sort: {
          empty: boolean,
          sorted: boolean,
        unsorted: boolean
        },
        offset: number,
        pageNumber: number,
        pageSize: number,
        paged: boolean,
        unpaged: boolean
      },
      last: boolean,
      totalPages: number,
      totalElements: number,
      first:boolean,
      size:number,
      sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
      },
      numberOfElements: number,
      empty: boolean
  ) {
    this.content = content;
    this.pageable = pageable;
    this.last = last;
    this.totalElements = totalElements;
    this.totalPages = totalPages;
    this.first = first;
    this.size = size;
    this.sort = sort;
    this.numberOfElements = numberOfElements;
    this.empty = empty;
  }

}