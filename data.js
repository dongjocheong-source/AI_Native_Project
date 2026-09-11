/**
 * data.js — single source of truth for categories + items.
 *
 * This is the ONLY place you edit to add/remove/change content.
 * - index.html reads this file directly (as a <script> tag) to render
 *   the sidebar and item grid.
 * - generate_items.js reads this same object (via Node's require) to
 *   (re)generate the static detail pages under items/*.html.
 *
 * IMPORTANT: every item id below must exactly match the actual filename
 * already sitting in items/{folder}/ (e.g. item "a01" -> items/A_뉴스_타임라인/a01.html).
 * Items whose page was hand-written (not the generic auto-generated
 * template) are marked `skipGenerate: true` so `node generate_items.js`
 * never overwrites them.
 */

const LATEST_POSTS = [
  { cat: "c00", item: "c02", date: "2026년 8월 20일",
    summary: "GoToAiNative 프로젝트의 진행 상황과 다음 단계를 기록합니다." },
  { cat: "b00", item: "b08", date: "2026년 8월 12일",
    summary: "Claude의 활용 방법에 대한 정보들을 모아놓았습니다." },
];

const CATEGORIES = [
  // ── A00 : 뉴스 타임라인 ──────────────────────────────────────────────
  {
    id: "a00",
    folder: "A_News_Timeline",
    label: "뉴스 타임라인",
    icon: "rss",
    description: "AI 트렌드, 로보틱스, 소형 언어모델 등 최신 동향을 시간순으로 기록합니다.",
    items: [
      { id: "a01", title: "AI 시대를 주도하는 커리어 생존 가이드", meta: "A01", hue: 5,
        skipGenerate: true,
        body: "메타 시니어 엔지니어가 전하는 AI 시대를 주도하는 커리어 생존 가이드." },
      { id: "a02", title: "Karpathy LLM Wiki & Knowledge Bases", meta: "A02", hue: 5,
        skipGenerate: true,
        body: "Andrej Karpathy가 제안한 \"LLM을 활용한 개인 지식 베이스 구축 패턴\"입니다." },
      { id: "a03", title: "피지컬 AI(Physical AI)란 무엇인가", meta: "A03", hue: 5,
        skipGenerate: true,
        body: "정의, 구성요소, 특징 및 장단점, 주요 활용 분야, 실습까지 정리합니다." },
      { id: "a04", title: "SLM(소형 언어 모델)이란 무엇인가", meta: "A04", hue: 5,
        skipGenerate: true,
        body: "정의, 핵심 기술, 장단점, 대표 모델, 실습까지 정리합니다." },
      { id: "a05", title: "Langfuse란 무엇인가", meta: "A05", hue: 5,
        skipGenerate: true,
        body: "정의, 핵심 기능, 설치, 연동, LangSmith 비교까지 정리합니다." },
      { id: "a06", title: "LLM Fallback 메커니즘 완벽 가이드", meta: "A06", hue: 5,
        skipGenerate: true,
        body: "LangChain vs Pure Python 방식을 비교합니다." },
      { id: "a07", title: "LLM 속도 파헤쳐보기", meta: "A07", hue: 5,
        skipGenerate: true,
        body: "TTFT, TPOT, Throughput 개념을 완벽 가이드로 정리합니다." },
      { id: "a08", title: "NVIDIA GPU 모니터링 완벽 가이드", meta: "A08", hue: 5,
        skipGenerate: true,
        body: "정의, 구성요소, 실습까지 정리합니다." },
      { id: "a09", title: "개발자를 위한 AI 서버 관리 꿀팁 A to Z", meta: "A09", hue: 5,
        skipGenerate: true,
        body: "screen, git, Postman으로 AI 서버를 운영하며 쓰는 관리 꿀팁을 정리합니다." },
    ],
  },

  // ── B00 : 노트 ───────────────────────────────────────────────────────
  {
    id: "b00",
    folder: "B_Notes",
    label: "노트",
    icon: "edit-3",
    description: "짧은 메모와 생각을 빠르게 기록합니다.",
    items: [
      { id: "b01", title: "프롬프팅", meta: "B01", hue: 40,
        skipGenerate: true,
        body: "프롬프팅 관련한 예제들을 모아 놓았습니다." },
      { id: "b02", title: "Skill References", meta: "B02", hue: 40,
        skipGenerate: true,
        body: "유용한 Skill들을 모아가기 위한 용도 입니다" },
      { id: "b03", title: "Skill Description", meta: "B03", hue: 40,
        skipGenerate: true,
        body: "Skill 정보들에 대해 설명을 제공하기 위한 용도 입니다." },
      { id: "b04", title: "MCP_Connector Reference", meta: "B04", hue: 40,
        skipGenerate: true,
        body: "유용한 MCP_Connector들 정보를 모아가기 위한 용도 입니다." },
      { id: "b05", title: "MCP_Connector Description", meta: "B05", hue: 40,
        skipGenerate: true,
        body: "MCP, Connector 정보들에 대해 설명을 제공하기 위한 용도 입니다." },
      { id: "b06", title: "디자인 노트", meta: "B06", hue: 40,
        skipGenerate: true,
        body: "디자인 관련하여 정보들을 모아놓았습니다." },
      { id: "b07", title: "영상_미디어", meta: "B07", hue: 40,
        skipGenerate: true,
        body: "영상·미디어 관련하여 정보들을 모아놓았습니다." },
      { id: "b08", title: "Claude 활용", meta: "B08", hue: 40,
        skipGenerate: true,
        body: "Claude의 활용 방법에 대한 정보들을 모아놓았습니다." },
      { id: "b10", title: "아이디어 스케치", meta: "B10", hue: 40,
        skipGenerate: true,
        body: "떠오르는 대로 적어둔 초기 아이디어 메모입니다." },
      { id: "b11", title: "교육_강좌 사이트", meta: "B11", hue: 40,
        skipGenerate: true,
        body: "교육·강좌 관련하여 참고할만한 사이트들을 모아놓았습니다." },
      { id: "b12", title: "기타 참고 사이트", meta: "B12", hue: 40,
        skipGenerate: true,
        body: "그 외 기타 참고할만한 사이트들에 대한 정보들을 모아놓았습니다." },
    ],
  },

  // ── C00 : 프로젝트 ───────────────────────────────────────────────────
  {
    id: "c00",
    folder: "C_Project",
    label: "프로젝트",
    icon: "folder",
    description: "MyWiki, GoToAiNative 등 진행 중인 개인 프로젝트를 관리합니다.",
    items: [
      { id: "c01", title: "MyWiki프로젝트", meta: "C01", hue: 265,
        body: "MyWiki프로젝트에 대한 내용을 준비 중입니다." },
      { id: "c02", title: "GoToAiNative", meta: "C02", hue: 265,
        body: "GoToAiNative에 대한 내용을 준비 중입니다." },
      { id: "c03", title: "주식프로젝트", meta: "C03", hue: 265,
        body: "과거 History 및 패턴 분석을 통한 주식 매매 프로그램 입니다." },
      { id: "c04", title: "영상프로젝트", meta: "C04", hue: 265,
        body: "영상프로젝트에 대한 내용 입니다." },
    ],
  },

  // ── D00 : 학습자료 (강좌 요약) ───────────────────────────────────────
  {
    id: "d00",
    folder: "D_Study_Materials",
    label: "학습자료",
    icon: "book-open",
    description: "온프레미스·온디바이스 등 직접 인프라를 구축하는 LLM 운영 방식을 정리·요약합니다.",
    items: [
      { id: "d01", title: "온프레미스 AI(On-Premise LLM) 완벽 가이드", meta: "D01", hue: 15,
        skipGenerate: true,
        body: "사내망에 직접 LLM을 구축·운영하는 온프레미스 AI의 정의, 장단점, 구축 방법을 정리한 완벽 가이드." },
      { id: "d02", title: "온디바이스 AI(On-Device AI)", meta: "D02", hue: 230,
        skipGenerate: true,
        body: "기기 자체에서 동작하는 온디바이스 AI에 대해 자세히 알아봅니다." },
    ],
  },

  // ── V00 : 북마크 · 즐겨찾기 ──────────────────────────────────────────
  {
    id: "v00",
    folder: "V_Bookmarks",
    label: "북마크 · 즐겨찾기",
    icon: "bookmark",
    description: "나중에 다시 볼 만한 링크·아티클과, 자주 찾는 고정 항목을 함께 모아둡니다.",
    items: [
      { id: "bm-1", title: "디자인 레퍼런스 모음", meta: "링크 12개", hue: 340,
        body: "UI/UX 작업 시 참고하는 웹사이트와 갤러리 링크 모음입니다.\n\n주기적으로 새 레퍼런스를 추가하고 있습니다." },
      { id: "bm-2", title: "개발자 블로그 모음", meta: "링크 8개", hue: 340,
        body: "팀에서 자주 참고하는 기술 블로그 목록입니다.\n\n프론트엔드, 백엔드, 인프라 카테고리로 분류되어 있습니다." },
      { id: "bm-3", title: "뉴스레터 아카이브", meta: "이슈 20개", hue: 340,
        body: "구독 중인 업계 뉴스레터 중 다시 보고 싶은 이슈를 모아둔 아카이브입니다." },
      { id: "bm-4", title: "툴 비교 아티클", meta: "링크 6개", hue: 340,
        body: "생산성 도구, 협업 툴을 비교 분석한 아티클 모음입니다.\n\n툴 도입을 검토할 때 참고합니다." },
      { id: "bm-5", title: "자주 쓰는 템플릿", meta: "고정됨", hue: 45,
        body: "매번 새로 만들지 않고 재사용하는 문서/기획 템플릿 모음입니다." },
      { id: "bm-6", title: "핵심 대시보드 링크", meta: "고정됨", hue: 45,
        body: "업무에 자주 쓰는 대시보드 바로가기 링크 모음입니다." },
      { id: "bm-7", title: "즐겨 찾는 문서", meta: "고정됨", hue: 45,
        body: "가장 자주 열어보는 문서 모음입니다." },
      { id: "bm-8", title: "자주 쓰는 도구", meta: "고정됨", hue: 45,
        body: "업무에서 매일 사용하는 도구와 바로가기 목록입니다." },
    ],
  },
];

// Node/CommonJS export (used by generate_items.js).
if (typeof module !== "undefined") {
  module.exports = { CATEGORIES };
}
