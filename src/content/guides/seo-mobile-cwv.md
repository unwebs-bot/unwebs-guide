---
title: Core Web Vitals + 모바일 우선 색인 — 속도·반응성·안정성
description: 구글 공식 랭킹 신호인 Core Web Vitals 3대 지표(LCP·INP·CLS)와 모바일 우선 색인 대응법.
category: SEO·AEO / 기술 SEO
status: draft
---


> **Core Web Vitals**는 구글이 2021년부터 공식 랭킹 신호로 사용하는 사이트 품질 지표입니다. 페이지 로딩 속도(LCP)·반응 속도(INP)·레이아웃 안정성(CLS) 3가지로 측정. 동시에 **모바일 우선 색인** 시대라 모바일 점수가 SEO 기준이에요.

## 모바일 우선 색인 — 짧은 정리

구글은 2021년부터 **모바일 페이지를 색인 기준**으로 사용합니다. 즉:
- 모바일 버전이 PC와 다르면 → 모바일 콘텐츠가 SEO 기준
- 모바일 페이지가 부실하면 → PC가 좋아도 SEO 손해
- 모바일에 없는 콘텐츠는 SEO에 반영 안 됨

**반응형 디자인**이 가장 안전. 별도 모바일 사이트(m.) 운영은 비추.

## Core Web Vitals 3대 지표

| 지표 | 측정 | 기준 (양호) | 주의 | 나쁨 |
|---|---|---|---|---|
| **LCP** | 가장 큰 콘텐츠 표시 시간 | < 2.5초 | 2.5~4초 | > 4초 |
| **INP** | 사용자 입력 후 반응 시간 | < 200ms | 200~500ms | > 500ms |
| **CLS** | 누적 레이아웃 이동 | < 0.1 | 0.1~0.25 | > 0.25 |

> 💡 셋 다 "양호" 영역에 진입하면 Core Web Vitals "통과". 통과 사이트는 검색 순위에 미세하지만 일관된 boost.

## 1. LCP (Largest Contentful Paint)

페이지 로딩 시 **화면에서 가장 큰 콘텐츠가 표시되는 시점**.

### 무엇이 LCP 요소가 되는가?

- 큰 이미지
- 비디오 포스터 이미지
- 큰 텍스트 블록 (H1·Hero 카피)
- 백그라운드 이미지

### LCP가 느린 원인

1. **서버 응답 느림** (TTFB > 600ms)
2. **렌더링 차단 리소스**: 큰 CSS·JS 파일이 head에 로드
3. **이미지 최적화 부족**: 원본 크기 그대로
4. **외부 도메인 호스팅**: CDN 미사용

### LCP 개선 5단계

#### 1. 이미지 최적화

- **WebP·AVIF**로 변환 (JPG·PNG의 절반 크기)
- 화면 크기에 맞게 리사이즈 (1920×1080 이미지를 400×300 자리에 ❌)
- `<img loading="lazy">` (첫 화면 외 이미지)
- `<img fetchpriority="high">` (LCP 이미지)

#### 2. CDN 활용

정적 자원(이미지·CSS·JS)을 CDN으로:
- Vercel/Netlify는 자동 제공
- Cloudflare 무료 CDN
- 한국 CDN: Akamai·LG U+

#### 3. 폰트 최적화

```html
<link rel="preload" as="font" href="/fonts/Pretendard.woff2" crossorigin />
<style>
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard.woff2') format('woff2');
    font-display: swap;
  }
</style>
```

`font-display: swap`이 핵심 — 폰트 로딩 중 시스템 폰트로 먼저 표시.

#### 4. 중요 CSS 인라인

위 fold(첫 화면) CSS만 `<head>`에 인라인. 나머지는 비동기 로드.

#### 5. 서버·호스팅 점검

- 정적 사이트: Vercel/Netlify Edge (TTFB 100ms 이하)
- WordPress: SSD 호스팅 + 캐시 플러그인
- 데이터베이스 쿼리 최적화

## 2. INP (Interaction to Next Paint)

사용자가 **클릭·탭·키 입력** 했을 때 화면이 다음 프레임을 그리는 데 걸리는 시간. 2024년 FID 대체.

### INP가 느린 원인

1. **무거운 JavaScript**: 무한 스크롤·복잡 애니메이션
2. **메인 스레드 점유**: 큰 함수가 한 번에 실행
3. **외부 스크립트**: 분석 도구·광고·채팅 위젯이 한꺼번에 로드

### INP 개선

#### 1. JS 분할 (Code Splitting)

- 페이지별 필요한 JS만 로드
- React·Vue 등 SPA는 라우트 단위 분할
- 정적 사이트는 페이지별 별도 JS 생성

#### 2. 외부 스크립트 지연

```html
<script src="https://analytics.example.com/script.js" defer></script>
<script src="https://chat.example.com/widget.js" async></script>
```

- `defer`: HTML 파싱 후 실행 (순서 보장)
- `async`: 다운로드 즉시 실행 (순서 X)

채팅·통계 등 부가 기능은 `defer` 또는 `async`.

#### 3. 큰 함수 분할

JS의 long task(50ms+)를 작은 단위로:

```javascript
// ❌ 한 번에
function processAll(items) {
  items.forEach(item => heavyWork(item)); // 1000개면 멈춤
}

// ✅ 청크 처리
async function processInChunks(items) {
  for (let i = 0; i < items.length; i += 50) {
    items.slice(i, i + 50).forEach(item => heavyWork(item));
    await new Promise(r => setTimeout(r, 0)); // 메인 스레드 양보
  }
}
```

#### 4. 사용 안 하는 JS 제거

- 안 쓰는 플러그인·라이브러리 삭제
- 분석 도구 중복 제거
- 채팅·팝업 위젯 1개로 통합

## 3. CLS (Cumulative Layout Shift)

페이지 로드 중 **레이아웃이 갑자기 움직이는 정도**. 0이 최선.

### CLS가 발생하는 원인

1. **크기 미지정 이미지**: 로딩 후 자리 차지하며 본문 밀어냄
2. **광고·동영상 임베드**: 로딩 후 갑자기 나타남
3. **웹 폰트 교체**: 시스템 폰트 → 웹 폰트 전환 시 텍스트 줄바꿈
4. **동적 콘텐츠 삽입**: JS로 본문 위에 컴포넌트 추가

### CLS 개선

#### 1. 이미지에 width·height

```html
<img src="hero.jpg" width="1200" height="630" alt="..." />
```

브라우저가 미리 공간을 확보 → 로드 후 콘텐츠 안 밀림.

#### 2. 광고 영역 미리 확보

```html
<div style="min-height: 250px;">
  <!-- 광고 슬롯 -->
</div>
```

광고가 로드 안 되어도 250px 공간 유지.

#### 3. 폰트 swap + 사이즈 보정

```css
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard.woff2');
  font-display: swap;
  size-adjust: 100%; /* 시스템 폰트와 폭 차이 보정 */
}
```

#### 4. 동적 콘텐츠는 본문 아래에

배너·팝업이 필요하면 본문 **위가 아닌 아래**에 추가하거나 모달로.

## 측정 도구

### PageSpeed Insights (가장 표준)

[pagespeed.web.dev](https://pagespeed.web.dev)

- URL 입력 → 모바일·데스크탑 점수
- LCP·INP·CLS 측정값 + 개선 제안
- **실제 사용자 데이터(CrUX)** 기준

### Chrome DevTools

브라우저 개발자 도구 → Lighthouse 탭. 본인 PC 환경 기준이라 다소 낙관적.

### Search Console

Search Console > **Core Web Vitals**: 실제 사용자 데이터 기반 사이트 전체 통계.

### Web Vitals 확장 (Chrome)

[chrome.google.com/webstore/detail/web-vitals](https://chrome.google.com/webstore/detail/web-vitals)

실시간 LCP·INP·CLS 측정. 개발자에게 유용.

## 우선순위 가이드

신규 사이트:
1. 호스팅 빠른 곳 선택
2. 이미지 WebP·lazy loading
3. 폰트 최적화
4. 외부 스크립트 최소화

기존 사이트:
1. PageSpeed Insights 측정 → 모바일 점수 확인
2. 가장 낮은 지표 1개 우선 개선
3. 1~2주 후 재측정
4. 다음 지표 개선

## ⚠️ 자주 하는 실수

- **데스크탑만 측정**: 모바일 점수가 SEO 기준
- **이미지 크기 무시**: 5MB 이미지 → LCP 망함
- **무거운 페이지 빌더**: Elementor·Divi 등 무거운 시각 빌더는 LCP·INP 페널티
- **분석 도구 7~8개 동시 로드**: GA·메타·카카오·네이버·핫자르... 다 켜면 INP 망함. 2~3개로 정리
- **광고·팝업 한꺼번에**: CLS 폭증

## ❓ FAQ

**Q. Core Web Vitals 점수가 SEO에 얼마나 영향을 주나요?**
A. 직접적 가중치는 크지 않음. 다만 **사용자 경험 신호** (체류·이탈)로 간접 영향. 또한 PC와 모바일 양쪽에서 통과해야 함.

**Q. 점수 100점을 목표로 해야 하나요?**
A. 비현실적. **"양호"** 영역(LCP 2.5s·INP 200ms·CLS 0.1) 통과면 충분.

**Q. WordPress인데 점수가 낮아요.**
A. 흔한 케이스. **캐시 플러그인(WP Rocket·W3 Total Cache)** + **이미지 최적화 플러그인(ShortPixel·Imagify)** + **빠른 호스팅**으로 80% 개선. 무거운 테마(Elementor 등) 사용 시는 한계 있음.

**Q. 아임웹 점수가 낮아요.**
A. 아임웹은 자체 인프라라 점수 통제 어려움. 다만 **무거운 이미지 줄이기**·**불필요한 코드 위젯 제거**로 일부 개선 가능. 한계 인지하고 운영.

**Q. 자주 측정해야 하나요?**
A. 월 1회 정도. 콘텐츠·디자인 큰 변경 시 즉시 측정.

---

## 관련 가이드

- [기술 SEO 체크리스트](/guides/seo-technical/)
- [SEO란? 검색엔진 동작 원리](/guides/seo-fundamentals/)
- [온페이지 SEO](/guides/seo-onpage/)
