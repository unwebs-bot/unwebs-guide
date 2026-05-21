---
title: WordPress 퍼머링크 구조 — URL 패턴 결정과 SEO
description: WordPress URL 구조 6가지 옵션과 SEO 영향. 변경 시 주의사항·301 리다이렉트·카테고리 base 제거.
category: WordPress 운영 / 콘텐츠 관리
status: draft
---


> 퍼머링크는 **각 글·페이지의 영구 URL**입니다. WordPress 설치 직후 가장 먼저 설정해야 할 항목 중 하나로, 사이트 운영 중에 바꾸면 SEO 큰 손해. 처음에 잘 정하는 게 100배 효율적이에요.

## 퍼머링크 옵션 — 6가지

설정 > 고유주소(Permalinks):

| 옵션 | URL 예시 | 추천 |
|---|---|---|
| 일반 (Plain) | `?p=123` | ❌ |
| 일·이름 (Day & name) | `/2026/05/21/post-name/` | △ |
| 월·이름 (Month & name) | `/2026/05/post-name/` | △ |
| 숫자형 (Numeric) | `/archives/123` | ❌ |
| **글 이름 (Post name)** | `/post-name/` | ✅ **권장** |
| 사용자 정의 | `%category%/%postname%` 등 | △ |

## 추천 — 글 이름 (Post Name)

```
mycompany.com/post-name/
mycompany.com/about/
mycompany.com/services/
```

이유:
- 가장 짧고 깔끔
- SEO 친화 (URL 자체가 키워드)
- 변경 위험 최소화 (날짜·카테고리 안 들어감)
- AI 답변에서 URL 인용 시 가독성 ↑

## 사용자 정의 옵션

특별한 경우만 사용. 예시:

### 카테고리 포함

```
구조: /%category%/%postname%/
결과: /healthcare/sleep-test/
```

장점: 카테고리가 URL에 보임 (분류 명확)
단점: 글의 카테고리 변경 시 URL도 변경 → 깨짐

### 연도+이름

```
구조: /%year%/%postname%/
결과: /2026/sleep-test/
```

장점: 시점 명확
단점: 오래된 글이 옛 글로 인식됨

> 💡 대부분 비즈니스 사이트는 **글 이름**이 정답. 사용자 정의는 특수 케이스만.

## 슬러그 (Slug) — URL의 핵심

각 글·페이지의 슬러그 = URL의 마지막 부분.

### 좋은 슬러그

- **영문 소문자**: `sleep-test` (한글·대문자·공백 X)
- **하이픈 구분**: `our-team` (NOT `our_team`)
- **짧고 의미 있게**: `pricing` (NOT `the-pricing-page-of-our-company`)
- **불용어 제거**: `the`·`and`·`a` 등
- **고유성**: 다른 글과 중복 X

### 슬러그 수정

글 편집 → 우측 패널 **URL** 클릭 → 슬러그 수정.

기본은 글 제목에서 자동 생성됨. 한글 제목이면 자동 슬러그가 한글이라 변경 필요.

### 자동 슬러그 — 한글 → 영문

플러그인 **Korean Permalink** — 한글 제목 자동 영문 번역.

## 페이지 슬러그

페이지도 글과 같은 슬러그 규칙. 다만:

- 부모-자식 페이지는 URL 계층 자동:
  ```
  부모: /about/
  자식: /about/team/
  ```
- 부모를 잘 정하면 URL 구조가 자연스러움

## 카테고리·태그 URL

기본:
```
mycompany.com/category/news/
mycompany.com/tag/healthcare/
```

`/category/`와 `/tag/`는 base. 제거 가능.

### category base 제거

플러그인 **WP No Category Base** 또는 **Rank Math Pro**.

결과:
```
mycompany.com/news/      ← /category/ 제거
mycompany.com/healthcare/ (tag — 별도 설정)
```

> 단축된 URL이 SEO에 미세하게 ↑.

### 작성자 URL

기본: `mycompany.com/author/username/`

`/author/` base는 자동 변경 어려움. 플러그인 **Edit Author Slug** — 작성자 URL 커스텀.

## 퍼머링크 변경의 위험

운영 중 URL 변경 = **검색 결과·외부 링크 모두 깨짐**.

### 깨질 때 일어나는 일

- 검색 결과: 404로 클릭한 사용자 이탈
- 외부 사이트 백링크: 무효화
- SNS 공유: 옛 URL이 안 열림
- 책갈피·즐겨찾기: 깨짐

### 변경이 정말 필요할 때

**301 리다이렉트 필수**:

플러그인 **Redirection** (무료):
1. 옛 URL → 새 URL 매핑 입력
2. 자동으로 301 응답
3. 검색엔진이 점진적으로 새 URL로 이전

