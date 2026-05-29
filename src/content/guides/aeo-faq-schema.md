---
title: FAQ schema 추가하기 — 검색 결과에 펼쳐지는 Q&A
description: FAQPage JSON-LD 구조화 데이터를 추가해 검색 결과와 AI 답변에 인용되는 FAQ 만들기.
category: SEO·AEO / AEO · AI 검색
status: draft
---


> FAQ schema는 페이지의 자주 묻는 질문을 **구조화된 데이터(JSON-LD)**로 검색엔진에 알리는 마크업입니다. 적용하면 구글 검색 결과에 펼쳐지는 Q&A 박스로 표시되고, AI 답변에 인용될 확률이 크게 올라갑니다.

## 왜 FAQ schema가 강력한가

### 1. 검색 결과에 추가 영역 차지

기본 검색 결과 카드 외에 **펼쳐지는 Q&A 영역**이 함께 표시. 결과 페이지에서 우리 사이트가 차지하는 영역이 2~3배.

### 2. 클릭률 30~50% 증가 (사례 다수)

추가 영역으로 시각적 주목도 ↑. CTR 평균 30~50% 향상 사례 다수.

### 3. AI 답변에 직접 인용

ChatGPT·Perplexity 같은 AI는 **구조화된 Q&A를 우선 인용**. FAQ schema는 AEO 핵심 신호.

### 4. 키워드 자연 확장

각 질문 자체가 **롱테일 키워드**. 한 페이지에서 여러 질문 키워드 동시 공략.

## 적용 가능한 페이지

- 서비스·상품 페이지
- 가격 안내 페이지
- 회사 소개 페이지
- 블로그 글 (튜토리얼·가이드)
- 전용 FAQ 페이지

> ⚠️ **모든 페이지에 무작위로 넣지 말 것**. 한 페이지에 진짜 FAQ가 5개 이상 있을 때만.

## 기본 구조 (JSON-LD)

페이지 `<head>`에 다음 스크립트 삽입:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "야간 진료는 몇 시까지 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "평일은 저녁 9시까지 진료합니다. 토요일은 오후 1시까지 진료하며, 일요일은 휴진입니다."
      }
    },
    {
      "@type": "Question",
      "name": "예약 없이 방문해도 진료받을 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "워크인 진료 가능합니다. 다만 대기 시간이 길 수 있어 전화 예약(031-XXX-XXXX) 또는 카카오톡 채널 예약을 권장합니다."
      }
    },
    {
      "@type": "Question",
      "name": "수면다원검사는 보험 적용이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "코골이·수면무호흡 진단 목적의 수면다원검사는 국민건강보험 적용 대상입니다. 본인 부담금은 약 10~15만원입니다."
      }
    }
  ]
}
</script>
```

## 작성 규칙

### 1. 본문에 같은 FAQ가 보여야 함

JSON-LD에 적힌 Q&A가 **실제 페이지 본문에도 보여야** 합니다. JSON-LD에만 있고 페이지에 없으면 구글이 "숨겨진 콘텐츠"로 판단해 무시.

```html
<!-- 페이지 본문에도 같은 내용 -->
<section class="faq">
  <h2>자주 묻는 질문</h2>
  <details>
    <summary>야간 진료는 몇 시까지 가능한가요?</summary>
    <p>평일은 저녁 9시까지 진료합니다...</p>
  </details>
  <details>
    <summary>예약 없이 방문해도 진료받을 수 있나요?</summary>
    <p>워크인 진료 가능합니다...</p>
  </details>
