# 🏠 우리집 웹 프로토타입 - 개선 사항

## 📅 업데이트 날짜
2024년 10월 29일

## ✨ 주요 개선 사항

### 1. PRD 기반 디자인 시스템 통합

#### 타이포그래피 시스템
PRD에 명시된 타이포그래피 스케일을 CSS 클래스로 구현했습니다:

```css
.text-display  /* 32px - Display 텍스트 */
.text-title1   /* 28px - 주요 제목 */
.text-title2   /* 24px - 부제목 */
.text-title3   /* 20px - 소제목 */
.text-body     /* 16px - 본문 */
.text-caption  /* 14px - 캡션 */
.text-small    /* 12px - 작은 텍스트 */
```

#### 컬러 시스템
CSS 변수로 PRD 컬러 팔레트를 정의했습니다:

```css
--color-primary: #4A90E2        /* Primary Blue */
--color-primary-light: #7BAFF5
--color-primary-dark: #2E6BC4

--color-secondary: #FF6B6B      /* Warm Orange */
--color-secondary-light: #FF9999
--color-secondary-dark: #CC5555

--color-accent: #4ECDC4         /* Soft Green */
```

### 2. Mock API Layer 추가 (`api-mock.js`)

실제 백엔드 서비스를 시뮬레이션하는 완전한 API 레이어를 구현했습니다:

#### 구현된 API 서비스:
- **Auth API**: 로그인, 회원가입, 로그아웃, 사용자 정보 조회
- **Family API**: 가족 관리, 멤버 추가/조회
- **Question API**: 일일 질문 조회, 답변 생성, 리액션 추가
- **Pet API**: 펫 조회, 상호작용 (먹이주기, 쓰다듬기, 놀아주기)
- **Emotion API**: 감정 기록, 가족 감정 조회 ⭐ 신규
- **Media API**: 이미지 업로드, 미디어 조회/삭제 ⭐ 신규

#### API 특징:
- 실제 HTTP 요청 시뮬레이션 (300ms 딜레이)
- LocalStorage 기반 데이터 영속성
- 에러 핸들링 및 응답 포맷 통일
- async/await 기반 비동기 처리

#### 사용 예시:
```javascript
// 감정 기록하기
const response = await MockAPI.emotion.createEmotion({
    userId: 'user_001',
    familyId: 'family_001',
    emotion: '😊',
    emotionLabel: '기쁨',
    message: '오늘 정말 행복한 하루였어요!'
});

// 이미지 업로드
const response = await MockAPI.media.uploadImage(file);
```

### 3. 새로운 화면 추가

#### 😊 감정 체크인 화면 (`emotion-screen`)

**주요 기능:**
- 6가지 감정 선택 인터페이스 (기쁨, 평온, 피곤, 슬픔, 화남, 불안)
- 선택된 감정에 대한 시각적 피드백
- 감정에 대한 메시지 작성 (선택 사항)
- Mock API와 연동된 감정 기록 저장

**기술 구현:**
- CSS Grid 기반 감정 선택 UI
- 호버/선택 애니메이션 효과
- LocalStorage 기반 데이터 저장

**경로:** 홈 화면 → "오늘의 감정" 카드 클릭

#### 📸 가족 앨범 화면 (`album-screen`)

**주요 기능:**
- 드래그 앤 드롭 / 클릭으로 이미지 업로드
- 파일 크기 (5MB) 및 타입 검증
- 업로드된 이미지 그리드 뷰
- Base64 인코딩으로 이미지 미리보기

**기술 구현:**
- FileReader API를 사용한 이미지 처리
- CSS Grid 기반 반응형 앨범 레이아웃
- Mock API를 통한 이미지 저장

**경로:** 홈 화면 → "가족 앨범" 카드 클릭

### 4. 향상된 UI 컴포넌트

#### 새로운 버튼 스타일:
```css
.btn-primary-enhanced    /* 그라디언트 효과의 Primary 버튼 */
.btn-secondary-enhanced  /* 아웃라인 스타일의 Secondary 버튼 */
```

#### 애니메이션 효과:
- 호버 시 상승 효과 (`translateY`)
- 부드러운 색상 전환
- 그림자 효과 강화

### 5. 홈 화면 개선

#### 빠른 액션 카드 추가:
홈 화면에 감정 체크인과 앨범으로의 빠른 접근 버튼을 추가했습니다:
- "오늘의 감정" - 빨간 그라디언트 카드
- "가족 앨범" - 청록 그라디언트 카드

## 🔧 기술 스택

| 분류 | 기술 |
|------|------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Storage** | LocalStorage API |
| **File Handling** | FileReader API |
| **Design** | CSS Grid, Flexbox, CSS Variables |
| **Font** | Pretendard, -apple-system, SF Pro |

## 📂 파일 구조

```
apps/web-prototype/
├── index.html          # 메인 HTML (감정/앨범 화면 추가)
├── styles.css          # 스타일시트 (PRD 디자인 시스템 추가)
├── script.js           # 메인 로직 (감정/앨범 기능 추가)
├── api-mock.js         # Mock API Layer ⭐ 신규
├── IMPROVEMENTS.md     # 이 문서
└── README.md           # 기존 README
```

## 🚀 실행 방법

### 1. 서버 시작
```bash
cd apps/web-prototype
python3 -m http.server 8888
```

### 2. 브라우저에서 접속
```
http://localhost:8888
```

