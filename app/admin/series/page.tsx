'use client';

import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {useEffect, useState} from "react";
import Page from "@/libs/class/Page.class";
import Series from "@/libs/class/Series.class";
import AdminSeriesList from "@/app/admin/series/AdminSeriesList";
import {getSeriesPageInAdmin} from "@/libs/api/Admin.api";

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
        {
            series
                ? <AdminSeriesList series={series} />
                : <></>
        }
    </>);
}