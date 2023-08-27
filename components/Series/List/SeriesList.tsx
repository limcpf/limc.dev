import Page from "@/libs/class/Page.class";
import Series from "@/libs/class/Series.class";
import React, {useEffect, useState} from "react";
import {getListFunc} from "@/libs/api/api";
import Loading from "@/components/Util/Loading";
import PageBar from "@/components/Post/PageBar";
import SeriesListItem from "@/components/Series/List/SeriesListItem";
import AddBtn from "@/components/Admin/addBtn";

export default function SeriesList({id, page, getFunc, isAdmin}:{
    id?: string;
    page?: string;
    getFunc: getListFunc<Series>
    isAdmin?: boolean
}) {
    const [curPageSeries, setCurPageSeries]
        = useState<Page<Series>>();

    const callbackPageSeries = (pageSeries: Page<Series>) => {
        setCurPageSeries(pageSeries)
    };

    useEffect(() => {
        if(id) getFunc(id, page).then(callbackPageSeries);
        else getFunc(page || "1").then(callbackPageSeries);
    }, [page]);

    const title = " text-center font-light";

    return (
        <main className="w-full flex flex-col p-3">
            {isAdmin && <AddBtn href="/admin/series/add" text={"생성"} /> }
            <div className="hidden sm:grid sm:grid-cols-4 sm:border-b sm:border-b-gray-300 sm:pb-3">
                <div className={title}>주제</div>
                <div className={title + " col-span-3"}>제목</div>
            </div>
            {
                curPageSeries
                    ? (
                        curPageSeries.content.length > 0 ? (
                            curPageSeries.content.map((series) => <SeriesListItem series={series} isAdmin={isAdmin} />)
                        ) : (<div className={"h-52 flex justify-center items-center w-full "}>
                                등록된 시리즈가 없습니다.
                            </div>)
                    )
                    : <Loading />

            }

            {curPageSeries && <PageBar<Series> tPage={curPageSeries} />}
        </main>
    )

}