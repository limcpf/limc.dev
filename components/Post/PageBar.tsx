"use client";

import { useRouter } from "next/navigation";
import Page from "@/libs/class/Page.class";

export default function PageBar<T>({
  tPage,
}: {
  tPage: Page<T> | undefined;
  setPage?: (page: string) => void;
}) {
  if (!tPage) return <></>;
  const router = useRouter();
  const curPage = tPage.pageable.pageNumber;

  const pageBtnClass = "flex items-center cursor-pointer text-xl";

  return (
    <div className="grid grid-cols-12 w-full">
      <div
        className={`${
          tPage.first && "hidden"
        } col-start-1 col-end-2 md:col-start-4 md:col-end-5 ${pageBtnClass} justify-end`}
        onClick={() => router.push(`?page=${curPage - 1}`)}
      >
        {`⬅`}
      </div>
      <div className="col-start-2 col-end-12  md:col-start-5 md:col-end-8 flex justify-center items-center my-3">
        <form className={"w-5/6 grid grid-cols-12"}>
          <div className="relative col-span-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg">
            <input
              id="page"
              name="page"
              type="number"
              className="block w-4/5 bg-gray-50 rounded-s-lg p-2.5 focus:outline-none"
              min={1}
              max={tPage.totalPages}
              defaultValue={curPage || "1"}
              required
            />
            <span className="text-gray-300 absolute right-0 bottom-0.5 font-medium rounded-lg text-sm px-4 py-2 ">{`/ ${tPage.totalPages}`}</span>
          </div>
          <button
            type="submit"
            className="col-span-4 border border-gray-300 bg-white p-2.5 text-sm  text-gray-700 rounded-e-lg hover:bg-gray-100 active:bg-gray-200 border-l-0"
          >
            이동
          </button>
        </form>
      </div>
      <div
        className={`${
          tPage.last && "hidden"
        } col-start-12 col-end-13 md:col-start-8 md:col-end-9 ${pageBtnClass} justify-start`}
        onClick={() => router.push(`?page=${curPage}`)}
      >
        {`➡`}
      </div>
    </div>
  );
}
