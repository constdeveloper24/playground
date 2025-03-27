"use client";
import React from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Mail, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">소개</h1>

          <ScrollAnimation delay={0.1} direction="up">
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                봄's Playground에 대하여
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  봄's Playground는 웹 개발, 기술, 생산성, 디자인 등 다양한
                  주제에 관한 지식과 경험을 공유하는 플랫폼입니다. 2023년에
                  시작된 이 블로그는 개발자, 디자이너, 그리고 기술에 관심 있는
                  모든 분들에게 유용한 정보를 제공하는 것을 목표로 합니다.
                </p>
                <p className="mt-4">
                  우리는 복잡한 기술적 개념을 쉽게 이해할 수 있도록 설명하고,
                  실용적인 팁과 튜토리얼을 통해 여러분의 기술적 성장을 돕고자
                  합니다. 또한 최신 기술 트렌드와 업계 소식을 정기적으로
                  업데이트하여 항상 최신 정보를 접할 수 있도록 노력하고
                  있습니다.
                </p>
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} direction="left">
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                우리의 미션
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="text-gray-600">
                  "기술의 복잡성을 단순화하고, 지식을 민주화하며, 모든 사람이
                  디지털 세계에서 성공할 수 있도록 돕는 것"
                </p>
              </div>
              <div className="mt-6 text-gray-600">
                <p>
                  우리는 기술이 모든 사람에게 접근 가능해야 한다고 믿습니다.
                  그래서 봄's Playground는 초보자부터 전문가까지 모든 수준의
                  독자가 이해할 수 있는 콘텐츠를 제공하기 위해 노력합니다.
                  우리의 목표는 단순히 정보를 전달하는 것이 아니라, 독자들이 그
                  지식을 실제로 적용하고 성장할 수 있도록 돕는 것입니다.
                </p>
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3} direction="right">
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">팀 소개</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        김지은
                      </h3>
                      <p className="text-gray-600">창립자 & 수석 작가</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    10년 이상의 웹 개발 경험을 가진 풀스택 개발자. React,
                    Node.js, 그리고 클라우드 아키텍처에 전문성을 갖고 있습니다.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <Phone className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        이민호
                      </h3>
                      <p className="text-gray-600">기술 에디터</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    AI와 머신러닝 분야의 전문가. 최신 기술 트렌드를 분석하고
                    복잡한 개념을 쉽게 설명하는 데 탁월한 능력을 가지고
                    있습니다.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <Phone className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <Phone className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4} direction="up">
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                연락하기
              </h2>
              <p className="text-gray-600 mb-6">
                질문이나 제안, 협업 기회가 있으시면 언제든지 연락해 주세요.
                24시간 이내에 답변 드리겠습니다.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-900 font-medium">
                    contact@myblog.com
                  </span>
                </div>
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
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      제목
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      메시지
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                  >
                    메시지 보내기
                  </button>
                </form>
              </div>
            </section>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
}
