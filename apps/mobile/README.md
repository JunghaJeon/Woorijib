# 우리집 Mobile App

가족 소통을 위한 React Native 모바일 애플리케이션

## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── design-system/  # 디자인 시스템 기본 컴포넌트
│   ├── common/         # 공통 컴포넌트
│   └── features/       # 기능별 특화 컴포넌트
├── screens/            # 화면 컴포넌트
│   ├── onboarding/     # 온보딩 플로우
│   ├── home/           # 홈 화면
│   ├── questions/      # 질문 답변 시스템
│   ├── pet/            # 우리펫 화면
│   ├── album/          # 가족 앨범
│   ├── profile/        # 프로필 설정
│   └── auth/           # 인증 관련 화면
├── navigation/         # 네비게이션 설정
├── services/           # API 클라이언트 및 서비스
│   ├── api/           # API 엔드포인트
│   └── auth/          # 인증 서비스
├── store/             # 전역 상태 관리 (Zustand)
├── hooks/             # 커스텀 React Hooks
├── utils/             # 유틸리티 함수
├── types/             # TypeScript 타입 정의
├── constants/         # 상수 및 설정
└── assets/            # 이미지, 폰트 등 정적 파일
```

## 시작하기

### 사전 요구사항

- Node.js >= 18.0.0
- React Native CLI
- Xcode (iOS 개발 시)
- Android Studio (Android 개발 시)

### 설치

```bash
# 의존성 설치
npm install

# iOS pods 설치
cd ios && pod install && cd ..
```

### 실행

```bash
# Metro bundler 시작
npm start

# iOS 실행
npm run ios

# Android 실행
npm run android
```

## 개발

### 테스트

```bash
# 단위 테스트 실행
npm test

# 커버리지 확인
npm run test:coverage
```

### 코드 품질

```bash
# Linting
npm run lint

# Type 체크
npm run type-check
```

## 주요 기능

- 📝 **패밀리 트리 질문 시스템**: 매일 제공되는 가족 맞춤 질문
- 🐾 **우리펫**: 가족과 함께 키우는 가상 펫
- 💭 **감정 체크인**: 일일 감정 상태 공유
- 📸 **가족 앨범**: 사진/동영상 공유 및 보관
- 🎯 **가족 미션**: 함께하는 활동 챌린지
- ⏰ **타임캡슐**: 미래에 열어볼 메시지

## 기술 스택

- **Framework**: React Native 0.73
- **언어**: TypeScript
- **상태 관리**: Zustand, React Query
- **네비게이션**: React Navigation 6
- **폼 관리**: React Hook Form + Zod
- **HTTP 클라이언트**: Axios
- **로컬 스토리지**: MMKV, AsyncStorage
- **애니메이션**: Reanimated, Lottie
- **테스팅**: Jest, React Native Testing Library

## 라이센스

Proprietary - 우리집 팀

