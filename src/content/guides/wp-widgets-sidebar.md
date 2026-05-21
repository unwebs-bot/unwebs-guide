---
title: WordPress 위젯·사이드바 활용 — 푸터·사이드바 영역 구성
description: WordPress 위젯 시스템과 사이드바 운영. 클래식 위젯 vs 블록 위젯·자주 쓰는 위젯·푸터 4컬럼.
category: WordPress 운영 / 콘텐츠 관리
status: draft
---


> 위젯은 사이드바·푸터·헤더 같은 **사이드 영역에 추가하는 작은 콘텐츠 블록**입니다. 최근 글·검색·태그 클라우드·SNS 링크 등을 손쉽게 배치할 수 있어요. WordPress 5.8부터 블록 기반 위젯으로 전환 중.

## 위젯 시스템 — 두 버전 공존

| | 클래식 위젯 | 블록 위젯 (WP 5.8+) |
|---|---|---|
| 인터페이스 | 드래그 앤 드롭 | 블록 에디터처럼 |
| 호환 | 모든 테마 | 모든 테마 (지원) |
| 디자인 자유도 | 제한적 | 높음 |
| 전환 | Classic Widgets 플러그인으로 옛 방식 유지 가능 | 기본값 |

본 가이드는 **블록 위젯** 중심.

## 위젯 영역 — 테마별

위젯이 들어가는 위치 (테마가 정의):

| 흔한 영역 | 용도 |
|---|---|
| Primary Sidebar | 메인 사이드바 (블로그 옆) |
| Footer 1~4 | 푸터 컬럼 |
| Header | 헤더 위 또는 옆 |
| Above/Below Content | 본문 위·아래 |
| 404 Page | 404 페이지 |
| Custom Sidebars | 페이지·카테고리별 |

영역은 **외모 > 위젯**에서 확인.

## 자주 쓰는 위젯 12개

### 콘텐츠 위젯

| 위젯 | 용도 |
|---|---|
| **최신 글 (Latest Posts)** | 최근 글 N개 |
| **최신 댓글 (Recent Comments)** | 최근 댓글 |
| **카테고리 (Categories)** | 카테고리 목록 |
| **태그 클라우드 (Tag Cloud)** | 인기 태그 시각화 |
| **아카이브 (Archives)** | 월별·연별 아카이브 |
| **검색 (Search)** | 사이트 검색창 |

### 미디어·디자인 위젯

| 위젯 | 용도 |
|---|---|
| **이미지 (Image)** | 단일 이미지 |
| **갤러리 (Gallery)** | 다중 이미지 |
| **동영상 (Video)** | YouTube 등 임베드 |
| **단락 (Paragraph)** | 텍스트 |
| **헤딩 (Heading)** | 위젯 영역의 소제목 |
| **사용자 정의 HTML** | 자유 HTML/JS |

### 외부 콘텐츠

| 위젯 | 용도 |
|---|---|
| **RSS** | 외부 RSS 피드 표시 |
| **단축코드 (Shortcode)** | 플러그인 단축코드 |

## 위젯 추가 — 3단계

1. **외모 > 위젯**
2. 위젯 영역(사이드바·푸터 등) 선택
3. **+** 클릭 → 블록 선택 → 옵션 설정 → **업데이트**

## 푸터 4컬럼 — 표준 패턴

대부분 비즈니스 사이트 표준 푸터:

```
┌─ Footer 1 ─┬─ Footer 2 ─┬─ Footer 3 ─┬─ Footer 4 ─┐
│ 회사 정보   │ 빠른 링크   │ 최신 글     │ SNS·연락처  │
│ 로고        │ 회사 소개   │ 글 5개      │ 인스타·페북 │
│ 한 줄 소개  │ 서비스      │             │ 카카오톡    │
│ 주소·전화   │ 블로그      │             │ 이메일      │
│             │ 문의        │             │             │
└────────────┴────────────┴────────────┴────────────┘
```

각 컬럼에:
- Footer 1: 단락 + 이미지 위젯
- Footer 2: 사용자 정의 메뉴 위젯
- Footer 3: 최신 글 위젯
- Footer 4: 사용자 정의 HTML (SNS 아이콘 코드)

