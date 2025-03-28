"use client";

import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  swingAmount: number;
  type: number;
  color: string;
}

export function FallingLeaves({ count = 24 }: { count?: number }) {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // 가을 낙엽 색상 배열
    const leafColors = [
      "#E2703A", // 주황색
      "#C46200", // 갈색
      "#B1560F", // 진한 갈색
      "#D9A566", // 황금색
      "#BF4904", // 적갈색
      "#D4AC2B", // 노란색
      "#7D0A0A", // 적색
    ];

    // 낙엽 생성
    const newLeaves = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // 화면 가로 위치 (%)
      size: Math.random() * 25 + 15, // 낙엽 크기 (15px ~ 40px)
      delay: Math.random() * 20, // 애니메이션 시작 지연 시간 (0s ~ 20s)
      duration: Math.random() * 10 + 15, // 애니메이션 지속 시간 (15s ~ 25s)
      rotation: Math.random() * 360, // 초기 회전 각도
      swingAmount: Math.random() * 5 + 2, // 좌우 흔들림 정도 (2 ~ 7)
      type: Math.floor(Math.random() * 3), // 0, 1, 2 세 가지 타입의 낙엽
      color: leafColors[Math.floor(Math.random() * leafColors.length)], // 랜덤 색상
    }));

    setLeaves(newLeaves);
  }, [count]);

  // 낙엽 SVG 타입에 따라 다른 디자인 반환
  const renderLeaf = (type: number, color: string) => {
    // 잎 가장자리 색상 (약간 더 진한 색상)
    const strokeColor = color === "#D4AC2B" ? "#B1560F" : "#7D0A0A";

    switch (type) {
      case 0:
        // 단풍잎 모양
        return (
          <path
            d="M50 15C60 25 70 20 80 25C85 35 80 45 70 55C75 65 70 75 60 80C50 85 40 80 30 75C20 65 15 55 20 45C10 35 15 25 25 20C35 15 45 20 50 15Z"
            fill={color}
            stroke={strokeColor}
            strokeWidth="0.5"
          />
        );
      case 1:
        // 타원형 잎
        return (
          <path
            d="M30 50C30 30 40 20 50 15C60 10 70 20 80 30C85 40 85 60 80 70C75 80 65 85 55 85C45 85 35 80 30 70C25 60 25 50 30 50Z"
            fill={color}
            stroke={strokeColor}
            strokeWidth="0.5"
          />
        );
      case 2:
      default:
        // 참나무 잎 모양
        return (
          <path
            d="M50 15C55 20 60 25 65 25C70 25 75 20 80 25C85 30 85 40 80 45C85 50 85 60 80 65C75 70 65 70 60 65C60 75 55 80 50 85C45 80 40 75 40 65C35 70 25 70 20 65C15 60 15 50 20 45C15 40 15 30 20 25C25 20 30 25 35 25C40 25 45 20 50 15Z"
            fill={color}
            stroke={strokeColor}
            strokeWidth="0.5"
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-falling"
          style={{
            left: `${leaf.left}%`,
            top: "-50px",
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `rotate(${leaf.rotation}deg)`,
            filter: `drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{
              animation: `leafSway ${
                2 + leaf.swingAmount
              }s ease-in-out infinite alternate`,
            }}
          >
            {renderLeaf(leaf.type, leaf.color)}
          </svg>
        </div>
      ))}
    </div>
  );
}
