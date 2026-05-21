# 배포 가이드 — guide.unwebs.co.kr

## 1. GitHub에 코드 푸시

```bash
cd "/Users/2belljin/Local Sites/unwebs-guide"
git init
git add .
git commit -m "init: 가이드센터 v1"
# GitHub 웹에서 repo 만든 후 remote add
git remote add origin https://github.com/<USER>/unwebs-guide.git
git branch -M main
git push -u origin main
```

## 2. Vercel 프로젝트 생성

1. [vercel.com](https://vercel.com) 로그인 (GitHub 연동)
2. **Add New > Project** → GitHub repo 선택
3. Framework Preset: `Astro` 자동 인식
4. Build/Output 설정은 `vercel.json` 자동 반영
5. **Deploy** 클릭

→ `xxx.vercel.app` 임시 도메인 발급. 작동 확인.

## 3. 서브도메인 연결

### Vercel 측

Project > Settings > Domains > **Add Domain** → `guide.unwebs.co.kr` 입력 → 보여주는 DNS 안내 화면을 캡처해두기.

### DNS 측 (도메인 호스팅사)

| 레코드 타입 | 호스트 | 값 | TTL |
|---|---|---|---|
| CNAME | `guide` | `cname.vercel-dns.com.` | 3600 |

또는 Vercel이 안내하는 다른 값 그대로.

5분~24시간 내 전파. Vercel이 SSL(Let's Encrypt) 자동 발급.

## 4. 콘텐츠 업데이트 흐름

```bash
# 글 수정 후
git add .
git commit -m "fix: 도메인 가이드 이미지 교체"
git push
# → Vercel 자동 빌드·재배포 (1~2분)
```

## 5. 로컬 작업

| 명령 | 용도 |
|---|---|
| `npm run dev` | 실시간 편집 (Pagefind 검색 비활성) |
| `npm run build` | 프로덕션 빌드 (Pagefind 인덱스 생성) |
| `npm run preview` | 빌드 결과 미리보기 (검색 포함 전체 테스트) |

## 6. 검색 결과가 비어 있을 때

- Pagefind 인덱스는 빌드 시점에 생성
- 로컬 `npm run dev`에서는 인덱스 미생성 → 검색 안 됨
- 배포 후 또는 `npm run build` 후 `npm run preview` 로 확인
