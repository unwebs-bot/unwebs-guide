---
title: WordPress 보안 강화 가이드 — 기본 7가지 이후
description: 입문 보안 7가지 후 추가로 적용할 고급 보안 — wp-config 보호·파일 권한·로그 모니터링·WAF.
category: WordPress 운영 / 운영·문제해결
status: draft
---


> [보안 기초 7가지](/guides/wp-security-essentials/)를 끝낸 사이트의 **다음 단계**입니다. 기본만으로도 95%는 막지만, 비즈니스 사이트·고객 정보 다루는 곳은 더 깊은 보안이 필요해요. 11가지 추가 강화 작업.

## 보안 강화 — 추가 11가지

### 1. wp-admin URL 변경

해킹 봇은 `/wp-admin`을 가장 먼저 시도. URL 변경하면 시도 자체 ↓.

플러그인 **WPS Hide Login**:
- `/wp-admin` → `/secret-login` (임의 단어)
- 5분 설정·즉시 적용

### 2. wp-config.php 보호

루트의 `wp-config.php`는 DB 비밀번호·솔트 키 포함. 최우선 보호 대상.

`.htaccess`에 추가:

```apache
<files wp-config.php>
order allow,deny
deny from all
</files>
```

파일 권한: `600` (소유자만 읽기·쓰기).

### 3. 파일 권한 점검

올바른 권한:
- 폴더: `755`
- 파일: `644`
- `wp-config.php`: `600`

호스팅 파일 매니저에서 권한 확인·수정.

`777` 같은 과한 권한은 보안 취약점. 피해야.

### 4. 디렉토리 인덱싱 차단

`.htaccess`에:

```apache
Options -Indexes
```

폴더에 index 파일 없을 때 파일 목록 노출 차단.

### 5. PHP 실행 차단 (업로드 폴더)

`wp-content/uploads/`는 사용자 업로드 폴더. PHP 실행 차단:

`wp-content/uploads/.htaccess` 만들고:

```apache
<Files *.php>
deny from all
</Files>
```

업로드된 악성 PHP 실행 방지.

### 6. 데이터베이스 prefix 변경

기본 `wp_`를 `wp_x7n_` 같은 임의 문자열로. SQL 인젝션 어렵게.

- 설치 시 변경 (가장 쉬움)
- 운영 중 변경: 백업 후 DB 직접 + wp-config.php 수정

### 7. 로그인 시도 제한

플러그인 **Limit Login Attempts Reloaded**:
- 5회 실패 시 IP 자동 차단
- 차단 시간 자유 설정
- 로그 기록

### 8. 2단계 인증 (모든 관리자)

Wordfence Login Security·Google Authenticator:
- 비밀번호 + 휴대폰 코드
- **모든 관리자 강제 활성화**

### 9. 활동 로그 모니터링

플러그인 **Simple History** 또는 **WP Activity Log**:
- 모든 사용자 활동 기록
- 로그인·로그아웃·콘텐츠 변경
- 의심 활동 알림

### 10. WAF (Web Application Firewall)

방화벽 — 악성 요청 자동 차단.

**옵션**:
- **Wordfence** 무료 방화벽 (서버 레벨)
- **Cloudflare** 무료 (CDN + WAF)
- **Sucuri** 유료 ($200/년+)

Cloudflare가 가장 가성비 좋음.

### 11. 정기 악성코드 스캔

월 1회:
- Wordfence > Scan > Start New Scan
- Sucuri > Scanner

스캔 결과 의심 파일 → 즉시 점검.

## 진짜 위험한 침해 — 추가 점검

기본을 다 했는데도 의심 신호:

### 신호

- 모르는 사용자 계정
- 모르는 글·페이지
- 검색 결과에서 의심스러운 URL
- 호스팅 트래픽 폭증
- 메일 발송 폭증 (스팸 메일)

### 즉시 대응

1. 모든 비밀번호 변경 (관리자·DB·FTP)
2. 모르는 사용자 삭제
3. 모르는 콘텐츠 삭제
4. 풀 악성코드 스캔
5. 발견 파일 격리·삭제
6. 백업으로 복구 검토

## 보안 헤더 추가

`.htaccess`에 보안 HTTP 헤더:

```apache
<IfModule mod_headers.c>
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), microphone=()"
</IfModule>
```

