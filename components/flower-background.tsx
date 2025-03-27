"use client";
import React from "react";
import { useEffect, useRef } from "react";

export function FlowerBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 캔버스 크기 설정
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 개나리 꽃 그리기 함수
    const drawFlower = (
      x: number,
      y: number,
      size: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // 꽃잎
      ctx.fillStyle = "#F9E16B";
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.ellipse(
          0,
          -size * 0.8,
          size * 0.5,
          size * 0.8,
          (Math.PI / 2) * i,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      // 꽃 중앙
      ctx.fillStyle = "#FFDA00";
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // 꽃 객체 생성
    const flowerCount = 20;
    const flowers = Array.from({ length: flowerCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 15 + 10,
      speed: Math.random() * 1 + 0.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      swingFactor: Math.random() * 2 + 1,
      swingOffset: Math.random() * Math.PI * 2,
    }));

    // 애니메이션 함수
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flowers.forEach((flower) => {
        // 꽃 위치 업데이트
        flower.y += flower.speed;
        flower.x +=
          Math.sin(flower.y * 0.01 * flower.swingFactor + flower.swingOffset) *
          0.5;
        flower.rotation += flower.rotationSpeed;

        // 화면 밖으로 나가면 다시 위로
        if (flower.y > canvas.height + flower.size) {
          flower.y = -flower.size * 2;
          flower.x = Math.random() * canvas.width;
        }

        // 꽃 그리기
        drawFlower(flower.x, flower.y, flower.size, flower.rotation);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
