"use client";

import { useEffect, useState } from "react";

interface Parasol {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  swingAmount: number;
  color: string;
}

export function FallingParasols({ count = 24 }: { count?: number }) {
  const [parasols, setParasols] = useState<Parasol[]>([]);

  useEffect(() => {
    // 파라솔 색상 배열
    const parasolColors = [
      "#FF9AA2", // 연한 분홍
      "#FFB7B2", // 살구색
      "#FFDAC1", // 연한 주황
      "#E2F0CB", // 연한 연두
      "#B5EAD7", // 민트
      "#C7CEEA", // 연한 파랑
    ];

    // 파라솔 생성
    const newParasols = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // 화면 가로 위치 (%)
      size: Math.random() * 20 + 15, // 파라솔 크기 (15px ~ 35px)
      delay: Math.random() * 20, // 애니메이션 시작 지연 시간 (0s ~ 20s)
      duration: Math.random() * 10 + 20, // 애니메이션 지속 시간 (20s ~ 30s)
      rotation: Math.random() * 360, // 초기 회전 각도
      swingAmount: Math.random() * 3 + 1, // 좌우 흔들림 정도 (1 ~ 4)
      color: parasolColors[Math.floor(Math.random() * parasolColors.length)], // 랜덤 색상
    }));

    setParasols(newParasols);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {parasols.map((parasol) => (
        <div
          key={parasol.id}
          className="absolute animate-falling"
          style={{
            left: `${parasol.left}%`,
            top: "-50px",
            width: `${parasol.size}px`,
            height: `${parasol.size}px`,
            animationDelay: `${parasol.delay}s`,
            animationDuration: `${parasol.duration}s`,
            transform: `rotate(${parasol.rotation}deg)`,
            filter: `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{
              animation: `parasolSpin ${
                3 + parasol.swingAmount
              }s ease-in-out infinite alternate`,
            }}
          >
            {/* 귀여운 파라솔 SVG */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill={parasol.color}
              stroke="#FFFFFF"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill={parasol.color}
              stroke="#FFFFFF"
              strokeWidth="0.5"
              opacity="0.8"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              fill={parasol.color}
              stroke="#FFFFFF"
              strokeWidth="0.5"
              opacity="0.6"
            />
            <circle
              cx="50"
              cy="50"
              r="15"
              fill={parasol.color}
              stroke="#FFFFFF"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
            {/* 파라솔 손잡이 */}
            <rect x="49" y="50" width="2" height="35" fill="#FFFFFF" rx="1" />
            {/* 파라솔 꼭대기 장식 */}
            <circle cx="50" cy="20" r="3" fill="#FFFFFF" />
            {/* 파라솔 무늬 */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1="50"
                y1="50"
                x2={50 + 30 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 30 * Math.sin((angle * Math.PI) / 180)}
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
      ))}
    </div>
  );
}
