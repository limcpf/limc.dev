import Page from "@/libs/class/Page.class";

type getList<T> = (page?: string) => Promise<Page<T> | undefined>;
type getListById<T> = (id: string, page?: string) => Promise<Page<T> | undefined>;

export type getListFunc<T> = getList<T> | getListById<T>;
