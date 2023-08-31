import Post from "@/libs/class/Post.class";
import Link from "next/link";

export default function PostTitle({
  post
}: {
  post: Post;
}) {
  const {title, seriesName, topicName, topic, series, createdAt, updatedAt} = post;
  const smallTextClassName = "row-span-1 text-xs text-gray-400 font-extralight";
    const topicTextClassName = "row-span-1 text-sm !text-gray-400 font-extralight";
  return (<div className="flex flex-col my-5 border-b pb-3 text-center">
      <title>{'LimC | ' + post.title}</title>
      <div className={topicTextClassName}>
          <Link href={`/topic/${topic}`}>{topicName}</Link>
      </div>
      {
          post.seriesName && (<div className={topicTextClassName}>
              <Link href={`/series/${series}`} >{seriesName}</Link>
          </div>)
      }

      <div className="font-bold ">
          <h1 className="!text-4xl !mt-0 sm:!text-5xl !border-b-0">{title}</h1>
      </div>
      <div className="w-full grid grid-rows-2 text-right">
          <div className={smallTextClassName}>
              작성 시간 : {new Date(createdAt).toLocaleString()}
          </div>
          <div className={smallTextClassName}>
              최근 수정한 시간 : {new Date(updatedAt).toLocaleString()}
          </div>
      </div>
  </div>);
}
