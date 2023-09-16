"use client";

import SiteList from "@/components/Site/List/SiteList";
import {getSitePageInAdmin} from "@/libs/api/private.api";

export default function AdminSite() {
  return <SiteList getFunc={getSitePageInAdmin} isAdmin={true} />;
}
