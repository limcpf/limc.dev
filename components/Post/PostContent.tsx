"use client";
import Markdown from "@/components/Util/Markdown";

export default function PostContent({
  content,
}: {
  content: string;
}) {
  return (
    <div className="post-content tracking-wide text-justify leading-6">
      <Markdown content={content} />
    </div>
  );
}
