"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { articles, profile } from "@/lib/data";
import { portfolioItems } from "@/lib/portfolio-data";

export default function Home() {
  // 최신 포트폴리오 아이템 3개만 가져오기
  const featuredPortfolio = portfolioItems.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Profile</h1>

          {/* Profile */}
          <ScrollAnimation delay={0.1} direction="left">
            <div className="flex gap-8 mb-12">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={profile.image}
                  alt={"profile-image"}
                  className="w-80 h-80 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-sm font-medium text-primary-dark">
                    {profile.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {profile.title}
                </h2>
                <p className="text-gray-600 mb-2">{profile.excerpt}</p>
                <span className="text-sm text-gray-500 mb-4">
                  업로드 : {profile.date}
                </span>
                <Link
                  href={profile.href ?? ""}
                  className="inline-flex items-center text-primary-dark font-medium hover:text-primary-foreground"
                >
                  소개로 이동 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* 다른 포스트들 */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">아티클</h2>
              <Link
                href="/articles"
                className="text-primary-dark font-medium hover:text-primary-foreground flex items-center"
              >
                전체보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article, index) => (
                <ScrollAnimation
                  key={article.id}
                  delay={0.1 * (index + 1)}
                  direction="up"
                >
                  <article className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
                    <Link href={`/articles/${article.id}`}>
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
                      </div>
                    </Link>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </section>
      </ScrollAnimation>

      <ScrollAnimation delay={0.3} direction="right">
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">포트폴리오</h2>
            <Link
              href="/portfolio"
              className="text-primary-dark font-medium hover:text-primary-foreground flex items-center"
            >
              전체보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPortfolio.map((item, index) => (
              <ScrollAnimation
                key={item.id}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <Link href={`/portfolio/${item.id}`} className="group">
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-primary-dark px-2 py-1 bg-primary-light rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-dark transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
