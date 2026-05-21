---
title: WordPress GA4 설치 — Site Kit·MonsterInsights·직접 코드 비교
description: WordPress에 Google Analytics 4 설치하는 3가지 방법. 데이터 검증과 IP 제외 설정까지.
category: WordPress 운영 / SEO·통계
status: draft
---


> Google Analytics 4(GA4)는 사이트 트래픽 분석의 표준입니다. WordPress에는 **3가지 설치 방법**이 있어요. 가장 쉬운 Site Kit부터 직접 코드 삽입까지 비교 + 자주 막히는 부분 정리.

## 사전 준비

- **Google 계정**
- **WordPress 관리자 접근**

## 3가지 설치 방법 비교

| | Site Kit | MonsterInsights | 직접 코드 |
|---|---|---|---|
| 가격 | 무료 | 무료/Pro | 무료 |
| 설정 난이도 | 매우 쉬움 | 쉬움 | 중간 |
| 대시보드 통합 | ✅ | ✅ | ❌ |
| 추가 데이터 표시 | 기본 | 풍부 | 외부 GA만 |
| 사이트 속도 영향 | 미세 | 중간 | 최소 |
| **추천** | ✅ **대부분** | 대시보드 풍부하게 | 미니멀 |

## 방법 1: Site Kit by Google (가장 쉬움·추천)

구글 공식 무료 플러그인.

### 설치

1. 플러그인 > 새로 추가 > "Site Kit" 검색·설치·활성화
2. **Site Kit 설정 시작** 버튼
3. Google 계정 로그인 → 권한 부여
4. **Analytics 연결** → GA4 속성 생성 또는 기존 속성 선택
5. 자동으로 측정 코드 삽입

### 추가 연동

같은 플러그인으로:
- Search Console
- PageSpeed Insights
- AdSense

WordPress 대시보드에서 한 화면에 모두 확인.

## 방법 2: MonsterInsights

가장 인기 있는 GA 플러그인. 강력한 대시보드.

### 장점

- 풍부한 대시보드 (인기 글·이벤트·전환)
- 멀티 사이트 통합
- 폼·다운로드·외부 링크 자동 추적

### 단점

- 일부 기능 Pro만 ($99/년~)
- 사이트가 약간 무거워짐

### 설치

1. 플러그인 설치·활성화
2. GA 계정 인증
3. 측정 ID 자동 입력
4. 대시보드에서 데이터 확인

## 방법 3: 직접 코드 (가장 가벼움)

### GA4 측정 ID 받기

