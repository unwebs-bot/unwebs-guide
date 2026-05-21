---
title: WordPress Search Console 연동 — 검색 데이터로 의사결정
description: Google Search Console 등록부터 사이트맵 제출·데이터 활용까지. WordPress 사이트의 검색 성과 분석.
category: WordPress 운영 / SEO·통계
status: draft
---


> Google Search Console은 **검색 결과에서 일어나는 일을 알려주는 무료 도구**입니다. GA가 사이트 안 행동이면, Search Console은 검색 노출·클릭·키워드 데이터. SEO 의사결정의 90%가 여기서 나옴.

## Search Console vs GA4

| | Search Console | GA4 |
|---|---|---|
| 추적 영역 | 검색 결과 | 사이트 방문 후 |
| 핵심 데이터 | 노출·클릭·키워드·순위 | 페이지뷰·세션·이벤트 |
| 데이터 보관 | 16개월 | 14개월 (기본 2개월) |
| 가입 | 무료 | 무료 |

→ **둘 다 설치 필수**. 함께 보면 진짜 그림.

## 등록 — 5단계

### 1. Search Console 접속

[search.google.com/search-console](https://search.google.com/search-console) → Google 로그인.

### 2. 속성 추가

**+ 속성 추가** → 두 가지 옵션:

| 옵션 | 추천 |
|---|---|
| **도메인** | 모든 서브도메인·프로토콜 통합 ✅ |
| **URL 접두어** | 특정 URL 패턴만 (작은 사이트) |

**도메인 옵션 권장**. 한 번 등록으로 모든 변형 (www·non-www·http·https) 통합.

### 3. 소유권 확인

3가지 방법:

#### 방법 A: DNS 레코드 (도메인 옵션)

1. Search Console이 TXT 레코드 값 제공
2. 도메인 호스팅사에 DNS TXT 레코드 추가
3. 5~10분 후 확인 클릭

#### 방법 B: HTML 메타태그 (URL 접두어 옵션)

1. 메타 태그 복사
2. WordPress 자식 테마 `header.php`의 `<head>` 안에 붙여넣기
3. 또는 Rank Math·Yoast SEO 설정에 입력
4. 확인 클릭

#### 방법 C: Site Kit 자동

WordPress에 Site Kit 설치되어 있으면 자동 연동.

### 4. 사이트맵 제출

소유 확인 후:

좌측 메뉴 **색인 > Sitemaps**:
- URL 입력: `sitemap_index.xml` (Rank Math) 또는 `sitemap.xml`
- **제출**

며칠 후 색인 진행 시작.

### 5. WordPress와 연동 (선택)

Site Kit·Rank Math가 Search Console 데이터를 WordPress 대시보드에 표시.

## 주요 메뉴 — 무엇을 보나

### 실적 (Performance)

가장 자주 보는 화면.

#### 핵심 지표

- **총 클릭 수**: 검색 결과에서 클릭된 횟수
- **총 노출 수**: 검색 결과에 표시된 횟수
- **평균 CTR**: 클릭/노출 (보통 1~5%)
- **평균 게재순위**: 노출 시 평균 위치

#### 필터·정렬

- **검색어**: 어떤 키워드로 우리 사이트가 나타났나
- **페이지**: 어떤 페이지가 노출되나
- **국가·기기**: 어디서·뭐로 검색하나
- **검색 모양**: 웹·이미지·동영상·뉴스

### 색인 (Indexing)

#### 페이지

- **색인됨**: 검색 가능
- **미색인**: 색인 안 됨 + 이유 (noindex, 404, 중복 등)

원인별 대응:
- "noindex 태그 발견" → 해당 페이지 SEO 설정 확인
- "404 페이지" → 옛 URL 삭제 또는 301 리다이렉트
- "중복 페이지" → canonical 태그 확인

#### Sitemaps

제출한 사이트맵 상태·색인 페이지 수.

### 향상 (Enhancements)

- 모바일 사용 편의성
- Core Web Vitals
- 구조화 데이터 (Schema)
- HTTPS

각 항목의 오류·경고 점검·수정.

### 보안 및 수동 조치

해킹·악성코드·구글 페널티 확인. 빨간 표시는 즉시 대응.

## 데이터로 의사결정 — 4가지

### 1. CTR 낮은 페이지 잡기

실적 > 페이지 → CTR 낮은 순 정렬 → 노출 1000+ 페이지:
- title 더 매력적으로
- description에 CTA 추가
- FAQ schema 적용

### 2. 평균 11~20위 키워드 부스트

1페이지 직전 키워드. 약간 보강하면 트래픽 2~5배.

- 해당 페이지 콘텐츠 추가
- 내부 링크 ↑
- 백링크 시도

### 3. 발견 못 한 키워드 강화

노출 있지만 콘텐츠 약한 키워드:
- 그 키워드 전용 콘텐츠 신규 작성
- 기존 페이지에 해당 키워드 보강

### 4. 모바일 vs 데스크탑 차이

모바일에서만 순위 낮으면:
- 모바일 사용 편의성 점검
- Core Web Vitals 모바일 점수
- 모바일 디자인 검토

## 새 페이지 색인 가속

발행 후 빠르게 색인:

1. Search Console > **URL 검사**
2. 해당 URL 입력
3. **색인 요청** 클릭
4. 보통 1~7일 안에 색인

> ⚠️ 하루에 너무 많이 (50+) 요청하면 일시 제한. 정말 중요한 페이지만.

## 404·삭제 페이지 정리

색인 > 페이지 > "찾을 수 없음 (404)" 클릭 → 404 페이지 목록.

대응:
- 옛 URL의 오타·외부 잘못된 링크 → 일반적 무시
- 옛 페이지였는데 삭제 → 301 리다이렉트로 비슷한 페이지에
- 의도적 삭제 → 제거 도구로 검색 결과에서 임시 제거

## 알림 — 메일 설정

이상 발생 시 즉시 알림:

설정 > 사용자 및 권한 → 본인 메일 등록.

알림 항목:
- 보안 문제 발견
- 색인 오류 급증
- 수동 조치
- Core Web Vitals 변경

## 정기 점검 (월 1회)

15분 작업:

- [ ] 실적 추이 (클릭·노출 전월 대비)
- [ ] 새 키워드 (이전 안 보이던 키워드 노출)
- [ ] 색인 오류 새로 발생
- [ ] 404 페이지 정리
- [ ] Core Web Vitals 점수
- [ ] 보안 알림 없음

## Bing Webmaster Tools — 추가

Bing·DuckDuckGo도 검색 점유율 일부. Search Console 등록 후 같은 데이터를 Bing에도 전달:

1. [bing.com/webmasters](https://www.bing.com/webmasters)
2. **GSC에서 가져오기** → Search Console 데이터 자동 임포트
3. 추가 작업 없이 Bing 색인 시작

## ⚠️ 자주 하는 실수

- **등록만 하고 데이터 안 봄**: 가장 큰 SEO 정보 source 무시
- **사이트맵 미제출**: 색인 늦어짐
- **CTR 낮은 페이지 방치**: 노출 있어도 클릭 0
- **알림 무시**: 보안 사고 늦게 발견
- **단기 변동 과민 반응**: 일주일 변동은 정상. 한 달 추이로 판단

## ❓ FAQ

**Q. Search Console과 Rank Math 둘 다 필요?**
A. 네. 역할이 다름. Search Console = 데이터, Rank Math = SEO 설정·자동화. 함께 사용.

**Q. 데이터가 GA4와 차이 나요.**
A. 정상. 측정 방식이 달라요. Search Console은 검색 노출, GA는 사이트 방문. 추세는 비슷해야 정상.

**Q. 새 사이트인데 데이터가 거의 없어요.**
A. 색인까지 2~4주. 노출 데이터 의미 있게 쌓이려면 1~3개월. 인내심 필요.

**Q. Search Console에 등록 안 해도 검색에 나오나요?**
A. 가능. 등록은 **데이터 확인용**. 다만 등록 안 하면 색인 안 되거나 누락 가능.

**Q. 여러 도메인 한 계정에 추가 가능?**
A. 가능. 무제한.

---

## 관련 가이드

- [GA4 설치](/guides/wp-google-analytics/)
- [SEO 점검 체크리스트](/guides/wp-seo-checklist/)
- [Rank Math SEO 설정](/guides/wp-rankmath-seo/)
- [구글 SEO 심화](/guides/seo-google-deep/)
