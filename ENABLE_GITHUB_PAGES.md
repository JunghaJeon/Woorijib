# 🚀 GitHub Pages 활성화 - 상세 가이드

## 현재 상태
- ✅ 코드 푸시 완료
- ✅ `docs/` 폴더 준비 완료
- ⏳ **GitHub Pages 설정 필요** ← 이 단계를 진행해주세요!

## 📋 지금 바로 따라하세요 (5분 소요)

### 1단계: GitHub 저장소 페이지 열기

브라우저에서 다음 링크를 클릭하세요:

**🔗 https://github.com/JunghaJeon/Woorijib**

### 2단계: Settings 메뉴로 이동

- 저장소 페이지 상단에 있는 **Settings** 탭 클릭
- (Code, Issues, Pull requests 옆에 있는 톱니바퀴 아이콘)

### 3단계: Pages 설정으로 이동

- 왼쪽 사이드바에서 아래로 스크롤
- **"Pages"** 메뉴 찾아서 클릭
- 또는 직접 이동: **🔗 https://github.com/JunghaJeon/Woorijib/settings/pages**

### 4단계: Build and deployment 설정

**"Source" 섹션:**
- 드롭다운 메뉴 클릭
- **"Deploy from a branch"** 선택

**"Branch" 섹션:**
- 첫 번째 드롭다운: **main** 선택
- 두 번째 드롭다운: **/ docs** 선택 (중요!)
- 오른쪽의 파란색 **Save** 버튼 클릭

### 5단계: 배포 대기 (1-2분)

설정을 저장하면:
1. 페이지 상단에 파란색 알림 표시:
   ```
   GitHub Pages source saved.
   ```

2. GitHub Actions가 자동으로 배포 시작
   - Actions 탭에서 진행 상황 확인 가능
   - 🔗 https://github.com/JunghaJeon/Woorijib/actions

3. 배포 완료 시 녹색 체크마크와 함께 URL 표시:
   ```
   ✓ Your site is live at https://junghajeon.github.io/Woorijib/
   ```

### 6단계: 사이트 접속 확인

브라우저에서 다음 URL로 이동:

**🌐 https://junghajeon.github.io/Woorijib/**

## ✅ 체크리스트

설정하면서 이 항목들을 확인하세요:

- [ ] GitHub 저장소 Settings 페이지 접속
- [ ] 왼쪽 사이드바에서 "Pages" 클릭
- [ ] Source: "Deploy from a branch" 선택
- [ ] Branch: "main" 선택
- [ ] Folder: "/docs" 선택 (**루트(/)가 아님!**)
- [ ] Save 버튼 클릭
- [ ] 1-2분 대기
- [ ] https://junghajeon.github.io/Woorijib/ 접속 확인

## 🎯 주의사항

### ⚠️ 반드시 "/docs" 폴더 선택!

Branch 설정에서 두 개의 드롭다운이 있습니다:
- 첫 번째: `main` (브랜치)
- 두 번째: **`/ docs`** (폴더) ← 이것을 선택해야 합니다!

`/ (root)` 를 선택하면 작동하지 않습니다!

### 🕐 배포 시간

- 처음 활성화: 1-2분
- 이후 업데이트: 30초-1분
- 캐시 때문에 즉시 반영 안 될 수 있음

## 🔍 문제 해결

### "404 - File not found" 에러가 나오는 경우

1. **설정 재확인**
   ```
   Settings > Pages 페이지로 이동
   Branch: main
   Folder: /docs (루트 아님!)
   ```

2. **Actions 확인**
   ```
   Actions 탭에서 "pages build and deployment" 워크플로우 확인
   빨간 X가 있으면 클릭해서 에러 로그 확인
   ```

3. **강제 재배포**
   ```bash
   # 터미널에서 실행
   cd /Users/jungha/my-project
   git commit --allow-empty -m "trigger: GitHub Pages 재배포"
   git push origin main
   ```

### "Your site is ready to be published" 메시지만 보이는 경우

- 아직 배포 중입니다
- Actions 탭에서 진행 상황 확인
- 노란색 점: 배포 중
- 녹색 체크: 배포 완료
- 빨간 X: 에러 발생

### 캐시 문제

브라우저 캐시를 삭제하고 다시 시도:
- **Chrome/Edge**: Ctrl+Shift+Delete (Windows) / Cmd+Shift+Delete (Mac)
- **Safari**: Cmd+Option+E
- 또는 시크릿/프라이빗 모드로 접속

## 📱 배포 완료 후 테스트

### 데스크톱
```
https://junghajeon.github.io/Woorijib/
```
- "시작하기" 버튼 클릭
- 홈 화면 → "오늘의 감정" 카드 클릭
- 감정 선택 → 감정 기록하기

### 모바일
- 같은 URL을 스마트폰에서 접속
- 터치 인터랙션 확인
- "홈 화면에 추가"로 앱처럼 사용 가능

### 주요 기능 체크
- ✅ 랜딩 페이지 → 시작하기
- ✅ 홈 화면 표시
- ✅ 감정 체크인 화면
- ✅ 가족 앨범 화면
- ✅ 우리펫 화면
- ✅ 하단 네비게이션 작동

## 🎨 현재 배포된 파일들

```
docs/
├── index.html          # 메인 페이지
├── styles.css          # 스타일시트
├── script.js           # JavaScript
├── api-mock.js         # Mock API
├── README.md           # 문서
├── IMPROVEMENTS.md     # 개선 사항
├── 404.html            # 404 페이지
└── .nojekyll           # Jekyll 비활성화
```

## 📞 여전히 안 되나요?

다음 정보를 확인해주세요:

1. **현재 설정 확인**
   - GitHub Settings > Pages 스크린샷
   - 어떤 에러 메시지가 보이는지

2. **Actions 로그 확인**
   - https://github.com/JunghaJeon/Woorijib/actions
   - 가장 최근 워크플로우 클릭
   - 에러 로그 복사

3. **브라우저 개발자 도구**
   - F12 키 누르기
   - Console 탭의 에러 메시지
   - Network 탭에서 404 파일 확인

## 💡 빠른 확인 명령어

터미널에서 실행하여 상태 확인:

```bash
# 1. docs 폴더 파일 확인
ls -la /Users/jungha/my-project/docs/

# 2. GitHub에 푸시된 파일 확인
cd /Users/jungha/my-project
git ls-tree -r main --name-only | grep "^docs/"

# 3. 원격 저장소 동기화 상태 확인
git fetch origin
git status

# 4. 사이트 응답 확인
curl -I https://junghajeon.github.io/Woorijib/
```

---

**설정 완료 후 알려주세요!**
그러면 함께 사이트를 테스트해보겠습니다. 🚀

**우리집** - 가족의 마음을 연결합니다 ❤️
