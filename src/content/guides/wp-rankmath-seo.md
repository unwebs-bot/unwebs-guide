---
title: Rank Math SEO 설정 가이드 — 무료 버전으로 90% 커버
description: WordPress의 가장 강력한 SEO 플러그인 Rank Math 설정 워크스루. 설치·마법사·페이지별 적용·Schema까지.
category: WordPress 운영 / 플러그인
status: draft
---


> Rank Math는 **WordPress SEO 플러그인 중 가장 기능 풍부**합니다. Yoast 대비 무료로 더 많은 기능 제공이 강점. 처음 설치부터 페이지별 적용·Schema까지 한 번에 정리.

## Rank Math vs Yoast — 간단 비교

| | Rank Math | Yoast SEO |
|---|---|---|
| 무료 기능 | 풍부 (Schema·404·리다이렉트 포함) | 기본 |
| 점수 시스템 | 100점 만점 | 신호등 |
| 학습 곡선 | 중간 | 낮음 |
| 시장 점유 | 빠른 성장 중 | 옛 표준 |
| 한국어 지원 | 양호 | 양호 |
| **추천** | **신규 사이트** | 옛 사이트 유지 시 |

## 설치 + 설정 마법사 (30분)

### 1. 설치

플러그인 > 새로 추가 > "Rank Math" 검색 → 설치 → 활성화.

### 2. 설정 마법사 시작

설정 마법사가 자동 실행. 단계별로 입력:

#### Step 1: Account

Rank Math 계정 연결 (선택). 무료 계정 만들면 추가 기능.

#### Step 2: Your Site

- **Site type**: 비즈니스·블로그·뉴스·이커머스 등 선택
- **Business type**: Local Business·Organization 등 (Schema 자동)
- **Logo for Google**: 검색 결과에 표시될 로고 (112×112+ PNG)
- **Default social share image**: SNS 공유 시 표시

#### Step 3: Search Console

Google Search Console 연동 (선택). 데이터를 WordPress 대시보드에서 확인.

#### Step 4: Sitemaps

XML 사이트맵 자동 생성. 기본값 그대로 OK.

#### Step 5: SEO Tweaks

- **Noindex Empty Category and Tag Archives**: ☑ (빈 카테고리는 SEO 점수 낮춤)
- **Nofollow External Links**: ☐ (자연 링크는 follow가 좋음)
- 기타 옵션 기본값

#### Step 6: Ready

설정 완료. 추가 모듈 활성화 화면.

## 활성화 권장 모듈

Rank Math 대시보드 > Modules:

| 모듈 | 권장 |
|---|---|
| 404 Monitor | ✅ 깨진 링크 추적 |
| Redirections | ✅ 301 리다이렉트 |
| Schema (Structured Data) | ✅ 검색 영역 확장 |
| Sitemap | ✅ 사이트맵 자동 |
| Local SEO | ⚠️ 지역 비즈니스만 |
| Image SEO | ✅ ALT·title 자동 |
| Role Manager | ⚠️ 멀티 사용자만 |
| Instant Indexing | ✅ 새 글 즉시 색인 (구글) |
| AnalyticsConsole | ⚠️ GSC 데이터 보고 싶을 때 |

## 페이지·글마다 SEO 입력

글·페이지 편집 시 본문 아래 Rank Math 박스 표시:

### General

- **Focus Keyword**: 타겟 키워드 1개 (필수)
- **SEO Title**: 검색 결과 제목 (한글 25~30자)
- **Description**: 메타 설명 (60~80자)
- **Permalink**: URL 슬러그

### Social

- **Facebook Title·Description·Image**: 페북 공유 시 표시
- **Twitter Title·Description·Image**: 트위터 공유

비어두면 General 값 자동 사용.

### Advanced

- **Robots Meta**: index/follow 등 (기본값 OK)
- **Canonical URL**: 중복 콘텐츠 정리
- **Breadcrumb Title**: breadcrumb 표시

### Schema

타입 선택 (Article·Product·Recipe·Event·FAQ 등):
- 블로그 글: Article
- 회사 페이지: LocalBusiness 또는 Organization
- 상품 페이지: Product

자동으로 JSON-LD 생성 → 검색 결과에 리치 스니펫.

## Schema (구조화 데이터) 활용

### FAQ Schema 추가

FAQ가 있는 페이지에:

1. Rank Math 박스 > Schema 탭
2. **Schema Generator** > FAQ 선택
3. Q1·A1·Q2·A2... 입력 → 저장

