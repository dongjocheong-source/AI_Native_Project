# Go-To-AI-Native-Archive

**Go-To-AI-Native-World**에서 분리되어 나온 자매 사이트입니다.
강좌 정리, 진행 중인 프로젝트, 짧은 노트, 최신 뉴스를 모아둡니다.

메인 화면 상단의 "AI 네이티브를 위한 4단계 정공법" 커버는
`Total_Go_to_AI_Native_v1_1_brief3.pptx`의 내용을 그대로 옮긴 것입니다.

## 구조

이 저장소는 원본 사이트와 완전히 동일한 코드 구조(순수 HTML/CSS/JS, 빌드 도구 없음)를
그대로 재사용합니다. 유일한 진입점은 `data.js`입니다.

- `index.html` — 앱 셸(사이드바 + 메인 포털/카테고리 뷰)
- `data.js` — **콘텐츠를 추가·수정·삭제하는 유일한 곳**
- `main.js` — `data.js`를 읽어 사이드바·카드 그리드를 렌더링 (수정 불필요)
- `icons.js` — 사이드바/카드에 쓰이는 SVG 아이콘 (수정 불필요)
- `generate_items.js` — `data.js`를 읽어 `items/*.html` 상세 페이지를 생성하는 Node 스크립트
- `items/` — 카테고리별 상세 페이지
  - `K_강좌/` — 강좌 요약 페이지 (완성된 독립 HTML이므로 전부 `skipGenerate: true`)
  - `G_프로젝트/` — 프로젝트 상세 페이지 (자동 생성됨)
  - `F_노트/` — 노트 상세 페이지 (손으로 만든 커스텀 HTML이므로 전부 `skipGenerate: true`)
  - `N_최신뉴스/` — 아직 항목 없음. `data.js`의 `news00.items`에 추가하면 자동으로 카드가 생깁니다.

## 카테고리

| ID | 라벨 | 설명 |
| --- | --- | --- |
| `course00` | 강좌 | Claude Academy 등에서 학습한 강좌 요약 12건 |
| `project00` | 프로젝트 | Go-To-AI-Native-World에서 이전된 프로젝트 4건 |
| `note00` | 노트 | Go-To-AI-Native-World에서 이전된 노트 11건 |
| `news00` | 최신 뉴스 | 신규 카테고리 (현재 비어있음) |

## 콘텐츠 추가하는 법

1. `data.js`의 해당 카테고리 `items` 배열에 `{ id, title, meta, hue, body }`를 추가합니다.
2. 직접 디자인한 상세 페이지를 쓰려면 `skipGenerate: true`를 추가하고
   `items/{folder}/{id}.html`을 손으로 작성합니다.
3. 자동 생성 페이지로 충분하면 `skipGenerate`를 생략하고
   `node generate_items.js`를 실행합니다 (이미 `skipGenerate: true`인 항목은 건드리지 않습니다).

## 주의

`node generate_items.js`를 실행하면 `skipGenerate`가 없는 항목의 페이지만
템플릿으로 새로 씁니다. 강좌(`K_강좌`)와 노트(`F_노트`)는 전부 손으로 만든
콘텐츠이므로 실수로 지워지지 않도록 모두 `skipGenerate: true`로 표시돼 있습니다.
