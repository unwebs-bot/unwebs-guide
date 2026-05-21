---
title: WordPress 필수 플러그인 10선 — 비즈니스 사이트 기본 세트
description: 새 WordPress 사이트에 가장 먼저 설치할 플러그인 10개. 백업·보안·SEO·캐시·폼·통계 카테고리별 추천.
category: WordPress 운영 / 플러그인
status: draft
---


> WordPress 플러그인 60,000개 중 **첫 주에 꼭 설치해야 할 10개**를 정리했습니다. 백업·보안·SEO·캐시·폼 등 카테고리별로 검증된 옵션. 너무 많이 설치하면 사이트가 무거워지니 이 10개로 시작하고 필요할 때만 추가.

## 설치 원칙 — 5가지

1. **5~15개 이내** 유지 (30개 넘으면 충돌·속도 ↓)
2. 공식 저장소·신뢰 출처에서만
3. 한 카테고리당 1개 (보안 플러그인 2개 동시 ❌)
4. 정기 업데이트 받는 것
5. 활발한 지원 (포럼·문의 응답)

## 1. 백업 — UpdraftPlus

**카테고리**: 백업·복원
**무료/유료**: 무료 + Premium
**왜 필수**: 모든 사고의 마지막 방어선

**자동 설정**:
- 매일 또는 주 1회 자동 백업
- Google Drive·Dropbox 등 원격 저장
- 1-Click 복구

[백업 시작하기](/guides/wp-backup-basics/) 상세 가이드.

대안: BackWPup·BackupBuddy

## 2. 보안 — Wordfence Security

**카테고리**: 종합 보안
**무료/유료**: 무료 + Premium
**왜 필수**: 해킹 시도 방어

**기능**:
- 방화벽
- 악성코드 스캔
- 로그인 보안 + 2FA
- 알림

대안: Sucuri Security·iThemes Security

> ⚠️ 보안 플러그인은 **하나만** 활성화. 동시 활성화 시 충돌.

## 3. SEO — Rank Math

**카테고리**: SEO
**무료/유료**: 무료 + Pro
**왜 필수**: 검색 노출

**기능**:
- 메타 title·description 자동·수동
- 사이트맵 자동 생성
- Schema.org 자동
- 콘텐츠 분석 점수

[Rank Math SEO 설정](/guides/wp-rankmath-seo/) 상세.

대안: Yoast SEO·All in One SEO

## 4. 캐시 — WP Rocket (유료) / W3 Total Cache (무료)

**카테고리**: 속도 최적화
**무료/유료**: WP Rocket($49/년) / W3TC 무료
**왜 필수**: 로딩 속도 = SEO + UX

**기능**:
- 페이지 캐싱
- CSS·JS 압축
- 이미지 지연 로딩
- CDN 통합

[캐시·속도 최적화](/guides/wp-cache-speed/) 상세.

> 💡 WP Rocket이 설정 간단·효과 좋아 추천. 무료 원하면 W3TC.

## 5. 폼 — Contact Form 7 또는 WPForms

**카테고리**: 문의 폼
**무료/유료**: CF7 무료 / WPForms Lite 무료

### Contact Form 7

- 가벼움, 가장 많이 쓰임
- 마크업 직접 수정 필요
- 학습 곡선 ↑

### WPForms (추천)

- 드래그 앤 드롭
- 입문자 친화
- 무료 버전으로 기본 폼 충분

[폼 플러그인 비교](/guides/wp-contact-forms/) 상세.

## 6. 이미지 최적화 — ShortPixel

**카테고리**: 이미지 압축
**무료/유료**: 월 100장 무료, 그 이상 $4/월
**왜 필수**: 이미지 = 페이지 무게의 70%

**기능**:
- 자동 압축 (lossy/lossless 선택)
- WebP·AVIF 자동 변환
- 일괄 처리 (기존 이미지)

대안: Smush·Imagify·EWWW Image Optimizer

## 7. 분석 — Site Kit by Google

**카테고리**: 통계
**무료/유료**: 완전 무료
**왜 필수**: 트래픽·검색 데이터

**기능**:
- Google Analytics 4 연동
- Search Console 데이터
- PageSpeed Insights
- AdSense (사용 시)

WordPress 대시보드에서 한눈에 확인.

## 8. 스팸 차단 — Akismet Anti-spam

**카테고리**: 댓글 스팸
**무료/유료**: 개인 무료, 상업 ~$11/월
**왜 필수**: 댓글 운영 시 자동 봇 차단

