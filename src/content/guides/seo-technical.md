---
title: 기술 SEO 체크리스트 — robots.txt·sitemap·canonical·https
description: 검색엔진이 사이트를 잘 처리하도록 돕는 인프라 작업. 크롤링·색인·중복·속도까지.
category: SEO·AEO / 기술 SEO
status: draft
---


> 기술 SEO는 **검색엔진이 사이트를 잘 크롤링·색인·이해**하도록 돕는 인프라 작업입니다. 콘텐츠가 아무리 좋아도 기술 SEO가 막혀 있으면 검색에 안 보입니다. 한 번 세팅하면 거의 손 안 대도 되는 영역.

## 한 번에 보는 체크리스트

- [ ] **robots.txt** 작성 (크롤링 허용 범위)
- [ ] **sitemap.xml** 생성·제출
- [ ] **canonical 태그** (중복 URL 정리)
- [ ] **HTTPS** 적용
- [ ] **모바일 호환** (반응형)
- [ ] **Core Web Vitals** 통과
- [ ] **구조화 데이터** (해당 시)
- [ ] **404·301 리다이렉트** 관리
- [ ] **hreflang** (다국어 사이트)
- [ ] **AMP** (선택, 뉴스성 콘텐츠)

## 1. robots.txt — 크롤링 허용 범위

사이트 루트의 `/robots.txt` 파일. 검색 봇에게 **어디는 가도 되고 어디는 가지 마라** 알림.

### 기본 작성

```
User-agent: *
Allow: /

Sitemap: https://mycompany.com/sitemap.xml
```

위 예시는 "모든 봇에게 모든 페이지 허용 + 사이트맵은 여기"라는 의미.

### 차단이 필요한 경우

```
User-agent: *
Disallow: /admin/
Disallow: /test/
Disallow: /*?utm_*

Allow: /

Sitemap: https://mycompany.com/sitemap.xml
```

- `/admin/`, `/test/` 폴더 전체 차단
- UTM 파라미터 붙은 URL 차단 (중복 색인 방지)

### 자주 하는 실수

- **`Disallow: /` 통째 차단**: 사이트 전체가 색인 안 됨. 가끔 운영 중 실수로 일어남
- **`robots.txt`가 없음**: 봇이 기본값으로 작동. 큰 문제는 아니지만 사이트맵 안내 못함
- **`robots.txt`에서 차단했다고 검색 결과에 안 뜸**: 맞지만 **이미 색인된 페이지**는 그대로 노출 가능. 진짜 빼려면 `noindex` 메타.

### 확인 방법

`https://mycompany.com/robots.txt` 직접 접속 → 내용 확인.

## 2. sitemap.xml — 페이지 목록

사이트의 **모든 색인 가능 페이지 목록**을 XML로 정리한 파일.

### 작성 (WordPress·Astro 등 자동)

- WordPress: Rank Math·Yoast 플러그인이 자동 생성
- Astro/Starlight: 사이트맵 통합 자동 생성
- 아임웹: 자동 생성 (SEO 설정에서 주소 확인)
- 정적 사이트: 수동 작성 또는 빌드 스크립트

### 기본 구조

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mycompany.com/</loc>
    <lastmod>2026-05-20</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mycompany.com/about</loc>
    <lastmod>2026-05-15</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 검색엔진에 제출

**Google Search Console**:
- 색인 > Sitemaps > URL 입력 → 제출

**네이버 서치어드바이저**:
- 요청 > 사이트맵 제출 → URL 입력 → 확인

### 권장 페이지 수 / 분할

한 파일당 50,000 URL · 50MB 이하. 그 이상이면 **sitemap index** 사용해 여러 파일로 분할.

## 3. canonical 태그 — 중복 URL 정리

같은 페이지가 여러 URL로 접근 가능한 경우, **"진짜 URL은 이것"** 명시.

### 흔한 중복 패턴

```
https://mycompany.com/about
https://mycompany.com/about/
https://www.mycompany.com/about
https://mycompany.com/about?utm_source=email
http://mycompany.com/about
```

