"use client";
import React from "react";
import { useEffect, useState } from "react";

interface Flower {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

export function FallingFlowers({ count = 15 }: { count?: number }) {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    // 꽃 생성
    const newFlowers = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // 화면 가로 위치 (%)
      size: Math.random() * 25 + 25, // 꽃 크기 (25px ~ 50px)로 키웁니다
      delay: Math.random() * 15, // 애니메이션 시작 지연 시간 (0s ~ 15s)
      duration: Math.random() * 10 + 10, // 애니메이션 지속 시간 (10s ~ 20s)
      rotation: Math.random() * 360, // 초기 회전 각도
    }));

    setFlowers(newFlowers);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-falling"
          style={{
            left: `${flower.left}%`,
            top: "-50px",
            width: `${flower.size}px`,
            height: `${flower.size}px`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            transform: `rotate(${flower.rotation}deg)`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* 개나리 꽃 SVG - 더 선명하게 수정 */}
            <circle cx="50" cy="50" r="18" fill="#F9E16B" />
            <circle cx="50" cy="50" r="10" fill="#FFDA00" />
            <path
              d="M50 15C57 28 70 35 85 35C70 42 63 55 63 70C55 55 40 48 25 48C40 40 50 28 50 15Z"
              fill="#F9E16B"
            />
            <path
              d="M50 15C43 28 30 35 15 35C30 42 37 55 37 70C45 55 60 48 75 48C60 40 50 28 50 15Z"
              fill="#F9E16B"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
