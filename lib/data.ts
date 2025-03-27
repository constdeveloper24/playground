export type Post = {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
};

export type Category = {
  name: string;
  slug: string;
  count: number;
  description: string;
};

// 샘플 블로그 포스트 데이터
export const posts: Post[] = [
  {
    id: 1,
    title: "웹 개발 시작하기",
    excerpt: "HTML, CSS, JavaScript의 기초를 배워 웹 개발 여정을 시작해보세요.",
    content:
      "웹 개발은 현대 디지털 세계에서 가장 중요한 기술 중 하나입니다. 이 글에서는 HTML, CSS, JavaScript의 기본 개념부터 시작하여 웹 개발의 기초를 다루고 있습니다. 웹 개발을 시작하려는 초보자들에게 도움이 될 것입니다.",
    date: "2025년 4월 15일",
    author: "김지은",
    category: "웹 개발",
    readTime: "5분 소요",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "인공지능의 미래",
    excerpt:
      "AI 기술의 최신 트렌드와 발전, 그리고 우리의 미래에 미치는 영향에 대해 알아봅니다.",
    content:
      "인공지능 기술은 빠르게 발전하고 있으며, 우리의 일상생활과 산업 전반에 혁명적인 변화를 가져오고 있습니다. 이 글에서는 최신 AI 트렌드와 기술 발전, 그리고 이것이 우리 사회에 미치는 영향에 대해 심층적으로 분석합니다.",
    date: "2025년 4월 10일",
    author: "이민호",
    category: "기술",
    readTime: "8분 소요",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "CSS 그리드 레이아웃 마스터하기",
    excerpt:
      "복잡하고 반응형 웹 레이아웃을 만들기 위한 CSS 그리드 사용 종합 가이드.",
    content:
      "CSS 그리드는 웹 레이아웃을 디자인하는 강력한 도구입니다. 이 글에서는 CSS 그리드의 기본 개념부터 복잡한 레이아웃 구현까지 단계별로 설명합니다. 실제 예제와 함께 CSS 그리드를 마스터하는 방법을 배워보세요.",
    date: "2025년 4월 5일",
    author: "박서준",
    category: "웹 개발",
    readTime: "6분 소요",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "원격 근무자를 위한 생산성 팁",
    excerpt:
      "원격 근무 시 생산성을 유지하고 일과 삶의 균형을 맞추는 실용적인 조언.",
    content:
      "원격 근무는 많은 장점을 제공하지만, 생산성을 유지하는 것이 도전이 될 수 있습니다. 이 글에서는 원격 근무 환경에서 생산성을 최대화하고 일과 삶의 균형을 유지하는 실용적인 팁과 전략을 제공합니다.",
    date: "2025년 3월 30일",
    author: "최유진",
    category: "생산성",
    readTime: "4분 소요",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "React 상태 관리의 모든 것",
    excerpt:
      "React 애플리케이션에서 상태를 효과적으로 관리하는 다양한 방법과 라이브러리를 비교 분석합니다.",
    content:
      "React 애플리케이션에서 상태 관리는 핵심적인 부분입니다. 이 글에서는 useState, useReducer부터 Redux, Zustand, Jotai 등 다양한 상태 관리 라이브러리까지 비교 분석하고, 각 상황에 맞는 최적의 선택을 안내합니다.",
    date: "2025년 3월 25일",
    author: "정도윤",
    category: "웹 개발",
    readTime: "10분 소요",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "디자인 시스템 구축하기",
    excerpt:
      "확장 가능하고 일관된 제품을 위한 디자인 시스템 구축 방법론을 소개합니다.",
    content:
      "디자인 시스템은 제품의 일관성과 개발 효율성을 높이는 핵심 요소입니다. 이 글에서는 성공적인 디자인 시스템을 구축하는 단계별 방법론과 실제 사례를 통해 효과적인 디자인 시스템 구축 전략을 알아봅니다.",
    date: "2025년 3월 20일",
    author: "한소희",
    category: "디자인",
    readTime: "7분 소요",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    title: "TypeScript 고급 기법",
    excerpt:
      "TypeScript의 고급 타입 시스템을 활용하여 더 안전하고 유지보수가 쉬운 코드를 작성하는 방법.",
    content:
      "TypeScript는 JavaScript에 정적 타입을 추가하여 코드의 안정성을 높여줍니다. 이 글에서는 제네릭, 유니온 타입, 인터섹션 타입, 조건부 타입 등 TypeScript의 고급 기능을 활용하는 방법을 실제 예제와 함께 설명합니다.",
    date: "2025년 3월 15일",
    author: "김태현",
    category: "웹 개발",
    readTime: "9분 소요",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    title: "블록체인 기술의 실용적 응용",
    excerpt:
      "블록체인 기술이 금융을 넘어 다양한 산업에 어떻게 적용되고 있는지 살펴봅니다.",
    content:
      "블록체인 기술은 암호화폐를 넘어 다양한 산업 분야에 혁신을 가져오고 있습니다. 이 글에서는 공급망 관리, 의료 데이터 보안, 지적 재산권 보호 등 블록체인의 실용적인 응용 사례를 분석하고 미래 전망을 제시합니다.",
    date: "2025년 3월 10일",
    author: "박준영",
    category: "기술",
    readTime: "8분 소요",
    image: "/placeholder.svg?height=400&width=600",
  },
];

// 카테고리 데이터
export const categories: Category[] = [
  {
    name: "웹 개발",
    slug: "web-development",
    count: 4,
    description:
      "HTML, CSS, JavaScript, React 등 웹 개발과 관련된 모든 주제를 다룹니다.",
  },
  {
    name: "기술",
    slug: "technology",
    count: 2,
    description:
      "AI, 블록체인, 클라우드 컴퓨팅 등 최신 기술 트렌드와 발전에 대한 정보를 제공합니다.",
  },
  {
    name: "생산성",
    slug: "productivity",
    count: 1,
    description:
      "시간 관리, 업무 효율성, 원격 근무 등 생산성을 높이는 방법에 대해 알아봅니다.",
  },
  {
    name: "디자인",
    slug: "design",
    count: 1,
    description:
      "UI/UX 디자인, 그래픽 디자인, 디자인 시스템 등 디자인 관련 주제를 다룹니다.",
  },
];

// 카테고리별 포스트 가져오기
export function getPostsByCategory(categorySlug: string): Post[] {
  const categoryName = categories.find(
    (cat) => cat.slug === categorySlug
  )?.name;
  if (!categoryName) return [];
  return posts.filter((post) => post.category === categoryName);
}

// 포스트 ID로 포스트 가져오기
export function getPostById(id: number): Post | undefined {
  return posts.find((post) => post.id === id);
}
