/**
 * data.js — single source of truth for categories + items.
 * (Go-To-AI-Native-Archive — the "강좌 / 프로젝트 / 노트 / 최신 뉴스" companion
 * site split off from Go-To-AI-Native-World.)
 *
 * This is the ONLY place you edit to add/remove/change content.
 * - index.html reads this file directly (as a <script> tag) to render
 *   the sidebar and item grid.
 * - generate_items.js reads this same object (via Node's require) to
 *   (re)generate the static detail pages under items/*.html.
 *
 * Schema: see the sibling Go-To-AI-Native-World/data.js for full docs.
 * Categories here that hold hand-written pages (강좌, 노트, and most of
 * 프로젝트) are marked `skipGenerate: true` on every item so that running
 * `node generate_items.js` never overwrites their custom HTML.
 */

/**
 * LATEST_POSTS — 메인 포털 맨 아래 "최신 글" 카드 3장.
 */
const LATEST_POSTS = [
  { cat: "course00", item: "k03", date: "2026년 8월 27일",
    summary: "Claude Code의 에이전틱 루프, 설치, 워크플로우, 컨텍스트 관리, 코드 리뷰, 커스터마이징을 정리했습니다." },
  { cat: "project00", item: "g02", date: "2026년 8월 20일",
    summary: "GoToAiNative 프로젝트의 진행 상황과 다음 단계를 기록합니다." },
  { cat: "note00", item: "f08", date: "2026년 8월 12일",
    summary: "Claude의 활용 방법에 대한 정보들을 모아놓았습니다." },
];

