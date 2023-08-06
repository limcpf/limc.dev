'use client';
import Marked from "marked-react";
import {ReactNode} from "react";
import Image from "next/image";
import {random} from "nanoid";


const renderer = {
  blockquote(children: ReactNode) {
    return (<blockquote className="bg-gray-100 rounded p-5 text-sm">
      {children}
    </blockquote>);

  },
  list(children: ReactNode, ordered: boolean) {
    if(ordered) return (<ol className="line-style">{children}</ol> )
    return (<ul key={random(3).toString()} className="line-style">{children}</ul>);
  },
  listItem(children: ReactNode[]) {
    // @ts-ignore
    return <li key={random(3).toString()} className="text-md px-3 whitespace-pre-line ps-6">{children}</li>;
  },
  heading(text:string, level:number) {
    const t = "before:bg-black before:p-1 before:mr-3 font-bold";
    const hs = {
      "1": <h1 key={`${level}-${text}`} className={t}>{text}</h1>,
      "2": <h3 key={`${level}-${text}`} className={t}>{text}</h3>,
      "3": <h5 key={`${level}-${text}`} className={t}>{text}</h5>,
    }

    // @ts-ignore
    return (<div key={`${level}-${text}-div`}>{hs[`${level}`]}</div>)
  },
  image(src: string, alt: string, title?: string | null) {
    return (
        <Image src={src} alt={alt} layout="fill" sizes="100%" />
    )
  },
  paragraph(children: ReactNode) {
    // @ts-ignore
    return <p key={children.toString()}>{children}</p>
  }
};

export default function Markdown({content}:{content:string}) {
  return <Marked renderer={renderer}>{content}</Marked>;
}