각 헤더의 역할:
- **X-Frame-Options**: 다른 사이트가 우리 사이트 iframe 임베드 방지
- **X-Content-Type-Options**: 파일 타입 자동 인식 방지
- **X-XSS-Protection**: XSS 공격 일부 차단 (옛 브라우저)
- **Referrer-Policy**: 외부 사이트로 referrer 정보 보호
- **Permissions-Policy**: 위치·마이크 등 권한 자동 거부

## SSL/HTTPS 강제

옵션이지만 권장. http://로 접근하면 자동 https://로 리다이렉트:

`.htaccess`에:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

[SSL 적용 가이드](/guides/wp-ssl-setup/) 참고.

## XML-RPC 비활성 (사용 안 하면)

WordPress의 옛 원격 API. 봇 공격 표적.

`.htaccess`에:

```apache
<Files xmlrpc.php>
order deny,allow
deny from all
</Files>
```

또는 플러그인 **Disable XML-RPC**.

> ⚠️ 모바일 앱·Jetpack 사용 시 필요. 사용 안 하면 차단.

## REST API 보호

REST API는 외부에서 사이트 데이터에 접근 가능. 일부 정보 노출 가능:

`/wp-json/wp/v2/users` → 사용자 목록 노출 (관리자 ID 추정 가능)

해결: 보안 플러그인의 REST API 제한 옵션 활성.

## 호스팅 레벨 보안

호스팅 선택 시 보안 옵션 확인:
- **DDoS 방어**
- **악성코드 스캔**
- **백업 옵션**
- **SSH 접근 (2FA)**
- **PHP 버전** (최신 8+)

관리형 WP 호스팅 (Kinsta·WP Engine)이 가장 안전.

## 사고 발생 시 대응 — 정리

1. **즉시 차단**: 호스팅 사이트 일시 닫기
2. **비밀번호 전부 변경**: 관리자·DB·FTP·이메일
3. **악성코드 스캔**: Wordfence·Sucuri 풀 스캔
4. **백업으로 복구**: 사고 이전 시점 백업
5. **원인 분석**: 어떤 취약점 뚫렸나
6. **재발 방지**: 해당 취약점 패치 + 추가 강화
7. **검색엔진 신고 해제**: Search Console > 보안 > 검토 요청
8. **사용자 알림**: 회원 정보 유출 시 법적 통지

## 정기 점검 (월 1회)

- [ ] WordPress·플러그인·테마 최신
- [ ] 보안 플러그인 스캔
- [ ] 사용자 목록 점검
- [ ] 최근 로그인 활동
- [ ] 디스크 용량 점검 (악성코드는 디스크 채움)
- [ ] 백업 정상 작동
- [ ] 호스팅 알림 점검

## ⚠️ 자주 하는 실수

- **보안 플러그인 여러 개 활성**: 충돌·중복
- **2FA 안 켬**: 비밀번호만 뚫리면 끝
- **wp-config.php 노출**: 가장 큰 위험
- **로그 모니터링 안 함**: 침해 후 알 수 없음
- **호스팅 보안 의존**: 자체 강화 필수

## ❓ FAQ

**Q. 너무 많은 보안 플러그인이 사이트를 느리게 하지 않나요?**
A. Wordfence 1개는 무리 없음. 여러 보안 플러그인 동시 = 충돌·중복으로 오히려 느려짐.

**Q. 무료 보안만으로 충분?**
A. 중소 사이트는 무료 충분 (Wordfence + Limit Login Attempts). 대형·금융·의료는 유료 (Sucuri Pro·Patchstack).

**Q. 호스팅 자체 보안만 신뢰하면?**
A. 호스팅 보안은 서버·인프라. 플러그인·테마 취약점은 본인 책임. 양쪽 다 챙겨야.

**Q. 보안 작업 어디까지가 적정선?**
A. 1주차 7가지 + 본 가이드 5~7개 추가. 그 이상은 ROI ↓. 비즈니스 가치에 맞게.

**Q. 해킹당했는데 호스팅사가 도와주나요?**
A. 호스팅마다 다름. 일부는 무료 복구, 일부는 유료. 발생 전 호스팅 정책 확인.

---

## 관련 가이드

- [보안 기초 7가지](/guides/wp-security-essentials/)
- [백업 시작하기](/guides/wp-backup-basics/)
- [정기 백업 자동화](/guides/wp-automated-backup/)
- [SSL 적용](/guides/wp-ssl-setup/)
- [WP 업데이트 안전하게](/guides/wp-update-safe/)
