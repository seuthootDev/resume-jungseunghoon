# 모던 이력서 웹 페이지

Next.js 14와 TypeScript로 구축한 전문적이고 모던한 이력서 웹 페이지입니다.

## 주요 기능

- ✨ **모던한 디자인**: 깔끔하고 전문적인 UI/UX
- 🌓 **다크/라이트 모드**: 테마 전환 기능
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화
- ⚡ **부드러운 애니메이션**: Framer Motion을 활용한 스크롤 애니메이션
- 🎯 **섹션별 구성**: 소개, 기술, 스택, 프로젝트, 자격증, 어학성적, 경력, 교육, 봉사활동, 연락처

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animation**: Framer Motion
- **Font**: Google Fonts (Newsreader, Manrope)

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 3. 빌드

```bash
npm run build
npm start
```

## 커스터마이징

### 개인 정보 수정

각 컴포넌트 파일에서 데이터를 수정하세요:

- `components/Hero.tsx` - 메인 소개
- `components/About.tsx` - 상세 소개
- `components/Skills.tsx` - 기술 레벨
- `components/TechStack.tsx` - 기술 스택
- `components/Projects.tsx` - 프로젝트 내역
- `components/Certifications.tsx` - 자격증
- `components/Languages.tsx` - 어학 성적
- `components/Experience.tsx` - 경력
- `components/Education.tsx` - 학력
- `components/Volunteer.tsx` - 봉사활동
- `components/Contact.tsx` - 연락처

### 프로필 사진 추가

1. `public/` 폴더에 이미지 추가
2. `components/Hero.tsx`의 `.imagePlaceholder` 부분을 다음과 같이 수정:

```tsx
<Image 
  src="/your-photo.jpg" 
  alt="Profile" 
  width={320} 
  height={320}
  className={styles.profileImage}
/>
```

### 색상 테마 변경

`styles/globals.css`의 CSS 변수를 수정:

```css
:root {
  --accent-primary: #0f766e;  /* 원하는 색상으로 변경 */
  --accent-secondary: #14b8a6;
  /* ... */
}
```

## 프로젝트 구조

```
nextjs-resume/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/             # 모든 섹션 컴포넌트
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Languages.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Volunteer.tsx
│   └── Contact.tsx
├── styles/
│   └── globals.css         # 글로벌 스타일
└── public/                 # 정적 파일
```

## 배포

### Vercel (권장)

```bash
npm install -g vercel
vercel
```

### 기타 플랫폼

- Netlify
- AWS Amplify
- GitHub Pages (정적 export 필요)

## 라이선스

MIT License

## 문의

이슈나 개선사항이 있으시면 GitHub Issues를 이용해주세요.
