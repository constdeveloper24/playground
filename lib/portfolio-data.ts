export type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  url: string;
  github?: string;
  technologies: string[];
  year: string;
  category: string;
};

// 샘플 포트폴리오 데이터
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "모던 쇼핑몰 웹사이트",
    description: "React와 Next.js를 활용한 풀스택 이커머스 플랫폼",
    longDescription:
      "이 프로젝트는 최신 웹 기술을 활용하여 구축한 완전한 이커머스 솔루션입니다. 사용자 인증, 장바구니 기능, 결제 처리, 주문 관리 등 쇼핑몰에 필요한 모든 기능을 구현했습니다. 반응형 디자인으로 모든 디바이스에서 최적의 사용자 경험을 제공합니다.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://example-shop.com",
    github: "https://github.com/username/modern-shop",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    year: "2024",
    category: "웹사이트",
  },
  {
    id: 2,
    title: "AI 기반 일정 관리 앱",
    description: "인공지능을 활용한 스마트 일정 관리 솔루션",
    longDescription:
      "이 앱은 사용자의 일정 패턴을 학습하여 최적의 일정을 추천해주는 AI 기반 일정 관리 솔루션입니다. 자연어 처리 기술을 활용하여 사용자가 텍스트로 입력한 내용을 자동으로 일정으로 변환하고, 중요도와 긴급성을 분석하여 우선순위를 설정합니다. 또한 사용자의 생산성 패턴을 분석하여 최적의 작업 시간을 추천합니다.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://ai-scheduler.app",
    github: "https://github.com/username/ai-scheduler",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "TensorFlow.js",
    ],
    year: "2023",
    category: "모바일 앱",
  },
  {
    id: 3,
    title: "디지털 포트폴리오 템플릿",
    description: "크리에이티브 전문가를 위한 맞춤형 포트폴리오 웹사이트",
    longDescription:
      "디자이너, 사진작가, 일러스트레이터 등 크리에이티브 전문가를 위한 맞춤형 포트폴리오 웹사이트 템플릿입니다. 사용자 친화적인 관리자 패널을 통해 콘텐츠를 쉽게 업데이트할 수 있으며, 다양한 레이아웃 옵션과 커스터마이징 기능을 제공합니다. 최적화된 이미지 로딩과 애니메이션으로 방문자에게 인상적인 경험을 선사합니다.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://portfolio-template.design",
    technologies: ["Vue.js", "Nuxt.js", "GSAP", "Firebase", "Cloudinary"],
    year: "2023",
    category: "웹사이트",
  },
  {
    id: 4,
    title: "블록체인 기반 투표 시스템",
    description: "투명하고 안전한 온라인 투표를 위한 블록체인 솔루션",
    longDescription:
      "이 프로젝트는 블록체인 기술을 활용하여 투명하고 안전한 온라인 투표 시스템을 구현했습니다. 이더리움 스마트 컨트랙트를 통해 투표 데이터의 무결성을 보장하고, 투표자의 익명성을 유지하면서도 투표 결과의 검증이 가능한 시스템을 구축했습니다. 기업, 학교, 커뮤니티 등 다양한 조직에서 활용할 수 있는 솔루션입니다.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://blockchain-vote.org",
    github: "https://github.com/username/blockchain-voting",
    technologies: [
      "Solidity",
      "Ethereum",
      "React",
      "Web3.js",
      "Node.js",
      "Express",
    ],
    year: "2022",
    category: "블록체인",
  },
  {
    id: 5,
    title: "데이터 시각화 대시보드",
    description: "복잡한 데이터를 직관적으로 시각화하는 인터랙티브 대시보드",
    longDescription:
      "이 대시보드는 복잡한 비즈니스 데이터를 직관적이고 인터랙티브한 방식으로 시각화합니다. 실시간 데이터 업데이트, 드릴다운 기능, 커스텀 필터링 옵션 등을 제공하여 사용자가 데이터를 다양한 관점에서 분석할 수 있습니다. 반응형 디자인으로 모바일 기기에서도 최적의 사용자 경험을 제공합니다.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://data-viz-dashboard.com",
    technologies: [
      "D3.js",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSocket",
    ],
    year: "2022",
    category: "데이터 시각화",
  },
  {
    id: 6,
    title: "AR 가구 배치 앱",
    description: "증강현실을 활용한 가구 배치 시뮬레이션 앱",
    longDescription:
      "이 앱은 증강현실 기술을 활용하여 사용자가 실제 공간에 가구를 배치해볼 수 있는 시뮬레이션 경험을 제공합니다. 다양한 가구 모델을 3D로 구현하고, 사용자의 카메라를 통해 실제 공간에 가상으로 배치해볼 수 있습니다. 크기 조절, 회전, 색상 변경 등의 기능을 통해 다양한 옵션을 시험해볼 수 있습니다.",
    image: "/placeholder.svg?height=600&width=800",
    url: "https://ar-furniture.app",
    technologies: ["Unity", "ARKit", "ARCore", "C#", "Blender", "React Native"],
    year: "2021",
    category: "AR/VR",
  },
];
