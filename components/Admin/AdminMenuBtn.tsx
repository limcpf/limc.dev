'use client';
import React from "react";
import {usePathname, useRouter} from "next/navigation";

export default function AdminMenuBtn({ href, text }:{
    href: string,
    text: string
}) {
    const router = useRouter();
    const pathname = usePathname();
    return (<>
        {
            href
                ? (<div
                    onClick={() => router.push(href)}
                    className="
                        transition cursor-pointer
                        bg-gray-300 text-gray-600
                        hover:bg-gray-400 hover:text-gray-700
                        px-5 py-1.5
                        flex justify-items-center
                        rounded-2xl shadow
                    "
                >
                    <span className={pathname.startsWith(href) ? "font-bold" : ""}>{text}</span>
                </div>)
                : (
                    <div
                        className="cursor-pointer flex justify-center items-center text-3xl mr-1"
                        onClick={() => router.back()}
                    >
                       ⬅
                    </div>
                )
        }
    </>)
}