### 3. 주요 경로
- **메인 랜딩**: `http://localhost:8888` → "시작하기" 클릭
- **홈 화면**: 랜딩 후 자동 이동
- **감정 체크인**: 홈 → "오늘의 감정" 카드
- **가족 앨범**: 홈 → "가족 앨범" 카드
- **오늘의 질문**: 홈 → "답변하기" 버튼
- **우리펫**: 홈 → "우리펫" 카드 또는 하단 네비게이션

## 🎨 디자인 가이드

### 컬러 사용 가이드
```javascript
// Primary - 주요 액션, 강조
var(--color-primary)        // #4A90E2

// Secondary - 경고, 중요 정보
var(--color-secondary)      // #FF6B6B

// Accent - 성공, 긍정적 피드백
var(--color-accent)         // #4ECDC4

// Text
var(--color-text-primary)   // #2C3E50 (본문)
var(--color-text-secondary) // #7F8C8D (부가 정보)
var(--color-text-tertiary)  // #B0B0B0 (비활성)
```

### 타이포그래피 사용 가이드
- **Display (32px)**: 랜딩 페이지 타이틀
- **Title1 (28px)**: 메인 페이지 헤더
- **Title2 (24px)**: 섹션 제목
- **Title3 (20px)**: 카드 제목
- **Body (16px)**: 본문 텍스트
- **Caption (14px)**: 부가 설명
- **Small (12px)**: 타임스탬프, 라벨

## 🧪 테스트 시나리오

### 감정 체크인 테스트
1. 홈 화면에서 "오늘의 감정" 카드 클릭
2. 6가지 감정 중 하나 선택 (선택 시 파란 테두리 표시)
3. (선택) 메시지 입력
4. "감정 기록하기" 버튼 클릭
5. 성공 토스트 메시지 확인
6. LocalStorage에 데이터 저장 확인 (`woorijib_emotions`)

### 앨범 테스트
1. 홈 화면에서 "가족 앨범" 카드 클릭
2. "사진 업로드" 영역 클릭
3. 이미지 파일 선택 (5MB 이하)
4. 업로드 완료 토스트 확인
5. 앨범 그리드에 새 이미지 추가 확인
6. LocalStorage에 Base64 데이터 저장 확인 (`woorijib_media`)

### Mock API 테스트
개발자 콘솔에서 직접 API 호출 테스트:

```javascript
// 감정 기록
await MockAPI.emotion.createEmotion({
    userId: 'user_001',
    familyId: 'family_001',
    emotion: '😊',
    emotionLabel: '기쁨',
    message: '테스트 메시지'
});

// 가족 감정 조회
await MockAPI.emotion.getFamilyEmotions('family_001');

// 이미지 업로드 (파일 객체 필요)
// const file = document.getElementById('album-file-input').files[0];
// await MockAPI.media.uploadImage(file);
```

## 🔍 개발자 도구

### LocalStorage 데이터 확인
개발자 도구 → Application → Local Storage → http://localhost:8888

**저장되는 데이터:**
- `woorijib_family`: 가족 정보
- `woorijib_questions`: 질문 데이터
- `woorijib_answers`: 답변 데이터
- `woorijib_pet`: 우리펫 정보
- `woorijib_emotions`: 감정 기록 ⭐ 신규
- `woorijib_media`: 미디어 파일 ⭐ 신규

### 디버깅
```javascript
// 콘솔에서 직접 실행 가능한 명령어들

// 감정 화면으로 이동
navigateTo('emotion-screen');

// 앨범 화면으로 이동
navigateTo('album-screen');

// 모든 감정 데이터 조회
JSON.parse(localStorage.getItem('woorijib_emotions'));

// 모든 미디어 데이터 조회
JSON.parse(localStorage.getItem('woorijib_media'));

// 데이터 초기화 (주의!)
localStorage.clear();
```

## 📱 반응형 디자인

- **모바일**: 전체 화면 사용 (기본)
- **태블릿/데스크톱**: iPhone 스타일 프레임 (430px, 932px)
  - 화면 중앙 배치
  - 둥근 모서리 효과
  - 그림자 효과

## 🎯 향후 개선 계획

### Phase 1: 기능 확장
- [ ] 실시간 알림 시스템
- [ ] 이미지 필터링/편집 기능
- [ ] 비디오 업로드 지원
- [ ] 음성 녹음 기능

### Phase 2: 백엔드 연동
- [ ] Mock API → 실제 REST API 연동
- [ ] JWT 인증 구현
- [ ] WebSocket을 통한 실시간 업데이트
- [ ] S3 직접 업로드

### Phase 3: React Native 마이그레이션
- [ ] 웹 프로토타입 → React Native 컴포넌트 변환
- [ ] 네이티브 기능 통합 (카메라, 푸시 알림)
- [ ] Zustand 전역 상태 관리
- [ ] React Query 데이터 페칭

## 🤝 기여 가이드

### 새로운 화면 추가 시:
1. `index.html`에 새 화면 `<div>` 추가
2. `styles.css`에 해당 화면 스타일 추가
3. `script.js`에 네비게이션 로직 추가
4. 필요시 `api-mock.js`에 새 API 엔드포인트 추가

### Mock API 확장 시:
1. `api-mock.js`의 해당 서비스 객체 수정
2. LocalStorage 키 정의
3. 응답 포맷 준수 (`apiResponse()` 사용)
4. 에러 핸들링 추가

## 📞 문의

프로젝트 관련 문의사항이나 버그 리포트는 이슈 트래커를 이용해주세요.

---

**우리집** - 가족의 마음을 연결합니다 ❤️

Generated with Claude Code
