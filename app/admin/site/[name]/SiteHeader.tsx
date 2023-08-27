import Site from "@/libs/class/Site.class";

export default function SiteHeader({
  site,
}: {
  site: Site;
}) {
  return (
    <div className="text-center py-3 border-b">
      <h1 className="font-bold text-3xl">{site.name}</h1>
      <div className="grid grid-rows-3 grid-cols-2 px-3">
        <div className="col-span-1 row-span-1 text-left">
          <span className="text-sm font-extralight text-gray-500">
            해당 사이트 토픽 총 개수 :
          </span>
          <span className={"text-sm font-extralight"}>{site.topicCnt}개</span>
        </div>
        <div className="col-span-1 row-span-1 text-right">
          <span className="text-sm font-extralight text-gray-500">
            생성일자 :
          </span>
          <span className={"text-sm font-extralight"}>
            {new Date(site.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="col-span-1 row-span-1 text-left">
          <span className="text-sm font-extralight text-gray-500">
            해당 사이트 시리즈 총 개수 :
          </span>
          <span className={"text-sm font-extralight"}>{site.seriesCnt}개</span>
        </div>
        <div className="col-span-1 row-span-1 text-right">
          <span className="text-sm font-extralight text-gray-500">
            수정일자 :{" "}
          </span>
          <span className={"text-sm font-extralight"}>
            {new Date(site.updatedAt).toLocaleDateString()}
          </span>
        </div>
        <div className="col-span-1 row-span-1 text-left">
          <span className="text-sm font-extralight text-gray-500">
            해당 사이트 게시글 총 개수 :
          </span>
          <span className={"text-sm font-extralight"}>{site.postCnt}개</span>
        </div>
      </div>
    </div>
  );
}