WordPress 함께 설치되어 있지만 활성·API 키 입력 필요.

대안: Antispam Bee (완전 무료·익명)

[댓글 관리](/guides/wp-comments-management/) 상세.

## 9. 리다이렉트 — Redirection

**카테고리**: URL 관리
**무료/유료**: 완전 무료
**왜 필수**: URL 변경·페이지 삭제 시 301 리다이렉트

**기능**:
- 옛 URL → 새 URL 매핑
- 404 오류 추적·자동 수정
- 일괄 가져오기 (CSV)

## 10. 코드 스니펫 — Code Snippets

**카테고리**: 커스텀 코드
**무료/유료**: 무료
**왜 필수**: `functions.php` 직접 수정 위험 회피

**기능**:
- PHP 코드 조각 안전하게 추가
- 오류 시 자동 비활성화
- 자식 테마 없이 기능 확장

자식 테마 만들기 부담스러울 때 대안.

## 사이트 유형별 추가 플러그인

### 비즈니스 사이트

- 위 10개 + **Pretty Links** (URL 단축)

### 블로그·매거진

- 위 10개 + **Yoast Duplicate Post** (글 복제)
- **WP-PostViews** (조회수)

### 쇼핑몰

- 위 10개 + **WooCommerce**
- **YITH Plugins** (다양한 WooCommerce 확장)
- **Stripe·Toss** 결제 연동

### 멤버십 사이트

- 위 10개 + **Paid Memberships Pro** 또는 **MemberPress**

### 학습 플랫폼

- 위 10개 + **LearnDash** 또는 **Tutor LMS**

## 설치 절차

### 공식 저장소

1. 플러그인 > 새로 추가
2. 검색 → 설치 → 활성화

### ZIP 업로드 (유료 플러그인)

1. 플러그인 > 새로 추가 > 플러그인 업로드
2. ZIP 선택 → 설치 → 활성화
3. 라이선스 키 입력 (해당 시)

## 플러그인 점검 — 분기 1회

- [ ] 모두 최신 버전
- [ ] 안 쓰는 플러그인 삭제 (비활성만으론 부족)
- [ ] 새 충돌 발생 여부 (사이트 점검)
- [ ] 보안 점검 (Wordfence 스캔)
- [ ] 호스팅 사용량 점검 (메모리·DB·디스크)

## 안 쓰는 플러그인은 삭제

비활성화만으론 부족:

- 비활성 플러그인도 DB·디스크 차지
- 보안 취약점 가능
- WordPress 코어 업데이트와 충돌

**원칙**: 활성화하지 않을 거면 **삭제**.

## ⚠️ 자주 하는 실수

- **같은 카테고리 플러그인 2개+**: 충돌·중복
- **검증 안 된 플러그인 설치**: 악성코드 위험
- **마구잡이 설치**: 사이트 무거워짐
- **업데이트 안 함**: 보안 취약점 방치
- **모든 플러그인을 처음부터**: 필요할 때 추가가 정답

## ❓ FAQ

**Q. 무료 플러그인으로 충분한가요?**
A. 입문·중소 사이트는 무료로 90% 커버. 비즈니스 핵심 기능(SEO·캐시 등) 1~2개만 유료 검토.

**Q. 플러그인이 충돌하면?**
A. [플러그인 충돌 디버깅](/guides/wp-plugin-conflicts/) 참고. 모두 비활성화 후 1개씩 활성화.

**Q. 플러그인 너무 많으면 사이트 느려져요.**
A. 플러그인 수보다 **무거운 플러그인이 얼마나 있나**가 중요. 가벼운 플러그인 20개 < 무거운 1개 (Elementor·페이지 빌더 등).

**Q. 플러그인 자동 업데이트 켜도 되나요?**
A. 신뢰 플러그인만. 핵심 (백업·보안)은 자동, 페이지 빌더 등은 수동 권장 (큰 변경 가능).

**Q. WordPress 코어 업데이트 시 플러그인이 깨질 수 있나요?**
A. 가끔. 메이저 업데이트 (5.x → 6.x) 시 검증 안 된 플러그인은 깨짐. **업데이트 전 백업** 필수.

---

## 관련 가이드

- [Rank Math SEO 설정](/guides/wp-rankmath-seo/)
- [캐시·속도 최적화](/guides/wp-cache-speed/)
- [폼 플러그인 비교](/guides/wp-contact-forms/)
- [Elementor 다루기](/guides/wp-elementor/)
- [플러그인 충돌 디버깅](/guides/wp-plugin-conflicts/)