const CATEGORIES = [
  // ── 강좌 (Courses) ───────────────────────────────────────────────────
  {
    id: "course00",
    folder: "K_강좌",
    label: "강좌",
    icon: "book-open",
    description: "Claude Academy 등에서 학습한 강좌들을 카드 형태로 정리·요약합니다.",
    items: [
      { id: "k01", title: "AI Capabilities and Limitations", meta: "K01", hue: 15,
        skipGenerate: true,
        body: "대형언어모델의 4가지 핵심 속성(Next Token Prediction·Knowledge·Working Memory·Steerability)과 보정된 신뢰(Calibrated Trust)를 정리한 강좌 요약." },
      { id: "k02", title: "Teaching AI Fluency", meta: "K02", hue: 230,
        skipGenerate: true,
        body: "교육자를 위한 4D 프레임워크 교수법 — 교수 접근법 선택, 학생 스캐폴딩, 평가·과제 설계, 전공별 적용." },
      { id: "k03", title: "Claude Code 101", meta: "K03", hue: 145,
        skipGenerate: true,
        body: "Claude Code의 개념, 작동 원리, 설치, 프롬프팅, Explore-Plan-Code-Commit 워크플로우, 컨텍스트 관리, 코드 리뷰, 커스터마이징." },
      { id: "k04", title: "Introduction to Claude Cowork", meta: "K04", hue: 30,
        skipGenerate: true,
        body: "Claude Cowork 설정, 첫 작업 위임, 반복 작업 예약, 지침·프로젝트, 스킬·플러그인, Chrome·Microsoft 365 확장, 안전 습관." },
      { id: "k05", title: "Claude Platform 101", meta: "K05", hue: 210,
        skipGenerate: true,
        body: "Claude Platform 개요, 첫 API 호출과 모델 선택, 에이전트 루프와 Tool Use, 내장 툴·Skills·MCP·컨텍스트 관리, Managed Agents." },
      { id: "k06", title: "Claude Code in Action", meta: "K06", hue: 280,
        skipGenerate: true,
        body: "더 길고 손을 덜 대는 Claude Code 세션 — 작업 조율, CLAUDE.md·훅 설정, 자동화, 검증과 팀 공유." },
      { id: "k07", title: "Introduction to Model Context Protocol", meta: "K07", hue: 170,
        skipGenerate: true,
        body: "MCP 아키텍처, Python SDK로 첫 서버 만들기, 클라이언트·리소스·프롬프트, Tools/Resources/Prompts 비교." },
      { id: "k08", title: "MCP: Advanced Topics", meta: "K08", hue: 250,
        skipGenerate: true,
        body: "샘플링, 실시간 피드백, Roots, JSON 메시지 아키텍처, STDIO·StreamableHTTP 전송 계층." },
      { id: "k09", title: "Introduction to Subagents", meta: "K09", hue: 95,
        skipGenerate: true,
        body: "서브에이전트 작동 원리, /agents로 커스텀 서브에이전트 만들기, 신뢰할 수 있는 설계 패턴, 언제 쓸지." },
      { id: "k10", title: "The AI-Native SDLC Playbook", meta: "K10", hue: 200,
        skipGenerate: true,
        body: "Plan·Design·Build·Test·Deploy·Maintain 6단계로 다시 그리는 AI-네이티브 소프트웨어 개발 라이프사이클." },
      { id: "k11", title: "Introduction to Agent Skills", meta: "K11", hue: 35,
        skipGenerate: true,
        body: "SKILL.md로 스킬 만들기, 트리거되는 설명 작성, 점진적 공개, 다른 커스터마이징 도구와의 비교, 팀 공유." },
      { id: "k12", title: "Building with the Claude API", meta: "K12", hue: 265,
        skipGenerate: true,
        body: "API 기초부터 프롬프트 평가, 툴 사용, MCP, RAG, Claude Code·Computer Use, 에이전틱 워크플로우까지 7개 모듈." },
    ],
  },

  // ── 프로젝트 (Projects) — Go-To-AI-Native-World에서 이전 ─────────────
  {
    id: "project00",
    folder: "G_프로젝트",
    label: "프로젝트",
    icon: "folder",
    description: "MyWiki, GoToAiNative 등 진행 중인 개인 프로젝트를 관리합니다.",
    items: [
      { id: "g01", title: "MyWiki프로젝트", meta: "G01", hue: 265,
        body: "MyWiki프로젝트에 대한 내용을 준비 중입니다." },
      { id: "g02", title: "GoToAiNative", meta: "G02", hue: 265,
        body: "GoToAiNative에 대한 내용을 준비 중입니다." },
      { id: "g03", title: "주식프로젝트", meta: "G03", hue: 265,
        body: "과거 History 및 패턴 분석을 통한 주식 매매 프로그램 입니다." },
      { id: "g04", title: "영상프로젝트", meta: "G04", hue: 265,
        body: "영상프로젝트에 대한 내용 입니다." },
    ],
  },

  // ── 노트 (Notes) — Go-To-AI-Native-World에서 이전 ────────────────────
  {
    id: "note00",
    folder: "F_노트",
    label: "노트",
    icon: "edit-3",
    description: "짧은 메모와 생각을 빠르게 기록합니다.",
    items: [
      { id: "f01", title: "프롬프팅", meta: "F01", hue: 40,
        skipGenerate: true,
        body: "프롬프팅 관련한 예제들을 모아 놓았습니다." },
      { id: "f02", title: "Skill References", meta: "F02", hue: 40,
        skipGenerate: true,
        body: "유용한 Skill들을 모아가기 위한 용도 입니다" },
      { id: "f03", title: "Skill Description", meta: "F03", hue: 40,
        skipGenerate: true,
        body: "Skill 정보들에 대해 설명을 제공하기 위한 용도 입니다." },
      { id: "f04", title: "MCP_Connector Reference", meta: "F04", hue: 40,
        skipGenerate: true,
        body: "유용한 MCP_Connector들 정보를 모아가기 위한 용도 입니다." },
      { id: "f05", title: "MCP_Connector Description", meta: "F05", hue: 40,
        skipGenerate: true,
        body: "MCP, Connector 정보들에 대해 설명을 제공하기 위한 용도 입니다." },
      { id: "f06", title: "디자인 노트", meta: "F06", hue: 40,
        skipGenerate: true,
        body: "디자인 관련하여 정보들을 모아놓았습니다." },
      { id: "f07", title: "영상_미디어", meta: "F07", hue: 40,
        skipGenerate: true,
        body: "영상·미디어 관련하여 정보들을 모아놓았습니다." },
      { id: "f08", title: "Claude 활용", meta: "F08", hue: 40,
        skipGenerate: true,
        body: "Claude의 활용 방법에 대한 정보들을 모아놓았습니다." },
      { id: "f10", title: "아이디어 스케치", meta: "F10", hue: 40,
        skipGenerate: true,
        body: "떠오르는 대로 적어둔 초기 아이디어 메모입니다." },
      { id: "f11", title: "교육_강좌 사이트", meta: "F11", hue: 40,
        skipGenerate: true,
        body: "교육·강좌 관련하여 참고할만한 사이트들을 모아놓았습니다." },
      { id: "f12", title: "기타 참고 사이트", meta: "F12", hue: 40,
        skipGenerate: true,
        body: "그 외 기타 참고할만한 사이트들에 대한 정보들을 모아놓았습니다." },
    ],
  },

  // ── 최신 뉴스 (Latest News) ───────────────────────────────────────────
  {
    id: "news00",
    folder: "N_최신뉴스",
    label: "최신 뉴스",
    icon: "rss",
    description: "AI 업계 최신 소식과 눈여겨볼 뉴스를 시간순으로 기록합니다.",
    items: [
      // 아직 등록된 항목이 없습니다. 여기에 { id, title, meta, hue, body }
      // 형식으로 새 뉴스를 추가하면 자동으로 카드가 생성됩니다.
    ],
  },
];

// Node/CommonJS export (used by generate_items.js).
if (typeof module !== "undefined") {
  module.exports = { CATEGORIES };
}
