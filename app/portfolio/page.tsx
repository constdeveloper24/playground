"use client";

import { ScrollAnimation } from "@/components/scroll-animation";
import { portfolioItems } from "@/lib/portfolio-data";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("all");

  // 카테고리 목록 추출
  const categories = [
    "all",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  // 필터링된 포트폴리오 아이템
  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">포트폴리오</h1>
          <p className="text-gray-600 mb-8">
            제가 작업한 다양한 웹사이트, 앱, 디자인 프로젝트들을 소개합니다. 각
            프로젝트를 클릭하면 자세한 정보를 볼 수 있습니다.
          </p>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "전체" : category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <ScrollAnimation
              key={item.id}
              delay={0.1 * (index % 6)}
              direction="up"
            >
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all h-full bg-white group">
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-3">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary-dark px-2 py-1 bg-primary-light rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${item.id}`}
                    className="inline-block text-primary-dark hover:text-primary-foreground font-medium text-sm"
                  >
                    자세히 보기
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              해당 카테고리의 프로젝트가 없습니다
            </h3>
            <p className="text-gray-600">
              다른 카테고리를 선택하거나 전체 프로젝트를 확인해보세요.
            </p>
          </div>
        )}
      </ScrollAnimation>
    </div>
  );
}
