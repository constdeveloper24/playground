"use client";
import React from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { portfolios, getPostsByCategory } from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function CategoryPage() {
  const params = useParams();
  const slug = params!.slug as string;

  const category = portfolios.find((cat) => cat.slug === slug);
  const posts = getPostsByCategory(slug);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            카테고리를 찾을 수 없습니다
          </h1>
          <p className="text-gray-600 mb-6">
            요청하신 카테고리가 존재하지 않습니다.
          </p>
          <Link href="/categories" className="text-primary-dark font-medium">
            모든 카테고리 보기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto mb-12">
          <Link
            href="/categories"
            className="inline-flex items-center text-primary-dark mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> 모든 카테고리
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category.name}
          </h1>
          <p className="text-gray-600 mb-2">{category.description}</p>
          <p className="text-sm text-gray-500">{category.count}개의 아티클</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ScrollAnimation key={post.id} delay={0.1 * index} direction="up">
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
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/posts/${post.id}`}
                    className="mt-4 inline-block text-primary-dark hover:text-primary-foreground font-medium text-sm"
                  >
                    계속 읽기
                  </Link>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              아직 아티클이 없습니다
            </h3>
            <p className="text-gray-600">
              곧 새로운 아티클이 추가될 예정입니다.
            </p>
          </div>
        )}
      </ScrollAnimation>
    </div>
  );
}
