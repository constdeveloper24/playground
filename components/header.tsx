"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollProgressBar } from "./scroll-progress-bar";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "text-primary-dark font-semibold"
      : "text-gray-900 hover:text-primary-dark font-medium";
  };

  return (
    <header className="sticky top-0 bg-white z-50 border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            봄's Playground
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className={isActive("/")}>
                  홈
                </Link>
              </li>
              <li>
                <Link href="/articles" className={isActive("/articles")}>
                  아티클
                </Link>
              </li>
              <li>
                <Link href="/categories" className={isActive("/categories")}>
                  카테고리
                </Link>
              </li>
              <li>
                <Link href="/about" className={isActive("/about")}>
                  소개
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <ScrollProgressBar />
    </header>
  );
}
