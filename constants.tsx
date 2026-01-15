
import { SiteSettings, Post, Project, NavItem } from './types';

export const DEFAULT_SETTINGS: SiteSettings = {
  brandName: "친환경이지그린",
  primaryColor: "#8A2BE2",
  fontFamily: "Noto Sans KR",
  heroTitle: "에너지 효율을 높이는 혁신적인 그린리모델링 솔루션",
  heroSubtitle: "지속 가능한 미래를 위한 제로에너지 빌딩의 시작, 친환경이지그린이 함께합니다."
};

export const INITIAL_POSTS: Post[] = [
  {
    id: "1",
    title: "2024 그린리모델링 정부 지원 사업 안내",
    category: "공지사항",
    content: "올해 그린리모델링 이자 지원 사업의 규모와 신청 방법이 확정되었습니다. 단열 및 창호 교체 비용의 이자를 국가에서 지원합니다.",
    date: "2024-05-10",
    imageUrl: "https://picsum.photos/seed/green1/800/400"
  },
  {
    id: "2",
    title: "제로에너지빌딩(ZEB) 인증 등급 상향 사례",
    category: "기술정보",
    content: "최근 시공된 경기도 오피스 빌딩이 ZEB 3등급 인증을 획득했습니다. 태양광 패널과 고효율 공조 시스템의 조화가 핵심이었습니다.",
    date: "2024-04-22",
    imageUrl: "https://picsum.photos/seed/zeb2/800/400"
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "서초구 노후 아파트 단지 그린리모델링",
    description: "창호 교체 및 외단열 보강을 통해 에너지 효율 35% 개선",
    imageUrl: "https://picsum.photos/seed/pj1/600/400",
    category: "주거시설"
  },
  {
    id: "p2",
    title: "강남 테헤란로 빌딩 에너지 진단",
    description: "BEMS 시스템 도입을 통한 건물 운영 관리 최적화 컨설팅",
    imageUrl: "https://picsum.photos/seed/pj2/600/400",
    category: "상업시설"
  },
  {
    id: "p3",
    title: "판교 신축 사옥 제로에너지 빌딩 설계",
    description: "신재생 에너지 융복합 지원 사업 연계 ZEB 1등급 목표 설계",
    imageUrl: "https://picsum.photos/seed/pj3/600/400",
    category: "ZEB"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "홈", path: "/" },
  { label: "회사소개", path: "/about" },
  { label: "서비스", path: "/services" },
  { label: "포트폴리오", path: "/portfolio" },
  { label: "소식", path: "/news" },
  { label: "상담문의", path: "/contact" }
];
