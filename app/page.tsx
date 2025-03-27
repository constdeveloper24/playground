"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { posts } from "@/lib/data";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Profile</h1>

          {/* 주요 포스트 */}
          <ScrollAnimation delay={0.1} direction="left">
            <div className="flex gap-8 mb-12">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={"profile-image"}
                  className="w-80 h-80 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-sm font-medium text-primary-dark">
                    {posts[0].category}
                  </span>
                  <span className="text-sm text-gray-500">{posts[0].date}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-sm text-gray-500">
                    Name : {posts[0].author}
                  </span>
                </div>
                <Link
                  href={`/posts/${posts[0].id}`}
                  className="inline-flex items-center text-primary-dark font-medium hover:text-primary-foreground"
                >
                  소개로 이동 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* 다른 포스트들 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1, 4).map((post, index) => (
              <ScrollAnimation
                key={post.id}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <article className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-xs font-medium text-primary-dark">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        작성자: {post.author}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation delay={0.3} direction="right">
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">인기 카테고리</h2>
            <Link
              href="/categories"
              className="text-primary-dark font-medium hover:text-primary-foreground flex items-center"
            >
              전체보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["웹 개발", "기술", "생산성", "디자인"].map((category, index) => (
              <ScrollAnimation
                key={category}
                delay={0.1 * (index + 1)}
                direction="up"
              >
                <Link
                  href={`/categories/${
                    category === "웹 개발"
                      ? "web-development"
                      : category === "기술"
                      ? "technology"
                      : category === "생산성"
                      ? "productivity"
                      : "design"
                  }`}
                  className="bg-primary-light hover:bg-primary/30 rounded-lg p-6 text-center transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{category}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category === "웹 개발"
                      ? "4"
                      : category === "기술"
                      ? "2"
                      : "1"}
                    개 아티클
                  </p>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation delay={0.4} direction="up">
        <section className="bg-primary-light rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            뉴스레터 구독하기
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            최신 아티클과 소식을 받아보세요. 스팸 메일은 보내지 않습니다!
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소"
              className="flex-grow px-4 py-2 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6 py-2 rounded-r-lg transition-colors">
              구독하기
            </button>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
