---
title: 디자인 시스템·디자인 토큰 — 일관성 잡는 뼈대
description: 작은 사이트도 디자인 시스템이 필요한 이유. 색·폰트·간격·컴포넌트를 토큰으로 정리하는 법.
category: 기획 & 디자인 / 디자인 시스템
status: draft
---


> 디자인 시스템은 사이트 전체의 **색·폰트·간격·컴포넌트를 일관성 있게 관리하는 규칙**입니다. 큰 사이트만 필요한 게 아니라, 5페이지 짜리 사이트도 처음에 잡아두면 작업 효율 ↑·유지보수 편함. 핵심 토큰부터 컴포넌트까지.

## 디자인 시스템 = 사이트의 헌법

규칙 없이 만들면:
- 페이지마다 폰트 다름
- 버튼 모양 4가지
- 색 코드 #2563EB·#2562EA·#2362EB (미세하게 다름)
- 한 사람이 만들어도 일관성 깨짐

디자인 시스템 = **재사용 가능한 결정 모음**.

## 작은 사이트도 필요한 이유

흔한 오해: "큰 사이트만 디자인 시스템 필요"

실제:
- 5페이지 사이트도 일관성 = 신뢰
- 6개월 후 페이지 추가 시 옛 결정 못 찾으면 불일치
- 외주·인수인계 시 명확

**처음 30분 투자로 6개월 시간 절약**.

## 디자인 토큰 — 핵심 개념

토큰 = **재사용 가능한 디자인 결정 한 단위**.

예시:
- `--color-primary: #2563eb`
- `--font-body: 'Pretendard'`
- `--spacing-md: 16px`
- `--radius-button: 6px`

CSS에서 토큰을 변수로 정의 → 모든 곳에서 참조 → 한 곳에서 수정·전체 반영.

## 5대 토큰 카테고리

### 1. 색 (Color)

```css
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-accent: #fde68a;

  --color-text: #1a1a1a;
  --color-text-soft: #555555;
  --color-text-mute: #888888;

  --color-bg: #ffffff;
  --color-bg-soft: #fafafa;
  --color-border: #e8e8e8;

  --color-success: #22c55e;
  --color-warning: #facc15;
  --color-error: #ef4444;
}
```

### 2. 타이포그래피 (Typography)

```css
:root {
  --font-body: 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 24px;
  --text-2xl: 34px;
  --text-3xl: 48px;

  --leading-tight: 1.2;
  --leading-normal: 1.7;
  --leading-loose: 2;

  --tracking-tight: -0.04em;
  --tracking-normal: -0.02em;
  --tracking-wide: 0.05em;
}
```

### 3. 간격 (Spacing)

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
}
```

> 💡 **8px 배수**가 표준. 디자이너·개발자 모두 익숙.

### 4. 라디우스·테두리

```css
:root {
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-full: 9999px;

  --border-thin: 1px;
  --border-thick: 2px;
}
```

### 5. 그림자·효과

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.08);
  --shadow-lg: 0 10px 24px rgba(0,0,0,0.12);

  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
}
```

## 컴포넌트 시스템

토큰 위에 **재사용 컴포넌트**:

### 버튼

```css
.btn {
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: var(--transition-fast);
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}
.btn-primary:hover {
  background: var(--color-primary-hover);
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}
```

### 카드

```css
.card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
}
```

### 인풋

```css
input,
textarea {
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
}
input:focus,
textarea:focus {
  border-color: var(--color-primary);
  outline: none;
}
```

## 디자인 시스템 문서화

### 옵션 A: Figma 페이지

Figma 파일에 별도 페이지:
- Colors
- Typography
- Spacing
- Components

각 항목 시각적 견본 + 토큰명.

### 옵션 B: 노션·문서

표로 정리:

| 토큰 | 값 | 사용처 |
|---|---|---|
| --color-primary | #2563eb | 메인 버튼·링크 |
| --text-base | 16px | 본문 |

### 옵션 C: Storybook (개발자)

