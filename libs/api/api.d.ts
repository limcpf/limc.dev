import Page from "@/libs/class/Page.class";

type getList<T> = (page?: string) => Promise<Page<T>>;
type getListById<T> = (id: string, page?: string) => Promise<Page<T>>;

export type getListFunc<T> = getList<T> | getListById<T>;
