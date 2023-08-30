"use client";

import Page from "@/libs/class/Page.class";
import React, {useEffect, useState} from "react";
import {getListFunc} from "@/libs/api/api";
import Loading from "@/components/Util/Loading";
import PageBar from "@/components/Post/PageBar";
import AddBtn from "@/components/Admin/addBtn";
import Site from "@/libs/class/Site.class";
import SiteListItem from "@/components/Site/List/SiteListItem";

export default function SiteList({
  id,
  page,
  getFunc,
  isAdmin,
}: {
  id?: string;
  page?: string;
  getFunc: getListFunc<Site>;
  isAdmin?: boolean;
}) {
  const [curPageSite, setCurPageSite] = useState<Page<Site>>();

  const callbackPageSite = (pageSite?: Page<Site>) => {
    setCurPageSite(pageSite);
  };

  useEffect(() => {
    if (id) getFunc(id, page).then(callbackPageSite);
    else getFunc(page || "1").then(callbackPageSite);
  }, [page]);

  return (
    <main className="w-full flex flex-col p-3">
      {isAdmin && <AddBtn href="/admin/site/add" text={"생성"} />}
      <div className="hidden ! sm:block sm:border-b sm:border-b-gray-300 sm:pb-3">
        <div className={"text-center font-bold col-span-3"}>사이트명</div>
      </div>
      {curPageSite ? (
        curPageSite.content.length > 0 ? (
          curPageSite.content.map((site) => (
            <SiteListItem site={site} isAdmin={isAdmin} />
          ))
        ) : (
          <div className={"h-52 flex justify-center items-center w-full "}>
            등록된 사이트가 없습니다.
          </div>
        )
      ) : (
        <Loading />
      )}

      {curPageSite && <PageBar<Site> tPage={curPageSite} />}
    </main>
  );
}
