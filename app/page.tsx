"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { portfolios, posts, profile } from "@/lib/data";

export default function Home() {
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
              {posts.slice(0, 3).map((post, index) => (
                <ScrollAnimation
                  key={post.id}
                  delay={0.1 * (index + 1)}
                  direction="up"
                >
                  <article className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
                    <Link href={`/posts/${post.id}`}>
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
                          <span className="text-xs text-gray-500">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {post.readTime}
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
            <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
            <Link
              href="/portfolio"
              className="text-primary-dark font-medium hover:text-primary-foreground flex items-center"
            >
              전체보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolios.map((portfolio, idx) => {
              return <div key={idx}>{portfolio.name}</div>;
            })}
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
