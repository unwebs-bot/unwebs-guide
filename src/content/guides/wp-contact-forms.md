---
title: WordPress 폼 플러그인 비교 — Contact Form 7 vs WPForms vs Forminator
description: 가장 많이 쓰이는 3대 폼 플러그인 비교. 입문자·중급·전문가별 추천과 자동 메일·스팸 차단 설정.
category: WordPress 운영 / 플러그인
status: draft
---


> 사이트의 문의 폼·신청서·설문은 WordPress 폼 플러그인으로 만듭니다. 3대 무료 옵션 — Contact Form 7·WPForms·Forminator를 비교하고, 자동 메일·스팸 차단까지 정리.

## 3대 폼 플러그인 한눈 비교

| | Contact Form 7 | WPForms Lite | Forminator |
|---|---|---|---|
| 시장 점유 | 1위 (5M+) | 빠른 성장 (6M+) | 중간 |
| 인터페이스 | 마크업 직접 | 드래그 앤 드롭 | 드래그 앤 드롭 |
| 학습 곡선 | 높음 | 낮음 | 낮음 |
| 무료 한계 | 거의 없음 | Pro 유도 강함 | 무료 풍부 |
| 디자인 자유도 | 낮음 (CSS 직접) | 중간 | 높음 |
| 스팸 차단 | reCAPTCHA·플러그인 | 내장 + reCAPTCHA | 내장 + 풍부 |
| 자동 응답 메일 | 가능 | 가능 (Lite도) | 가능 |
| 멀티 스텝 | ❌ | Pro | 무료 |
| 결제·기부 폼 | ❌ | Pro | 무료 |
| 설문조사 | ❌ | Pro | 무료 |

## 1. Contact Form 7 — 가벼움·표준

오랫동안 WordPress 폼의 표준. 6M+ 활성 설치.

### 장점

- 매우 가벼움
- 거의 모든 테마와 호환
- 무료 완전
- 확장 플러그인 풍부

### 단점

- 마크업 직접 작성 필요 (HTML·shortcode 이해)
- 디자인은 CSS로 직접
- 스팸 차단은 별도 플러그인 (reCAPTCHA·Akismet)

### 폼 작성 예시

`Contact > 폼 추가`에 다음 마크업 직접:

```
<label>이름
[text* your-name] </label>

<label>이메일
[email* your-email] </label>

<label>내용
[textarea your-message] </label>

[submit "보내기"]
```

페이지에 `[contact-form-7 id="123"]` 단축코드 삽입.

### 자동 메일 설정

폼 편집 > **메일** 탭:
- 받는 사람: 본인 메일
- 보낸 사람: WordPress 발신
- 제목·본문 자유 설정
- `[your-name]` 같은 변수 사용

## 2. WPForms — 가장 친화적

드래그 앤 드롭. 입문자 1순위.

### 장점

- 시각적 폼 빌더
- 풍부한 템플릿 (Contact·Newsletter·Survey 등)
- Lite도 충분히 강력
- 스팸 차단 내장

### 단점

- Pro 유도 메시지 많음
- Lite는 일부 기능 잠금

### 기본 폼 만들기

1. WPForms > 새로 추가
2. 템플릿 선택 (예: Simple Contact Form)
3. 드래그 앤 드롭으로 필드 조정
4. 우측 패널에서 설정 (이메일·확인 메시지)
5. 페이지에 블록 또는 단축코드 삽입

### 자동 응답 메일

Settings > Notifications:
- 관리자 알림
- 작성자 자동 응답
- 조건부 발송

## 3. Forminator — 무료에서 풍부

WPMU DEV 제작. 무료로 가장 많은 기능.

### 장점

- 무료에서 멀티 스텝·설문·결제·퀴즈
- 디자인 자유도 ↑
- 폼·설문·퀴즈·여론 통합

### 단점

- 기능 많아 처음엔 복잡
- 인터페이스가 다른 플러그인과 다름

### 추천 사용처

- 설문조사·여론조사
- 멀티 스텝 신청서
- Stripe·PayPal 기부·결제 폼

## 어떤 플러그인 골라야?

```
사이트가 단순 문의 폼만 필요?
├─ Yes → CF7 (가벼움) 또는 WPForms (편함)
└─ No
   │
   설문·결제·복잡한 폼 필요?
   ├─ Yes → Forminator (무료) 또는 WPForms Pro
   └─ No → WPForms Lite
```

## 폼 디자인 — CSS 보정

