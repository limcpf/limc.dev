'use client';

import Page from "@/libs/class/Page.class";
import {FormEventHandler, useRef} from "react";

export default function PageBar<T>({
  tPage,
    setPage
}: {
  tPage: Page<T>;
  setPage: Function;
}) {
  const numberRef = useRef<HTMLInputElement>(null)
  const curPage = tPage.pageable.pageNumber;

  const pageBtnClass = "flex items-center cursor-pointer text-xl";
  const arrowClass = "col-start-1 col-end-2 md:col-start-4 md:col-end-5 " + pageBtnClass;

  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    if(numberRef && numberRef.current && numberRef.current.value) {
      const p = curPage ? `${curPage}` : "1";
      if(p != numberRef.current.value) setPage(numberRef.current.value)
      else alert("같은 페이지로는 이동할 수 없습니다.");
    }
  }

    return (
    <div className="grid grid-cols-12 w-full">
        { /* 페이지 이전 버튼*/
            !tPage.first && (
                <div
                    className={`justify-end ${arrowClass}`}
                    onClick={() => setPage(`${curPage - 1}`)}
                >
                   {`⬅`}
                </div>
            )
        }
      <div className="col-start-2 col-end-12  md:col-start-5 md:col-end-8 flex justify-center items-center my-3">
        <form className={"w-5/6 grid grid-cols-12"} onSubmit={onSubmit}>
          <div className="relative col-span-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg">
            <input
              id="page"
              name="page"
              type="number"
              className="block w-4/5 bg-gray-50 rounded-s-lg p-2.5 focus:outline-none"
              min={1}
              max={tPage.totalPages}
              defaultValue={curPage || "1"}
              ref={numberRef}
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
        { /* 페이지 다음 버튼*/
            !tPage.last && (
                <div
                    className={`justify-start ${arrowClass}`}
                    onClick={() => setPage(`${curPage + 1}`)}
                >
                    {`➡`}
                </div>
            )
        }
    </div>
  );
}