React·Vue 컴포넌트 라이브러리. 비주얼 라이브러리.

대부분 비즈니스 사이트는 옵션 A 또는 B로 충분.

## 토큰 명명 규칙

### 시맨틱 (의미 기반) — 권장

```css
--color-primary
--color-error
--text-body
--spacing-section
```

용도가 명확. 값 변경해도 의미 유지.

### 절대적 (값 기반) — 자제

```css
--color-blue-500
--text-16px
--spacing-16
```

값이 보이지만 의미·용도 불명확. 디자인 시스템 변경 시 어색.

### 혼합 패턴

색의 경우 절대 + 시맨틱 둘 다:

```css
:root {
  /* 절대 (팔레트) */
  --blue-500: #2563eb;
  --blue-600: #1d4ed8;

  /* 시맨틱 (의미) */
  --color-primary: var(--blue-500);
  --color-primary-hover: var(--blue-600);
}
```

색 팔레트 변경 시 한 곳만 수정.

## 다크 모드 지원 (선택)

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
}

[data-theme="dark"] {
  --color-bg: #1a1a1a;
  --color-text: #ffffff;
}
```

HTML에 `data-theme="dark"` 적용 시 자동 전환.

대부분 비즈니스 사이트는 다크 모드 X. 추가 작업 시간 대비 가치 ↑인지 검토.

## 디자인 시스템 — 30분 셋업

### Step 1: 색 5~7개

- Primary (강조·CTA)
- Secondary (보조)
- Text (3단계: 진함·보통·약함)
- Background
- Border

### Step 2: 폰트 1~2개

- Body (Pretendard 권장)
- Heading (Body와 같거나·다른 디스플레이 폰트)

### Step 3: 간격 5단계

`8px·16px·24px·32px·48px`만 사용. 다른 값 금지.

### Step 4: 컴포넌트 5개

- 버튼 (Primary·Secondary)
- 카드
- 인풋
- 헤딩 스타일

### Step 5: 시스템 문서

위 결정을 한 문서에 정리. Figma 또는 노션.

30분 작업. 이후 모든 페이지에서 활용.

## 시스템 유지 — 추가될 때

새 디자인 요소 추가 시:

1. 기존 토큰으로 가능한가?
2. 가능하면 그대로 사용
3. 불가능하면 토큰 추가 + 문서 업데이트

**즉흥적으로 새 값 박지 X**.

## ⚠️ 자주 하는 실수

- **토큰 없이 시작**: 한 페이지마다 색·간격 다름
- **너무 많은 토큰**: 50+ 토큰 = 관리 부담
- **문서화 안 함**: 본인도 6개월 후 잊음
- **즉흥적 값 박제**: `padding: 13px` 같은 비표준 값
- **다크 모드 너무 일찍**: 라이트만 완성 후

## ❓ FAQ

**Q. 디자인 시스템과 디자인 시안은?**
A. 시안은 페이지별 비주얼, 시스템은 반복 사용 규칙. 시안 = 시스템 토큰의 조합.

**Q. 작은 사이트도 정말 필요?**
A. 5페이지면 30분 정도면 충분. 시간 ROI 무조건 ↑.

**Q. Tailwind CSS 쓰면 디자인 시스템 자동인가요?**
A. Tailwind = 토큰 모음의 한 형태. 다만 본인 사이트 맞춤 토큰은 별도 설정 필요.

**Q. Figma 디자인 시스템 → 코드 자동 변환?**
A. Figma Tokens·Style Dictionary 등 도구 사용. 다만 수동 작업이 안전.

**Q. 디자인 시스템 변경 시 모든 페이지 수정해야?**
A. 토큰으로 만들었으면 토큰 값만 변경. 모든 페이지 자동 반영.

---

## 관련 가이드

- [컬러·타이포 잡는 법](/guides/design-color-typo/)
- [모바일 우선 디자인](/guides/design-mobile-first/)
- [공통 디자인·폰트 (WP)](/guides/wp-customizer/)
