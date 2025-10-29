# 우리집 아키텍처 문서

## 시스템 아키텍처 개요

우리집은 **마이크로서비스 아키텍처**를 기반으로 구축되었습니다.

```
┌─────────────────────────────────────────────────────────┐
│                     Client Layer                         │
├──────────────────────┬───────────────────────────────────┤
│   React Native App   │          Web App (Future)         │
│   (iOS & Android)    │                                   │
└──────────┬───────────┴──────────────┬────────────────────┘
           │                          │
           ▼                          ▼
┌─────────────────────────────────────────────────────────┐
│                    API Gateway                           │
│              (Kong / AWS API Gateway)                    │
└─────────────────────┬────────────────────────────────────┘
                      │
          ┌───────────┼───────────┬─────────────┬──────────┐
          ▼           ▼           ▼             ▼          ▼
┌──────────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│   Auth       │ │ Family   │ │ Question │ │  Media   │ │  Notif   │
│  Service     │ │ Service  │ │ Service  │ │ Service  │ │ Service  │
│  (Node.js)   │ │(Node.js) │ │ (Python) │ │(Node.js) │ │(Node.js) │
│   :3001      │ │  :3002   │ │  :3003   │ │  :3004   │ │  :3005   │
└──────────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘
          │           │           │             │             │
          ▼           ▼           ▼             ▼             ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Data Layer                                │
├──────────────┬──────────────┬──────────────┬──────────┬─────────┤
│  PostgreSQL  │   MongoDB    │     Redis    │    S3    │   SQS   │
│ (User/Family)│  (Content)   │   (Cache)    │ (Media)  │ (Queue) │
└──────────────┴──────────────┴──────────────┴──────────┴─────────┘
```

## 마이크로서비스 상세

### 1. Auth Service (Port 3001)
**기술 스택**: Node.js + Express + TypeScript

**책임**:
- 사용자 인증 및 권한 관리
- JWT 토큰 발급 및 검증
- 소셜 로그인 (카카오, 네이버, 구글, 애플)
- 토큰 갱신 및 블랙리스트 관리

**데이터베이스**: PostgreSQL (users 테이블)

**외부 의존성**:
- Redis (토큰 블랙리스트)
- 소셜 로그인 API

---

### 2. Family Service (Port 3002)
**기술 스택**: Node.js + Express + TypeScript

**책임**:
- 가족 생성 및 관리
- 가족 구성원 초대 및 관리
- 권한 및 역할 관리
- 우리펫 기본 데이터 관리

**데이터베이스**: PostgreSQL (families, family_members, pets 테이블)

**외부 의존성**:
- Auth Service (인증)

---

### 3. Question Service (Port 3003)
**기술 스택**: Python + FastAPI

**책임**:
- 일일 질문 생성 및 스케줄링
- 가족별 맞춤 질문 추천 (AI/ML)
- 답변 저장 및 조회
- 질문 카테고리 관리

**데이터베이스**: MongoDB (questions, answers 컬렉션)

**외부 의존성**:
- Redis (캐시)
- Family Service (가족 정보)

---

### 4. Media Service (Port 3004)
**기술 스택**: Node.js + Express + TypeScript

**책임**:
- 이미지/비디오 업로드 처리
- 미디어 압축 및 최적화 (Sharp)
- S3 스토리지 관리
- CDN 배포 (CloudFront)
- AI 얼굴 인식 (AWS Rekognition)

**데이터베이스**: 없음 (메타데이터는 다른 서비스에서 관리)

**외부 의존성**:
- AWS S3
- AWS CloudFront
- AWS Rekognition (선택)

---

### 5. Notification Service (Port 3005)
**기술 스택**: Node.js + Express + TypeScript

**책임**:
- Push 알림 전송 (FCM, APNS)
- 알림 스케줄링 (Bull Queue)
- 알림 템플릿 관리
- 사용자 알림 설정 관리

**데이터베이스**: Redis (큐 관리)

**외부 의존성**:
- Firebase Cloud Messaging
- Apple Push Notification Service
- AWS SQS

---

## 데이터베이스 설계

### PostgreSQL (관계형 데이터)

**주요 테이블**:
- `users`: 사용자 정보
- `families`: 가족 그룹
- `family_members`: 가족 구성원 관계
- `pets`: 우리펫 데이터
- `emotions`: 감정 체크인 기록
- `invitations`: 가족 초대

**관계**:
```
users (1) ──── (N) family_members (N) ──── (1) families
                                                │
                                                │ (1)
                                                ▼
                                             pets (1)
```

### MongoDB (문서형 데이터)

**주요 컬렉션**:
- `questions`: 질문 데이터
- `answers`: 답변 데이터
- `missions`: 가족 미션

**인덱스**:
- `questions`: category, difficulty, ageGroup
- `answers`: questionId, familyId, userId, createdAt

### Redis (캐시 & 큐)

**용도**:
- 세션 캐시
- JWT 블랙리스트
- 일일 질문 캐시
- Bull 큐 (알림, 작업 스케줄링)

---

## 통신 패턴

### 동기 통신 (REST API)
- 클라이언트 ↔ 서비스
- 서비스 간 직접 호출 (필요 시)

### 비동기 통신 (메시지 큐)
- 알림 전송 (Bull Queue)
- 이벤트 기반 처리

---

## 보안

### 인증 & 권한
- JWT 기반 인증
- Refresh Token 갱신
- 역할 기반 접근 제어 (RBAC)

### 데이터 보호
- HTTPS/TLS 1.3 암호화
- AES-256 데이터 암호화
- 비밀번호 bcrypt 해싱
- SQL Injection 방지 (Prepared Statements)

### API 보안
- Rate Limiting
- CORS 설정
- Helmet.js 보안 헤더
- Input Validation

---

## 스케일링 전략

### 수평 확장
- 모든 서비스는 stateless 설계
- Kubernetes를 통한 자동 스케일링
- Load Balancer 분산

### 데이터베이스 스케일링
- PostgreSQL: Read Replica
- MongoDB: Sharding
- Redis: Cluster Mode

---

## 모니터링 & 로깅

### 로깅
- Winston (구조화된 로그)
- CloudWatch Logs
- 로그 레벨: ERROR, WARN, INFO, DEBUG

### 모니터링
- AWS CloudWatch
- DataDog (메트릭, 트레이싱)
- Sentry (에러 트래킹)

### 알람
- 서비스 다운 알림
- 높은 에러율 알림
- 성능 저하 알림

---

## 배포 전략

### CI/CD 파이프라인
1. GitHub Actions (자동 빌드 & 테스트)
2. Docker 이미지 빌드
3. ECR에 푸시
4. EKS에 자동 배포

### 환경
- **Development**: 로컬 Docker Compose
- **Staging**: AWS EKS (테스트 환경)
- **Production**: AWS EKS (프로덕션)

### 롤백 전략
- Blue-Green 배포
- Canary 배포 (프로덕션)
- 자동 롤백 (헬스 체크 실패 시)

---

## 성능 최적화

### 캐싱 전략
- Redis를 통한 API 응답 캐싱
- CDN 정적 컨텐츠 캐싱
- 클라이언트 사이드 캐싱

### 데이터베이스 최적화
- 인덱스 최적화
- 쿼리 최적화
- Connection Pooling

### API 최적화
- Response 압축 (gzip)
- Pagination
- Field Selection (GraphQL 방식)

---

이 문서는 프로젝트 진행에 따라 지속적으로 업데이트됩니다.

