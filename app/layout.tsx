import React from "react";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FallingFlowers } from "@/components/falling-flowers";
import ChatBot from "@/components/ChatBot";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "봄's Playground - 심플하고 깔끔한 블로그",
  description:
    "기술, 웹 개발 등에 관한 생각과 아이디어를 공유하는 심플한 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <div className="min-h-screen bg-white flex flex-col relative">
          <FallingFlowers count={10} />
          <Header />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
