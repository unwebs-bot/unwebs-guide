---
title: WordPress 도메인 이전 — URL 변경·301 리다이렉트·SEO 보존
description: WordPress 사이트의 도메인을 안전하게 이전하는 절차. DB URL 교체부터 301 리다이렉트·Search Console 신고까지.
category: WordPress 운영 / 운영·문제해결
status: draft
---


> 도메인 이전은 운영 사이트의 가장 큰 변화 중 하나. 잘못하면 검색 트래픽이 50%+ 손실. 다행히 **순서를 정확히** 지키면 거의 손실 없이 이전 가능. 5단계 안전 절차.

## 이전이 필요한 경우

- 회사 이름 변경
- 더 좋은 도메인 인수
- 영문 도메인 → 한글 도메인 (또는 반대)
- 도메인 호스팅사 변경 (이건 SSL 등 일부만)

> ⚠️ 가능하면 **이전 안 하는 게 정답**. 가능한 모든 다른 옵션 검토 후 결정.

## 이전 전 — 체크리스트

- [ ] 새 도메인 등록·이전 완료
- [ ] DNS 작업 가능 (호스팅사 또는 도메인 등록처)
- [ ] 사이트 전체 백업
- [ ] Google Search Console 접근 가능 (옛 + 새 도메인 둘 다)
- [ ] 이전 작업 시간 확보 (2~4시간 + 며칠 점검)
- [ ] 가능하면 **트래픽 낮은 시간대**

## 5단계 이전 절차

### 1단계 — 새 도메인을 호스팅에 추가

호스팅 cPanel에서:
- **Addon Domain** 또는 **Add Domain**
- 새 도메인 입력
- 같은 호스팅 계정에 추가

DNS 작업:
- 도메인 등록처에서 새 도메인의 A 레코드를 호스팅 IP로
- 또는 네임서버를 호스팅 네임서버로

전파까지 5분~24시간.

### 2단계 — WordPress 주소 변경

#### 옵션 A: 사이트 그대로 이전 (간단)

**설정 > 일반**:
- WordPress 주소: `https://newdomain.com`
- 사이트 주소: `https://newdomain.com`

저장. 새 주소로 로그인.

#### 옵션 B: DB 직접 변경 (관리자 접속 불가 시)

`wp-config.php`에:
```php
define('WP_HOME','https://newdomain.com');
define('WP_SITEURL','https://newdomain.com');
```

또는 phpMyAdmin > wp_options 테이블 > `siteurl`·`home` 값 직접 변경.

### 3단계 — DB의 옛 URL 모두 교체

본문·이미지·링크에 옛 도메인이 박혀 있음. 일괄 교체:

#### 플러그인 Better Search Replace

1. 도구 > Better Search Replace
2. **Search for**: `olddomain.com`
3. **Replace with**: `newdomain.com`
4. 모든 테이블 선택
5. **Dry Run** (미리보기) → 안전하면 실제 실행

#### WP-CLI (SSH 가능 시)

```bash
wp search-replace 'olddomain.com' 'newdomain.com' --all-tables
```

> ⚠️ 백업 없이 실행 X.

### 4단계 — 옛 도메인에서 새 도메인으로 301 리다이렉트

옛 도메인이 여전히 작동하면 모든 요청을 새 도메인으로:

