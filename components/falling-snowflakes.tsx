"use client";

import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  swingAmount: number;
  type: number;
}

export function FallingSnowflakes({ count = 30 }: { count?: number }) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // 눈송이 생성
    const newSnowflakes = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // 화면 가로 위치 (%)
      size: Math.random() * 15 + 5, // 눈송이 크기 (5px ~ 20px)
      delay: Math.random() * 20, // 애니메이션 시작 지연 시간 (0s ~ 20s)
      duration: Math.random() * 15 + 10, // 애니메이션 지속 시간 (10s ~ 25s)
      rotation: Math.random() * 360, // 초기 회전 각도
      swingAmount: Math.random() * 3 + 1, // 좌우 흔들림 정도 (1 ~ 4)
      type: Math.floor(Math.random() * 3), // 0, 1, 2 세 가지 타입의 눈송이
    }));

    setSnowflakes(newSnowflakes);
  }, [count]);

  // 눈송이 SVG 타입에 따라 다른 디자인 반환
  const renderSnowflake = (type: number) => {
    switch (type) {
      case 0:
        // 6각형 눈송이
        return (
          <g fill="#FFFFFF" stroke="#E6F0FF" strokeWidth="0.5">
            <circle cx="50" cy="50" r="5" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <path
                key={angle}
                d={`M50 50 L${50 + 30 * Math.cos((angle * Math.PI) / 180)} ${
                  50 + 30 * Math.sin((angle * Math.PI) / 180)
                }`}
                strokeWidth="2"
              />
            ))}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <circle
                key={`dot-${angle}`}
                cx={50 + 15 * Math.cos((angle * Math.PI) / 180)}
                cy={50 + 15 * Math.sin((angle * Math.PI) / 180)}
                r="2"
              />
            ))}
          </g>
        );
      case 1:
        // 8각형 눈송이
        return (
          <g fill="#FFFFFF" stroke="#E6F0FF" strokeWidth="0.5">
            <circle cx="50" cy="50" r="4" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <path
                key={angle}
                d={`M50 50 L${50 + 25 * Math.cos((angle * Math.PI) / 180)} ${
                  50 + 25 * Math.sin((angle * Math.PI) / 180)
                }`}
                strokeWidth="1.5"
              />
            ))}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <path
                key={`branch-${angle}`}
                d={`M${50 + 15 * Math.cos((angle * Math.PI) / 180)} ${
                  50 + 15 * Math.sin((angle * Math.PI) / 180)
                } L${
                  50 +
                  15 * Math.cos((angle * Math.PI) / 180) +
                  5 * Math.cos(((angle + 45) * Math.PI) / 180)
                } ${
                  50 +
                  15 * Math.sin((angle * Math.PI) / 180) +
                  5 * Math.sin(((angle + 45) * Math.PI) / 180)
                } L${
                  50 +
                  15 * Math.cos((angle * Math.PI) / 180) +
                  5 * Math.cos(((angle - 45) * Math.PI) / 180)
                } ${
                  50 +
                  15 * Math.sin((angle * Math.PI) / 180) +
                  5 * Math.sin(((angle - 45) * Math.PI) / 180)
                }`}
                strokeWidth="1"
              />
            ))}
          </g>
        );
      case 2:
      default:
        // 단순한 눈송이
        return (
          <g fill="#FFFFFF">
            <circle cx="50" cy="50" r="8" opacity="0.8" />
            <circle cx="50" cy="50" r="4" opacity="0.9" />
            <circle cx="50" cy="50" r="2" />
          </g>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute animate-falling"
          style={{
            left: `${snowflake.left}%`,
            top: "-30px",
            width: `${snowflake.size}px`,
            height: `${snowflake.size}px`,
            animationDelay: `${snowflake.delay}s`,
            animationDuration: `${snowflake.duration}s`,
            transform: `rotate(${snowflake.rotation}deg)`,
            filter: `drop-shadow(0 1px 2px rgba(255, 255, 255, 0.2))`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{
              animation: `snowSpin ${
                3 + snowflake.swingAmount
              }s linear infinite`,
            }}
          >
            {renderSnowflake(snowflake.type)}
          </svg>
        </div>
      ))}
    </div>
  );
}
