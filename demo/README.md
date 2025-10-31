# 우리집 - 가족 마음 다이어리 체험판 🏠

세대를 넘어 서로를 이해하는 특별한 시간, 우리집 가족 마음 다이어리 체험판입니다.

## 🎯 프로젝트 소개

이 체험판은 실제 서비스의 핵심 가치를 체험할 수 있는 인터랙티브 웹 프로토타입입니다.
로그인 없이 4가지 가족 유형의 실제 사용 시나리오를 체험할 수 있습니다.

### ✨ 주요 기능

- **4가지 가족 페르소나**
  - 💑 알콩달콩 신혼일기 (2인 가족)
  - 🤝 어른이 되어 나누는 대화 (성인 자녀 + 부모)
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

- **신혼 가족**: 핑크-보라 그라데이션 (from-pink-200 via-purple-200 to-pink-300)
- **성인 자녀 + 부모**: 블루-스카이 그라데이션 (from-blue-100 via-sky-100 to-blue-200)
- **청소년 가족**: 틸-시안 그라데이션 (from-teal-200 via-cyan-200 to-teal-300)
- **3세대 가족**: 따뜻한 오렌지-앰버 (from-orange-100 via-amber-100 to-orange-200)

### 모바일 프레임

- 너비: 375px (iPhone 기준)
- 높이: 812px
- 둥근 모서리 및 노치 디자인

## 📂 프로젝트 구조

```
demo/
├── public/
│   └── 404.html         # GitHub Pages SPA 라우팅 지원
├── src/
│   ├── pages/           # 페이지 컴포넌트
│   │   ├── Hero.tsx                # 메인 랜딩 페이지
│   │   ├── PersonaSelect.tsx       # 페르소나 선택 화면
│   │   ├── AppDemo.tsx             # 데모 앱 (홈/기록/캘린더/가족 탭)
│   │   └── Complete.tsx            # 체험 완료 페이지
│   ├── components/      # 재사용 컴포넌트
│   │   └── MobileFrame.tsx         # 모바일 디바이스 프레임
│   ├── data/            # 페르소나 및 기록 데이터
│   │   ├── personas.ts             # 4가지 페르소나 정의
│   │   └── recordData.ts           # 페르소나별 질문 기록 (신규)
│   ├── App.tsx          # 라우터 설정
│   └── main.tsx         # 진입점
├── claudedocs/          # 작업 문서화 자료
├── index.html
├── package.json
├── vite.config.ts       # base: '/Woorijib/' 설정
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 사용자 플로우

1. **히어로 섹션**: ✨ 체험하기 버튼 클릭
2. **페르소나 선택**: 4가지 가족 유형 중 하나 선택
3. **데모 앱 체험**:
   - 🏠 **홈 탭**: 오늘의 질문, 가족 감정 상태, 파몽이 확인
   - 📋 **기록 탭**: 페르소나별 5-11개 질문 기록 (확장 가능)
   - 📅 **캘린더 탭**: 페르소나별 미션, 가족 일정
   - 👨‍👩‍👧‍👦 **가족 탭**: 가족 구성원 정보
4. **체험 완료**: 실제 서비스 안내

## 💡 체험 포인트

각 페르소나마다 차별화된 체험 요소:

- **신혼 가족**: 서로를 향한 애정 표현, 신혼 추억 아카이브, 일상 소통 습관
- **성인 자녀 + 부모**: 세대를 넘어 진솔한 소통, 늦었지만 나누는 이해와 공감, 함께 성장하는 가족 관계
- **청소년 가족**: 프라이버시 존중 소통, 비대면 진솔한 대화, 자녀 내면 이해하기
- **3세대 가족**: 음성 답변으로 쉬운 참여, 가족 역사 아카이브, 세대 간 이해와 존중

## ✨ 최근 개선사항 (2024.10.31)

### UI/UX 개선
- 컴팩트한 디자인으로 스크롤 최소화 (한 화면에 더 많은 콘텐츠)
- Safe area 지원으로 노치 대응 (pt-12 패딩)
- 불필요한 텍스트 제거로 깔끔한 인터페이스

### 기능 추가
- 📋 기록 탭: 페르소나별 상세 질문 기록 추가 (recordData.ts)
  - 신혼부부: 5개 질문
  - 성인 자녀+부모: 5개 질문
  - 청소년 가족: 5개 질문
  - 3세대 가족: 11개 질문
- 📅 캘린더 탭: 페르소나별 맞춤 미션 및 일정 관리
- 확장 가능한 답변 UI (아코디언)

### 페르소나 변경
- ❌ 제거: 👶 우리아이 성장앨범 (영유아)
  - 이유: 영유아는 직접 앱 사용 불가
- ✅ 추가: 🤝 어른이 되어 나누는 대화 (성인 자녀 + 부모)
  - 초점: 어른이 된 후 부모님과의 진솔한 소통

### 배포
- GitHub Pages 자동 배포 설정
- SPA 라우팅 지원 (404.html)
- 배포 URL: https://junghajeon.github.io/Woorijib/

## 🔗 관련 링크

- **GitHub 저장소**: https://github.com/JunghaJeon/Woorijib
- **배포 사이트**: https://junghajeon.github.io/Woorijib/
- **로컬 개발 서버**: http://localhost:5173/Woorijib/
- 실제 프로젝트: `/Users/jungha/my-project`
- 메인 문서: `CLAUDE.md`, `ARCHITECTURE.md`, `Woorijib_PRD_v1.0.md`

## 📝 라이선스

MIT License

---

Made with ❤️ for 우리집 가족 마음 다이어리
