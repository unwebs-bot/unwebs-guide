---
title: WordPress 흰화면·관리자 접속 불가 대응 — 가장 흔한 사고 6가지
description: 화면이 갑자기 흰색이 되거나 wp-admin이 안 열릴 때 진단·복구 절차. PHP 오류 로그 활용.
category: WordPress 운영 / 운영·문제해결
status: draft
---


> WordPress 운영 중 가장 무서운 순간 — 사이트가 흰 화면이거나 관리자 접속이 안 됨. 다행히 **순차 진단**으로 30분 안에 대부분 해결됩니다. 6가지 흔한 원인·복구 절차.

## 흔한 6가지 원인

1. PHP 메모리 부족
2. 플러그인 충돌
3. 테마 오류
4. PHP 버전 변경
5. 잘못된 코드 (functions.php·wp-config.php)
6. 호스팅 서버 문제

## 진단 도구 — 디버그 모드

`wp-config.php`에 다음 추가 (파일의 `/* That's all */` 위에):

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

이제 오류가 `wp-content/debug.log`에 기록됨.

해결 후 운영 시엔 `WP_DEBUG`를 `false`로 (방문자에게 오류 노출 보안 위험).

## 사고별 대응

### 사고 1: 흰 화면 (관리자 + 사이트 둘 다)

원인: PHP 메모리 부족 또는 플러그인 PHP 오류.

#### 메모리 늘리기

`wp-config.php`에:

```php
define('WP_MEMORY_LIMIT', '256M');
```

저장 → 새로고침 → 해결되면 메모리 문제였음.

#### 그래도 흰 화면이면 플러그인 비활성

관리자도 안 열리니 FTP·파일 매니저로:

1. `wp-content/plugins/` 폴더 이름을 `plugins-disabled`로 변경
2. WordPress가 모든 플러그인 자동 비활성화
3. 사이트 접속 가능해지면 관리자 접속
4. `plugins`로 이름 복원
5. 1개씩 활성화하며 원인 찾기

### 사고 2: 관리자만 흰 화면 (사이트는 정상)

원인: 관리자 페이지에서만 작동하는 플러그인 충돌.

#### 진단

`wp-config.php`에 디버그 추가 → `debug.log` 확인.

#### 강제 비활성

위와 같이 FTP로 플러그인 폴더 이름 변경.

### 사고 3: "Critical Error" 메시지

WordPress 5.2+에서 메시지가 표시됨:

```
사이트에 심각한 오류가 있습니다.
이메일에서 관리자에게 다른 안내가 있는지 확인하세요.
```

가입 이메일로 자동 메일 발송 → **Recovery Mode 링크** 포함.

이메일 못 받으면:
- 메일 확인 (스팸 폴더)
- 호스팅 메일 발송 차단 가능성
- FTP로 플러그인 비활성 (위)

### 사고 4: "Establishing a database connection" 오류

DB 연결 실패.

#### 원인

- DB 비밀번호 변경 (wp-config.php와 불일치)
- DB 서버 다운 (호스팅 사고)
- DB 손상

#### 대응

1. `wp-config.php`에서 DB_NAME·DB_USER·DB_PASSWORD·DB_HOST 확인
2. 호스팅 cPanel에서 DB 비밀번호 재설정·일치 확인
3. DB 복구: 호스팅 cPanel > phpMyAdmin > DB 선택 > 작업 > "테이블 검사·복구"
4. 해결 안 되면 호스팅 고객센터

### 사고 5: 사이트가 옛 콘텐츠로 표시됨

캐시 문제.

#### 대응

- 브라우저: Ctrl+Shift+R (강제 새로고침)
- 캐시 플러그인: "Purge All Cache"
- 서버: 호스팅 페이지에서 캐시 비우기
- CDN (Cloudflare 등): Purge Everything

### 사고 6: 특정 페이지만 404

URL 구조 문제.

#### 대응

설정 > 고유주소 → 그대로 다시 저장 (재생성).

