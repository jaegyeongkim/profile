# 김재경 포트폴리오

> **Frontend Engineer · Platform & DX**  
> Next.js 기반 정적 포트폴리오 사이트 — GitHub Pages 배포

🔗 https://jaegyeongkim.github.io

---

## 페이지 구성

| 경로 | 내용 |
|------|------|
| `/` | 이력서 (condensed resume) |
| `/portfolio` | 포트폴리오 (full detail) |

## 기술 스택

- **Framework** Next.js 16 (App Router, `output: 'export'`)
- **Styling** Tailwind CSS v4 + CSS 변수 기반 다크모드
- **Font** Geist (Sans / Mono)
- **Deploy** GitHub Actions → GitHub Pages

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드·배포합니다.
