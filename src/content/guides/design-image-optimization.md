---
title: 이미지·미디어 최적화 — 무거운 사진이 사이트를 망친다
description: WebP/AVIF 변환·압축·반응형 이미지·lazy loading으로 사이트 속도를 잡는 법. 이미지는 보통 페이지 용량의 절반 이상을 차지하고 Core Web Vitals에 직결된다.
category: 기획 & 디자인 / 디자인 시스템
status: draft
---


> 사이트가 느린 가장 흔한 원인은 **무거운 이미지**입니다. 보통 이미지가 페이지 전체 용량의 절반 이상을 차지하고, 첫 화면 로딩 속도(LCP)를 직접 좌우해요. 디자인이 아무리 예뻐도 5MB 사진 한 장이 다 망칩니다. 화질은 지키면서 용량을 줄이는 게 핵심입니다.
>
> 폰트 최적화는 [웹폰트 적용·성능](/guides/design-webfont/), 속도 지표 전반은 [Core Web Vitals](/guides/seo-mobile-cwv/)에서 다룹니다.

## 왜 이미지부터인가

- 이미지는 대개 페이지 용량의 **50% 이상**
- 첫 화면 큰 이미지 = **LCP 요소** (구글 속도 지표의 핵심)
- 모바일·느린 네트워크에서 이탈의 주범
- 최적화 한 번으로 **가장 큰 속도 개선**을 얻는 지점

## 1. 포맷 — WebP·AVIF를 쓰세요

| 포맷 | 용도 | 비고 |
|---|---|---|
| **AVIF** | 사진, 최신 | 가장 압축률 높음 (JPG의 ~50%) |
| **WebP** | 사진·범용 | JPG의 약 70% 크기, 호환성 좋음 |
| JPG | 사진 (구형 대비) | fallback용 |
| **SVG** | 로고·아이콘·일러스트 | 벡터, 무한 확대 무손실 |
| PNG | 투명 필요 시 | 사진엔 무거움 |

> 💡 사진은 **WebP 기본, AVIF 가능하면 추가**. 로고·아이콘은 무조건 **SVG**. PNG 사진은 피하세요.

## 2. 크기 — 표시 크기에 맞게

원본 그대로 올리는 게 가장 흔한 실수입니다.

```
❌ 4000×3000 원본을 400px 자리에 표시
✅ 표시 크기의 2배(레티나 대응)까지만: 800px로 리사이즈
```

- 표시 폭의 **최대 2배**까지만 (레티나 디스플레이 대응)
- Hero 같은 큰 이미지도 2000px를 넘길 일이 거의 없음

## 3. 반응형 이미지 — 화면별로 다른 크기

같은 이미지를 모바일·데스크탑에 똑같이 주면 모바일이 손해입니다.

```html
<img
  src="photo-800.webp"
  srcset="photo-400.webp 400w,
          photo-800.webp 800w,
          photo-1600.webp 1600w"
  sizes="(max-width: 768px) 100vw, 800px"
  width="800" height="600"
  alt="설명" />
```

- `srcset`: 여러 크기 제공 → 브라우저가 화면에 맞는 걸 선택
- 모바일은 작은 파일, 데스크탑은 큰 파일을 받음

## 4. Lazy loading — 첫 화면 밖은 나중에

```html
<!-- 첫 화면 밖 이미지: 지연 로딩 -->
<img src="photo.webp" loading="lazy" alt="..." />

<!-- 첫 화면(LCP) 이미지: 우선 로딩 -->
<img src="hero.webp" fetchpriority="high" alt="..." />
```

- 스크롤해야 보이는 이미지는 `loading="lazy"` → 첫 화면만 빨리 뜸
- 단, **Hero(LCP) 이미지엔 lazy 금지** — 오히려 느려짐. `fetchpriority="high"`로.

## 5. width·height 지정 — 레이아웃 밀림 방지

```html
<img src="..." width="800" height="600" alt="..." />
```

