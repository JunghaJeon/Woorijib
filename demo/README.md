# 우리집 - 가족 마음 다이어리 체험판 🏠

세대를 넘어 서로를 이해하는 특별한 시간, 우리집 가족 마음 다이어리 체험판입니다.

## 🎯 프로젝트 소개

이 체험판은 실제 서비스의 핵심 가치를 체험할 수 있는 인터랙티브 웹 프로토타입입니다.
로그인 없이 4가지 가족 유형의 실제 사용 시나리오를 체험할 수 있습니다.

### ✨ 주요 기능

- **4가지 가족 페르소나**
  - 💑 알콩달콩 신혼일기 (2인 가족)
  - 👶 우리아이 성장앨범 (영유아 자녀 가족)
  - 🎒 질풍노도 십대탐구 (청소년 자녀 가족)
  - 👵 손주랑 나랑 세대공감 (조부모 포함 가족)

- **연령별 맞춤 UI**
  - 청소년: 다크 테마, 프라이버시 설정
  - 부모: 따뜻한 톤, 풍부한 텍스트 입력
  - 노인: 큰 폰트, 음성 답변, 간소화 UI
  - 어린이: 스티커, 이모지 중심

- **파몽이 건강도 시스템**
  - 가족 참여율에 따른 반려동물 건강도 변화
  - 게임화를 통한 자연스러운 참여 유도

## 🚀 시작하기

### 설치

```bash
cd demo
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 빌드

```bash
npm run build
```

### 배포 (GitHub Pages)

```bash
npm run deploy
```

## 🛠️ 기술 스택

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **Deployment**: GitHub Pages

## 📱 화면 구조

```
/                  - 히어로 섹션 (메인 랜딩)
/select            - 페르소나 선택
/demo/:personaId   - 체험 플로우
/complete/:personaId - 완료 및 CTA
```

## 🎨 디자인 시스템

### 색상 팔레트

- **신혼 가족**: 핑크-보라 그라데이션
- **영유아 가족**: 파스텔 블루-옐로우
- **청소년 가족**: 네이비-청록
- **3세대 가족**: 따뜻한 오렌지-베이지

### 모바일 프레임

- 너비: 375px (iPhone 기준)
- 높이: 812px
- 둥근 모서리 및 노치 디자인

## 📂 프로젝트 구조

```
demo/
├── public/
│   └── assets/          # 이미지 에셋
├── src/
│   ├── pages/           # 페이지 컴포넌트
│   │   ├── Hero.tsx
│   │   ├── PersonaSelect.tsx
│   │   ├── DemoFlow.tsx
│   │   └── Complete.tsx
│   ├── components/      # 재사용 컴포넌트
│   │   └── MobileFrame.tsx
│   ├── data/            # 페르소나 데이터
│   │   └── personas.ts
│   ├── styles/          # 전역 스타일
│   │   └── global.css
│   ├── App.tsx          # 라우터 설정
│   └── main.tsx         # 진입점
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 사용자 플로우

1. **히어로 섹션**: 체험하기 버튼 클릭
2. **페르소나 선택**: 4가지 가족 유형 중 선택
3. **가족 소개**: 선택한 가족 구성원 소개
4. **질문 확인**: 오늘의 질문 보기
5. **답변 체험**: 각 가족 구성원별 답변 순차적으로 체험
6. **파몽이 반응**: 전원 참여 시 파몽이 건강도 증가
7. **완료 및 CTA**: 실제 서비스 가입 유도

## 💡 체험 포인트

각 페르소나마다 차별화된 체험 요소:

- **신혼 가족**: 서로를 향한 애정 표현, 소소한 일상 공유
- **영유아 가족**: 아이 성장 기록, 부모 협력 육아
- **청소년 가족**: 프라이버시 존중, 비대면 소통
- **3세대 가족**: 음성 답변, 세대 간 이해와 역사 전달

## 🔗 관련 링크

- 실제 프로젝트: `/Users/jungha/my-project`
- 메인 문서: `CLAUDE.md`, `ARCHITECTURE.md`, `Woorijib_PRD_v1.0.md`

## 📝 라이선스

MIT License

---

Made with ❤️ for 우리집 가족 마음 다이어리
