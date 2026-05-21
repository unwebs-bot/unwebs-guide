---
title: Elementor 다루기 — 페이지 빌더의 강자와 한계
description: 코드 없이 디자인하는 Elementor의 기본·고급 활용. 언제 쓰고 언제 피해야 하는지 솔직한 가이드.
category: WordPress 운영 / 플러그인
status: draft
---


> Elementor는 **드래그 앤 드롭 페이지 빌더**의 대표주자. 디자이너·비개발자도 자유롭게 페이지를 만들 수 있어요. 다만 강력한 만큼 무거워서 사이트 속도에 영향. 언제 쓰고 언제 피해야 하는지·기본·고급 활용법.

## Elementor가 적합한 경우

- 디자인 빠르게 시도해야 할 때
- 코딩 거의 안 하는 1인 운영
- 비표준 레이아웃 (랜딩 페이지·이벤트)
- 시각적 컨텐츠 비중 ↑ (포트폴리오·갤러리)

## Elementor가 부적합한 경우

- 사이트 속도가 가장 중요한 곳 (뉴스·블로그)
- 코드 자유도 원할 때 (자식 테마 + Gutenberg가 더 강력)
- 멀티 사이트 (라이선스 관리 ↑)
- 콘텐츠 양이 매우 많을 때 (수천 페이지)

## 무료 vs Pro

| | 무료 (Free) | Pro ($59/년~) |
|---|---|---|
| 위젯 수 | 40+ | 90+ |
| 템플릿 키트 | 일부 | 100+ |
| 테마 빌더 | ❌ | ✅ |
| 폼 빌더 | ❌ | ✅ |
| 팝업 빌더 | ❌ | ✅ |
| 동적 콘텐츠 | ❌ | ✅ |

**무료**: 단일 페이지 디자인 시작.
**Pro**: 헤더·푸터·아카이브까지 전체 사이트 디자인.

## 설치 + 첫 페이지

### 1. 설치

플러그인 > 새로 추가 > "Elementor" → 설치 → 활성화.

### 2. 페이지 만들기

- 새 페이지 만들기 → 제목 입력
- **Edit with Elementor** 클릭 → Elementor 에디터 진입

### 3. 구조 만들기

**섹션(Section)** → **컬럼(Column)** → **위젯(Widget)** 3단 구조.

- 좌측 패널에서 위젯 드래그 → 오른쪽 캔버스에 배치
- 섹션·컬럼은 우클릭 → 옵션

### 4. 위젯 옵션

각 위젯 클릭 시 좌측에 3개 탭:
- **Content**: 텍스트·이미지·링크
- **Style**: 색·폰트·여백
- **Advanced**: 모션·반응형·커스텀 CSS

## 자주 쓰는 위젯 10개

### 무료 버전

1. **Heading** — 제목
2. **Text Editor** — 본문
3. **Image** — 단일 이미지
4. **Image Box** — 이미지 + 제목 + 설명
5. **Button** — 클릭 버튼
6. **Icon Box** — 아이콘 + 텍스트
7. **Spacer** — 빈 공간
8. **Divider** — 구분선
9. **Video** — YouTube 임베드
10. **Google Maps** — 지도

### Pro 추가

- Form, Posts (글 목록), Slides, Pricing Table, Countdown, Testimonial, Animated Headline 등

## 템플릿 활용

기본 디자인 빠르게:

1. 페이지 빈 영역 → **Add Template** 아이콘 (폴더 모양)
2. Templates·Pages·Blocks 탭
3. 카테고리 선택 → 마음에 드는 디자인 → **Insert**
4. 텍스트·이미지만 교체

수많은 무료·Pro 템플릿. 빠르게 비주얼 사이트 완성.

## 반응형 디자인

모든 위젯이 데스크탑·태블릿·모바일별 옵션:

- 위젯 옵션 > 반응형 아이콘 (모바일·태블릿·데스크탑)
- 디바이스별 폰트 크기·여백·표시·숨김

테스트:
- 상단의 모바일·태블릿·데스크탑 아이콘 → 미리보기

## 글로벌 스타일

사이트 전체 색·폰트 통일:

1. 우상단 햄버거 메뉴 > **Site Settings**
2. **Global Colors**: Primary·Secondary 등 색 토큰
3. **Global Fonts**: 본문·제목 폰트 통일

이후 위젯에서 "Global" 선택 시 자동 적용. 한 번에 사이트 전체 디자인 변경.

## 자주 보이는 문제

### Elementor가 무거워 사이트가 느려요

