import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-2 py-4">
        <div className="flex gap-10">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              봄's Playground
            </h3>
            <p className="text-gray-600 text-sm">
              기술, 웹 개발 등에 관한 생각과 아이디어를 공유하는 심플한
              블로그입니다.
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} 봄's Playground. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
}