## 사이드바 — 블로그 옆 영역

블로그 사이드바 일반 패턴:

```
[검색창]
[작성자 소개 (이미지 + 짧은 글)]
[카테고리]
[최신 글]
[태그 클라우드]
[광고 또는 CTA]
```

페이지마다 다른 사이드바 운영 시: 플러그인 **Custom Sidebars**.

## 위젯 디자인 커스텀

### 위젯 영역의 시각 통일

자식 테마 CSS:

```css
.widget {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fafafa;
  border-radius: 8px;
}

.widget-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
}
```

### 모바일에서 위젯 숨김

```css
@media (max-width: 768px) {
  .sidebar-widget {
    display: none;
  }
}
```

또는 플러그인 **Widget Options** — 디바이스별 표시 제어.

## 페이지·카테고리별 다른 위젯

**Custom Sidebars** 플러그인:
- 메인 페이지 사이드바
- 블로그 사이드바
- 상품 페이지 사이드바
- 특정 카테고리 사이드바

각각 다른 위젯 조합.

## 위젯 접근 제어

특정 사용자에게만 표시:

플러그인 **Widget Logic** — 표시 조건 추가:
```
is_page('contact')        // 문의 페이지만
is_user_logged_in()       // 로그인 회원만
is_category('news')       // news 카테고리만
```

## SNS 아이콘 위젯

세 가지 방법:

### 1. 사용자 정의 HTML 위젯

```html
<div class="social-icons">
  <a href="https://facebook.com/myco" target="_blank">📘</a>
  <a href="https://instagram.com/myco" target="_blank">📷</a>
  <a href="https://youtube.com/myco" target="_blank">▶️</a>
</div>
```

이모지 대신 Font Awesome 아이콘이 더 깔끔.

### 2. 플러그인

**Simple Social Icons**, **Social Icons Widget by WPZOOM** — 클릭 한 번에 추가.

### 3. 테마 자체 옵션

많은 테마가 SNS URL 입력란 제공 → 자동 푸터 표시.

## 광고·CTA 위젯

사이드바·푸터에 광고·문의 유도:

- **이미지 위젯** + 링크 → 광고 배너
- **단락 + 버튼** → 문의 CTA
- **사용자 정의 HTML** → Google AdSense 코드

## 위젯 영역이 없는 테마

블록 테마 (FSE) — 외모 > 편집기에서 헤더·푸터 직접 블록으로 구성.

## ⚠️ 자주 하는 실수

- **너무 많은 위젯**: 사이드바 길이 본문 2배 → UX 망함
- **모바일 위젯 그대로 표시**: 모바일에서 끝없는 스크롤
- **검색창 누락**: 사용자 이탈 ↑
- **죽은 콘텐츠 위젯**: 안 쓰는 카테고리·태그 클라우드
- **광고 위젯이 80%**: 광고 사이트로 인식되어 SEO ↓

## ❓ FAQ

**Q. 위젯 영역이 안 보여요.**
A. 테마가 위젯 영역을 정의 안 한 경우. 자식 테마 `functions.php`에 `register_sidebar()` 추가 필요.

**Q. 블록 위젯이 어색해요. 옛 위젯으로 돌아갈 수 있나요?**
A. 플러그인 **Classic Widgets** 설치. WordPress 5.8 이전 방식.

**Q. 위젯 안에 단축코드 사용 가능?**
A. 텍스트 위젯에 단축코드 입력하면 자동 실행. 안 되면 functions.php에 `add_filter('widget_text', 'do_shortcode');`.

**Q. 사이드바 위치를 왼쪽에서 오른쪽으로?**
A. 테마 설정 또는 CSS `float` / `flex-direction` 조정. 자식 테마 권장.

**Q. 위젯이 모바일에서 다르게 보였으면?**
A. 플러그인 **Widget Options** — 디바이스별 표시·숨김.

---

## 관련 가이드

- [메뉴 만들기](/guides/wp-menu-management/)
- [테마 커스터마이저](/guides/wp-customizer/)
- [자식 테마 만들기](/guides/wp-child-theme/)
