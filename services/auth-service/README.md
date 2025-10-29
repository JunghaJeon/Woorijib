# Auth Service

우리집 인증 서비스 - JWT 기반 인증 및 소셜 로그인

## 기능

- 이메일/비밀번호 기반 회원가입 및 로그인
- JWT 토큰 발급 및 갱신
- 소셜 로그인 (카카오, 네이버, 구글, 애플)
- 토큰 블랙리스트 관리 (Redis)

## 기술 스택

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Cache**: Redis
- **Authentication**: JWT, Passport.js
- **Language**: TypeScript

## 시작하기

### 환경 변수 설정

```bash
cp .env.example .env
# .env 파일을 편집하여 필요한 값들을 설정하세요
```

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 모드 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## API 엔드포인트

### 인증

- `POST /api/auth/signup` - 회원가입
- `POST /api/auth/login` - 로그인
- `POST /api/auth/refresh` - 토큰 갱신
- `POST /api/auth/logout` - 로그아웃

### 소셜 로그인

- `POST /api/auth/social/kakao` - 카카오 로그인
- `POST /api/auth/social/naver` - 네이버 로그인
- `POST /api/auth/social/google` - 구글 로그인
- `POST /api/auth/social/apple` - 애플 로그인

## 테스트

```bash
# 단위 테스트 실행
npm test

# 커버리지 확인
npm run test:coverage
```

## 라이센스

Proprietary - 우리집 팀

