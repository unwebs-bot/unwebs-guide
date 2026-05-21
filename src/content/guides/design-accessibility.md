---
title: 웹 접근성 기초 — 모든 사용자를 위한 디자인
description: 접근성이 왜 필요한지부터 색 대비·키보드 접근·스크린리더 대응까지. WCAG AA 수준 실전.
category: 기획 & 디자인 / 디자인 원칙
status: draft
---


> 웹 접근성은 **시각·청각·운동·인지 능력에 차이가 있는 모든 사람이 사이트를 사용할 수 있게** 만드는 작업입니다. 법적 의무이기도 하고, 결과적으로 모든 사용자 경험이 좋아져요. WCAG AA 기준의 실전 체크리스트.

## 왜 접근성?

### 1. 법적 의무

한국 — **장애인차별금지법** (2008~):
- 공공기관 의무
- 민간기업도 점진 적용
- 일정 규모 이상 기업 사이트 의무

### 2. 시장 확대

- 한국 등록 장애인: 약 265만 명
- 시각·청각 장애 + 색약·노안 포함 시 인구의 10~15%
- 일시적 장애 (팔 다침·시끄러운 환경 등) 포함 시 모두

### 3. SEO 시너지

접근성 = SEO 점수 ↑:
- 시맨틱 HTML
- ALT 텍스트
- 명확한 헤딩 구조
- 빠른 로딩

검색엔진도 "시각장애 사용자"라고 생각하면 이해 쉬움.

## WCAG — 글로벌 표준

WCAG (Web Content Accessibility Guidelines) — 웹 접근성 국제 표준.

### 4가지 원칙

1. **Perceivable (인지 가능)**: 모든 콘텐츠 인지 가능
2. **Operable (운용 가능)**: 키보드·다양한 입력 가능
3. **Understandable (이해 가능)**: 콘텐츠·기능 이해 가능
4. **Robust (견고)**: 다양한 기술(스크린리더 등) 호환

### 3단계 등급

- **A**: 최소
- **AA**: 표준 (대부분 의무)
- **AAA**: 최고 (모든 페이지 어려움)

**AA 목표**가 현실적·법적 충분.

## 실전 체크리스트 — 30개

### 색·대비

- [ ] 본문 텍스트 vs 배경 4.5:1 이상
- [ ] 큰 글자 (18pt+) 3:1 이상
- [ ] 버튼·링크 4.5:1 이상
- [ ] 색만으로 의미 전달 X (예: 빨강 X·녹색 O만으로 구분 ❌)

도구: **WebAIM Contrast Checker**.

### 텍스트

- [ ] 본문 16px 이상
- [ ] 줄간격 1.5 이상
- [ ] 단락 폭 80자 이내
- [ ] 자간 0.12em 이내 (CJK는 음수 OK)
- [ ] 줄간격 조정 가능 (사용자가 확대)

### 이미지

- [ ] 모든 의미 있는 이미지에 ALT 텍스트
- [ ] 장식 이미지는 `alt=""` (빈 값)
- [ ] 이미지 안 텍스트 ❌ (실제 텍스트로)
- [ ] 인포그래픽은 텍스트 설명 보완

### 키보드 접근

- [ ] 모든 기능 키보드로 가능 (마우스 없이)
- [ ] Tab 순서 자연스러움
- [ ] 포커스 표시 명확 (`:focus` 스타일)
- [ ] 키보드 트랩 없음 (Tab 무한 루프 X)

테스트: 마우스 분리 → Tab 키만으로 사이트 사용해보기.

### 스크린리더

- [ ] 시맨틱 HTML (`<header>`·`<nav>`·`<main>`·`<footer>`)
- [ ] 헤딩 계층 명확 (H1 → H2 → H3, 건너뜀 ❌)
- [ ] 폼 라벨 (`<label>`)
- [ ] 버튼은 `<button>`, 링크는 `<a>` (div ❌)
- [ ] ARIA 속성 적절히 (남용 X)

테스트:
- macOS: VoiceOver (`Cmd+F5`)
- Windows: NVDA (무료)
- iOS: VoiceOver (설정 > 접근성)
- Android: TalkBack

### 폼

- [ ] 모든 인풋에 명확한 라벨
- [ ] 오류 메시지 색 + 텍스트 (색만 ❌)
- [ ] 필수 표시 (* 또는 "필수")
- [ ] 키보드로 모든 인풋 접근
- [ ] 자동 입력 (이메일·주소) 지원

### 동영상·오디오

- [ ] 자막 (청각장애 + 무음 환경)
- [ ] 대본 (스크린리더용)
- [ ] 자동 재생 ❌ (또는 음소거 자동 재생만)
- [ ] 재생·일시정지·음량 조절 가능

### 동작·애니메이션

- [ ] 빠른 깜빡임 ❌ (간질 위험)
- [ ] 자동 재생 동영상은 일시정지 가능
- [ ] 반복 애니메이션은 꺼질 수 있게
- [ ] `prefers-reduced-motion` 존중

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 실전 코드 패턴