또는 `.htaccess` 파일 확인:

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
```

`.htaccess`가 없거나 손상되면 위 코드로 새로 생성.

## debug.log 해석

`wp-content/debug.log` 파일 열어보면:

```
[20-May-2026 16:00:00 UTC] PHP Fatal error: Uncaught Error: 
Call to undefined function get_field() in 
/home/user/public_html/wp-content/themes/mytheme/functions.php:42
```

해석:
- **PHP Fatal error**: 치명적 오류
- **Call to undefined function get_field()**: ACF 플러그인의 함수. ACF 비활성된 듯.
- **functions.php:42**: 자식 테마의 42번 줄

해결: ACF 활성화 또는 해당 코드 줄 수정.

## Recovery Mode

WordPress 5.2+ 기능. 치명적 오류 발생 시:

1. 이메일로 Recovery Mode 링크 수신
2. 클릭 → 안전한 관리자 접속
3. 문제 플러그인·테마 비활성화
4. 다시 일반 모드로 복구

## FTP·파일 매니저 — 필수 백업 접근

흰 화면 사고 대비 미리 준비:
- FTP 클라이언트 (FileZilla 무료)
- 호스팅 cPanel·관리 페이지 비밀번호
- DB 접근 (phpMyAdmin)

이 3가지 없으면 사고 시 절망.

## 사고 발생 시 — 3분 안에

1. **백업 위치 확인** (UpdraftPlus·호스팅 백업)
2. **사고 시간·증상 메모** (어디서·언제·뭐가 안 됨)
3. **마지막 작업 기억** (어떤 변경 직후)

이 정보로 호스팅 고객센터·전문가에 의뢰 가능.

## 자주 받는 질문

### Q. 백업이 없으면?

좋은 호스팅사 백업 정책 활용. 카페24·가비아 등은 일별 백업 옵션. 즉시 활성화 + 복구 요청.

### Q. 호스팅사에 도움 요청 어떻게?

이메일·전화에:
- 사이트 URL
- 사고 시간
- 증상 (정확히)
- 가능하면 debug.log 첨부
- 마지막 작업 (플러그인 활성·업데이트 등)

호스팅사가 서버 로그 확인 → 원인 파악.

### Q. 자주 발생하는 게 정상?

아닙니다. 발생 후 원인 분석·재발 방지 필수. 자주 발생 = 호스팅·테마·플러그인 중 만성 문제 있음.

### Q. 운영 사이트에서 진단하면 위험?

가능. **Health Check & Troubleshooting** 플러그인 — 본인만 보이는 트러블슈팅 모드 (방문자는 정상).

### Q. 백업으로 복구 후 같은 사고 재발하면?

원인 미해결. 백업 직전 마지막 작업이 원인일 가능성. 옛 백업으로 더 이전 시점 복구 시도.

## ⚠️ 자주 하는 실수

- **백업 없이 진단 시도**: 더 망가질 수 있음
- **모든 걸 한 번에 시도**: 어디서 해결됐는지 모름
- **호스팅사에 책임 전가**: 자체 진단 안 함
- **디버그 모드 끄지 않음**: 운영 사이트에 오류 노출
- **FTP 정보 못 챙김**: 사고 시 접근 불가

## 예방 — 사고 줄이기

- 정기 백업
- 변경 전 백업
- 스테이징·로컬에서 테스트 후 본 사이트
- WordPress·플러그인·테마 최신
- 호스팅 정기 점검 (월 1회)
- FTP·DB 접근 정보 안전한 곳에 보관

## ❓ FAQ

**Q. 사이트 다 망가졌는데 어디서부터?**
A. 침착. 백업 시점 확인 → 호스팅 cPanel 접근 → 디버그 로그 → 플러그인 폴더 이름 변경 순.

**Q. 일주일 동안 사고가 3번 발생했어요.**
A. 만성 문제. 호스팅 사양·테마·핵심 플러그인 검토. 한 곳에서 원인이 누적된 가능성.

**Q. 같은 흰 화면이 반복돼요.**
A. 캐시 + DB 손상 가능. 호스팅 고객센터에 DB 점검 요청.

**Q. 호스팅사가 비싸도 좋은 곳으로 옮기면 사고 줄어드나요?**
A. 호스팅 영향이 크지만 100% X. 본인 사이트 관리(백업·업데이트)도 같이 챙겨야.

**Q. 사고 후 트래픽 회복은?**
A. 사고 시간이 짧으면 (몇 시간) 거의 영향 X. 며칠+이면 일부 검색 순위 영향. 정상 복구 후 점진 회복.

---

## 관련 가이드

- [백업 시작하기](/guides/wp-backup-basics/)
- [정기 백업 자동화](/guides/wp-automated-backup/)
- [플러그인 충돌 디버깅](/guides/wp-plugin-conflicts/)
- [테마 충돌 해결](/guides/wp-theme-troubleshoot/)
- [WP 업데이트 안전하게](/guides/wp-update-safe/)
