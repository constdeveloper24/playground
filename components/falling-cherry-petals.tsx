"use client";

import { useEffect, useState } from "react";

interface Petal {
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

export function FallingCherryPetals({ count = 24 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // 벚꽃 꽃잎 색상 배열
    const petalColors = [
      "#FFDBEB", // 매우 연한 분홍색
      "#FFD1E0", // 연한 분홍색
      "#FFC7DA", // 중간 분홍색
      "#FFECF2", // 거의 흰색에 가까운 분홍색
    ];

    // 벚꽃 꽃잎 생성
    const newPetals = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // 화면 가로 위치 (%)
      size: Math.random() * 15 + 10, // 꽃잎 크기 (10px ~ 25px)
      delay: Math.random() * 20, // 애니메이션 시작 지연 시간 (0s ~ 20s)
      duration: Math.random() * 10 + 15, // 애니메이션 지속 시간 (15s ~ 25s)
      rotation: Math.random() * 360, // 초기 회전 각도
      swingAmount: Math.random() * 4 + 2, // 좌우 흔들림 정도 (2 ~ 6)
      type: Math.floor(Math.random() * 3), // 0, 1, 2 세 가지 타입의 꽃잎
      color: petalColors[Math.floor(Math.random() * petalColors.length)], // 랜덤 색상
    }));

    setPetals(newPetals);
  }, [count]);

  // 벚꽃 꽃잎 SVG 타입에 따라 다른 디자인 반환
  const renderCherryPetal = (type: number, color: string) => {
    // 꽃잎 가장자리 색상 (약간 더 진한 색상)
    const strokeColor = color === "#FFECF2" ? "#FFD1E0" : "#FF9AAC";

    switch (type) {
      case 0:
        // 하트 모양 꽃잎
        return (
          <path
            d="M50 20C60 10 75 15 80 30C85 45 75 60 50 80C25 60 15 45 20 30C25 15 40 10 50 20Z"
            fill={color}
            stroke={strokeColor}
            strokeWidth="0.5"
          />
        );
      case 1:
        // 타원형 꽃잎 (끝이 살짝 갈라진)
        return (
          <path
            d="M30 50C30 30 40 20 50 20C60 20 70 30 70 50C70 65 65 75 60 80C55 85 45 85 40 80C35 75 30 65 30 50Z"
            fill={color}
            stroke={strokeColor}
            strokeWidth="0.5"
          />
        );
      case 2:
      default:
        // 둥근 꽃잎
        return (
          <path
            d="M30 40C30 25 40 15 50 15C60 15 70 25 70 40C70 55 60 70 50 70C40 70 30 55 30 40Z"
            fill={color}
            stroke={strokeColor}
            strokeWidth="0.5"
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-falling"
          style={{
            left: `${petal.left}%`,
            top: "-30px",
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            transform: `rotate(${petal.rotation}deg)`,
            filter: `drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05))`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{
              animation: `petalSwing ${
                2 + petal.swingAmount
              }s ease-in-out infinite alternate`,
            }}
          >
            {renderCherryPetal(petal.type, petal.color)}
          </svg>
        </div>
      ))}
    </div>
  );
}
