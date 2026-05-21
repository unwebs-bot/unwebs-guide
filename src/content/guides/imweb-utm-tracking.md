---
title: UTM으로 광고·마케팅 성과 측정하기 — 아임웹 활용 가이드
category: 아임웹 운영 / 마케팅·통계·알림톡
priority: P1
last_verified: 2026-05
related_ids: [72292, 72294]
status: draft
---


> 광고를 5군데에 돌리고 있는데 어디서 가장 매출이 나왔는지 모른다면 광고비를 낭비하고 있는 겁니다. **UTM 태그**는 URL 뒤에 붙이는 추적용 라벨로, "어디서 온 방문자인지"를 명확히 알려줍니다. 한 번 익히면 평생 씁니다.

## 시작하기 전에

- **Google Analytics 또는 아임웹 통계 활용** 필요. [GA 설치 가이드](#) 먼저.
- **소요 시간**: 개념 이해 10분, URL 만들기 페이지당 2분.
- **언제 필요?**: 광고·이메일·SNS·블로그 등 외부에서 사이트로 유입을 일으킬 때.

---

## UTM이란?

UTM = **U**rchin **T**racking **M**odule. 1995년 Urchin Software가 만든 표준으로, 지금은 Google이 인수해 모든 분석 도구가 지원합니다.

### 작동 원리

기본 URL: `https://mycompany.com/promo`

UTM 붙은 URL:
```
https://mycompany.com/promo?utm_source=naver&utm_medium=cpc&utm_campaign=2026_spring
```

뒤에 붙은 `?utm_source=naver...` 부분이 UTM 태그. GA가 이걸 읽어 "네이버 CPC 광고에서 봄 캠페인으로 유입"이라고 기록합니다.

### 사용자에게는 영향 없음

UTM 태그가 붙어 있어도 페이지 작동은 동일. 사용자에게는 보이지 않거나 무시됩니다.

---

## UTM 5가지 파라미터

| 파라미터 | 무엇? | 예시 |
|---|---|---|
| `utm_source` (필수) | 어디서 왔는지 (매체) | `naver`, `instagram`, `email` |
| `utm_medium` (필수) | 유입 방식 | `cpc`(유료광고), `social`, `email` |
| `utm_campaign` (필수) | 캠페인명 | `2026_spring_promo` |
| `utm_term` (선택) | 키워드 (검색광고) | `이비인후과` |
| `utm_content` (선택) | A/B 테스트용 콘텐츠 구분 | `banner_a`, `banner_b` |

### 작성 규칙

- **소문자**만 사용 (`Naver`와 `naver`는 다른 매체로 인식됨)
- **공백 대신 언더스코어** (`spring_promo`)
- **하이픈도 OK** (`spring-promo`)
- 한글 가능하지만 인코딩 문제 발생 → **영문 권장**

---

## 실전 예시

### 네이버 검색광고

```
https://mycompany.com/?utm_source=naver&utm_medium=cpc&utm_campaign=brand_2026&utm_term=편한이비인후과
```

### 인스타그램 스토리

```
https://mycompany.com/event?utm_source=instagram&utm_medium=story&utm_campaign=2026_spring
```

### 카카오톡 채널 메시지

```
https://mycompany.com/reservation?utm_source=kakao&utm_medium=channel&utm_campaign=appointment_reminder
```

### 이메일 뉴스레터

```
https://mycompany.com/blog/post1?utm_source=newsletter&utm_medium=email&utm_campaign=2026_03_issue
```

### 블로그·외부 기고

```
https://mycompany.com/?utm_source=blog&utm_medium=referral&utm_campaign=blog_partnership
```

---

## UTM URL 만드는 도구

손으로 적으면 오타 나기 쉽습니다.

### Google Campaign URL Builder (권장)

[ga-dev-tools.google/campaign-url-builder](https://ga-dev-tools.google/campaign-url-builder/) 접속 → 입력 → 자동 생성.

### 스프레드시트로 관리

캠페인별로 URL을 시트에 정리하면 나중에 분석할 때 편합니다.

| 캠페인 | 매체 | URL | 시작일 | 종료일 |
|---|---|---|---|---|
| 봄 프로모션 | 네이버 CPC | https://...?utm_source=naver... | 2026-03-01 | 2026-04-30 |
| 봄 프로모션 | 인스타그램 | https://...?utm_source=instagram... | 2026-03-01 | 2026-04-30 |

---

## 결과 확인하기

### GA4에서

1. GA4 → **보고서 > 획득 > 트래픽 획득**.
2. **세션 소스/매체** 열에서 UTM 태그 데이터 확인.
3. 더 세부적으로 보려면 **탐색 > 자유 형식** 보고서로 커스텀.

### 아임웹 자체 통계

1. 관리자 → **사용자 관리 > 통계 > 유입 경로**.
2. UTM 태그가 붙은 유입이 자동 분류되어 표시됩니다.

> 💡 아임웹 자체 통계의 UTM 데이터는 **마지막 방문 시점 기준**으로 7일간 유지됩니다.

---

## 핵심 지표 — ROAS

UTM이 가장 빛나는 순간은 **광고비 대비 매출**을 계산할 때입니다.

### ROAS (Return on Ad Spend)

```
ROAS = 광고로 발생한 매출 ÷ 광고비
```

예: 광고비 500만원 → 매출 1,000만원 → ROAS 2.0 (1원 광고비당 2원 매출).

### 업종별 평균 ROAS

| 업종 | 평균 ROAS |
|---|---|
| 패션·의류 | 4~5 |
| 식품·식료품 | 4~6 |
| 기타 소비재 | 3~4 |
| 서비스업 | 업종 차이 큼 (B2C 평균 3 이상) |

> 💡 ROAS 1.0 이하면 광고비를 못 건진 것. **최소 2.0 이상** 목표.

### ROAS 개선 전략

- 광고 크리에이티브 A/B 테스트 (`utm_content`로 비교)
- 타겟팅 최적화 (성과 좋은 매체에 예산 집중)
- 랜딩 페이지 최적화 (전환 페이지 개선)
- 시간대·요일별 최적화

---

## ⚠️ 자주 막히는 포인트

- **대소문자 혼용** (`Naver` vs `naver`) → GA에서 다른 매체로 집계됨. **소문자 통일**.
- **한글 그대로 UTM에 넣음** → URL 인코딩되어 분석할 때 깨짐. **영문 권장**.
- **utm_campaign에 의미 없는 이름** (`promo1`, `test`) → 나중에 봤을 때 뭔지 모름. **날짜·내용 포함** (`2026_03_spring_promo`).
- **UTM 안 붙은 광고**도 같이 운영 → 추적 안 됨. **모든 외부 링크에 UTM 필수**.
- **본인 IP 제외 안 함** → 본인이 광고 URL 클릭 테스트해도 데이터에 쌓임. GA에서 본인 IP 제외 필수.

---

## ❓ FAQ

**Q. UTM 붙은 URL을 그대로 사용자에게 노출해도 되나요?**
A. 작동은 합니다. 다만 URL이 지저분해 보이므로 **단축 URL 서비스**(bit.ly, naver me)나 **QR 코드**로 가려서 배포하는 게 깔끔합니다.

**Q. 네이버·카카오 광고 시스템이 자동으로 UTM 안 붙이나요?**
A. 일부 자동 추적 기능이 있지만 **불완전**합니다. UTM을 직접 붙여서 일관되게 추적하는 게 안전.

**Q. 같은 캠페인을 여러 매체로 돌리는데 캠페인명을 통일해야 하나요?**
A. **통일하세요**. 그래야 GA에서 매체별 비교가 가능. `utm_source`만 다르고 `utm_campaign`은 동일.

**Q. 카카오톡으로 URL 공유했을 때 UTM이 사라지는 경우가 있나요?**
A. 가끔 발생합니다. 카카오톡 미리보기 생성 시 URL이 처리되면서 파라미터가 잘릴 수 있어요. **카카오톡 채널 메시지**나 **이메일**에서 더 안정적.

**Q. UTM 데이터가 GA에 안 보여요.**
A. 24~48시간 기다리세요. 그래도 안 보이면: GA 설치 상태 확인, UTM 대소문자·오타 확인, GA 본인 IP 제외 설정이 잘못된 건 아닌지 확인.

---

## 관련 가이드

- [imweb-google-analytics](/dev/imweb/imweb-google-analytics/) — GA4 설치하기
- [imweb-meta-pixel](/dev/imweb/imweb-meta-pixel/) — 메타 픽셀 설치 (예정)
- [imweb-analytics-dashboard](/dev/imweb/imweb-analytics-dashboard/) — 아임웹 통계 활용 (예정)
- [imweb-naver-analytics](/dev/imweb/imweb-naver-analytics/) — 네이버 애널리틱스 (예정)

---

> **출처 및 검증**
> 본 가이드는 아임웹 공식 도움말과 Google Analytics·Urchin Tracking 표준 문서를 기반으로 언웹스가 실무 노하우를 더해 재구성했습니다. 최종 확인: 2026-05.
