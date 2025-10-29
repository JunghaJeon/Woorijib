# 🏠 우리집 프로젝트 구조

## 📁 전체 디렉토리 구조

```
woorijib/
├── apps/
│   ├── mobile/                           # React Native 모바일 앱
│   │   ├── android/                      # Android 네이티브 코드
│   │   ├── ios/                          # iOS 네이티브 코드
│   │   ├── src/
│   │   │   ├── components/               # UI 컴포넌트
│   │   │   │   ├── buttons/              # 버튼 컴포넌트
│   │   │   │   │   └── Button.tsx
│   │   │   │   ├── cards/                # 카드 컴포넌트
│   │   │   │   │   ├── QuestionCard.tsx
│   │   │   │   │   └── PetCard.tsx
│   │   │   │   ├── inputs/               # 입력 컴포넌트
│   │   │   │   └── common/               # 공통 컴포넌트
│   │   │   ├── screens/                  # 화면 컴포넌트
│   │   │   │   ├── auth/                 # 인증 화면
│   │   │   │   │   ├── WelcomeScreen.tsx
│   │   │   │   │   ├── LoginScreen.tsx
│   │   │   │   │   └── SignupScreen.tsx
│   │   │   │   ├── home/                 # 홈 화면
│   │   │   │   │   └── HomeScreen.tsx
│   │   │   │   ├── questions/            # 질문 화면
│   │   │   │   │   └── QuestionsScreen.tsx
│   │   │   │   ├── pet/                  # 우리펫 화면
│   │   │   │   │   └── PetScreen.tsx
│   │   │   │   ├── album/                # 앨범 화면
│   │   │   │   │   └── AlbumScreen.tsx
│   │   │   │   ├── family/               # 가족 화면
│   │   │   │   │   └── FamilyScreen.tsx
│   │   │   │   └── profile/              # 프로필 화면
│   │   │   │       └── ProfileScreen.tsx
│   │   │   ├── navigation/               # 네비게이션
│   │   │   │   ├── RootNavigator.tsx     # 루트 네비게이터
│   │   │   │   ├── AuthNavigator.tsx     # 인증 네비게이터
│   │   │   │   └── MainNavigator.tsx     # 메인 네비게이터
│   │   │   ├── services/                 # 서비스 레이어
│   │   │   │   ├── api/
│   │   │   │   │   └── apiClient.ts      # API 클라이언트
│   │   │   │   ├── auth/
│   │   │   │   │   └── authService.ts    # 인증 서비스
│   │   │   │   ├── family/
│   │   │   │   │   └── familyService.ts  # 가족 서비스
│   │   │   │   ├── question/
│   │   │   │   │   └── questionService.ts # 질문 서비스
│   │   │   │   ├── media/
│   │   │   │   │   └── mediaService.ts   # 미디어 서비스
│   │   │   │   └── pet/
│   │   │   │       └── petService.ts     # 펫 서비스
│   │   │   ├── hooks/                    # 커스텀 훅
│   │   │   │   ├── useAuth.ts            # 인증 훅
│   │   │   │   ├── useQuestions.ts       # 질문 훅
│   │   │   │   └── usePet.ts             # 펫 훅
│   │   │   ├── store/                    # Zustand 스토어
│   │   │   │   ├── authStore.ts          # 인증 스토어
│   │   │   │   └── familyStore.ts        # 가족 스토어
│   │   │   ├── types/                    # TypeScript 타입
│   │   │   │   └── index.ts              # 공통 타입 정의
│   │   │   ├── utils/                    # 유틸리티
│   │   │   │   └── storage.ts            # 저장소 유틸리티
│   │   │   ├── constants/                # 상수
│   │   │   │   ├── config.ts             # 설정 상수
│   │   │   │   ├── theme.ts              # 테마 상수
│   │   │   │   └── api.ts                # API 엔드포인트
│   │   │   ├── assets/                   # 정적 리소스
│   │   │   │   ├── images/               # 이미지
│   │   │   │   ├── fonts/                # 폰트
│   │   │   │   └── lottie/               # Lottie 애니메이션
│   │   │   └── App.tsx                   # 앱 루트
│   │   ├── .env.example                  # 환경변수 예제
│   │   ├── package.json                  # 의존성
│   │   ├── tsconfig.json                 # TypeScript 설정
│   │   ├── babel.config.js               # Babel 설정
│   │   ├── metro.config.js               # Metro 설정
│   │   ├── jest.config.js                # Jest 설정
│   │   ├── Makefile                      # Make 명령어
│   │   └── README.md                     # 문서
│   └── ios/                              # (기존) Swift iOS 앱
│
├── services/                             # 백엔드 마이크로서비스
│   ├── auth-service/                     # 인증 서비스 (Node.js)
│   ├── family-service/                   # 가족 관리 서비스 (Node.js)
│   ├── question-service/                 # 질문 시스템 서비스 (Python)
│   ├── media-service/                    # 미디어 처리 서비스 (Node.js)
│   └── notification-service/             # 알림 서비스 (Node.js)
│
├── database/                             # 데이터베이스 초기화
│   ├── init/                             # PostgreSQL 초기화 스크립트
│   ├── seeds/                            # 시드 데이터
│   └── mongodb/                          # MongoDB 초기화
│
├── docs/                                 # 문서
│   ├── api/                              # API 문서
│   ├── design-system/                    # 디자인 시스템
│   └── Woorijib_PRD_v1.0.md.pdf         # PRD
│
├── .github/                              # GitHub Actions CI/CD
│   └── workflows/
│
├── docker-compose.yml                    # Docker Compose 설정
├── Makefile                              # 프로젝트 Make 명령어
├── package.json                          # 루트 package.json
├── .gitignore                            # Git ignore
├── README.md                             # 프로젝트 README
└── STRUCTURE.md                          # 이 파일
```

