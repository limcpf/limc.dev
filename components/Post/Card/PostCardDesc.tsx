import React from "react";
import Link from "next/link";

export default function PostCardDesc({
  id,
  summary,
  isAdmin,
}: {
  id: string;
  summary: string;
  isAdmin?: boolean;
}) {
  return (
    <div className="text-xs leading-5 line-clamp-3 font-light whitespace-normal break-words ">
      <Link href={`/post/${id}`}>{summary}</Link>
    </div>
  );
}