대부분 플러그인이 기본 디자인 제공. 자식 테마에서 보정:

```css
/* 폼 전체 */
.wpcf7-form,
.wpforms-form,
.forminator-form {
  max-width: 600px;
  margin: 0 auto;
}

/* 입력 필드 */
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  font-family: inherit;
}

/* 제출 버튼 */
input[type="submit"],
.wpforms-submit {
  background: #2563eb;
  color: white;
  padding: 12px 24px;
  border: 0;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
```

## 스팸 차단 — 필수

폼은 봇 공격 1순위. 차단 안 하면 일 100건+ 스팸.

### 방법 1: reCAPTCHA (Google)

Invisible reCAPTCHA v3 (사용자 마찰 ↓):

1. [google.com/recaptcha](https://www.google.com/recaptcha) → 사이트 등록 → Site Key·Secret Key 발급
2. 폼 플러그인 설정에서 키 입력
3. 자동으로 작동

### 방법 2: Honeypot

봇만 입력하는 숨겨진 필드:

- CF7: `[honeypot]` shortcode (확장 플러그인)
- WPForms: 기본 내장
- Forminator: 기본 내장

조용한 차단 (사용자 못 봄).

### 방법 3: 키워드·IP 차단

스팸 자주 사용 키워드 (`viagra`·`casino` 등) 차단.

플러그인 또는 Wordfence 같은 보안 플러그인의 차단 리스트 활용.

## 자동 메일 발송 — 도달 안 될 때

WordPress 기본 메일 발송은 호스팅에 의존 → 스팸 분류 자주.

해결: **SMTP 플러그인**:
- **WP Mail SMTP** (가장 인기) — Gmail·SendGrid·Mailgun 등 연동
- **Easy WP SMTP**

설정 후:
- 발신자 이메일 = 본인 도메인 (info@mycompany.com)
- 외부 SMTP 서버 통해 전송
- 도달률 ↑

## 폼 데이터 저장

폼 제출 데이터는 기본적으로 **메일로만** 발송 (WordPress DB에 저장 X).

DB에 저장하려면:
- WPForms Pro: 자동 저장
- CF7 + Flamingo 플러그인 (무료)
- Forminator: 무료에 내장

→ 관리자 페이지에서 모든 제출 내역 확인. CSV 내보내기.

## 개인정보 동의 — 법적 필수

폼에서 이름·연락처·이메일 받으면 **개인정보 처리방침** + **동의 체크박스** 필수.

체크박스 추가:
```
[checkbox* consent "개인정보 수집·이용에 동의합니다 (필수)"]
```

설정 > 개인정보에서 개인정보 처리방침 페이지 지정.

[입력폼 운영 (아임웹 가이드)](/guides/imweb-form-management/) 참고 — 개인정보 동의 부분.

## ⚠️ 자주 하는 실수

- **스팸 차단 안 함**: 일 100건+ 스팸
- **자동 메일 발송 도달 안 됨**: SMTP 플러그인 필수
- **개인정보 동의 누락**: 법적 문제
- **여러 폼 플러그인 동시**: 충돌·중복
- **모바일에서 폼 너무 큼**: 반응형 CSS 필요

## ❓ FAQ

**Q. CF7으로 시작했는데 WPForms로 옮기고 싶어요.**
A. 폼은 수동 재작성. 데이터 마이그레이션은 어려움. 다행히 폼은 5~10개 수준이라 작업량 적음.

**Q. 자동 응답 메일이 안 가요.**
A. 가장 흔한 원인: 호스팅 메일 발송 차단·스팸 분류. WP Mail SMTP 플러그인 + 본인 도메인 SMTP 권장.

**Q. 폼 데이터를 Google Sheets에 자동 저장?**
A. WPForms Pro 또는 Forminator의 Zapier 연동 + Google Sheets.

**Q. 결제 폼 만들 수 있나요?**
A. WPForms Pro·Forminator (Stripe/PayPal). 본격 쇼핑몰은 WooCommerce.

**Q. 폼을 자주 안 받는데 플러그인 활성 유지?**
A. 사용하면 활성 유지. 다만 정기 점검·업데이트 필수. 안 쓰면 비활성·삭제.

---

## 관련 가이드

- [필수 플러그인 10선](/guides/wp-plugin-essentials/)
- [캐시·속도 최적화](/guides/wp-cache-speed/)
- [보안 기초 7가지](/guides/wp-security-essentials/)