## 🛠 기술 스택

### Mobile App (React Native)

| 카테고리 | 기술 스택 |
|---------|----------|
| **Framework** | React Native 0.73 |
| **Language** | TypeScript |
| **State Management** | Zustand |
| **Data Fetching** | React Query (TanStack Query) |
| **Navigation** | React Navigation 6 |
| **Styling** | StyleSheet (Native) |
| **Storage** | MMKV, AsyncStorage, Keychain |
| **HTTP Client** | Axios |
| **Forms** | React Hook Form + Zod |
| **Firebase** | Analytics, Crashlytics, Push Notifications |
| **Image Handling** | React Native Image Picker |
| **Animations** | Reanimated 3, Lottie |

### Backend Services

| 서비스 | 기술 스택 | 데이터베이스 |
|-------|----------|------------|
| **Auth Service** | Node.js + Express | PostgreSQL |
| **Family Service** | Node.js + Express | PostgreSQL |
| **Question Service** | Python + FastAPI | MongoDB |
| **Media Service** | Node.js + Express | S3 (AWS) |
| **Notification Service** | Node.js + Express | Redis |

## 📱 주요 기능

### 1. 인증 (Authentication)
- 이메일/비밀번호 로그인
- 소셜 로그인 (카카오, 네이버, 구글, 애플)
- JWT 토큰 기반 인증
- 자동 토큰 갱신

**관련 파일:**
- `src/services/auth/authService.ts`
- `src/hooks/useAuth.ts`
- `src/store/authStore.ts`
- `src/screens/auth/*`

### 2. 패밀리 트리 질문 시스템
- 일일 가족 공통 질문
- 세대별 맞춤 질문
- 답변 기록 및 아카이빙
- 리액션 기능

**관련 파일:**
- `src/services/question/questionService.ts`
- `src/hooks/useQuestions.ts`
- `src/components/cards/QuestionCard.tsx`
- `src/screens/questions/*`

### 3. 우리펫 (Family Pet)
- 가족 공동 육성 시스템
- 참여도 기반 성장 (레벨, 경험치)
- 상호작용 (먹이주기, 쓰다듬기, 놀아주기)
- 보상 및 이벤트

