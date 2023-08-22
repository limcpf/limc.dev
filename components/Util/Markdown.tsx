"use client";
import './Markdown.css';
import "github-markdown-css/github-markdown-light.css";
import Marked from "marked-react";
import Image from "next/image";

import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import kotlin from 'react-syntax-highlighter/dist/esm/languages/hljs/kotlin';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';

SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('kotlin', kotlin);
SyntaxHighlighter.registerLanguage('shell', shell);

const renderer = {
  image(src: string, alt: string, title?: string | null) {
    return <Image src={src} alt={alt} layout="fill" sizes="100%" />;
  },
  code(code: any, lang:string | undefined) {
    return (
          <SyntaxHighlighter className="!p-5" language={lang} style={darcula}>
            {code}
          </SyntaxHighlighter>
    )
  }
};

export default function Markdown({ content }: { content: string }) {
  return <Marked renderer={renderer} gfm={true} value={content}></Marked>;
}
