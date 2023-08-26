import Link from "next/link";
import Post from "@/libs/class/Post.class";

export default function PostListItemHeader({
    post,
    isAdmin
}: {
    post: Post;
    isAdmin?: boolean;
}) {
    const { topicName, topic, seriesName, series, title, id } = post;
    return (
        <div className="flex flex-col justify-center ">
            <div className="pre-title flex text-sm max-w-fit font-extralight text-gray-500 mb-1">
                <Link href={`${isAdmin && "/admin"}/topic/${topic}`} className="topic mr-1 hover:underline">
                    {topicName}
                </Link>
                {seriesName && (
                    <Link href={`${isAdmin && "/admin"}/series/${series}`} className="series ">
                        {" "}
                        | <span className="hover:underline">{seriesName}</span>
                    </Link>
                )}
            </div>
        </div>
    );
}
