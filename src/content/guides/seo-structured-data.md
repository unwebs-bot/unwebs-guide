---
title: 구조화 데이터(schema) 입문 — 검색엔진에 의미를 알려주기
description: schema.org와 JSON-LD로 페이지의 의미를 검색엔진에 명시하는 법. 리치 결과 노출 조건과 FAQPage·LocalBusiness 적용 예시, 그리고 과투자하지 말아야 할 이유.
category: SEO·AEO / 기술 SEO
status: draft
---


> 검색엔진은 페이지의 글자는 읽지만 **"이게 회사 정보인지, 후기인지, FAQ인지"** 까지 자동으로 정확히 알진 못합니다. 구조화 데이터(structured data)는 그 의미를 기계가 읽도록 명시하는 마크업이에요. 잘 쓰면 검색 결과에 별점·FAQ·영업시간 같은 **리치 결과**가 붙어 클릭률이 올라갑니다.

## 왜 쓰나

- **리치 결과 노출**: 일반 텍스트 링크보다 검색 결과에서 차지하는 면적과 시각적 비중이 커져 클릭률(CTR)이 오릅니다.
- **특수 컴포넌트 진입**: 별점·FAQ·이벤트·캐러셀 같은 특수 검색 결과의 조건입니다.
- **AI 검색 단서**: AI가 페이지의 엔티티(회사·장소·인물)를 인식하는 데 도움이 됩니다.

## 표준은 schema.org

검색엔진들이 공동으로 쓰는 어휘집입니다. 구글·빙·네이버 모두 채택했어요.

주요 타입:
- `Organization` — 회사·조직
- `LocalBusiness` — 지역 사업장 (병원·식당 등)
- `Article` / `BlogPosting` — 글
- `FAQPage` — 자주 묻는 질문
- `BreadcrumbList` — 이동 경로
- `Product` — 상품

## JSON-LD를 쓰세요

마크업 형식은 3가지지만 **JSON-LD를 권장**합니다.

| 형식 | 위치 | 권장도 |
|---|---|---|
| **JSON-LD** | `<head>` 안 `<script>` 블록 | ⭐ HTML과 분리돼 유지보수 쉬움 |
| Microdata | HTML 태그 속성에 직접 | 레거시 호환 |
| RDFa | HTML 태그 속성 | 거의 안 씀 |

네이버 공식도 **JSON-LD 또는 Microdata**를 권장합니다.

## FAQPage 예시 (블로그 글에 유용)

글 하단 FAQ 섹션에 적용하면 AI 답변 엔진이 인용하기 좋은 구조가 됩니다.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "홈페이지 제작 기간은 얼마나 걸리나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "보통 4주 내외입니다. 페이지 수와 콘텐츠 준비 상태에 따라 달라집니다."
      }
    }
  ]
}
```

## LocalBusiness 예시 (병원·지역 사업장)

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "사업장명",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KR",
    "addressLocality": "안산시 상록구",
    "streetAddress": "본오동 ○○"
  },
  "telephone": "+82-31-XXX-XXXX",
  "openingHours": "Mo-Fr 09:00-21:00",
  "url": "https://example.com",
  "sameAs": ["https://map.naver.com/..."]
}
```

> 💡 업종에 맞는 **구체적 타입**을 쓰면 좋습니다. 치과는 `Dentist`, 법무는 `LegalService`, 식당은 `Restaurant`, 학원은 `EducationalOrganization`.

## 지켜야 할 원칙

1. **마크업과 실제 콘텐츠 일치** — 페이지에 없는 정보를 마크업하면 스팸으로 판정됩니다.
2. **중복 회피** — 같은 데이터를 여러 형식으로 중복 마크업하지 않습니다.
3. **이미지는 원본 사용** — 깨진 이미지·썸네일 금지.
4. **항목 적은 리스트는 지양** — 검색엔진이 노출을 기각합니다.

## 검증 도구

- **schema.org 검증기**: validator.schema.org — 문법 오류 점검
- **Google 리치 결과 테스트**: search.google.com/test/rich-results — 구글 노출 자격 확인

## 과투자하지 마세요 — 중요한 균형

2026년 구글 공식 입장은 명확합니다: **생성형 AI 검색에 schema는 필수가 아닙니다.** "AI 검색을 위한 특별한 schema 마크업은 없다"고 못 박았어요.

그래서 운영 결론은:
- ✅ 리치 결과 자격용으로 기본 schema(FAQPage·LocalBusiness·BlogPosting)는 **유지**
- ✅ 비용 낮은 schema는 보험 차원에서 적용 (구글 외 AI엔 도움될 수 있음)
- ❌ schema를 위한 추가 마크업·글 재작성은 **투자 대비 효과가 낮음**
- 🎯 schema보다 **고유한 콘텐츠 + 토픽 권위 + 신뢰 신호**가 우선

> ⚠️ 일부 업계 자료는 "schema가 AI에 강한 신호"라고 하지만, **구글 공식은 불필요하다**고 합니다. 양쪽을 알되, 기술 트릭에 시간을 쏟기보다 콘텐츠 품질에 집중하세요.

## ⚠️ 자주 하는 실수

- **페이지에 없는 정보 마크업**: 스팸 판정 → 역효과
- **schema만 하면 노출된다는 착각**: 마크업해도 노출은 보장 안 됨
- **schema에 과투자**: 콘텐츠는 부실한데 마크업만 완벽 → 순위 안 오름
- **검증 안 하고 발행**: 문법 오류 한 줄로 전체 무효
- **항목 1~2개짜리 리스트 마크업**: 검색엔진이 무시

## ❓ FAQ

**Q. 워드프레스에서 어떻게 추가하나요?**
A. Rank Math·Yoast 같은 SEO 플러그인에 schema 생성기가 내장돼 있습니다. 코드를 직접 안 짜도 글 단위로 FAQPage·Article 등을 설정할 수 있어요.

**Q. 아임웹에서도 가능한가요?**
A. 기본 schema는 자동 적용되는 부분이 있고, 추가는 SEO 설정의 공통 코드 삽입으로 JSON-LD를 넣을 수 있습니다. 다만 자유도는 워드프레스보다 제한적이에요.

**Q. FAQ 리치 결과가 안 보여요.**
A. 2023년 이후 구글은 FAQ 리치 결과를 정부·의료 등 일부 권위 사이트로 제한한 시기가 있었습니다. 마크업이 맞아도 노출 안 될 수 있으니 분기별로 점검하세요.

**Q. schema가 AI 검색 인용에 도움 되나요?**
A. 구글 공식은 "불필요"라지만, 구글 외 AI(ChatGPT·Perplexity)에는 일부 도움이 될 수 있습니다. 비용 낮은 기본 schema는 보험으로 두되, 과투자는 하지 마세요.

---

## 관련 가이드

- [FAQ schema 추가하기](/guides/aeo-faq-schema/)
- [기술 SEO 체크리스트](/guides/seo-technical/)
- [로컬 SEO (병원·지역업)](/guides/seo-local/)
- [AEO/GEO란? AI 검색 최적화](/guides/aeo-fundamentals/)