**관련 파일:**
- `src/services/pet/petService.ts`
- `src/hooks/usePet.ts`
- `src/components/cards/PetCard.tsx`
- `src/screens/pet/*`

### 4. 가족 앨범
- 사진/동영상 공유
- 자동 정리 및 큐레이션
- 미디어 업로드

**관련 파일:**
- `src/services/media/mediaService.ts`
- `src/screens/album/*`

### 5. 감정 체크인
- 일일 감정 상태 공유
- 가족 구성원 케어 알림

### 6. 가족 관리
- 가족 생성/수정
- 구성원 초대/관리
- 역할 설정

**관련 파일:**
- `src/services/family/familyService.ts`
- `src/store/familyStore.ts`
- `src/screens/family/*`

## 🎨 디자인 시스템

### 컬러 팔레트
```typescript
const colors = {
  primary: {
    main: '#4A90E2',    // Primary Blue
    light: '#7BAFF5',
    dark: '#2E6BC4',
  },
  secondary: {
    main: '#FF6B6B',    // Warm Orange
    light: '#FF9999',
    dark: '#CC5555',
  },
  accent: '#4ECDC4',    // Soft Green
};
```

### 타이포그래피
- **Font Family**: Pretendard (Korean), SF Pro (English)
- **Base Size**: 16pt
- **Scale**:
  - Display: 32pt
  - Title1: 28pt
  - Title2: 24pt
  - Title3: 20pt
  - Body: 16pt
  - Caption: 14pt
  - Small: 12pt

**관련 파일:**
- `src/constants/theme.ts`

## 🚀 시작하기

### 1. 의존성 설치
```bash
cd apps/mobile
npm install
```

### 2. iOS 설정 (macOS only)
```bash
cd ios
pod install
cd ..
```

### 3. 환경 변수 설정
```bash
cp .env.example .env
# .env 파일 편집
```

### 4. 개발 서버 실행
```bash
# Metro bundler 시작
npm start

# iOS 실행
npm run ios

# Android 실행
npm run android
```

## 📚 개발 가이드

### Make 명령어
```bash
make help              # 명령어 목록
make install           # 의존성 설치
make android           # Android 앱 실행
make ios               # iOS 앱 실행
make test              # 테스트 실행
make lint              # 린트 실행
make clean             # 캐시 삭제
```

### 서비스 레이어 구조
모든 API 통신은 서비스 레이어를 통해 이루어집니다:

1. **API Client** (`src/services/api/apiClient.ts`)
   - Axios 기반 HTTP 클라이언트
   - 자동 토큰 갱신
   - 에러 핸들링

2. **Domain Services** (`src/services/*/`)
   - 각 도메인별 서비스 함수
   - 비즈니스 로직 캡슐화

3. **Custom Hooks** (`src/hooks/`)
   - React Query와 서비스 연동
   - 상태 관리 및 캐싱

### 상태 관리
- **Zustand**: 전역 상태 (인증, 가족 정보)
- **React Query**: 서버 상태 (API 데이터)
- **Local State**: 컴포넌트 상태 (useState)

## 🧪 테스트

```bash
# 전체 테스트
npm test

# 커버리지 확인
npm run test:coverage

# Watch 모드
npm test -- --watch
```

## 📊 API 엔드포인트

모든 API 엔드포인트는 `src/constants/api.ts`에 정의되어 있습니다.

**Base URL**: `http://localhost:3000/api/v1` (개발)

## 🔒 보안

- JWT 토큰은 Keychain (iOS) / Keystore (Android)에 안전하게 저장
- HTTPS 통신 강제
- 민감한 정보는 환경 변수로 관리
- API 요청 시 인증 토큰 자동 첨부

## 📦 빌드 및 배포

### Android
```bash
cd android
./gradlew assembleRelease  # Release APK
./gradlew bundleRelease    # Release AAB (Google Play)
```

### iOS
1. Xcode에서 Archive 생성
2. TestFlight 또는 App Store에 업로드

## 📄 라이센스

Proprietary - 우리집 팀

---

**우리집** - 가족의 마음을 연결합니다 ❤️
