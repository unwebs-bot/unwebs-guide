---
title: 자식 테마 만들기 — 테마 업데이트 안전하게 커스텀하기
description: 자식 테마(Child Theme) 개념과 만드는 절차. 부모 테마 코드 안 건드리고 디자인·기능 안전 확장.
category: WordPress 운영 / 테마·디자인
status: draft
---


> 부모 테마 파일을 직접 수정하면 **테마 업데이트 시 모든 작업이 사라집니다**. 자식 테마는 부모 테마를 상속받아 **수정한 부분만 별도 저장**하는 방식. 한 번 만들어두면 안전하게 디자인·기능을 확장할 수 있어요.

## 자식 테마가 필요한 이유

### 부모 테마 직접 수정의 문제

```
1. 부모 테마 style.css 수정 → 디자인 변경 OK
2. 한 달 후 부모 테마 업데이트
3. 업데이트 시 style.css 덮어쓰기
4. → 본인 수정 사항 다 사라짐
```

### 자식 테마의 동작

```
부모 테마 (Astra·GeneratePress 등) ─── 정기 업데이트
       ↑ 상속
자식 테마 (내 작업) ─── 별도 저장, 업데이트와 무관
```

부모 테마 업데이트해도 자식 테마는 그대로. 본인 작업 보존.

## 자식 테마 만들기 — 3가지 방법

### 방법 1: 플러그인 (가장 쉬움)

플러그인 **Child Theme Configurator** (무료):

1. 플러그인 설치·활성화
2. **도구 > Child Themes**
3. 부모 테마 선택 → "Analyze" 클릭
4. 자식 테마 이름 입력 → **Create New Child Theme** 클릭
5. 외모 > 테마 → 자식 테마 활성화

30초 완료.

### 방법 2: 수동 (FTP·파일 매니저)

호스팅 파일 매니저로:

1. `wp-content/themes/` 폴더 진입
2. 새 폴더 생성: `astra-child` (부모이름-child 권장)
3. 안에 두 파일 생성:

**`style.css`**:
```css
/*
Theme Name: Astra Child
Template: astra
Description: Astra 자식 테마
Version: 1.0.0
Author: My Name
*/

/* 여기에 커스텀 CSS */
```

`Template:` 값은 **부모 테마 폴더명**과 정확히 일치해야.

**`functions.php`**:
```php
<?php
add_action('wp_enqueue_scripts', function() {
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
});
```

부모 테마 CSS 로드 + 자식 테마 CSS 자동 로드.

4. 외모 > 테마 → 자식 테마 활성화

### 방법 3: GitHub에서 받기