### 옛 URL이 100개+ 일 때

CSV 일괄 가져오기 (Redirection 플러그인 지원).

## 처음 결정할 때 — 체크리스트

새 사이트 셋업 시:

- [ ] **글 이름** 옵션 선택
- [ ] 모든 페이지·글·카테고리 슬러그를 **영문**으로
- [ ] **불필요한 base 제거** (Rank Math 활용)
- [ ] sitemap·검색엔진에 새 구조 등록

이후 변경 거의 X.

## URL 작성 가이드라인 — 30가지 사례

| 콘텐츠 | 좋은 슬러그 | 안 좋은 슬러그 |
|---|---|---|
| 회사 소개 | `about` | `about-us-company-introduction` |
| 서비스 | `services` 또는 `service` | `our-service-offerings` |
| 진료 안내 | `clinic-info` | `진료-안내` (한글) |
| 오시는 길 | `location` | `come-to-us` |
| 문의 | `contact` | `Contact_Us` (대문자·언더바) |
| 가격 | `pricing` | `the-pricing` |
| 팀 | `team` | `our-team-members` |
| 자주묻는질문 | `faq` | `frequently-asked-questions` |
| 블로그 | `blog` | `blogs` (단수 권장) |
| 포트폴리오 | `portfolio` | `portfolios` |

> 💡 **단수형 영문**이 표준. 짧을수록 좋음.

## /?p=123 같은 URL이 보일 때

설정 > 고유주소가 **일반(Plain)** 옵션일 때. **글 이름**으로 변경:

1. 설정 > 고유주소 > **글 이름** 선택 → 저장
2. 모든 글 URL 자동 변경
3. `.htaccess` 파일이 자동 생성/업데이트

`.htaccess` 권한 문제로 안 되면:
- 호스팅 cPanel에서 `.htaccess` 파일 직접 수정 가능
- 또는 호스팅 고객센터 문의

## 다국어 사이트 URL

WPML·Polylang 사용 시 옵션:

```
mycompany.com/about       ← 한국어
mycompany.com/en/about    ← 영어
mycompany.com/ja/about    ← 일본어
```

또는 서브도메인:
```
ko.mycompany.com/about
en.mycompany.com/about
```

[hreflang 가이드](/guides/seo-technical/) 참고.

## SEO 영향

### URL의 SEO 가중치

- 키워드 포함 ✅ (자연스럽게)
- 짧을수록 ✅
- 의미 있을수록 ✅
- 카테고리 깊이 안 깊을수록 ✅ (3단계 이내)

### URL 박제는 페널티

```
❌ /best-cheapest-clinic-anyang-bonodong-recommended-2026/
```

키워드 박제 슬러그는 페널티. **자연스러운 한두 키워드**만.

## ⚠️ 자주 하는 실수

- **퍼머링크를 기본(Plain) 그대로**: SEO 최악
- **한글 슬러그**: URL 인코딩 시 흉함
- **운영 중 자주 변경**: 검색 순위 리셋
- **301 없이 URL 변경**: 트래픽 손실
- **카테고리 박제 URL**: 변경 자유도 ↓

## ❓ FAQ

**Q. 퍼머링크 변경해도 정말 큰 영향이 있나요?**
A. 사이트 큰 곳은 즉시 30~50% 트래픽 손실. 신생 사이트는 영향 작지만, **변경 안 하는 게 정답**.

**Q. 슬러그가 자동으로 한글 그대로 들어가요.**
A. 글 발행 전 우측 URL 패널에서 영문으로 수동 변경. 매번 귀찮으면 한글→영문 자동 변환 플러그인.

**Q. 같은 슬러그를 여러 글이 쓸 수 있나요?**
A. WordPress 기본은 자동으로 `-2`, `-3` 붙임. 다만 슬러그는 본인이 의미 있게 변경 권장.

**Q. 글 URL을 페이지처럼 / 직속으로?**
A. **글 이름** 옵션이 이미 그 형태. 다만 카테고리·날짜를 URL에 안 넣음 → 카테고리 추적 약함.

**Q. 옛 URL은 영원히 살아있어야 하나요?**
A. 301 리다이렉트는 반영구 유지 권장. 외부 백링크·인용은 영원히 옛 URL을 가리킬 수 있음.

---

## 관련 가이드

- [글 vs 페이지 차이](/guides/wp-post-vs-page/)
- [카테고리·태그 운영](/guides/wp-categories-tags/)
- [도메인 이전](/guides/wp-domain-migration/)
- [SEO 점검 체크리스트](/guides/wp-seo-checklist/)
