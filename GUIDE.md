# AI Native Project — 재사용 가이드

사이드바 카테고리 → 항목 목록 → 상세 페이지로 이동하는 정보 관리 웹페이지입니다.
**Go-To-AI-Native-World / Go-To-AI-Native-Archive**와 동일한 디자인 시스템·렌더링
로직을 그대로 재사용하며, `data.js`의 내용만 다릅니다.

## 1. 무엇이 만들어졌는가

```
AI_Native_Project-main/
├─ index.html          # 메인 포털(인트로 + 4단계 정공법 커버 + 최신 글) + 사이드바 + 항목 그리드
├─ style.css           # 디자인 토큰 + 컴포넌트 스타일
├─ data.js             # 콘텐츠 원본 데이터 (CATEGORIES 4개: 뉴스 타임라인·노트·프로젝트·학습자료)
├─ icons.js            # 인라인 SVG 아이콘 세트
├─ main.js             # data.js를 읽어 사이드바·카드 그리드를 렌더링 (수정 불필요)
├─ generate_items.js   # data.js를 읽어 items/*.html을 자동 생성하는 Node 스크립트
├─ assets/hero/        # 메인 커버 이미지(hero-stairs.jpg)
└─ items/
   ├─ A_뉴스_타임라인/    # 뉴스 상세 페이지 — 전부 손으로 작성된 완성 콘텐츠 (skipGenerate: true)
   ├─ B_노트/            # 노트 상세 페이지 — 전부 손으로 만든 커스텀 페이지 (skipGenerate: true)
   ├─ C_프로젝트/         # 프로젝트 상세 페이지 — 자동 생성됨 (템플릿 기반)
   └─ D_학습자료/         # 강좌 요약 상세 페이지 — 전부 독립형 완성 HTML (skipGenerate: true)
```

## 2. 카테고리 추가·수정하기

`data.js`의 `CATEGORIES` 배열이 유일한 진입점입니다. 새 항목을 추가하려면:

```js
{ id: "a10", title: "제목", meta: "A10", hue: 5,
  body: "본문 내용." }
```

- `skipGenerate: true`가 없는 항목은 `node generate_items.js` 실행 시
  템플릿 기반 상세 페이지로 자동 생성/재생성됩니다. (현재 C_프로젝트만 해당)
- 직접 디자인한 페이지를 쓰고 싶다면 `skipGenerate: true`를 추가하고
  `items/{folder}/{id}.html`을 손으로 작성하세요. 이후 `generate_items.js`를
  다시 실행해도 해당 파일은 건드리지 않습니다.
- **항목의 `id`는 반드시 실제 파일명과 정확히 일치해야 합니다**
  (예: `id: "a01"` → `items/A_뉴스_타임라인/a01.html`). 폴더나 파일 이름을
  바꿨다면 `data.js`의 해당 `id`/`folder`도 함께 바꿔야 링크가 깨지지 않습니다.

## 3. D_학습자료 페이지의 특징

학습자료 카테고리의 12개 페이지는 각각 독립적인 완성형 HTML(자체 CSS/폰트 포함)이라
사이트의 `style.css`에 의존하지 않습니다. 목록으로 돌아가는 링크만
좌상단에 작은 플로팅 버튼으로 삽입되어 있습니다(`#__archive_backlink`,
`href="../../index.html#d00"`).

새 강좌를 추가할 때도 같은 패턴을 따르면 됩니다 — 완성된 단일 HTML 파일을
`items/D_학습자료/`에 넣고, `data.js`에 `skipGenerate: true`인 항목을 추가하세요.

## 4. 사이트를 열었는데 사이드 메뉴가 안 보인다면

거의 항상 `data.js`의 **문법 오류**입니다. 브라우저는 `<script src="data.js">`가
파싱 실패하면 이후의 `main.js`까지 통째로 실행되지 않아 사이드바가 텅 비게
됩니다. 확인 방법:

```bash
node -c data.js   # 문법 오류가 있으면 여기서 바로 알려줍니다
```

가장 흔한 원인:
- `CATEGORIES` 배열의 닫는 대괄호 `];` 누락
- 객체 사이 쉼표 누락/중복
- 문자열 안의 큰따옴표를 이스케이프(`\"`)하지 않음

## 5. 디자인 토큰

`style.css` 최상단 `:root`에 전부 정의되어 있습니다. 다른 프로젝트에 이 디자인을
이식하려면 `style.css`, `icons.js`, `main.js`, `generate_items.js`와 이 문서를
그대로 복사한 뒤 `data.js`만 새로 채우면 됩니다.
