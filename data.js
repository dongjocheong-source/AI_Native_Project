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
  { cat: "d00", item: "d03", date: "2026년 8월 27일",
    summary: "Claude Code의 에이전틱 루프, 설치, 워크플로우, 컨텍스트 관리, 코드 리뷰, 커스터마이징을 정리했습니다." },
  { cat: "c00", item: "c02", date: "2026년 8월 20일",
    summary: "GoToAiNative 프로젝트의 진행 상황과 다음 단계를 기록합니다." },
  { cat: "b00", item: "b08", date: "2026년 8월 12일",
    summary: "Claude의 활용 방법에 대한 정보들을 모아놓았습니다." },
];

const CATEGORIES = [
  // ── A00 : 뉴스 타임라인 ──────────────────────────────────────────────
  {
    id: "a00",
    folder: "A_뉴스_타임라인",
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
    folder: "B_노트",
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
    folder: "C_프로젝트",
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
    folder: "D_학습자료",
    label: "학습자료",
    icon: "book-open",
    description: "Claude Academy 등에서 학습한 강좌들을 카드 형태로 정리·요약합니다.",
    items: [
      { id: "d01", title: "AI Capabilities and Limitations", meta: "D01", hue: 15,
        skipGenerate: true,
        body: "대형언어모델의 4가지 핵심 속성(Next Token Prediction·Knowledge·Working Memory·Steerability)과 보정된 신뢰(Calibrated Trust)를 정리한 강좌 요약." },
      { id: "d02", title: "Teaching AI Fluency", meta: "D02", hue: 230,
        skipGenerate: true,
        body: "교육자를 위한 4D 프레임워크 교수법 — 교수 접근법 선택, 학생 스캐폴딩, 평가·과제 설계, 전공별 적용." },
      { id: "d03", title: "Claude Code 101", meta: "D03", hue: 145,
        skipGenerate: true,
        body: "Claude Code의 개념, 작동 원리, 설치, 프롬프팅, Explore-Plan-Code-Commit 워크플로우, 컨텍스트 관리, 코드 리뷰, 커스터마이징." },
      { id: "d04", title: "Introduction to Claude Cowork", meta: "D04", hue: 30,
        skipGenerate: true,
        body: "Claude Cowork 설정, 첫 작업 위임, 반복 작업 예약, 지침·프로젝트, 스킬·플러그인, Chrome·Microsoft 365 확장, 안전 습관." },
      { id: "d05", title: "Claude Platform 101", meta: "D05", hue: 210,
        skipGenerate: true,
        body: "Claude Platform 개요, 첫 API 호출과 모델 선택, 에이전트 루프와 Tool Use, 내장 툴·Skills·MCP·컨텍스트 관리, Managed Agents." },
      { id: "d06", title: "Claude Code in Action", meta: "D06", hue: 280,
        skipGenerate: true,
        body: "더 길고 손을 덜 대는 Claude Code 세션 — 작업 조율, CLAUDE.md·훅 설정, 자동화, 검증과 팀 공유." },
      { id: "d07", title: "Introduction to Model Context Protocol", meta: "D07", hue: 170,
        skipGenerate: true,
        body: "MCP 아키텍처, Python SDK로 첫 서버 만들기, 클라이언트·리소스·프롬프트, Tools/Resources/Prompts 비교." },
      { id: "d08", title: "MCP: Advanced Topics", meta: "D08", hue: 250,
        skipGenerate: true,
        body: "샘플링, 실시간 피드백, Roots, JSON 메시지 아키텍처, STDIO·StreamableHTTP 전송 계층." },
      { id: "d09", title: "Introduction to Subagents", meta: "D09", hue: 95,
        skipGenerate: true,
        body: "서브에이전트 작동 원리, /agents로 커스텀 서브에이전트 만들기, 신뢰할 수 있는 설계 패턴, 언제 쓸지." },
      { id: "d10", title: "The AI-Native SDLC Playbook", meta: "D10", hue: 200,
        skipGenerate: true,
        body: "Plan·Design·Build·Test·Deploy·Maintain 6단계로 다시 그리는 AI-네이티브 소프트웨어 개발 라이프사이클." },
      { id: "d11", title: "Introduction to Agent Skills", meta: "D11", hue: 35,
        skipGenerate: true,
        body: "SKILL.md로 스킬 만들기, 트리거되는 설명 작성, 점진적 공개, 다른 커스터마이징 도구와의 비교, 팀 공유." },
      { id: "d12", title: "Building with the Claude API", meta: "D12", hue: 265,
        skipGenerate: true,
        body: "API 기초부터 프롬프트 평가, 툴 사용, MCP, RAG, Claude Code·Computer Use, 에이전틱 워크플로우까지 7개 모듈." },
    ],
  },
];

// Node/CommonJS export (used by generate_items.js).
if (typeof module !== "undefined") {
  module.exports = { CATEGORIES };
}
