# Archive Hub — 재사용 가이드

**Go-To-AI-Native-World**와 동일한 사이드바 → 카테고리 → 상세 페이지 패턴을 쓰는
자매 사이트입니다. 디자인 시스템·렌더링 로직은 원본과 100% 동일하며,
`data.js`의 내용만 다릅니다.

## 1. 무엇이 만들어졌는가

```
Go-To-AI-Native-Archive/
├─ index.html          # 메인 포털(인트로 + 4단계 정공법 커버 + 최신 글) + 사이드바 + 항목 그리드
├─ style.css           # 원본과 동일한 디자인 토큰 + 컴포넌트 스타일
├─ data.js             # 콘텐츠 원본 데이터 (CATEGORIES 4개: 강좌·프로젝트·노트·최신 뉴스)
├─ icons.js            # 원본과 동일한 인라인 SVG 아이콘 세트
├─ main.js             # 원본과 동일 — data.js를 읽어 렌더링 (수정 불필요)
├─ generate_items.js   # data.js를 읽어 items/*.html을 자동 생성하는 스크립트
├─ assets/hero/        # 메인 커버 이미지(hero-stairs.jpg)
└─ items/
   ├─ K_강좌/           # 강좌 상세 페이지 — 전부 손으로 만든 완성 페이지 (skipGenerate: true)
   ├─ G_프로젝트/        # 프로젝트 상세 페이지 — 자동 생성됨
   ├─ F_노트/            # 노트 상세 페이지 — 전부 손으로 만든 커스텀 페이지 (skipGenerate: true)
   └─ N_최신뉴스/         # 아직 비어있음
```

## 2. 카테고리 추가·수정하기

`data.js`의 `CATEGORIES` 배열이 유일한 진입점입니다.

```js
{
  id: "news00",
  folder: "N_최신뉴스",
  label: "최신 뉴스",
  icon: "rss",
  description: "...",
  items: [
    { id: "n01", title: "제목", meta: "N01", hue: 5,
      body: "본문 내용." },
  ],
}
```

- `skipGenerate: true`가 없는 항목은 `node generate_items.js` 실행 시
  템플릿 기반 상세 페이지로 자동 생성/재생성됩니다.
- 직접 디자인한 페이지를 쓰고 싶다면 `skipGenerate: true`를 추가하고
  `items/{folder}/{id}.html`을 손으로 작성하세요. 이후 `generate_items.js`를
  다시 실행해도 해당 파일은 건드리지 않습니다.

## 3. 강좌(K_강좌) 페이지의 특징

강좌 카테고리의 12개 페이지는 각각 독립적인 완성형 HTML(자체 CSS/폰트 포함)이라
사이트의 `style.css`에 의존하지 않습니다. 목록으로 돌아가는 링크만
좌상단에 작은 플로팅 버튼으로 삽입되어 있습니다(`#__archive_backlink`).

새 강좌를 추가할 때도 같은 패턴을 따르면 됩니다 — 완성된 단일 HTML 파일을
`items/K_강좌/`에 넣고, `data.js`에 `skipGenerate: true`인 항목을 추가하세요.

## 4. 디자인 토큰

원본(Go-To-AI-Native-World)과 완전히 동일한 `style.css`를 그대로 사용합니다.
디자인을 바꾸고 싶다면 두 사이트 중 한 곳의 `style.css`를 수정한 뒤
다른 사이트에도 복사해 동기화하세요.
