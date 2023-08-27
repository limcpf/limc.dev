"use client";

import {useRouter} from "next/navigation";
import Site from "@/libs/class/Site.class";

export default function SiteListItemBody({ site, isAdmin }: { site: Site, isAdmin?:boolean }) {
  const router = useRouter();
  const { name} = site;

  const gridCommon =
    " grid sm:row-span-full cursor-pointer text-center hover:bg-gray-50 cursor-pointer";

  return (
    <div
      onClick={() => router.push(`${isAdmin ? "/admin" : ""}/site/${name}`)}
      className={
        gridCommon +
        " grid-cols-1 grid-rows-3 sm:grid-cols-4 sm:grid-rows-2 gap-x-1 py-3 border-b  sm:mt-1"
      }
    >
      <div
        className={
          gridCommon +
          " flex justify-center items-center col-span-full row-span-full pt-2 sm:pt-0 sm:py-2 hover:bg-gray-50"
        }
      >
        <div className="col-span-full row-span-full text-center">{name}</div>
      </div>
    </div>
  );
}
