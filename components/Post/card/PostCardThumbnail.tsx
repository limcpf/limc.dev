'use client';
import Image from "next/image";

export default function PostCardThumbnail({goPost, url, alt}: {
  url?:string,
  alt?:string,
  goPost: () => void
}) {
  const imageAlt = alt ? alt : "";
  const image =  url ? (
      <Image src={url} alt={imageAlt}  fill sizes="100%" className="rounded-t-2xl p-2"/>
  ) : (
      <span>No Image</span>
  )

  return (
      <div
          className={`
            bg-white
            relative
            col-span-full
            row-span-3
            rounded-t-2xl cursor-pointer
            flex justify-center items-center
            ${url ? "" : "skeleton-img"}
          `}
          onClick={goPost}
      >
        {image}
      </div>
  )
}