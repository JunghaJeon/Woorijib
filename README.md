# 🏠 우리집 (Woorijib)

> 우리 가족의 마음이 하나로 연결되는 공간

가족 구성원들이 서로를 더 깊이 이해하고, 건강한 가족 관계를 구축할 수 있도록 돕는 모바일 애플리케이션입니다.

## 📋 목차

- [프로젝트 개요](#프로젝트-개요)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [개발 가이드](#개발-가이드)
- [배포](#배포)

## 🎯 프로젝트 개요

우리집은 다음과 같은 핵심 솔루션을 제공합니다:

- 📝 **매일 제공되는 가족 맞춤형 질문**으로 자연스러운 대화 유도
- 🐾 **게이미피케이션(우리펫)**을 통한 지속적 참여 동기 부여
- 💭 **세대별 맞춤 콘텐츠**로 상호 이해 증진
- 🔒 **프라이버시 보장**과 필요한 소통 채널 제공

## ✨ 주요 기능

### Core Features (MVP)

1. **패밀리 트리 질문 시스템**
   - 일일 가족 공통 질문
   - 세대별 맞춤 질문
   - 답변 기록 및 아카이빙

2. **우리펫 (Famong)**
   - 가족 공동 육성 시스템
   - 참여도 기반 성장
   - 보상 및 이벤트

3. **감정 체크인**
   - 일일 감정 상태 공유
   - 가족 구성원 케어 알림

4. **가족 앨범**
   - 사진/동영상 공유
   - 자동 정리 및 큐레이션

### Advanced Features (Post-MVP)

- 🌟 세대 이해 콘텐츠
- 🎯 가족 미션 & 챌린지
- ⏰ 가족 타임캡슐
- 🤖 AI 기반 가족 코칭

## 🛠 기술 스택

### Mobile App
- **Framework**: React Native 0.73
- **Language**: TypeScript
- **State Management**: Zustand, React Query
- **Navigation**: React Navigation 6
- **UI**: Custom Design System

### Backend Services

#### Auth Service (Node.js + Express)
- JWT 인증
- 소셜 로그인 (카카오, 네이버, 구글, 애플)
- PostgreSQL

#### Family Service (Node.js + Express)
- 가족 관리
- 구성원 관리
- PostgreSQL

#### Question Service (Python FastAPI)
- 질문 생성 및 추천
- AI 기반 맞춤화
- MongoDB

#### Media Service (Node.js)
- 이미지/영상 업로드
- S3 스토리지
- CloudFront CDN

#### Notification Service (Node.js)
- Push 알림 (FCM, APNS)
- 스케줄링 (Bull Queue)
- Redis

### Infrastructure
- **Container**: Docker, Docker Compose
- **Database**: PostgreSQL, MongoDB, Redis
- **Cloud**: AWS (EKS, S3, RDS, ElastiCache)
- **CI/CD**: GitHub Actions

## 📁 프로젝트 구조

```
woorijib/
├── apps/
│   ├── mobile/                 # React Native 모바일 앱
│   └── ios/                    # (기존 iOS 앱)
├── services/
│   ├── auth-service/           # 인증 서비스
│   ├── family-service/         # 가족 관리 서비스
│   ├── question-service/       # 질문 시스템 서비스
│   ├── media-service/          # 미디어 처리 서비스
│   └── notification-service/   # 알림 서비스
├── database/
│   ├── init/                   # PostgreSQL 초기화 스크립트
│   ├── seeds/                  # 시드 데이터
│   └── mongodb/                # MongoDB 초기화 스크립트
├── .github/
│   └── workflows/              # GitHub Actions CI/CD
├── docker-compose.yml
├── Makefile
└── README.md
```

## 🚀 시작하기

### 사전 요구사항

- Node.js >= 18.0.0
- Python >= 3.11
- Docker & Docker Compose
- React Native CLI (모바일 개발 시)

### 1. 저장소 클론

```bash
git clone https://github.com/your-org/woorijib.git
cd woorijib
```

### 2. 환경 변수 설정

```bash
cp .env.example .env
# .env 파일을 편집하여 필요한 값들을 설정하세요
```

### 3. 의존성 설치

```bash
make install
```

### 4. 개발 환경 실행

```bash
# Docker Compose로 모든 서비스 시작
make dev

# 데이터베이스 마이그레이션
make db-migrate

# 시드 데이터 삽입 (선택사항)
make db-seed
```

### 5. 모바일 앱 실행

```bash
# iOS
make mobile-ios

# Android
make mobile-android
```

## 📖 개발 가이드

### Make 명령어

```bash
make help              # 모든 명령어 확인
make install           # 의존성 설치
make dev               # 개발 모드 시작
make down              # 서비스 중지
make logs              # 로그 확인
make test              # 테스트 실행
make lint              # 린트 실행
make clean             # 모든 컨테이너 및 볼륨 삭제
```

### 서비스별 개발

각 서비스 디렉토리의 README를 참조하세요:

- [Mobile App](./apps/mobile/README.md)
- [Auth Service](./services/auth-service/README.md)
- [Family Service](./services/family-service/README.md)
- [Question Service](./services/question-service/README.md)
- [Media Service](./services/media-service/README.md)
- [Notification Service](./services/notification-service/README.md)

### 테스트

```bash
# 전체 테스트
make test

# 개별 서비스 테스트
cd apps/mobile && npm test
cd services/auth-service && npm test
cd services/question-service && pytest
```

## 🌐 API 엔드포인트

### Auth Service (Port 3001)
- `POST /api/auth/signup` - 회원가입
- `POST /api/auth/login` - 로그인
- `POST /api/auth/refresh` - 토큰 갱신

### Family Service (Port 3002)
- `GET /api/families` - 가족 목록 조회
- `POST /api/families` - 가족 생성
- `POST /api/families/:id/members` - 구성원 초대

### Question Service (Port 3003)
- `GET /api/questions/daily` - 일일 질문 조회
- `POST /api/answers` - 답변 제출

### Media Service (Port 3004)
- `POST /api/media/upload` - 미디어 업로드
- `GET /api/media/:id` - 미디어 조회

### Notification Service (Port 3005)
- `POST /api/notifications/send` - 알림 전송
- `POST /api/notifications/schedule` - 예약 알림

## 📊 모니터링

```bash
# 컨테이너 상태 확인
make ps

# 리소스 사용량 확인
make stats

# 로그 실시간 확인
make logs
```

## 🚢 배포

### 스테이징 배포

```bash
# GitHub Actions를 통한 자동 배포
git push origin develop
```

### 프로덕션 배포

```bash
# main 브랜치에 병합 시 자동 배포
git push origin main
```

## 📄 라이센스

Proprietary - 우리집 팀

## 👥 팀

- Product Owner: [이름] - product@woorijib.com
- Tech Lead: [이름] - tech@woorijib.com
- Design Lead: [이름] - design@woorijib.com

---

**우리집** - 가족의 마음을 연결합니다 ❤️
