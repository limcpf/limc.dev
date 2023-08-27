import Topic from "@/libs/class/Topic.class";

export default function TopicHeader({
  topic,
}: {
  topic: Topic;
}) {
  return (
    <div className="text-center py-3 border-b">
      <h3 className="text-xl">{topic.site}</h3>
      <h1 className="font-bold text-3xl">{topic.name}</h1>
      <div className="grid grid-rows-2 grid-cols-2 px-3">
        <div className="col-span-1 row-span-1 text-left">
          <span className="text-sm font-extralight text-gray-500">
            해당 토픽 시리즈 총 개수 :{" "}
          </span>
          <span className={"text-sm font-extralight"}>{topic.seriesCnt}개</span>
        </div>
        <div className="col-span-1 row-span-1 text-right">
          <span className="text-sm font-extralight text-gray-500">
            생성일자 :{" "}
          </span>
          <span className={"text-sm font-extralight"}>
            {new Date(topic.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="col-span-1 row-span-1 text-left">
          <span className="text-sm font-extralight text-gray-500">
            해당 토픽 게시글 총 개수 :{" "}
          </span>
          <span className={"text-sm font-extralight"}>{topic.postCnt}개</span>
        </div>
        <div className="col-span-1 row-span-1 text-right">
          <span className="text-sm font-extralight text-gray-500">
            수정일자 :{" "}
          </span>
          <span className={"text-sm font-extralight"}>
            {new Date(topic.updatedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