모두 같은 페이지지만 검색엔진이 다른 페이지로 인식할 수 있음.

### 해결 — head에 canonical

```html
<head>
  <link rel="canonical" href="https://mycompany.com/about" />
</head>
```

이 페이지의 정식 URL은 `https://mycompany.com/about` 임을 선언. 다른 URL은 정식 URL의 권한으로 합산됨.

### 자동 처리

- WordPress: Rank Math가 자동 추가
- Astro: site URL 기준 자동
- 아임웹: 자동

수동으로 신경 쓸 경우는 별도 파라미터 페이지·필터·정렬 페이지가 있을 때.

## 4. HTTPS — 보안 + SEO

HTTP는 2018년부터 검색엔진이 **"안전하지 않음"** 표시. 사실상 필수.

### 확인 방법

브라우저 주소창에 🔒 자물쇠 아이콘이 보이는지.

### 적용

- 아임웹: SSL 신청 (Basic 35,000원/년)
- WordPress: Let's Encrypt 무료 (대부분 호스팅 자동)
- 정적 사이트 (Vercel/Netlify): 자동 무료 SSL

### http → https 강제 리다이렉트

```
HTTP/1.1 301 Moved Permanently
Location: https://mycompany.com/
```

서버 설정 또는 호스팅사 옵션으로 활성화. 미적용 시 두 버전이 별도로 색인됨.

## 5. 모바일 호환 — 모바일 우선 색인

2021년부터 구글은 **모바일 우선 색인(Mobile-First Indexing)**. 모바일 페이지가 PC보다 SEO 기준.

### 확인 방법

**Google Mobile-Friendly Test**: search.google.com/test/mobile-friendly

체크 항목:
- 가로 스크롤 없음
- 폰트 크기 14px 이상
- 버튼·링크 사이 충분한 여백 (탭 가능)
- 뷰포트 메타 태그

### 뷰포트 메타 (HTML head)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

누락되면 모바일에서 화면이 깨짐.

## 6. Core Web Vitals — 속도·반응성

2021년부터 구글의 공식 랭킹 신호. 3개 지표:

| 지표 | 측정 | 기준 |
|---|---|---|
| **LCP** (Largest Contentful Paint) | 가장 큰 콘텐츠 표시 시간 | **2.5초 이내** |
| **INP** (Interaction to Next Paint) | 사용자 입력 → 화면 반응 | **200ms 이내** |
| **CLS** (Cumulative Layout Shift) | 누적 레이아웃 이동 | **0.1 이내** |

### 측정

**PageSpeed Insights**: pagespeed.web.dev

URL 입력 → 모바일/데스크탑 점수 + 개선 권장사항.

### 개선 우선순위

1. **이미지 최적화**: WebP 변환, lazy loading, 크기 조정
2. **JavaScript 줄이기**: 불필요한 플러그인·트래커 제거
3. **CDN 활용**: 정적 자원을 전 세계 분산
4. **폰트 최적화**: `font-display: swap`, 필요 weight만 로드
5. **레이아웃 안정성**: 이미지·광고 영역에 미리 크기 지정

## 7. 구조화 데이터 — Schema.org

Onpage SEO 가이드에서 다뤘지만 기술 SEO 영역이기도 합니다. [온페이지 SEO](/guides/seo-onpage/) 참고.

검증 도구: **Google Rich Results Test** (search.google.com/test/rich-results)

## 8. 404·301 리다이렉트 관리

### 404 (페이지 없음)

- 사용자에게 친절한 404 페이지 보여주기 (사이트 검색·홈으로 가는 링크)
- Search Console > 색인 > 페이지 > **404 오류** 확인 후 처리

### 301 (영구 이동)

URL 변경·페이지 삭제·도메인 이전 시 **반드시 설정**. 기존 검색 권한을 새 URL로 이전.

```
Location: https://mycompany.com/new-url
Status: 301 Moved Permanently
```