옛 도메인의 `.htaccess`에:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_HOST} ^olddomain\.com$ [OR]
RewriteCond %{HTTP_HOST} ^www\.olddomain\.com$
RewriteRule ^(.*)$ https://newdomain.com/$1 [R=301,L]
</IfModule>
```

옛 도메인을 보유한 채 유지 (1~2년 권장):
- 검색 권한 새 도메인으로 점진 이전
- 외부 백링크 손실 ↓
- 사용자 책갈피·SNS 공유 보존

### 5단계 — Search Console 등 외부 등록

#### Google Search Console

1. 새 도메인을 Search Console에 추가·소유 확인
2. **설정 > 주소 변경** → 옛 도메인에서 새 도메인으로 이전 알림
3. 새 도메인에 사이트맵 제출
4. 색인 가속 — 주요 페이지 수동 색인 요청

#### 네이버 서치어드바이저

옛 사이트 삭제 + 새 사이트 등록. 사이트맵 제출.

#### 다른 도구

- Google Analytics 4: 속성 수정·도메인 변경
- Google Ads: 광고 URL 일괄 변경
- 메타 픽셀: 도메인 인증 추가
- 카카오 비즈니스: 도메인 변경 신고

## 검색 트래픽 회복 기간

| 시점 | 상태 |
|---|---|
| 1주 | 새 도메인 색인 시작 |
| 2~4주 | 일부 키워드 새 도메인 순위 회복 |
| 1~3개월 | 대부분 회복 |
| 6개월~1년 | 완전 안정화 |

**핵심**: 301 리다이렉트 유지 + 콘텐츠 동일성. 변경 동시에 콘텐츠 대수술도 하면 추가 손실.

## 도메인 이전 + 호스팅 이전 동시

호스팅도 같이 변경한다면:

1. 새 호스팅에 WordPress 설치
2. UpdraftPlus 백업 → 새 호스팅에 복원
3. 새 호스팅에 새 도메인 연결
4. 위 5단계 진행

자세한 호스팅 이전은 별도 가이드.

## 옛 도메인 영구 폐쇄?

**권장 X**. 옛 도메인 1년+ 유지:
- 301 리다이렉트 작동
- 외부 백링크 효력
- 사용자 책갈피

폐쇄 시 위 모두 손실.

## 이전 후 점검 (분기 1회)

- 301 리다이렉트 정상 작동
- Search Console 색인 상태
- 트래픽 추이 (옛 vs 새 도메인)
- 백링크 추이 (Search Console > 링크)
- 외부 사이트의 옛 도메인 링크 (가능하면 새 도메인으로 부탁)

## 자주 받는 질문

### Q. 도메인만 바뀌고 콘텐츠 그대로면 안전한가요?

상대적으로 안전. 콘텐츠까지 동시에 바꾸면 추가 손실.

### Q. 옛 도메인의 SEO 권한이 얼마나 이전되나요?

301 리다이렉트로 90%+ 이전됨. 다만 시간 (1~6개월) 필요.

### Q. 한글 도메인은 어떻게?

Punycode 인코딩으로 처리. 일부 SNS·검색에서 깨질 수 있음. 가능하면 영문 도메인.

### Q. WWW vs Non-WWW 통일 필요?

네. 한 가지로 통일하고 다른 형식은 301로 리다이렉트.

```
www.newdomain.com  →  newdomain.com  (301)
```

또는 반대.

### Q. 이전 후 일부 페이지가 404가 떠요.

URL 구조도 변경됐다면 페이지별 301도 필요. **Redirection** 플러그인으로 일괄 매핑.

## ⚠️ 자주 하는 실수

- **백업 없이 이전 시작**: 사고 시 복구 불가
- **DB의 옛 URL 안 바꿈**: 이미지·링크 깨짐
- **301 리다이렉트 안 함**: 트래픽 영구 손실
- **Search Console 미신고**: 색인 늦어짐
- **옛 도메인 즉시 폐쇄**: 백링크·트래픽 손실

## ❓ FAQ

**Q. 이전 비용은 얼마인가요?**
A. 도메인 등록 ₩1~3만원/년 + 옛 도메인 갱신 비용. 작업 비용 별도 (외주 시).

**Q. 이전 후 옛 도메인을 누군가 사면?**
A. 도메인 만료 후 일정 기간 (보통 30일) 만에 재판매. 그 안에 갱신 필수.

**Q. 도메인 변경 없이 호스팅만?**
A. 위 1·2·5단계 생략. DNS 변경만으로 가능.

**Q. 새 도메인에 SSL 자동 발급?**
A. 대부분 호스팅 자동. 안 되면 호스팅 cPanel에서 수동 발급.

**Q. 이전 후 GA·픽셀 데이터가 끊겨요.**
A. GA·픽셀 코드 새 도메인에도 동일하게 작동. 다만 추적 ID는 그대로 유지. **속성 설정에서 도메인 정보만 업데이트**.

---

## 관련 가이드

- [백업 시작하기](/guides/wp-backup-basics/)
- [SSL 적용](/guides/wp-ssl-setup/)
- [퍼머링크 구조](/guides/wp-permalink-structure/)
- [기술 SEO 체크리스트](/guides/seo-technical/)
