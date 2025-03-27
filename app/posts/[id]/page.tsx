"use client";
import React from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { getPostById } from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function PostPage() {
  const params = useParams();
  const id = Number(params!.id);

  const post = getPostById(id);

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
                {/* <User className="h-4 w-4 mr-1" /> {post.author} */}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" /> {post.readTime}
              </span>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p>{post.content || post.excerpt}</p>

            {/* 샘플 콘텐츠 - 실제 구현 시 post.content를 사용 */}
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu
              aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies
              lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet
              nisl.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              주요 내용
            </h2>

            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
            </p>

            <ul className="list-disc pl-6 mt-4">
              <li>Cras mattis consectetur purus sit amet fermentum.</li>
              <li>Donec ullamcorper nulla non metus auctor fringilla.</li>
              <li>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">결론</h2>

            <p>
              Cras mattis consectetur purus sit amet fermentum. Donec
              ullamcorper nulla non metus auctor fringilla. Maecenas sed diam
              eget risus varius blandit sit amet non magna.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.3}>
          <div className="border-t border-b py-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              이 글이 도움이 되었나요?
            </h3>
            <div className="flex space-x-4">
              <button className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-6 py-2 rounded-lg transition-colors">
                네, 도움이 되었어요!
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-medium px-6 py-2 rounded-lg border transition-colors">
                아니요, 더 개선이 필요해요
              </button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
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
        </ScrollAnimation>
      </article>
    </div>
  );
}
