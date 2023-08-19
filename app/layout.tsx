import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import localFont from "next/font/local";
import RootMenu from "@/components/Root/RootMenu";
import RootLayoutWrapper from "@/components/Root/RootLayoutWrapper";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorPage from "@/app/error";
import Script from "next/script";

const local = localFont({
  src: [
    {
      path: "./assets/font/NanumSquareNeoTTF-aLt.woff2",
      weight: "200",
      style: "lighter",
    },
    {
      path: "./assets/font/NanumSquareNeoTTF-bRg.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/font/NanumSquareNeoTTF-cBd.woff2",
      weight: "600",
      style: "bold",
    },
    {
      path: "./assets/font/NanumSquareNeoTTF-dEb.woff2",
      weight: "700",
      style: "bolder",
    },
  ],
});

export const metadata: Metadata = {
  title: "LimC",
  description: "개발 공부 관련된 기록을 저장하는 블로그입니다.",
  authors: {
    url: "https://limc.dev",
    name: "LimC",
  },
  openGraph: {
    title: "LimC Dev",
    description: "개발 공부 관련된 기록을 저장하는 블로그입니다.",
    emails: "limcdevblog@gmail.com",
    siteName: "limc.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body
        className={
          local.className + " flex flex-col items-center min-h-screen "
        }
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C1DF72PZS4"
        />
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-C1DF72PZS4');`,
          }}
        />
        <ErrorBoundary errorComponent={ErrorPage}>
          <RootLayoutWrapper>
            <RootMenu />
            {children}
          </RootLayoutWrapper>
        </ErrorBoundary>
      </body>
    </html>
  );
}