페이지에 JSON-LD 자동 삽입. 검색 결과에 펼쳐지는 Q&A 박스.

[FAQ schema 추가하기](/guides/aeo-faq-schema/) 상세.

### LocalBusiness Schema (병원·기업 자체)

설정 > Titles & Meta > Local SEO:
- 사업장명·주소·전화·운영시간 입력
- 모든 페이지에 자동 LocalBusiness Schema

## 사이트맵 — 자동 관리

기본 위치:
```
https://mycompany.com/sitemap_index.xml
```

분리된 사이트맵:
- post-sitemap.xml (글)
- page-sitemap.xml (페이지)
- category-sitemap.xml (카테고리)
- 등

Search Console에 제출:
1. Google Search Console > Sitemaps
2. `sitemap_index.xml` 입력 → 제출

[기술 SEO 가이드](/guides/seo-technical/) 참고.

## 404 Monitor — 깨진 링크 추적

활성화 시:

Rank Math > 404 Monitor → 방문자가 부딪힌 404 페이지 자동 기록.

대응:
- 일반적: 옛 URL의 오타 → 그대로 두면 정리됨
- 자주 발생: 옛 URL → 새 URL 301 리다이렉트 등록
- 외부 잘못된 링크: 무시

## Redirections — 301 리다이렉트

Rank Math > Redirections > Add New:
- **Source URL**: 옛 URL
- **Destination URL**: 새 URL
- **Type**: 301 (영구)
- 활성화

CSV 일괄 가져오기도 가능.

## SEO 점수 — 어떻게 활용

각 글의 SEO 점수 (0~100):
- 80+: 우수
- 50~80: 양호
- 50 이하: 개선 필요

체크 항목:
- Focus Keyword가 title·H1·URL·본문에 있는가
- 본문 길이 충분한가
- 이미지 ALT 있는가
- 내부·외부 링크 있는가
- 메타 설명 길이 적정한가

> ⚠️ 점수 100 = 완벽 X. 자연스러움 우선.

## Search Console·GA 연동

Rank Math > Analytics > Setup:
- Google Search Console 계정 연결
- Google Analytics 4 측정 ID

WordPress 대시보드에서 검색 키워드·트래픽 확인 가능.

## 마이그레이션 — Yoast → Rank Math

Yoast SEO에서 데이터 가져오기:

Rank Math > Status & Tools > Import & Export → Yoast SEO Importer.

자동으로:
- title·description
- focus keyword
- redirects
- 사이트맵 설정

## Pro 버전 — 필요한가?

무료로 90% 커버. Pro($59/년)는:

- 추가 Schema 타입
- 25개 추가 분석
- 무제한 키워드 추적
- 콘텐츠 AI 어시스트
- 우선 지원

**입문·중소 사이트**: 무료 충분.
**SEO 전문 운영**: Pro 가치 ↑.

## ⚠️ 자주 하는 실수

- **설정 마법사 무시**: 핵심 옵션 누락
- **Focus Keyword 미입력**: SEO 점수 안 나옴
- **Title·Description 모든 글 동일**: 검색 결과 카니발리제이션
- **404 모니터 무시**: 깨진 링크 방치
- **Schema 잘못 설정**: 검색엔진 신뢰 ↓

## ❓ FAQ

**Q. Yoast에서 Rank Math로 옮겨도 SEO 순위가 떨어지지 않나요?**
A. 데이터를 정확히 가져오면 영향 없음. Rank Math Importer 사용 후 1주 점검.

**Q. Rank Math 점수 100점 = SEO 1등?**
A. 아닙니다. 점수는 페이지 기본 점검. 실제 순위는 콘텐츠 품질·외부 신호 등 종합.

**Q. Schema는 직접 입력 vs Rank Math 자동, 어느 게 좋나요?**
A. Rank Math 자동이 안전. 직접 작성은 오류 시 검색엔진이 무시. Rich Results Test로 검증.

**Q. Focus Keyword를 1개만? 여러 개 가능?**
A. 무료는 1개. Pro는 무제한. 일반적으로 1개에 집중하는 게 효율적.

**Q. AnalyticsConsole 모듈 안 켜도 되나요?**
A. 모르는 모듈은 끔. 켜면 데이터 더 보이지만 사이트 약간 무거워짐.

---

## 관련 가이드

- [필수 플러그인 10선](/guides/wp-plugin-essentials/)
- [SEO 점검 체크리스트](/guides/wp-seo-checklist/)
- [기술 SEO 체크리스트](/guides/seo-technical/)
- [Search Console 연동](/guides/wp-search-console/)
