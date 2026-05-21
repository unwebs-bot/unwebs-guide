---
title: WordPress 속도 최적화 7단계 — 모바일 PageSpeed 80+ 만들기
description: 호스팅·캐시·이미지·DB·CSS/JS·CDN·DB 정리까지 단계별. PageSpeed 30점에서 80점으로 개선하는 실전.
category: WordPress 운영 / 운영·문제해결
status: draft
---


> WordPress는 기본 상태로 느린 편. 다행히 **7단계 최적화**로 모바일 PageSpeed 30점대를 80+로 끌어올릴 수 있어요. 속도는 SEO·전환·사용자 경험 모두에 직결. 단계별 실전 가이드.

## 측정 먼저

작업 전 현재 상태 측정:
- **PageSpeed Insights** (pagespeed.web.dev): 모바일·데스크탑 점수
- **GTmetrix** (gtmetrix.com): 상세 분석

3번 측정 평균 (캐시 영향 줄이려).

## 1단계 — 호스팅 점검

가장 큰 변수. 호스팅이 느리면 다른 최적화 효과 ↓.

### 확인 항목

- **TTFB (Time to First Byte)**: < 600ms 권장. 1초+ = 호스팅 느림
- **PHP 버전**: 8.0+ 사용 (7.x는 옛 버전, 50% 느림)
- **메모리 한도**: 256MB+

### 호스팅 추천 (속도 기준)

| 등급 | 호스팅 | 가격 |
|---|---|---|
| 가성비 | SiteGround·Cloudways | $5~$15/월 |
| 빠름 | Kinsta·WP Engine | $25~$50/월 |
| 한국 | 카페24·가비아 | ₩5,000~30,000/월 |

> 💡 한국 사용자 대상이면 한국 호스팅, 글로벌이면 Cloudways·Kinsta.

### PHP 업그레이드

호스팅 cPanel > **MultiPHP Manager** 또는 **PHP Version** → 8.0+ 변경.

업그레이드 후 사이트 점검 (옛 플러그인 호환성 확인).

## 2단계 — 캐시 플러그인

가장 큰 효과. 5분 작업 → 50% 빨라짐.

[캐시·속도 최적화 가이드](/guides/wp-cache-speed/) 참고.

### 빠른 셋업 (WP Rocket)

1. 플러그인 설치·라이선스
2. 기본 설정 그대로 (대부분 OK)
3. 모바일 캐시 ON
4. LazyLoad ON

PageSpeed 점수 즉시 20~30점 ↑.

## 3단계 — 이미지 최적화

WordPress 사이트 무게의 50~70%가 이미지.

### 압축

플러그인 **ShortPixel** 또는 **Smush**:
- 자동 압축 (업로드 시)
- 기존 이미지 일괄 압축
- WebP 자동 변환

### 적정 크기 업로드

5MB 원본 → 사용 폭에 맞춰 리사이즈:
- 본문 이미지: 800px
- 비주얼: 1920px
- 썸네일: 400px

업로드 전 미리 리사이즈.

### Lazy Loading

화면 외 이미지는 스크롤 시 로드. WordPress 5.5+ 기본 활성.

[미디어 라이브러리](/guides/wp-media-library/) 참고.

## 4단계 — CSS·JS 최적화

### Minify (압축)

공백·주석 제거 → 파일 크기 30~50% ↓. 캐시 플러그인 자동.

### Combine (병합)

여러 파일을 하나로 → HTTP 요청 ↓.

> 💡 HTTP/2 시대엔 효과 미미. 시도 후 점수 비교.

### Defer JavaScript

JS가 페이지 로딩 막지 않게:

```html
<script src="..." defer></script>
```

WP Rocket의 "Delay JavaScript Execution"이 가장 강력.

### 사용 안 하는 CSS 제거

플러그인 **Asset CleanUp** — 페이지별로 안 쓰는 CSS·JS 자동 식별.

## 5단계 — DB 최적화

운영 1년 후 DB가 부풀어 느려짐.

### WP-Optimize

플러그인:
1. WP-Optimize > Database
2. 정리할 항목 체크:
   - 옛 글 리비전
   - 자동 저장 임시
   - 스팸·휴지통 댓글
   - 만료된 Transients
   - 옛 임시 옵션
3. **선택된 최적화 실행**

월 1회 실행 자동화 가능.

### DB 테이블 최적화

같은 플러그인 > **Tables** 탭 → 모든 테이블 최적화.

## 6단계 — CDN

방문자에게 가장 가까운 서버에서 응답.

### Cloudflare (무료)

가장 인기. 30분 셋업.

1. cloudflare.com 가입
2. 도메인 추가
3. 네임서버를 Cloudflare로 변경
4. 자동 작동