</section>
```

### 2. 질문은 실제 검색 질문 형태

❌ "야간 진료" (단어만)
✅ "야간 진료는 몇 시까지 가능한가요?" (의문문)

### 3. 답변은 완결형

답변만 읽어도 의미 통해야 함. 다른 페이지로 안내하는 답변은 ✅이지만 답변 자체에도 핵심 정보 포함.

❌ "[예약 페이지](예약페이지) 참고"
✅ "전화 또는 카카오톡 채널로 예약 가능합니다. 자세한 예약 절차는 [예약 페이지](예약페이지) 참고."

### 4. 분량

- 질문: 50~80자
- 답변: 50~300자 (너무 길면 잘림)

### 5. 개수

페이지당 **5~10개**가 적정. 너무 많으면 가중치 분산.

## 적용 단계 (CMS별)

### WordPress

#### 방법 A: 플러그인 (가장 쉬움)
- **Rank Math**: Pro 버전 또는 Schema 모듈에서 FAQ Block 사용
- **Yoast SEO**: Yoast SEO Premium에서 FAQ 블록
- **All in One SEO**: FAQ 스키마 자동 생성

#### 방법 B: 직접 코드
1. `functions.php` 또는 자식 테마에 JSON-LD 출력 함수 추가
2. 페이지 단위로 ACF 등 커스텀 필드로 Q&A 입력
3. 페이지 템플릿에서 JSON-LD 렌더링

### 아임웹

자체 FAQ schema 자동 생성 기능 없음. **공통 코드 삽입**으로 직접:

1. 관리자 → 환경설정 > SEO > 고급 설정 > 공통 코드 삽입
2. **Header Code**에 JSON-LD 스크립트 붙여넣기
3. 단, 사이트 전체에 같은 FAQ가 적용됨 (페이지별 분리 불가)

페이지별 다른 FAQ가 필요하면 **코드 위젯**에 페이지마다 JSON-LD 입력.

### Astro/정적 사이트

페이지 frontmatter에 FAQ 데이터 → 레이아웃에서 JSON-LD 렌더링:

```astro
---
const faqs = [
  { q: "야간 진료는...", a: "평일은 9시까지..." },
  // ...
];
---
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
})} />
```

## 검증

### Google Rich Results Test

1. [search.google.com/test/rich-results](https://search.google.com/test/rich-results) 접속
2. URL 입력 또는 코드 직접 붙여넣기
3. "유효한 항목" 5개 (각 Q&A) 표시되면 OK

### Schema.org Validator

[validator.schema.org](https://validator.schema.org) — 구문 오류 점검.

### Search Console 모니터링

검색 결과에 FAQ 박스가 표시되기까지 **1~4주** 소요. Search Console > 향상 기능 > "FAQ"에서 색인 상태 확인.

## 예시 — 가이드센터 FAQ 페이지

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "소규모 웹 제작사에 의뢰해도 품질이 보장되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "포트폴리오·후기로 사전 검증 가능합니다. 소규모 운영의 장점은 의사결정 속도와 책임 단일화이며, 단점은 대규모 동시 작업이 어려운 점입니다."
      }
    },
    {
      "@type": "Question",
      "name": "WordPress와 아임웹 중 어떤 게 좋나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "쇼핑몰·복잡한 데이터 운영은 WordPress, 소개·랜딩 페이지 위주면 아임웹이 빠릅니다. 예산·운영 능력에 따라 다르므로 사전 상담을 권장합니다."
      }
    }
  ]
}
</script>
```

## ⚠️ 자주 하는 실수

- **본문 없이 JSON-LD에만 Q&A 입력**: 구글이 "숨김 콘텐츠"로 무시
- **모든 페이지에 같은 FAQ schema**: 페이지별로 관련 있는 FAQ만
- **광고성·홍보 카피로 답변 작성**: 구글이 FAQ로 인식 안 함
- **답변에 외부 사이트 링크만**: 우리 답변이 없으면 패널티
- **JSON 구문 오류**: 따옴표·쉼표 빠짐 → Rich Results Test 통과 필수

## ❓ FAQ

**Q. FAQ schema 적용 후 언제부터 효과가 보이나요?**
A. 구글 색인 1~4주. 검색 결과에 FAQ 박스 노출까지 시간 차 있음. Search Console에서 "유효" 표시 확인.

**Q. FAQ가 너무 적어도 적용 가능?**
A. 최소 **2개 이상** 권장. 1개만 있으면 schema가 의미 없음. 5~10개가 sweet spot.

**Q. 영어와 한국어 FAQ를 한 페이지에 같이?**
A. 권장하지 않음. 언어별 페이지 분리 + 각각 schema.

**Q. FAQ 답변에 이미지·동영상 포함 가능?**
A. JSON-LD의 `text` 필드는 텍스트만. 본문에는 가능하지만 schema에는 텍스트만 추출.

**Q. 구글이 FAQ 박스를 안 보여줘요.**
A. Schema 적용 후에도 구글이 가치를 판단해 표시 여부 결정. 답변 품질·페이지 권위가 영향. 모바일·데스크탑별로도 다름.

---

## 관련 가이드

- [AEO/GEO란?](/guides/aeo-fundamentals/)
- [llms.txt 작성법](/guides/aeo-llms-txt/)
- [온페이지 SEO](/guides/seo-onpage/)
- [기술 SEO 체크리스트](/guides/seo-technical/)
