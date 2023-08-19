import React from "react";

export default function PostInputWrapper({
    span,
    title,
    children
}: {
    span?: number,
    title: string,
    children: React.ReactNode
}) {
    let className = "col-span-8 flex flex-col";
    if(span) className = `col-span-${span} flex flex-col`;

    return (<div className={className}>
        <div
            className="
                block mb-2
                text-sm font-medium text-gray-700
            "
        >
            {title}
        </div>
        {children}
    </div>);

}