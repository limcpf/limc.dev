'use client';

import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import React, {useEffect, useState} from "react";
import Page from "@/libs/class/Page.class";
import Series from "@/libs/class/Series.class";
import AdminSeriesList from "@/app/admin/series/AdminSeriesList";
import {getSeriesPageInAdmin} from "@/libs/api/Admin.api";
import AddBtn from "@/components/Admin/addBtn";

export default function AdminSeries({ searchParams }: { searchParams: Params }) {
    const [series, setSeries] = useState<Page<Series>>();
    const [page, setPage] = useState<string>(searchParams.page);

    useEffect(() => {
        getSeriesPageInAdmin(page)
            .then((page: Page<Series>) => {
                setSeries(page);
            })
    }, [page])

    return (<>
        <AddBtn href="/admin/series/add" text={"생성"} />
        {
            series
                ? <AdminSeriesList series={series} />
                : <></>
        }
    </>);
}