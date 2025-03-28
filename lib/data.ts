import { article1 } from "./article1";

export type Profile = {
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  href?: string;
};

export type article = {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  href?: string;
};

export type portfolio = {
  name: string;
  slug: string;
  count: number;
  description: string;
};

export const profile: Profile = {
  title: "장봄 프론트엔드 개발자(Front-end Developer)",
  excerpt: "프론트엔드 개발자 봄이 AI와 함께하는 창작 놀이터 — 봄's Playground",
  content:
    "웹 개발은 현대 디지털 세계에서 가장 중요한 기술 중 하나입니다. 이 글에서는 HTML, CSS, JavaScript의 기본 개념부터 시작하여 웹 개발의 기초를 다루고 있습니다. 웹 개발을 시작하려는 초보자들에게 도움이 될 것입니다.",
  date: "2025년 3월 28일",
  category: "Play Ground Open",
  readTime: "",
  image: "/images/profile.png",
  href: "/about",
};

// 샘플 블로그 article 데이터
export const articles: article[] = [
  {
    id: 1,
    title: "소라(Sora)와 챗지피티(ChatGPT)를 활용한 캐릭터 영상 만들기 🎥✨",
    excerpt:
      "프론트엔드 개발자 봄이 AI와 함께하는 창작 놀이터 — 봄's Playground",
    content: article1,
    date: "2025년 3월 28일",
    category: "Sora & ChatGPT",
    readTime: "3분",
    image: "/images/profile.png",
    href: "/about",
  },
  {
    id: 2,
    title: "sample",
    excerpt:
      "프론트엔드 개발자 봄이 AI와 함께하는 창작 놀이터 — 봄's Playground",
    content:
      "웹 개발은 현대 디지털 세계에서 가장 중요한 기술 중 하나입니다. 이 글에서는 HTML, CSS, JavaScript의 기본 개념부터 시작하여 웹 개발의 기초를 다루고 있습니다. 웹 개발을 시작하려는 초보자들에게 도움이 될 것입니다.",
    date: "2025년 3월 27일",
    category: "Play Ground Open",
    readTime: "",
    image: "/images/empty.png",
  },
  {
    id: 3,
    title: "sample",
    excerpt:
      "프론트엔드 개발자 봄이 AI와 함께하는 창작 놀이터 — 봄's Playground",
    content:
      "웹 개발은 현대 디지털 세계에서 가장 중요한 기술 중 하나입니다. 이 글에서는 HTML, CSS, JavaScript의 기본 개념부터 시작하여 웹 개발의 기초를 다루고 있습니다. 웹 개발을 시작하려는 초보자들에게 도움이 될 것입니다.",
    date: "2025년 3월 27일",
    category: "Play Ground Open",
    readTime: "",
    image: "/images/empty.png",
  },
  {
    id: 4,
    title: "sample",
    excerpt:
      "프론트엔드 개발자 봄이 AI와 함께하는 창작 놀이터 — 봄's Playground",
    content:
      "웹 개발은 현대 디지털 세계에서 가장 중요한 기술 중 하나입니다. 이 글에서는 HTML, CSS, JavaScript의 기본 개념부터 시작하여 웹 개발의 기초를 다루고 있습니다. 웹 개발을 시작하려는 초보자들에게 도움이 될 것입니다.",
    date: "2025년 3월 27일",
    category: "Play Ground Open",
    readTime: "",
    image: "/images/empty.png",
  },
  {
    id: 5,
    title: "sample",
    excerpt:
      "프론트엔드 개발자 봄이 AI와 함께하는 창작 놀이터 — 봄's Playground",
    content:
      "웹 개발은 현대 디지털 세계에서 가장 중요한 기술 중 하나입니다. 이 글에서는 HTML, CSS, JavaScript의 기본 개념부터 시작하여 웹 개발의 기초를 다루고 있습니다. 웹 개발을 시작하려는 초보자들에게 도움이 될 것입니다.",
    date: "2025년 3월 27일",
    category: "Play Ground Open",
    readTime: "",
    image: "/images/empty.png",
  },
  {
    id: 6,
    title: "sample",
    excerpt:
      "프론트엔드 개발자 봄이 AI와 함께하는 창작 놀이터 — 봄's Playground",
    content:
      "웹 개발은 현대 디지털 세계에서 가장 중요한 기술 중 하나입니다. 이 글에서는 HTML, CSS, JavaScript의 기본 개념부터 시작하여 웹 개발의 기초를 다루고 있습니다. 웹 개발을 시작하려는 초보자들에게 도움이 될 것입니다.",
    date: "2025년 3월 27일",
    category: "Play Ground Open",
    readTime: "",
    image: "/images/empty.png",
  },
  {
    id: 7,
    title: "sample",
    excerpt:
      "프론트엔드 개발자 봄이 AI와 함께하는 창작 놀이터 — 봄's Playground",
    content:
      "웹 개발은 현대 디지털 세계에서 가장 중요한 기술 중 하나입니다. 이 글에서는 HTML, CSS, JavaScript의 기본 개념부터 시작하여 웹 개발의 기초를 다루고 있습니다. 웹 개발을 시작하려는 초보자들에게 도움이 될 것입니다.",
    date: "2025년 3월 27일",
    category: "Play Ground Open",
    readTime: "",
    image: "/images/empty.png",
  },
];

// 카테고리 데이터
export const portfolios: portfolio[] = [
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

// 카테고리별 article 가져오기
export function getArticlesByCategory(categorySlug: string): article[] {
  const categoryName = portfolios.find(
    (cat) => cat.slug === categorySlug
  )?.name;
  if (!categoryName) return [];
  return articles.filter((article) => article.category === categoryName);
}

// article ID로 article 가져오기
export function getArticleById(id: number): article | undefined {
  return articles.find((article) => article.id === id);
}