추가 옵션:
- **Auto Minify**: CSS·JS·HTML 자동 압축
- **Brotli**: gzip 대체, 30% 더 압축
- **Polish**: 이미지 자동 압축
- **Rocket Loader**: JS 지연 로딩

### BunnyCDN ($1~/월)

한국 노드 ↑·속도 빠름.

## 7단계 — 폰트 최적화

웹 폰트가 LCP 영향 큼.

### `font-display: swap`

폰트 로딩 중 시스템 폰트로 먼저 표시:

```css
@font-face {
  font-family: 'Pretendard';
  src: url('Pretendard.woff2');
  font-display: swap;
}
```

### 필요 weight만

400·700 정도만. 100·300·500·600·800·900까지 다 로드하면 무거움.

### Self-hosted

Google Fonts → 본인 서버 호스팅 → 외부 도메인 요청 ↓.

플러그인 **OMGF (Host Webfonts Locally)** — 자동 자체 호스팅.

## 점수 목표

| 지표 | 양호 | 우수 |
|---|---|---|
| PageSpeed Insights (모바일) | 70+ | 90+ |
| LCP | < 2.5초 | < 1.8초 |
| INP | < 200ms | < 100ms |
| CLS | < 0.1 | < 0.05 |

> 💡 100점은 비현실적. "양호" 영역 통과면 충분.

## 자주 보는 PageSpeed 권장사항

### "사용하지 않는 JavaScript 줄이기"

- 무거운 페이지 빌더 정리 (Elementor 등)
- 사용 안 하는 플러그인 삭제
- 외부 스크립트 (분석·광고) 줄이기

### "이미지 형식을 WebP로 제공"

- ShortPixel·Smush로 자동 변환
- 또는 Cloudflare Polish

### "텍스트 압축 사용"

- Gzip 또는 Brotli 활성 (호스팅 또는 CDN)

### "캐시 정책 사용"

- 캐시 헤더 설정 (캐시 플러그인 자동)

### "Core Web Vitals 개선"

[Core Web Vitals 가이드](/guides/seo-mobile-cwv/) 참고.

## 최적화 후 — 모니터링

월 1회 측정 + 추이 추적:

| 도구 | 측정 |
|---|---|
| PageSpeed Insights | 실제 사용자 데이터 (CrUX) |
| Search Console > Core Web Vitals | 사이트 전체 통계 |
| GTmetrix | 상세 폭포 그래프 |

지표 변동 → 어떤 작업이 영향 미쳤나 추적.

## 무거운 사이트 — 추가 검토

위 7단계로도 안 빨라지면:

- **테마 변경**: 무거운 빌더 테마 → 가벼운 테마 (Astra·GeneratePress·Kadence)
- **플러그인 정리**: 50개+ → 20개 이내
- **다른 호스팅**: 공유 호스팅 → 관리형 WP 호스팅
- **콘텐츠 분리**: 무거운 동영상은 YouTube·Vimeo 임베드

## ⚠️ 자주 하는 실수

- **PageSpeed 100점 집착**: 비현실적·필요 없음
- **모든 옵션 한꺼번에**: 사이트 깨짐. 1개씩 적용·점검
- **이미지 무한 압축**: 화질 ↓
- **무거운 페이지 빌더 + 캐시**: 가벼운 빌더가 정답
- **호스팅 가격만 보고 선택**: 비싼 호스팅이 결국 가성비

## ❓ FAQ

**Q. 최적화 어디부터 시작?**
A. 호스팅·캐시·이미지 순서. 이 3가지가 80% 효과.

**Q. PageSpeed 모바일 점수가 데스크탑보다 낮아요.**
A. 정상. 모바일은 CPU·네트워크 모두 약함. **모바일 70+가 현실적 목표**.

**Q. 점수가 안 올라가요.**
A. 가장 흔한 원인:
- 무거운 페이지 빌더 (Elementor 등)
- 광고·트래커 스크립트 5개+
- 공유 호스팅 (TTFB > 1초)

**Q. 캐시 + CDN 동시에 써도 되나요?**
A. 권장. 캐시는 서버, CDN은 글로벌 가속. 시너지.

**Q. 이미지를 모두 다시 압축해야?**
A. ShortPixel 같은 플러그인이 일괄 처리. 1회 작업·이후 자동.

---

## 관련 가이드

- [캐시·속도 최적화](/guides/wp-cache-speed/)
- [Core Web Vitals + 모바일](/guides/seo-mobile-cwv/)
- [미디어 라이브러리](/guides/wp-media-library/)
- [기술 SEO 체크리스트](/guides/seo-technical/)
