---
title: llms.txt 작성법 — AI 크롤러를 위한 사이트 가이드 파일
description: ChatGPT·Claude·Perplexity 같은 AI에게 사이트의 핵심 페이지를 알리는 llms.txt 작성법. 구조·예시·검증.
category: SEO·AEO / AEO · AI 검색
status: draft
---


> `llms.txt`는 **AI 크롤러를 위한 사이트 안내서**입니다. `robots.txt`가 검색엔진에게 "어디를 가도 되는지" 알린다면, `llms.txt`는 AI에게 **"우리 사이트의 핵심은 여기"** 라고 알려주는 새 표준입니다. ChatGPT·Claude·Perplexity 같은 LLM 기반 검색이 늘면서 빠르게 채택 중.

## llms.txt란?

2024년 9월 Answer.AI의 Jeremy Howard가 제안한 표준. 사이트 루트에 `llms.txt` 파일을 두면 AI가 우선 읽어 사이트의 구조·핵심 콘텐츠를 파악.

### 위치

```
https://mycompany.com/llms.txt
```

루트에 단 하나. `robots.txt`와 같은 위치.

### 형식

마크다운. 사람과 기계 모두 읽기 쉬움.

### 차이 — robots.txt vs sitemap.xml vs llms.txt

| 파일 | 대상 | 형식 | 목적 |
|---|---|---|---|
| `robots.txt` | 검색 크롤러 | 평문 | 크롤링 허용 범위 |
| `sitemap.xml` | 검색 크롤러 | XML | 색인 가능 URL 목록 |
| `llms.txt` | AI 답변 엔진 | 마크다운 | 사이트 핵심 콘텐츠 안내 |

> 세 파일 다 별개. 모두 운영 권장.

## 기본 구조

```markdown
# 사이트 이름

> 한 줄 설명 (사이트 정체성)

선택적으로 자세한 설명 단락.

## 주요 섹션

- [페이지 제목](URL): 설명
- [페이지 제목](URL): 설명

## Optional

- [덜 중요한 페이지](URL): 설명
```

핵심 4요소:
1. **H1**: 사이트 이름
2. **Blockquote**: 한 줄 정의
3. **H2 섹션**: 카테고리별 핵심 페이지 링크
4. **Optional 섹션**: 부수적 콘텐츠

## 실전 예시 — 병원

```markdown
# ○○이비인후과

> 안산 본오동에 위치한 코·귀·목 전문 이비인후과. 평일 야간 9시까지·토요일 진료.

## 진료 정보

- [진료 안내](https://pyeonhan-ent.com/services/): 코·귀·목 진료 종류와 진료 시간
- [수면다원검사](https://pyeonhan-ent.com/sleep-test/): 코골이·수면무호흡증 진단 절차와 보험 적용
- [알레르기 비염 클리닉](https://pyeonhan-ent.com/allergy/): 알레르기 검사와 면역요법
- [중이염 진료](https://pyeonhan-ent.com/otitis/): 성인·소아 중이염 치료

## 방문 안내

- [오시는 길](https://pyeonhan-ent.com/location/): 주소·대중교통·주차
- [예약하기](https://pyeonhan-ent.com/reservation/): 온라인·전화 예약 방법
- [진료시간](https://pyeonhan-ent.com/hours/): 평일·토요일·휴진일

## 자주 묻는 질문

- [야간 진료](https://pyeonhan-ent.com/faq/night/): 야간 진료 시간과 진료과
- [수면검사 비용](https://pyeonhan-ent.com/faq/sleep-cost/): 수면다원검사 비용·보험적용

## Optional

- [의료진 소개](https://pyeonhan-ent.com/team/)
- [공지사항](https://pyeonhan-ent.com/notice/)
- [블로그](https://pyeonhan-ent.com/blog/)
```

## 실전 예시 — 웹 제작 회사

```markdown
# 언웹스 - 웹사이트 제작

> 기업·병원·소개형 홈페이지 제작 전문. WordPress·아임웹 기반.

## 서비스

- [홈페이지 제작](https://unwebs.co.kr/service/): 제작 절차·비용·일정
- [유지보수](https://unwebs.co.kr/maintenance/): 건별·정기 유지보수 옵션
- [포트폴리오](https://unwebs.co.kr/portfolio/): 제작 사례

## 가이드센터

- [아임웹 운영 가이드](https://guide.unwebs.co.kr/): 19편 실무 가이드
- [SEO·AEO 가이드](https://guide.unwebs.co.kr/#SEO%20%C2%B7%20AEO): 검색 노출 14편

## 문의

- [의뢰 문의](https://unwebs.co.kr/contact/): 견적·일정 문의
- [블로그](https://unwebs.co.kr/blog/)

## Optional

- [About](https://unwebs.co.kr/about/)
- [공지사항](https://unwebs.co.kr/notice/)
```

## 작성 가이드

### 1. 페이지 선별

모든 페이지가 아니라 **AI가 답변에 인용할 가치 있는 페이지**만.

