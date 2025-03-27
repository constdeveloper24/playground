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
                  "봄's Playground"는 프론트엔드 개발자 봄이 만들어가는 디지털
                  놀이터입니다. 이 공간은 단순한 기술 기록을 넘어, AI와 함께
                  상상한 것을 직접 구현하고 실험해보는 창작의 무대입니다.
                </p>
                <p className="mt-4">
                  프론트엔드 기술을 중심으로, 인터랙션, 애니메이션, UI/UX,
                  그리고 생성형 AI를 결합해 새로운 아이디어를 테스트하고, 다양한
                  가능성을 탐색하는 과정을 담고 있습니다. 때로는 작고 귀여운
                  컴포넌트 하나, 때로는 도전적인 사이드 프로젝트 하나.
                  완성도보다 ‘시도’와 ‘표현’을 소중히 여기며, 저만의 속도로 한
                  걸음씩 즐겁게 채워나가고 있어요.
                </p>
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} direction="left">
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                나의 미션
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="text-gray-600">
                  "기술의 복잡성을 단순화하고, 지식을 민주화하며, 모든 사람이
                  디지털 세계에서 성공할 수 있도록 돕는 것"
                </p>
              </div>
              <div className="mt-6 text-gray-600">
                <p>
                  "Playground"라는 이름처럼, 여기엔 실패도, 호기심도, 상상도
                  모두 환영입니다. 이 여정을 함께 지켜봐 주신다면, 참 기쁠 것
                  같아요.
                </p>
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
