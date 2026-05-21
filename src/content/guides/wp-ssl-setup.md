---
title: WordPress SSL 적용하기 — Let's Encrypt 무료 + http→https 강제
description: 무료 SSL 인증서 발급부터 http 강제 리다이렉트·혼합 콘텐츠 해결까지. 사이트 보안·SEO 양쪽 챙기기.
category: WordPress 운영 / 운영·문제해결
status: draft
---


> SSL(HTTPS)은 2026년 시점 **사실상 필수**입니다. 다행히 **무료 Let's Encrypt**로 대부분 호스팅이 자동 발급. 발급·강제 리다이렉트·혼합 콘텐츠 해결까지 정리.

## SSL이 필수인 이유

- 브라우저가 http://를 "안전하지 않음" 표시
- 결제·로그인·폼 페이지 신뢰도 ↓
- SEO 검색 순위 신호 (구글·네이버 둘 다)
- 일부 API·기능이 https에서만 작동 (위치정보·결제)

## SSL 종류

| 유형 | 가격 | 발급 시간 | 추천 |
|---|---|---|---|
| **Let's Encrypt** | 무료 | 5분 | ✅ 대부분 |
| **Standard SSL** (DV) | $10~$50/년 | 1일 | △ |
| **OV SSL** (Organization) | $80~$300/년 | 며칠 | 기관 |
| **EV SSL** (Extended) | $200~$600/년 | 1~2주 | 금융 |
| **Wildcard SSL** | $50~$200/년 | 1일 | 서브도메인 多 |

> 💡 **Let's Encrypt 무료**가 일반 사이트에 충분. 90일 자동 갱신.

## 발급 방법 — 호스팅별

### 카페24·가비아 등 국내 호스팅

대부분 호스팅 cPanel에:
- **SSL 관리** 또는 **Let's Encrypt** 메뉴
- 도메인 선택 → 신청
- 5~10분 후 발급

### Bluehost·SiteGround 등 글로벌

자동 발급. 호스팅 가입 시 SSL 활성화 옵션 ON.

### Cloudways·Kinsta 등 관리형

자동 + 자동 갱신. 별도 작업 X.

### Local 개발 (Local by Flywheel)

`Site Overview` > **Trust** 버튼 → 로컬 SSL 자동.

## SSL 발급 후 — WordPress 설정

발급 후 사이트가 자동으로 https로 작동하지 않을 수 있음.

### 1. WordPress 주소 변경

설정 > 일반:
- **WordPress 주소(URL)**: `https://mycompany.com`
- **사이트 주소(URL)**: `https://mycompany.com`

저장 후 로그아웃 → 새 주소로 로그인.

### 2. .htaccess에 강제 리다이렉트

http://로 접근 시 자동 https로:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

`.htaccess` 파일 시작 부분에 추가.

### 3. 또는 플러그인

**Really Simple SSL** (가장 인기):
1. 플러그인 설치·활성화
2. **Activate SSL** 클릭
3. 자동으로 모든 작업 완료
4. 작동 점검 후 플러그인 비활성화 (또는 유지)

## 혼합 콘텐츠 (Mixed Content) 해결

SSL 적용 후 흔한 문제: 일부 이미지·스크립트가 여전히 http로 로드.

### 증상

브라우저 주소창에 🔒 대신 ⚠️ 또는 자물쇠 깨진 표시.

개발자 도구 > Console에:
```
Mixed Content: The page at 'https://...' was loaded over HTTPS, 
but requested an insecure image 'http://...'
```

### 자동 해결

플러그인 **Really Simple SSL** 또는 **SSL Insecure Content Fixer**:
- 자동으로 http://를 https://로 교체
- 본문 이미지·스크립트·CSS·iframe 모두

### 수동 해결 (DB 검색·교체)

플러그인 **Better Search Replace**:
1. 도구 > Better Search Replace
2. **Search for**: `http://mycompany.com`
3. **Replace with**: `https://mycompany.com`
4. 모든 테이블 선택
5. **Dry Run** 먼저 (미리보기) → 문제없으면 실제 실행

### 외부 리소스

본문에 다른 사이트의 http:// 이미지·스크립트가 있다면:
- 가능하면 https:// 버전으로 변경
- 또는 자체 호스팅 (이미지 다운로드 후 미디어 라이브러리 업로드)

