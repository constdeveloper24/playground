import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">마이블로그</h3>
            <p className="text-gray-600 text-sm">
              기술, 웹 개발 등에 관한 생각과 아이디어를 공유하는 심플한
              블로그입니다.
            </p>
          </div>
          <div>
            <h4 className="text-gray-900 font-medium mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  아티클
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  카테고리
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  소개
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-medium mb-4">카테고리</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/web-development"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  웹 개발
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/technology"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  기술
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/productivity"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  생산성
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/design"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  디자인
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-medium mb-4">연결하기</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  트위터
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  링크드인
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  깃허브
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  연락하기
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} 마이블로그. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
}
