import React from "react";
import Site from "@/libs/class/Site.class";
import SiteListItemBody from "@/components/Site/List/SiteListItemBody";
import SiteListItemFooter from "@/components/Site/List/SiteListItemFooter";

export default function SiteListItem({
  site,
  isAdmin,
}: { site: Site; isAdmin?: boolean }) {
  return (
    <div className="border-b-gray-300 border-b">
      <SiteListItemBody site={site} isAdmin={isAdmin} />
      {isAdmin && <SiteListItemFooter name={site.name} />}
    </div>
  );
}
