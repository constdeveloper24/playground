"use client";

import { ScrollAnimation } from "@/components/scroll-animation";
import { portfolioItems } from "@/lib/portfolio-data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Layers } from "lucide-react";

export default function PortfolioDetailPage() {
  const params = useParams();
  const id = Number(params?.id);

  const project = portfolioItems.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            프로젝트를 찾을 수 없습니다
          </h1>
          <p className="text-gray-600 mb-6">
            요청하신 프로젝트가 존재하지 않습니다.
          </p>
          <Link href="/portfolio" className="text-primary-dark font-medium">
            모든 프로젝트 보기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-primary-dark mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> 모든 프로젝트
          </Link>

          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-primary-light text-primary-dark text-xs font-medium px-2.5 py-0.5 rounded-full">
                {project.category}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> {project.year}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-primary-foreground px-4 py-2 rounded-lg transition-colors"
              >
                <ArrowUpRight className="mr-2 h-4 w-4" /> 웹사이트 방문
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {/* <Github className="mr-2 h-4 w-4" /> GitHub 저장소 */}
                </a>
              )}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="rounded-lg overflow-hidden mb-8 border">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              프로젝트 개요
            </h2>
            <p>{project.longDescription}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              주요 기능
            </h2>
            <ul className="list-disc pl-6 mt-4">
              <li>
                반응형 디자인으로 모든 디바이스에서 최적의 사용자 경험 제공
              </li>
              <li>최신 웹 기술을 활용한 빠른 로딩 속도와 부드러운 인터랙션</li>
              <li>사용자 친화적인 인터페이스로 직관적인 탐색 가능</li>
              <li>검색 엔진 최적화(SEO)를 통한 높은 검색 노출</li>
              <li>다양한 브라우저 호환성 보장</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              개발 과정
            </h2>
            <p>
              이 프로젝트는 사용자 중심 디자인 원칙을 따라 개발되었습니다. 먼저
              사용자 요구사항을 분석하고, 와이어프레임과 프로토타입을 제작한 후,
              반복적인 테스트와 피드백을 통해 지속적으로 개선했습니다. 최신 웹
              기술을 활용하여 성능과 사용자 경험을 최적화했으며, 접근성
              가이드라인을 준수하여 모든 사용자가 쉽게 이용할 수 있도록
              했습니다.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              배운 점
            </h2>
            <p>
              이 프로젝트를 통해 복잡한 문제를 해결하는 능력과 팀 협업 스킬을
              향상시킬 수 있었습니다. 특히 사용자 피드백을 수집하고 이를 제품
              개선에 반영하는 과정에서 많은 것을 배웠습니다. 또한 최신 웹 기술의
              활용과 성능 최적화 기법에 대한 이해도를 높일 수 있었습니다.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.3}>
          <div className="bg-primary-light p-6 rounded-lg mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Layers className="mr-2 h-5 w-5" /> 기술 스택
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">프론트엔드</h4>
                <ul className="space-y-1 text-gray-600">
                  {project.technologies
                    .filter((tech) =>
                      [
                        "React",
                        "Vue.js",
                        "Angular",
                        "TypeScript",
                        "JavaScript",
                        "HTML",
                        "CSS",
                        "Tailwind",
                      ].some((t) => tech.includes(t))
                    )
                    .map((tech) => (
                      <li key={tech} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-dark rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  백엔드 & 기타
                </h4>
                <ul className="space-y-1 text-gray-600">
                  {project.technologies
                    .filter(
                      (tech) =>
                        ![
                          "React",
                          "Vue.js",
                          "Angular",
                          "TypeScript",
                          "JavaScript",
                          "HTML",
                          "CSS",
                          "Tailwind",
                        ].some((t) => tech.includes(t))
                    )
                    .map((tech) => (
                      <li key={tech} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-dark rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              다른 프로젝트 둘러보기
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioItems
                .filter((item) => item.id !== project.id)
                .slice(0, 3)
                .map((item, index) => (
                  <Link
                    key={item.id}
                    href={`/portfolio/${item.id}`}
                    className="group"
                  >
                    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-40 overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary-dark transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500">{item.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </ScrollAnimation>
      </article>
    </div>
  );
}