브라우저가 이미지 자리를 미리 확보 → 로딩 중 콘텐츠가 안 출렁입니다(CLS 방지). CSS로 `max-width:100%`만 추가하면 반응형도 유지돼요.

## 도구

| 작업 | 도구 |
|---|---|
| WebP/AVIF 변환·압축 | Squoosh(웹), ShortPixel·Imagify(WP 플러그인) |
| 일괄 리사이즈 | macOS 미리보기, ImageOptim |
| SVG 최적화 | SVGO, SVGOMG |
| 동영상 | 자체 호스팅 대신 YouTube·Vimeo 임베드 |

> 동영상은 자체 업로드하면 매우 무겁습니다. 배경 영상이 꼭 필요한 게 아니면 **YouTube·Vimeo 임베드**나 짧은 webm을 쓰세요.

## 워드프레스·아임웹에서

- **워드프레스**: ShortPixel·Imagify 플러그인이 업로드 시 자동 WebP 변환·압축·리사이즈. 사실상 필수 ([속도 최적화](/guides/wp-speed-optimization/) 참고)
- **아임웹**: 자체적으로 일부 최적화하지만, **올리기 전에 직접 압축·리사이즈**하는 게 안전합니다.

## 최적화 체크리스트

- [ ] 사진은 WebP(가능하면 AVIF), 로고·아이콘은 SVG
- [ ] 표시 크기의 2배 이하로 리사이즈
- [ ] 큰 이미지는 `srcset`으로 반응형 제공
- [ ] 첫 화면 밖 이미지는 `loading="lazy"`
- [ ] Hero 이미지는 `fetchpriority="high"` (lazy 금지)
- [ ] 모든 이미지에 `width`·`height` 지정
- [ ] alt 속성 작성 (접근성·SEO)
- [ ] 동영상은 외부 임베드 또는 압축

## ⚠️ 자주 하는 실수

- **원본 그대로 업로드**: 4000px 사진을 400px 자리에 → 10배 낭비
- **PNG로 사진 저장**: JPG·WebP의 몇 배 용량
- **Hero에 lazy loading**: LCP가 오히려 느려짐
- **width·height 생략**: 로딩 중 레이아웃 출렁임(CLS)
- **자체 호스팅 배경 동영상**: 수십 MB → 모바일 이탈
- **alt 누락**: 접근성·SEO 손해

## ❓ FAQ

**Q. WebP를 모든 브라우저가 지원하나요?**
A. 현재 주요 브라우저는 모두 지원합니다. 아주 구형 대비가 필요하면 `<picture>` 태그로 JPG fallback을 주면 되지만, 대부분은 WebP만으로 충분해요.

**Q. 화질이 떨어지지 않나요?**
A. WebP·AVIF는 같은 화질을 더 작은 용량으로 냅니다. 압축률을 80% 안팎으로 두면 눈으로 차이를 거의 못 느끼면서 용량은 크게 줄어요.

**Q. 워드프레스 플러그인만 깔면 끝인가요?**
A. ShortPixel·Imagify가 자동 변환·압축을 해주지만, **업로드 전 원본을 적당히 리사이즈**하면 더 좋습니다. 8000px 원본을 올리고 플러그인에 맡기는 것보다, 2000px로 줄여 올리는 게 안전해요.

**Q. 이미지 최적화로 점수가 얼마나 오르나요?**
A. 무거운 이미지가 원인이던 사이트는 LCP가 절반 이하로 줄기도 합니다. 속도 개선에서 **가장 효과 큰 단일 작업**이에요. ([Core Web Vitals](/guides/seo-mobile-cwv/) 참고)

---

## 관련 가이드

- [웹폰트 적용·성능](/guides/design-webfont/)
- [Core Web Vitals + 모바일](/guides/seo-mobile-cwv/)
- [속도 최적화 7단계](/guides/wp-speed-optimization/)
- [디자인 시스템·토큰](/guides/design-system-basics/)
