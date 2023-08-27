"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import SiteList from "@/components/Site/List/SiteList";
import { getSitePageInAdmin } from "@/libs/api/Admin.api";

export default function AdminSite({ searchParams }: { searchParams: Params }) {
  const page = searchParams.page;

  return <SiteList getFunc={getSitePageInAdmin} page={page} isAdmin={true} />;
}