선별 기준:
- ✅ 정보성 콘텐츠 (가이드·튜토리얼·FAQ)
- ✅ 구체적 정보가 담긴 페이지 (가격·일정·연락처)
- ✅ 자주 묻는 질문 답변
- ❌ 로그인·관리자 페이지
- ❌ 검색 결과·필터 페이지
- ❌ 거의 동일한 변형 페이지

### 2. 설명문 작성

각 링크 옆 설명은 **AI가 어떤 질문에 매칭할지**를 의식.

❌ "서비스" (너무 추상적)
✅ "코·귀·목 진료 종류와 진료 시간" (구체적 키워드)

### 3. 분량

전체 50~150줄이 적정. 너무 길면 핵심이 묻힘.

### 4. 업데이트 빈도

콘텐츠 추가·삭제 시 갱신. 분기 1회 정기 점검.

## llms-full.txt — 확장 버전

기본 `llms.txt`가 사이트 목차라면, `llms-full.txt`는 **전체 콘텐츠를 마크다운으로 통합**한 파일.

```
https://mycompany.com/llms.txt        # 목차
https://mycompany.com/llms-full.txt   # 전체 본문
```

장점:
- AI가 한 번에 전체 사이트 학습 가능
- 크롤링 부하 ↓

단점:
- 파일 크기 큼 (수 MB 가능)
- 자동 생성 도구 필요

> 💡 작은 사이트는 `llms.txt`만으로 충분. 대형 사이트는 `llms-full.txt` 추가 고려.

## 자동 생성 도구

### CMS별 옵션

| CMS | 자동 생성 |
|---|---|
| 아임웹 | 환경설정 > SEO > llms.txt 사용 옵션 (자동) |
| WordPress | LLMs.txt Generator 플러그인 |
| Astro/Starlight | 빌드 시 자동 생성 가능 (커스텀 통합) |
| 정적 사이트 | 수동 작성 또는 빌드 스크립트 |

### 수동 작성 시

1. 사이트 핵심 페이지 5~15개 추리기
2. 위 예시 구조 복사 → 본인 정보로 교체
3. 텍스트 파일로 저장 (`llms.txt`)
4. 사이트 루트에 업로드
5. `https://mycompany.com/llms.txt` 접속해 확인

## 검증

작성 후 점검:

### 접속 확인

브라우저에서 `https://mycompany.com/llms.txt` 직접 접속 → 내용 표시되는지.

### Content-Type

서버가 `text/markdown` 또는 `text/plain`으로 응답해야. HTML로 응답하면 AI가 못 읽음.

```bash
curl -I https://mycompany.com/llms.txt
# Content-Type: text/plain; charset=utf-8  ← OK
```

### 링크 유효성

모든 링크가 200 응답하는지. 깨진 링크는 신뢰도 ↓.

### 마크다운 형식

[Markdown Live Preview](https://markdownlivepreview.com)에 붙여넣어 렌더링 확인.

## 효과 모니터링

llms.txt 도입 후 측정:

- **AI 답변 인용 빈도**: 월 1회 본인 업종 질문을 ChatGPT·Perplexity에 던져 우리 사이트 인용 여부 확인
- **참조 트래픽**: GA4 referral에서 chatgpt.com, perplexity.ai 등 유입 증가
- **브랜드 검색량**: 네이버 키워드 도구·GSC에서 직접 검색 증가 추이

## ⚠️ 자주 하는 실수

- **모든 페이지를 다 나열**: 너무 길면 핵심이 묻힘. 15개 이내로 압축
- **설명 없이 링크만**: AI가 매칭하기 어려움. 짧은 설명 필수
- **외부 사이트 링크 포함**: 우리 사이트 페이지만
- **HTML로 저장**: 마크다운 평문이어야 함
- **루트가 아닌 경로에 업로드**: 반드시 `/llms.txt`

## ❓ FAQ

**Q. llms.txt를 만들면 AI가 우리 사이트를 더 자주 인용하나요?**
A. **간접적 영향**입니다. AI 모델별로 llms.txt 활용도가 다르고, 한 신호일 뿐. 다만 만들지 않으면 0이라는 점에서 기본 작업.

**Q. robots.txt에서 AI 봇을 막아도 llms.txt가 의미 있나요?**
A. AI 봇을 막으면 어차피 인용 안 됨. **둘 다 허용**이 정답.

**Q. llms.txt에 비공개 페이지 링크를 넣어도 되나요?**
A. AI는 그 링크를 따라가 콘텐츠를 학습. 비공개 페이지는 절대 포함 X.

**Q. 다국어 사이트는?**
A. 언어별로 별도 llms.txt 권장. `mycompany.com/llms.txt` (한국어), `mycompany.com/en/llms.txt` (영어).

**Q. AI가 llms.txt를 실제로 읽나요?**
A. 2024년 시점에서 Anthropic Claude·Perplexity가 우선 채택. ChatGPT는 부분 지원. 표준 채택이 빠르게 진행 중.

---

## 관련 가이드

- [AEO/GEO란?](/guides/aeo-fundamentals/)
- [FAQ schema 추가하기](/guides/aeo-faq-schema/)
- [ChatGPT·Perplexity 노출 전략](/guides/aeo-chatgpt/)
- [기술 SEO 체크리스트](/guides/seo-technical/)
