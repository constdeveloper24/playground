"use client";

import React, { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      // 현재 스크롤 위치
      const currentScrollPos = window.scrollY;
      // 문서의 전체 높이에서 화면 높이를 뺀 값 (스크롤 가능한 최대 높이)
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // 스크롤 진행률 계산 (0 ~ 100%)
      const scrollPercentage = (currentScrollPos / scrollHeight) * 100;

      setScrollProgress(scrollPercentage);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", updateScrollProgress);

    // 초기 스크롤 위치 설정
    updateScrollProgress();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="h-1 bg-gray-100 w-full sticky top-0 z-10">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
