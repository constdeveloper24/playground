"use client";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { ScrollAnimation } from "@/components/scroll-animation";
import { getPostById } from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function PostPage() {
  const params = useParams();
  const id = Number(params!.id);

  const post = getPostById(id);

  const sanitizedContent = post?.content
    ? DOMPurify.sanitize(post.content)
    : "";

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            포스트를 찾을 수 없습니다
          </h1>
          <p className="text-gray-600 mb-6">
            요청하신 포스트가 존재하지 않습니다.
          </p>
          <Link href="/articles" className="text-primary-dark font-medium">
            모든 아티클 보기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <ScrollAnimation>
          <Link
            href="/articles"
            className="inline-flex items-center text-primary-dark mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> 모든 아티클
          </Link>

          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-primary-light text-primary-dark text-xs font-medium px-2.5 py-0.5 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> {post.date}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center space-x-4 mb-8">
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" /> {post.readTime}
              </span>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-contain"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="prose prose-lg prose-headings:text-gray-900 prose-headings:font-bold max-w-none text-gray-600 mb-12">
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation delay={0.4}>
          <div className="bg-primary-light p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              댓글 남기기
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  댓글
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6 py-2 rounded-lg transition-colors"
              >
                댓글 등록
              </button>
            </form>
          </div>
        </ScrollAnimation> */}
      </article>
    </div>
  );
}
