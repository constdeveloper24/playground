"use client";
import React from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { categories } from "@/lib/data";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">카테고리</h1>
          <p className="text-gray-600 mb-8">
            관심 있는 주제의 카테고리를 선택하여 관련 아티클을 찾아보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <ScrollAnimation
              key={category.slug}
              delay={0.1 * index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Link href={`/categories/${category.slug}`}>
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.name}
                    </h2>
                    <span className="bg-primary-light text-primary-dark text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {category.count}개 아티클
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-primary-dark font-medium text-sm">
                    이 카테고리 둘러보기
                  </span>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.4} direction="up">
          <div className="mt-16 bg-primary-light rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              새로운 카테고리 제안하기
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              원하는 주제가 없나요? 새로운 카테고리를 제안해 주세요. 여러분의
              의견을 소중히 듣겠습니다.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="text"
                placeholder="제안하실 카테고리"
                className="flex-grow px-4 py-2 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6 py-2 rounded-r-lg transition-colors">
                제안하기
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </div>
  );
}
