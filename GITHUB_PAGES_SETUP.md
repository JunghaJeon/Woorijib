# 🌐 GitHub Pages 설정 가이드

## ✅ 완료된 작업

1. ✅ `docs/` 폴더에 웹 프로토타입 파일 복사 완료
2. ✅ `.nojekyll` 파일 추가 (Jekyll 비활성화)
3. ✅ 404 페이지 생성
4. ✅ GitHub에 푸시 완료

## 🚀 GitHub Pages 활성화 방법

### 1단계: GitHub 저장소 설정 페이지 접속

1. 브라우저에서 다음 URL로 이동:
   ```
   https://github.com/JunghaJeon/Woorijib/settings/pages
   ```

2. 또는 다음 단계로 이동:
   - GitHub 저장소 페이지 (https://github.com/JunghaJeon/Woorijib)
   - 상단 메뉴에서 **Settings** 클릭
   - 왼쪽 사이드바에서 **Pages** 클릭

### 2단계: Source 설정

**Build and deployment** 섹션에서:

1. **Source** 드롭다운:
   - **"Deploy from a branch"** 선택

2. **Branch** 섹션:
   - 첫 번째 드롭다운: **`main`** 브랜치 선택
   - 두 번째 드롭다운: **`/docs`** 폴더 선택
   - **Save** 버튼 클릭

### 3단계: 배포 대기

- GitHub Actions가 자동으로 배포를 시작합니다
- 일반적으로 1-2분 정도 소요됩니다
- 페이지 상단에 다음과 같은 메시지가 표시됩니다:
  ```
  Your site is live at https://junghajeon.github.io/Woorijib/
  ```

### 4단계: 확인

배포가 완료되면 다음 URL에서 확인할 수 있습니다:

**🌐 라이브 URL**: https://junghajeon.github.io/Woorijib/

## 📋 설정 확인 체크리스트

- [ ] GitHub Settings → Pages 접속
- [ ] Source: "Deploy from a branch" 선택
- [ ] Branch: `main` 브랜치, `/docs` 폴더 선택
- [ ] Save 버튼 클릭
- [ ] 1-2분 대기
- [ ] 라이브 URL 접속하여 확인

## 🔧 문제 해결

### 배포가 안 되는 경우

1. **Actions 탭 확인**
   - https://github.com/JunghaJeon/Woorijib/actions
   - "pages build and deployment" 워크플로우 상태 확인
   - 오류가 있다면 로그 확인

2. **파일 경로 확인**
   ```bash
   # 로컬에서 확인
   cd /Users/jungha/my-project
   ls -la docs/
   # index.html, styles.css, script.js 등이 있어야 함
   ```

3. **브랜치 확인**
   ```bash
   git branch
   # main 브랜치에 있어야 함
   ```

### 404 에러가 발생하는 경우

- 브라우저 캐시 삭제 후 재시도
- 시크릿/프라이빗 모드로 접속 시도
- 5분 정도 더 기다린 후 재시도

### CSS/JS 파일이 로드 안 되는 경우

- `.nojekyll` 파일이 `docs/` 폴더에 있는지 확인
- 브라우저 개발자 도구 (F12) → Network 탭에서 404 오류 확인

## 🎉 배포 완료 후

### 테스트할 기능들

1. **랜딩 페이지**
   - "시작하기" 버튼 동작 확인

2. **홈 화면**
   - "오늘의 질문" 카드
   - "오늘의 감정" 카드 → 감정 체크인
   - "가족 앨범" 카드 → 앨범 화면

3. **하단 네비게이션**
   - 각 탭 이동 확인
   - 아이콘 및 뱃지 표시 확인

4. **모바일 반응형**
   - 스마트폰에서 접속
   - 레이아웃 및 터치 동작 확인

5. **데스크톱 뷰**
   - 아이폰 프레임 표시 확인
   - 중앙 정렬 확인

### 공유하기

이제 다음 URL을 공유할 수 있습니다:

```
https://junghajeon.github.io/Woorijib/
```

**공유 예시:**
- 이메일, 메신저로 링크 전송
- QR 코드 생성하여 공유
- README.md에 라이브 데모 링크 추가 완료

## 📱 모바일에서 테스트

### iOS (Safari)
```
https://junghajeon.github.io/Woorijib/
```
- "홈 화면에 추가"하면 앱처럼 사용 가능

### Android (Chrome)
```
https://junghajeon.github.io/Woorijib/
```
- 메뉴 → "홈 화면에 추가"

## 🔄 업데이트 방법

### 웹 프로토타입 수정 후 재배포

1. **파일 수정**
   ```bash
   cd /Users/jungha/my-project/apps/web-prototype
   # index.html, styles.css, script.js 등 수정
   ```

2. **docs 폴더에 복사**
   ```bash
   cd /Users/jungha/my-project
   cp -r apps/web-prototype/* docs/
   ```

3. **Git 커밋 및 푸시**
   ```bash
   git add docs/
   git commit -m "update: 웹 프로토타입 업데이트"
   git push origin main
   ```

4. **자동 재배포**
   - GitHub Actions가 자동으로 감지하고 재배포
   - 1-2분 후 변경사항 반영

## 💡 고급 설정 (선택사항)

### Custom Domain 연결

1. 도메인 구입 (예: woorijib.com)
2. GitHub Settings → Pages → Custom domain에 도메인 입력
3. DNS 설정:
   ```
   A Record:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153

   CNAME Record:
   junghajeon.github.io
   ```

### HTTPS 강제

- GitHub Settings → Pages
- "Enforce HTTPS" 체크박스 활성화

## 📊 Analytics 추가 (선택사항)

### Google Analytics

1. Google Analytics 계정 생성
2. Tracking ID 받기 (예: G-XXXXXXXXXX)
3. `docs/index.html`의 `<head>` 태그 안에 추가:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## 📞 지원

문제가 발생하거나 도움이 필요하면:

1. GitHub Issues: https://github.com/JunghaJeon/Woorijib/issues
2. GitHub Discussions: https://github.com/JunghaJeon/Woorijib/discussions
3. 이메일로 문의

---

**우리집** - 가족의 마음을 연결합니다 ❤️

🤖 Generated with Claude Code
