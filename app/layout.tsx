import './globals.css'
import type {Metadata} from 'next'
import React from "react";
import localFont from "next/font/local";
import RootMenu from "@/components/Root/RootMenu";
import RootLayoutWrapper from "@/components/Root/RootLayoutWrapper";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import ErrorPage from "@/app/error";

const local = localFont({
  src: [
    {
      path: "./assets/font/NanumSquareNeoTTF-aLt.woff",
      weight: "200",
      style: "lighter",
    },
    {
      path: "./assets/font/NanumSquareNeoTTF-bRg.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/font/NanumSquareNeoTTF-cBd.woff",
      weight: "600",
      style: "bold",
    },
    {
      path: "./assets/font/NanumSquareNeoTTF-dEb.woff",
      weight: "700",
      style: "bolder",
    },
  ],
});

export const metadata: Metadata = {
  title: 'LimC',
  description: '개발 공부 기록장'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={local.className + " flex flex-col items-center min-h-screen "}>
      <ErrorBoundary errorComponent={ErrorPage}>
        <RootLayoutWrapper>
          <RootMenu />
          {children}
        </RootLayoutWrapper>
      </ErrorBoundary>
      </body>
    </html>
  )
}