대부분 인기 테마가 공식 자식 테마 starter 제공:
- Astra: [GitHub](https://github.com/brainstormforce/astra-child-theme)
- GeneratePress: [공식 사이트](https://generatepress.com/child-theme/)
- Kadence: Kadence 사이트

다운로드 → ZIP 업로드.

## 자식 테마에서 할 수 있는 것

### 1. CSS 커스텀

`style.css`에 작성:

```css
/* 메인 폰트 변경 */
body {
  font-family: 'Pretendard Variable', sans-serif;
}

/* 헤딩 크기 */
h1 { font-size: 2.5rem; }

/* 버튼 디자인 */
.wp-block-button__link {
  border-radius: 4px;
}
```

### 2. 함수 추가

`functions.php`에 PHP 함수:

```php
// 글 발행 시 자동 메일
add_action('publish_post', 'notify_admin');
function notify_admin($post_id) {
  // 코드
}

// 메뉴 자동 등록
add_action('after_setup_theme', 'register_my_menus');
function register_my_menus() {
  register_nav_menus([
    'footer-menu' => '푸터 메뉴',
  ]);
}
```

### 3. 템플릿 파일 오버라이드

부모 테마의 특정 파일을 자식 테마에서 대체:

부모: `wp-content/themes/astra/header.php`
자식: `wp-content/themes/astra-child/header.php`

자식 테마에 같은 이름 파일이 있으면 WordPress가 자식 우선 사용.

흔한 오버라이드:
- `header.php` — 헤더
- `footer.php` — 푸터
- `single.php` — 단일 글
- `page.php` — 페이지
- `archive.php` — 아카이브

### 4. 새 페이지 템플릿

`wp-content/themes/astra-child/template-fullwidth.php`:

```php
<?php
/*
Template Name: Full Width
*/
get_header();
?>

<div class="full-width-content">
  <?php while (have_posts()): the_post(); the_content(); endwhile; ?>
</div>

<?php get_footer();
```

페이지 편집 시 우측 패널에서 **템플릿: Full Width** 선택 가능.

## 자식 테마 — 자주 쓰는 코드

### 글 작성자 자동 표시

```php
add_filter('the_content', function($content) {
  if (is_single()) {
    $author = get_the_author();
    $date = get_the_date();
    $bio = "<p class='author-bio'>{$author} · {$date}</p>";
    return $bio . $content;
  }
  return $content;
});
```

### 메인 색상 변수 추가

```css
:root {
  --uw-primary: #2563eb;
  --uw-text: #1a1a1a;
}

a { color: var(--uw-primary); }
```

### 외부 폰트 자동 로드

```php
add_action('wp_enqueue_scripts', function() {
  wp_enqueue_style(
    'pretendard',
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css'
  );
});
```

### Schema.org 자동 삽입

```php
add_action('wp_head', function() {
  if (is_singular('post')) {
    ?>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "<?php echo esc_attr(get_the_title()); ?>",
      "datePublished": "<?php echo esc_attr(get_the_date('c')); ?>"
    }
    </script>
    <?php
  }
});
```

## 자식 테마 백업

자식 테마 폴더만 ZIP으로 압축해 저장:

```
wp-content/themes/astra-child/  →  astra-child-backup.zip
```

새 사이트에 적용할 때 ZIP 업로드.

## 부모 테마 업데이트 시

부모 테마는 안전하게 업데이트.

자식 테마는 그대로 → 본인 작업 보존.

다만 부모 테마의 큰 변경(메이저 업데이트)에서:
- 부모의 template 파일 구조가 바뀌면 → 자식의 오버라이드 깨질 수 있음
- 업데이트 후 사이트 점검 필수

## ⚠️ 자주 하는 실수

- **부모 테마 직접 수정**: 업데이트 시 다 사라짐
- **자식 테마에서 `style.css` 없이 시작**: WordPress가 인식 못 함
- **`Template:` 값 오타**: 부모 테마 폴더명과 정확히 일치 필수
- **`functions.php`에서 `<?php` 빠짐**: PHP 오류로 사이트 다운
- **자식 테마 백업 안 함**: 호스팅 사고 시 모든 작업 소실

## ❓ FAQ

**Q. 부모 테마가 자식 테마를 지원하지 않으면?**
A. 모든 WordPress 테마는 기술적으로 자식 테마 가능. 일부 페이지 빌더 테마(Divi 등)는 자식 테마와 충돌 가능.

**Q. 자식 테마로 시작하면 부모 테마 옵션은 그대로?**
A. 그대로. 자식 테마 활성화해도 부모 테마의 설정·옵션·커스터마이저 그대로 작동.

**Q. 자식 테마를 여러 개 만들 수 있나요?**
A. 같은 부모 테마에 여러 자식 테마 가능. 한 번에 하나만 활성화.

**Q. 자식 테마 만들고 활성화하면 디자인이 깨져요.**
A. `functions.php`에서 부모 CSS 로드 코드 누락. 위 예시 코드 참고.

**Q. 자식 테마로 디자인을 통째로 바꿀 수 있나요?**
A. 가능하지만 너무 많이 바꾸면 부모 테마 의미 없음. 그럴 땐 처음부터 다른 부모 테마 검토.

---

## 관련 가이드

- [테마 설치·전환](/guides/wp-theme-install/)
- [테마 커스터마이저](/guides/wp-customizer/)
- [테마 충돌 해결](/guides/wp-theme-troubleshoot/)