### 시맨틱 HTML

```html
<header>
  <nav aria-label="주 메뉴">
    <ul>
      <li><a href="/">홈</a></li>
      <li><a href="/about">소개</a></li>
    </ul>
  </nav>
</header>

<main>
  <h1>페이지 제목</h1>
  <article>
    <h2>섹션 1</h2>
    <p>본문</p>
  </article>
</main>

<footer>
  <p>© 2026 회사명</p>
</footer>
```

### 폼 라벨

```html
<!-- 좋음 -->
<label for="email">이메일</label>
<input type="email" id="email" required>

<!-- 또는 -->
<label>
  이메일
  <input type="email" required>
</label>
```

### 포커스 스타일

```css
a:focus,
button:focus,
input:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* 마우스 클릭 시는 outline 제거, 키보드 Tab 시만 표시 */
a:focus:not(:focus-visible) {
  outline: none;
}
```

### Skip Link (스크린리더용)

페이지 최상단에 "본문으로 이동" 링크:

```html
<a href="#main" class="skip-link">본문으로 이동</a>

<header>...</header>
<main id="main">...</main>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  /* 키보드 포커스 시에만 보이게 */
}
.skip-link:focus {
  top: 0;
}
```

스크린리더 사용자가 헤더·메뉴 건너뛰고 본문 직행.

### ARIA 활용 (필요할 때만)

```html
<!-- 닫기 버튼 (텍스트 없는 아이콘) -->
<button aria-label="닫기">×</button>

<!-- 펼침/접힘 -->
<button aria-expanded="false" aria-controls="menu">메뉴</button>
<ul id="menu" hidden>...</ul>

<!-- 실시간 알림 -->
<div role="alert">오류가 발생했습니다.</div>
```

> ⚠️ ARIA 남용 X. 시맨틱 HTML이 우선, ARIA는 보완.

## 점검 도구

### 자동 검사

- **Lighthouse** (Chrome DevTools) — Accessibility 점수
- **axe DevTools** (Chrome 확장)
- **WAVE** (Chrome 확장·웹)

90% 정도 발견. 나머지는 수동.

### 수동 점검

- **키보드 사용**: Tab·Enter·Space만으로 사용
- **스크린리더**: VoiceOver·NVDA
- **색맹 시뮬레이션**: Stark·Color Oracle
- **확대 200%**: 브라우저 줌

## 자주 받는 질문

### Q. 작은 사이트도 접근성 필요?

법적 의무는 일정 규모. 도덕적·실용적으론 모든 사이트. 작아도 30분이면 80% 커버.

### Q. 접근성 작업 비용·시간?

처음부터 고려하면 추가 비용 거의 X. 사후 수정은 큰 비용.

### Q. AA·AAA 차이?

AA는 표준·달성 가능. AAA는 모든 페이지 모든 요소 적용 어려움. AA 목표가 현실적.

### Q. 디자이너·개발자 누구 책임?

양쪽 + 콘텐츠 작성자. **모든 단계 영향**.

### Q. 접근성 인증·심사?

한국웹접근성협회 (WA) 등 인증 가능. 공공기관 의무, 민간은 선택.

## 우선순위 — 한정 시간에

다 못 챙기면 이 순서:

1. **시맨틱 HTML** (5분 작업, 큰 효과)
2. **이미지 ALT** (모든 이미지)
3. **색 대비** (WebAIM 검사 + 수정)
4. **키보드 접근** (Tab 테스트)
5. **폰트 16px·줄간격 1.5+** (CSS 한 줄)

이 5가지면 70%+ 접근성.

## ⚠️ 자주 하는 실수

- **시맨틱 무시 (`<div>`만 사용)**: 스크린리더가 구조 파악 X
- **포커스 스타일 제거**: 키보드 사용자 길 잃음
- **이미지에만 정보**: 시각장애 사용자 정보 손실
- **색만으로 의미**: 색맹 사용자 식별 X
- **자동 재생 동영상**: 모두에게 불편

## ❓ FAQ

**Q. AAA는 너무 어려운데 꼭 해야?**
A. 아닙니다. **AA가 표준**. AAA는 특정 페이지·요소만.

**Q. WordPress·아임웹이 접근성 자동 처리?**
A. 일부만. ALT·헤딩·색 대비는 본인 점검 필요.

**Q. 접근성 점검에 시간 얼마나?**
A. 새 사이트 첫 점검 2~4시간. 이후 매 페이지 발행 시 5분.

**Q. AI 도구로 접근성 자동화?**
A. axe·Lighthouse가 자동 검사. 다만 의미 적절성은 사람 판단.

**Q. 모바일 접근성은 다른가요?**
A. 같은 원칙 + 터치 타깃 (44px+)·기기 회전 지원.

---

## 관련 가이드

- [모바일 우선 디자인](/guides/design-mobile-first/)
- [컬러·타이포 잡는 법](/guides/design-color-typo/)
- [디자인 시스템·토큰](/guides/design-system-basics/)
- [온페이지 SEO](/guides/seo-onpage/)
