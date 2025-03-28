"use client";

import { useState } from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { articles } from "@/lib/data";
import Link from "next/link";
import { Search } from "lucide-react";

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">모든 아티클</h1>
          <p className="text-gray-600 mb-8">
            웹 개발, 기술, 생산성, 디자인 등 다양한 주제의 아티클을 찾아보세요.
          </p>

          <div className="relative mb-12">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="아티클 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <ScrollAnimation
              key={article.id}
              delay={0.05 * (index % 6)}
              direction="up"
            >
              <article className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-xs font-medium text-primary-dark">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {article.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/articles/${article.id}`}
                    className="mt-4 inline-block text-primary-dark hover:text-primary-foreground font-medium text-sm"
                  >
                    계속 읽기
                  </Link>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-gray-600">다른 검색어로 다시 시도해보세요.</p>
          </div>
        )}
      </ScrollAnimation>
    </div>
  );
}