1. [analytics.google.com](https://analytics.google.com)
2. 속성 생성 → 데이터 스트림 추가 (웹)
3. URL 입력 → 측정 ID `G-XXXXXXXXXX` 확인

### WordPress에 코드 삽입

#### 옵션 A: 자식 테마

자식 테마 `functions.php`에:

```php
add_action('wp_head', function() {
  ?>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  <?php
});
```

`G-XXXXXXXXXX` 두 곳 모두 본인 ID로.

#### 옵션 B: SEO 플러그인 헤더 코드

Rank Math·Yoast SEO 또는 일반 플러그인 (Insert Headers and Footers)의 헤더 영역에 위 코드 붙여넣기.

#### 옵션 C: WordPress 6+ FSE 테마

외모 > 편집기 > 헤더 템플릿 > 사용자 정의 HTML 블록 추가.

## 설치 후 — 검증

### 실시간 확인

1. GA4 → **보고서 > 실시간**
2. 본인 사이트 시크릿창에서 접속
3. 30초 안에 활성 사용자 1명 표시되면 OK

### 코드 검증

브라우저 개발자 도구 (F12) > Network 탭:
- `google-analytics.com` 또는 `googletagmanager.com` 요청 확인

또는 Chrome 확장 **Google Tag Assistant** — 자동 진단.

## 본인 IP 제외 (필수)

본인이 사이트를 자주 방문하면 데이터 오염.

### Site Kit·MonsterInsights

설정 옵션에 "내부 트래픽 제외" 자동 가능.

### 직접

GA4 > **관리** > 데이터 스트림 > **태그 설정 구성** > **내부 트래픽 정의**:
- 본인 사무실·집 IP 추가
- 데이터 필터 활성

### 더 간단 — 브라우저 차단

[Google Analytics Opt-out Add-on](https://tools.google.com/dlpage/gaoptout) 설치 → 본인 브라우저에서 GA 차단.

## 자주 보는 GA4 데이터

### 보고서 메뉴

| 메뉴 | 보는 것 |
|---|---|
| 실시간 | 지금 활성 사용자 |
| 획득 | 어디서 왔는지 |
| 참여도 | 어떤 페이지 봤는지 |
| 인구통계 | 사용자 지역·연령·기기 |
| 전환 | 목표 달성 |

### 사이트 운영자가 매주 보는 5가지

1. **활성 사용자 추이** (전주 대비)
2. **세션 소스/매체** (광고·검색·SNS 비율)
3. **인기 페이지** (어떤 콘텐츠가 인기)
4. **모바일 vs PC 비율**
5. **전환 (목표) 달성률**

## 전환 (Conversion) 설정

방문 수만 보면 의미 ↓. **목표 달성**이 진짜 지표.

### 흔한 전환 예시

- 문의 폼 제출 완료 페이지 도달
- 전화 클릭 (`tel:` 링크)
- 카카오톡 채널 버튼 클릭
- PDF·문서 다운로드
- 회원가입 완료
- 결제 완료

### 설정 (GA4)

1. GA4 > **관리** > **이벤트**
2. **이벤트 만들기** → 조건 (예: `page_view` & 페이지 URL 포함 `/thank-you`)
3. 며칠 후 **전환** 토글 활성

## Google Tag Manager (GTM) — 고급

여러 분석 도구·픽셀 통합 관리:
- GA4·메타 픽셀·카카오 픽셀
- 이벤트 추적 (버튼 클릭 등)
- 일괄 관리

플러그인 **GTM4WP** — WordPress와 GTM 연동.

복잡하지만 트래커가 많은 사이트엔 필수.

## 데이터 보관·내보내기

GA4 기본 데이터 보관: 2개월. **14개월로 늘리기**:

GA4 > **관리** > **데이터 설정** > 데이터 보관 → 14개월.

장기 데이터 필요하면 BigQuery 무료 연동.

## ⚠️ 자주 하는 실수

- **측정 ID `G-` 아닌 `UA-`**: 옛 Universal Analytics. 2024년 종료. 새 GA4 ID로
- **본인 IP 제외 안 함**: 데이터 오염
- **여러 트래커 동시 설치**: GA가 중복 카운트
- **측정 ID 오타**: 데이터 0
- **데이터 분석 안 함**: 설치만 하고 방치

## ❓ FAQ

**Q. Site Kit과 MonsterInsights 차이?**
A. Site Kit은 구글 공식·무료·가벼움. MonsterInsights는 풍부한 대시보드·일부 Pro. 입문자는 Site Kit, 깊이 분석 원하면 MonsterInsights.

**Q. GA4 vs Universal Analytics?**
A. UA는 2024년 7월 종료. 무조건 **GA4**.

**Q. 데이터가 24시간 후에도 0이에요.**
A. 측정 ID 오타 / 자녀 도메인에 설치 / 본인 IP만 방문. 실시간 보고서로 즉시 확인.

**Q. 한국 사용자만 추적하고 싶어요.**
A. 필터로 한국 외 트래픽 제외 가능. 다만 GA4는 글로벌 분석 도구. 일부 외국 봇 트래픽 항상 섞임.

**Q. 페이지뷰·세션이 검색 콘솔 데이터와 달라요.**
A. 정상. 측정 방식이 달라요 (GA: 페이지 로드·세션, GSC: 검색 클릭·노출).

---

## 관련 가이드

- [Search Console 연동](/guides/wp-search-console/)
- [SEO 점검 체크리스트](/guides/wp-seo-checklist/)
- [UTM 추적](/guides/seo-keyword-research/)
- [GA4 설치 (아임웹 기준)](/guides/imweb-google-analytics/)
