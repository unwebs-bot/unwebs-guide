---
title: 웹폰트 적용과 성능 — 한글 폰트 최적화
description: 웹폰트를 사이트에 적용하는 법과 성능 최적화. 한글 폰트는 용량이 커서 로딩·CLS 문제가 생기기 쉽다. font-display·preload·서브셋으로 해결한다.
category: 기획 & 디자인 / 디자인 시스템
status: draft
---


> 폰트를 고르는 것과 **웹에 제대로 적용하는 것**은 다른 문제입니다. 특히 한글 폰트는 글자 수가 많아 파일이 영문의 수십 배라, 잘못 넣으면 첫 화면이 늦게 뜨거나 글자가 깜빡이며 밀립니다. 적용과 성능을 같이 잡아야 해요.
>
> 폰트 *선택* 기준은 [컬러·타이포 잡는 법](/guides/design-color-typo/)에서 다룹니다. 이 글은 *적용·성능*에 집중합니다.

## 한글 웹폰트가 어려운 이유

| | 영문 폰트 | 한글 폰트 |
|---|---|---|
| 글자 수 | 수백 자 | 11,172자 (조합형) |
| 파일 크기 | 20~50KB | 1~5MB+ |
| 로딩 영향 | 거의 없음 | 첫 화면 지연·깜빡임 유발 |

→ 한글은 **그냥 넣으면 무겁습니다.** 최적화가 거의 필수예요.

## 웹폰트 적용 3가지 방법

### 1. CDN 링크 (가장 쉬움)
대표적으로 Pretendard, 구글 폰트(Noto Sans KR) 등이 CDN을 제공합니다.

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
```

- 장점: 설정 간단, 캐시 공유
- 단점: 외부 의존, 일부 CDN은 느릴 수 있음

### 2. 직접 호스팅 (성능 최선)
woff2 파일을 직접 서버에 올리고 `@font-face`로 선언합니다.

```css
@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

- 장점: 외부 의존 없음, 가장 빠름, 서브셋 가능
- 단점: 파일 관리 필요

### 3. 페이지 빌더 내장 (워드프레스·아임웹)
테마나 빌더가 제공하는 폰트 설정을 씁니다. 자유도는 낮지만 간편합니다. 구글 폰트 적용은 [아임웹 공통 디자인·폰트](/guides/imweb-design-customization/) 참고.

## 성능 최적화 4가지

### 1. woff2 포맷을 쓰세요
가장 압축률이 높은 웹폰트 포맷입니다. 구형 브라우저 대응이 필요 없다면 woff2만으로 충분해요. (ttf·otf는 무겁습니다)

### 2. font-display: swap
```css
@font-face {
  font-family: 'Pretendard';
  src: url('...') format('woff2');
  font-display: swap;
}
```
폰트가 로딩되는 동안 **시스템 폰트로 먼저 보여주고**, 다 받으면 교체합니다. 텍스트가 안 보이는 시간(FOIT)을 없애요.

### 3. 핵심 폰트는 preload
첫 화면에 쓰는 폰트는 미리 받게 합니다.

```html
<link rel="preload" as="font" type="font/woff2"
  href="/fonts/Pretendard-Regular.woff2" crossorigin />
```

- 단, 정말 첫 화면에 필요한 1~2개만. 남발하면 역효과.

### 4. 서브셋(subset)으로 용량 줄이기
한글 전체 11,172자 중 실제로 쓰는 글자만 남기면 파일이 크게 줄어듭니다.

- **동적 서브셋**: 구글 폰트 CDN은 자동으로 필요한 글자만 전송
- **정적 서브셋**: 자주 쓰는 2,350자(KS 완성형)만 남긴 파일 사용
- Pretendard는 **서브셋·다이나믹 서브셋 버전**을 제공해 편리

## CLS(레이아웃 밀림) 방지

폰트가 교체될 때 글자 폭이 달라지면 화면이 출렁입니다. (Core Web Vitals의 CLS 악화)

```css
@font-face {
  font-family: 'Pretendard';
  src: url('...') format('woff2');
  font-display: swap;
  size-adjust: 100%;        /* 시스템 폰트와 폭 차이 보정 */
}
```

- `font-display: swap` + 적절한 **fallback 폰트 지정**으로 교체 충격을 줄입니다.
- fallback은 비슷한 폭의 시스템 폰트로: `font-family: 'Pretendard', -apple-system, 'Apple SD Gothic Neo', sans-serif;`

## 폰트 weight 관리

- 실제 쓰는 굵기만 불러옵니다. Thin~Black 9종을 다 받으면 무겁습니다.
- 보통 **Regular(400) + Bold(700)** 2종이면 충분. 필요시 Medium(500) 추가.
- 가변 폰트(Variable Font)는 한 파일로 여러 굵기를 커버해 효율적입니다.

## 적용 체크리스트

- [ ] woff2 포맷 사용
- [ ] `font-display: swap` 적용
- [ ] 첫 화면 폰트만 preload (1~2개)
- [ ] 한글은 서브셋 버전 사용
- [ ] 쓰는 굵기만 로드 (보통 2~3종)
- [ ] fallback 시스템 폰트 지정
- [ ] PageSpeed Insights로 폰트 관련 경고 확인

## ⚠️ 자주 하는 실수

- **ttf/otf를 그대로 웹에 사용**: 용량 폭증 → 로딩 지연
- **굵기 9종 전부 로드**: 안 쓰는 폰트까지 다운로드
- **preload 남용**: 모든 폰트를 preload → 우선순위 붕괴
- **한글 폰트 서브셋 안 함**: 5MB 폰트로 첫 화면 지연
- **fallback 미지정**: 로딩 중 글자가 안 보이거나 출렁임

## ❓ FAQ

**Q. Pretendard를 많이 쓰던데 왜인가요?**
A. 한글·영문 균형이 좋고, 웹 최적화(woff2·서브셋·가변 폰트) 버전을 무료로 제공해 적용이 편합니다. 시스템 폰트와 폭이 비슷해 CLS도 적어요.

**Q. 구글 폰트 CDN vs 직접 호스팅, 뭐가 나아요?**
A. 간편함은 CDN, 성능·독립성은 직접 호스팅입니다. 트래픽이 많거나 속도가 중요하면 woff2 직접 호스팅을 권합니다.

**Q. 폰트 때문에 PageSpeed 점수가 낮아요.**
A. `font-display: swap` 미적용, 서브셋 안 함, ttf 사용이 흔한 원인입니다. 이 글의 체크리스트를 순서대로 적용하면 대부분 해결됩니다. ([Core Web Vitals](/guides/seo-mobile-cwv/) 참고)

**Q. 아임웹에서도 웹폰트 최적화가 되나요?**
A. 자체 인프라라 통제가 제한적입니다. 제공되는 폰트를 쓰거나 구글 폰트를 코드로 적용할 수 있지만, 직접 호스팅 수준의 최적화는 어렵습니다.

---

## 관련 가이드

- [컬러·타이포 잡는 법](/guides/design-color-typo/)
- [디자인 시스템·토큰](/guides/design-system-basics/)
- [Core Web Vitals + 모바일](/guides/seo-mobile-cwv/)
- [아임웹 공통 디자인·폰트](/guides/imweb-design-customization/)