해결:
- 사용 안 한 위젯·기능 비활성화 (설정 > Features)
- 캐시 플러그인 + CDN
- 이미지 최적화 (ShortPixel)
- 무거운 위젯(Posts·Slides 등) 사용 절제

### 모바일 디자인이 깨져요

원인: 데스크탑만 보고 작업.

해결: 작업 중 자주 모바일 미리보기. 디바이스별 옵션 적극 활용.

### Pro 라이선스 만료 후 디자인 망가지지 않나?

망가지지 않음. 단 새 업데이트·지원 X. **보안 위험** 누적될 수 있어 갱신 권장.

## Elementor vs 다른 빌더

| | Elementor | Gutenberg + 블록 테마 | Divi | Beaver Builder |
|---|---|---|---|---|
| 학습 곡선 | 낮음 | 중간 | 중간 | 중간 |
| 자유도 | 높음 | 중간~높음 | 매우 높음 | 중간 |
| 속도 | 무거움 | 가벼움 | 무거움 | 중간 |
| 가격 | $59/년~ | 무료 | $89/년~ | $99/년~ |
| 테마 종속 | 적음 | 적음 | 높음 | 적음 |

**가장 빠른 사이트**: Gutenberg + 가벼운 블록 테마.
**디자인 최강**: Elementor Pro 또는 Divi.
**중간**: Beaver Builder.

## Pro 핵심 기능 — Theme Builder

Elementor Pro만 가능. 헤더·푸터·404 등 전체 사이트 부품을 Elementor로:

1. Templates > Theme Builder
2. Header / Footer / Single Post / Archive 등 선택
3. 시각적으로 편집

→ 테마 종속성 거의 ↓, 모든 곳을 자유롭게.

## Pro 핵심 기능 — Form

Pro의 Form 위젯:
- 드래그 앤 드롭 필드
- 이메일 발송·자동 답신
- Mailchimp·ActiveCampaign 등 연동
- 조건부 로직 (Pro)

다만 별도 폼 플러그인 (WPForms 등) 권장 — 폼 전용이라 더 강력.

## 사이트 속도 점검

Elementor 사용 사이트의 흔한 속도 점수:
- PageSpeed Insights 모바일: 30~50점 (낮음)
- Core Web Vitals 통과: 어려움

해결:
- 무거운 위젯 자제
- 사이트 캐시 + CDN
- 이미지 최적화
- 사용 안 하는 Elementor 기능 비활성화 (설정 > Features)

## 백업 — Elementor 별도

Elementor 페이지 데이터는 DB에 저장. UpdraftPlus가 자동 백업.

추가로 페이지별 내보내기:
- 페이지 편집 > 햄버거 메뉴 > Export Template
- JSON 파일로 다른 사이트에 복원 가능

## ⚠️ 자주 하는 실수

- **Elementor 전체 사이트 = 무거움**: 메인·랜딩만 Elementor, 블로그·일반 페이지는 Gutenberg
- **데스크탑만 디자인**: 모바일 깨짐
- **글로벌 스타일 안 씀**: 페이지마다 다른 디자인
- **Pro 라이선스 종료 방치**: 보안 취약·기능 멈춤
- **테마 종속성**: 다른 테마 전환 시 다 깨짐 (가벼운 테마 + Elementor 권장)

## ❓ FAQ

**Q. Elementor vs Gutenberg, 새로 시작하면?**
A. **단순한 사이트**: Gutenberg + 블록 테마 (Kadence·Astra). 빠름·간단. **디자인 빠르게 만들고 싶음**: Elementor.

**Q. Elementor 사용한 페이지를 나중에 Gutenberg로 옮길 수 있나?**
A. 자동 변환 X. 수동으로 다시 작성해야. 그래서 처음에 신중히 선택.

**Q. 무료로 어디까지 가능?**
A. 단일 페이지 디자인은 무료 충분. 헤더·푸터·아카이브·폼은 Pro 필수.

**Q. Elementor 사이트 속도가 너무 느려요.**
A. 위 "속도 점검" 섹션 참고. 캐시 + 이미지 최적화 + CDN. 그래도 안 되면 다른 빌더·테마 검토.

**Q. Elementor 사이트는 SEO에 안 좋다는데?**
A. Elementor 자체는 SEO 친화. 다만 무거워 속도가 SEO 영향. 잘 관리하면 SEO 문제 없음.

---

## 관련 가이드

- [Gutenberg 에디터](/guides/wp-gutenberg-editor/)
- [테마 설치·전환](/guides/wp-theme-install/)
- [캐시·속도 최적화](/guides/wp-cache-speed/)
- [속도 최적화 7단계](/guides/wp-speed-optimization/)
