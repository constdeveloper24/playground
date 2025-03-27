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
  title: "봄's Playground - AI와 함께하는 창작 놀이터",
  description:
    "프론트엔드 개발자 봄이 AI와 함께하는 창작 놀이터 — 봄's Playground",
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