## SSL 만료·갱신

### Let's Encrypt — 90일 자동

대부분 호스팅이 자동 갱신. 만료 7일 전 알림 메일.

자동 갱신 실패 시:
- 호스팅 cPanel에서 수동 갱신
- 호스팅 고객센터 문의

### 유료 SSL — 1년·2년

만료 30일 전 갱신. 미갱신 시 사이트 "안전하지 않음" 표시.

## SSL 강제 후 점검

- 모든 페이지 https://로 접속되는지
- 자물쇠 아이콘 정상
- 혼합 콘텐츠 경고 없는지
- 결제·로그인·폼 정상 작동
- Google Search Console에 https 버전 등록 (별도 사이트로 추가)
- 사이트맵 https로 재제출

## SSL 등급 점검

[SSL Labs](https://www.ssllabs.com/ssltest/) 무료 분석:
- URL 입력 → 자동 분석 (3분)
- A+ 등급 목표
- 취약한 설정 확인

대부분 Let's Encrypt = A 또는 A+ 등급.

## HSTS — 추가 강화 (선택)

브라우저가 무조건 https로만 접속하도록:

`.htaccess`에:

```apache
<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>
```

> ⚠️ 한 번 적용 후 1년간 https 강제. 신중히 활성화.

## 자주 받는 질문

### Q. SSL 발급 후 사이트가 흰 화면이에요.

- WordPress 주소 변경 안 됨 → 설정 > 일반에서 https로
- 캐시 비우기 (브라우저·플러그인·CDN)
- `.htaccess` 리다이렉트 무한 루프 → 코드 점검

### Q. 결제·로그인이 작동 안 해요.

- 혼합 콘텐츠 → Really Simple SSL 적용
- 결제 게이트웨이 설정에서 SSL URL 업데이트
- 캐시 비우기

### Q. 새 도메인은 SSL 발급이 자동인가요?

- 새 도메인 등록 → 호스팅 연결 → SSL 자동 발급 (대부분)
- 안 되면 호스팅 cPanel에서 수동 발급

### Q. 모든 페이지가 https인데 자물쇠 안 보여요.

- 혼합 콘텐츠 (위 가이드)
- 또는 캐시 → 시크릿창에서 확인

### Q. 서브도메인도 SSL 필요?

- 네. 메인 + 서브 각각. Wildcard SSL이면 한 번에.

## ⚠️ 자주 하는 실수

- **SSL 발급만 하고 강제 리다이렉트 안 함**: http·https 동시 색인 → 권한 분산
- **혼합 콘텐츠 무시**: 자물쇠 안 보임 → 신뢰 ↓
- **백업 없이 SSL 강제**: 문제 발생 시 복구 어려움
- **Search Console에 https 등록 안 함**: 데이터 0
- **유료 SSL 만료 방치**: 어느 날 갑자기 "안전하지 않음"

## ❓ FAQ

**Q. Let's Encrypt 무료가 유료 SSL 대비 약한가요?**
A. 암호화 자체는 동일. 차이는 인증서 발급 기관의 평판·기관 정보 노출 정도. 일반 사이트는 차이 무의미.

**Q. SSL 발급 후 SEO 순위 영향?**
A. 단기적으로 일시 변동. 1~2주 후 안정. 장기적으로는 ↑ (https가 신호).

**Q. SSL 적용 후 속도가 느려진다는데?**
A. 거의 영향 없음. 오히려 HTTP/2 (HTTPS 필수)로 빨라질 수 있음.

**Q. 같은 호스팅에 여러 사이트, 다른 SSL 가능?**
A. 가능. 도메인마다 별도 SSL.

**Q. http URL을 SNS·블로그에 공유했는데 https로 옮긴 후?**
A. 301 자동 리다이렉트로 처리됨. 외부 링크는 그대로 작동.

---

## 관련 가이드

- [보안 강화 가이드](/guides/wp-security-hardening/)
- [도메인 이전](/guides/wp-domain-migration/)
- [기술 SEO 체크리스트](/guides/seo-technical/)
- [흰화면·관리자 접속 불가](/guides/wp-white-screen-debug/)
