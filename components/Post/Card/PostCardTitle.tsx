import Link from "next/link";
import Post from "@/libs/class/Post.class";

export default function PostCardTitle({
  post, isAdmin
}: {
  post: Post;
  isAdmin?: boolean;
}) {
  const { topicName, topic, seriesName, series, title, id } = post;
  return (
    <div className="flex flex-col justify-center mb-3">
      <div className="pre-title flex text-sm max-w-fit font-extralight text-gray-500 mb-1">
        <Link href={`/topic/${topic}`} className="topic mr-1 hover:underline">
          {topicName}
        </Link>
        {seriesName && (
          <Link href={`/series/${series}`} className="series ">
            {" "}
            | <span className="hover:underline">{seriesName}</span>
          </Link>
        )}
      </div>
      <div className="text-2xl sm:text-md font-bold line-clamp-3 sm:line-clamp-1">
        <Link href={`/post/${id}`}>{title}</Link>
      </div>
    </div>
  );
}
