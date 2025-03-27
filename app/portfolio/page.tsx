"use client";
import React from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { portfolios } from "@/lib/data";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-gray-600 mb-8">
            코드와 상상력으로 만들어낸 이야기들이 모이는, 봄의 창작
            놀이터입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolios.map((portfolio, index) => (
            <ScrollAnimation
              key={portfolio.slug}
              delay={0.1 * index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Link href={`/categories/${portfolio.slug}`}>
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {portfolio.name}
                    </h2>
                    <span className="bg-primary-light text-primary-dark text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {portfolio.count}개 아티클
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{portfolio.description}</p>
                  <span className="text-primary-dark font-medium text-sm">
                    이 카테고리 둘러보기
                  </span>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}