설정 방법:
- WordPress: Redirection 플러그인
- Astro/Vercel: vercel.json의 `redirects`
- 아임웹: 자체 기능 제한적, 도메인 호스팅사 활용

### 302 vs 301 차이

- **301 영구**: 검색 권한 이전 ✅
- **302 임시**: 검색 권한 이전 ❌ (일시적인 경우만)

URL 영구 변경 시 절대 302 쓰면 안 됨.

## 9. hreflang — 다국어 사이트

같은 콘텐츠를 여러 언어로 운영하면 hreflang으로 언어·지역 명시.

```html
<link rel="alternate" hreflang="ko" href="https://mycompany.com/" />
<link rel="alternate" hreflang="en" href="https://mycompany.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://mycompany.com/" />
```

미설정 시 검색엔진이 어느 언어 사용자에게 보여줄지 헷갈림.

## 10. AMP — 거의 안 쓰는 영역

뉴스성 콘텐츠 가속용. 2023년 이후 구글이 비중 축소. **대부분 사이트는 무시해도 OK**. CMS가 자동 지원하면 켜두기.

## 정기 점검 항목 (월 1회 추천)

| 항목 | 어디서 | 시간 |
|---|---|---|
| Search Console 색인 오류 | search.google.com/search-console | 5분 |
| 404 오류 페이지 | Search Console > 색인 | 5분 |
| Core Web Vitals 점수 | PageSpeed Insights | 10분 |
| 새 백링크·언급 | Search Console > 링크 | 5분 |
| 사이트맵 색인 상태 | Search Console > Sitemaps | 2분 |
| 검색 노출 추이 | Search Console > 실적 | 10분 |

## ⚠️ 자주 막히는 포인트

- **robots.txt가 사이트 전체 차단으로 설정됨** → 가장 큰 SEO 사고. 첫 점검 1순위.
- **sitemap.xml에 404 페이지 포함** → 검색엔진이 사이트 신뢰도 ↓.
- **canonical을 모든 페이지가 동일 URL로 지정** → 모든 페이지가 한 페이지로 통합됨.
- **HTTPS 적용 후 HTTP 리다이렉트 안 함** → 두 버전이 별도 색인 → 권한 분산.
- **모바일 뷰포트 메타 누락** → 모바일에서 화면 깨짐 → 모바일 우선 색인에서 큰 손해.

## ❓ FAQ

**Q. 사이트맵 제출 안 해도 되나요?**
A. 내부 링크가 잘 되어 있으면 검색엔진이 자동 발견. 다만 **신생 사이트는 제출하면 색인 속도 ↑**. 시간 5분 작업이므로 무조건 제출.

**Q. robots.txt에 차단한 페이지가 검색 결과에 나와요.**
A. robots.txt 차단은 크롤링 차단일 뿐 색인 차단이 아닙니다. 이미 색인된 페이지나 외부 링크가 많은 페이지는 차단 후에도 검색에 노출 가능. **확실히 빼려면 `noindex` 메타 태그**.

**Q. WordPress 플러그인 너무 많으면 SEO 점수 떨어지나요?**
A. 플러그인 자체보다 **결과 페이지 속도**가 SEO 점수에 영향. 무거운 플러그인 정리 + 캐시 플러그인이 정답.

**Q. AMP 안 쓰면 검색 손해 보나요?**
A. 아닙니다. 2023년 이후 AMP 가중치 거의 사라짐.

**Q. 404 페이지를 따로 만들어야 하나요?**
A. 만들기를 권장합니다. **사용자 경험 + 체류 시간 ↑**. 단순 "페이지 없음"이 아닌 사이트 검색·인기 글 링크 포함.

---

## 관련 가이드

- [SEO란? 검색엔진 동작 원리](/guides/seo-fundamentals/)
- [온페이지 SEO](/guides/seo-onpage/)
- [Core Web Vitals + 모바일](/guides/seo-mobile-cwv/)
- [구글 SEO 심화](/guides/seo-google-deep/)
