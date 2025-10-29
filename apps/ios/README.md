# Woorijib iOS App

Swift/SwiftUI 기반의 우리집 iOS 애플리케이션

## 요구사항

- iOS 14.0+
- Xcode 15.0+
- Swift 5.9+
- CocoaPods 1.14+

## 설치

```bash
# CocoaPods 설치 (처음 한번만)
sudo gem install cocoapods

# 의존성 설치
cd apps/ios
pod install

# Xcode에서 워크스페이스 열기
open Woorijib.xcworkspace
```

## 아키텍처

```
Woorijib/
├── App/
│   ├── WoorijibApp.swift          # 앱 진입점
│   └── AppDelegate.swift           # AppDelegate
├── Core/
│   ├── Network/                    # 네트워크 레이어
│   ├── Storage/                    # 로컬 저장소
│   ├── Utils/                      # 유틸리티
│   └── Extensions/                 # 확장
├── Models/                         # 데이터 모델
├── ViewModels/                     # 뷰 모델 (MVVM)
├── Views/                          # SwiftUI 뷰
│   ├── Home/
│   ├── Questions/
│   ├── Pet/
│   ├── Album/
│   └── Profile/
├── Components/                     # 재사용 가능한 컴포넌트
│   ├── Buttons/
│   ├── Cards/
│   └── TextFields/
├── Resources/
│   ├── Assets.xcassets            # 이미지 에셋
│   ├── Colors.xcassets            # 컬러 에셋
│   └── Localizable.strings        # 다국어
└── Info.plist
```

## 주요 기술

- **UI Framework**: SwiftUI
- **Architecture**: MVVM + Combine
- **Networking**: URLSession + Combine
- **Local Storage**: CoreData + UserDefaults
- **Image Loading**: Kingfisher
- **Analytics**: Firebase Analytics
- **Crash Reporting**: Firebase Crashlytics
- **Push Notifications**: Firebase Cloud Messaging

## 개발

### 빌드 구성

- **Debug**: 개발용 빌드
- **Staging**: 스테이징 환경
- **Release**: 프로덕션 빌드

### 코딩 컨벤션

- Swift Style Guide 준수
- SwiftLint를 통한 코드 스타일 체크
- 네이밍: 명확하고 설명적인 이름 사용

### 테스트

```bash
# 유닛 테스트 실행
xcodebuild test -workspace Woorijib.xcworkspace -scheme Woorijib -destination 'platform=iOS Simulator,name=iPhone 15'

# UI 테스트 실행
xcodebuild test -workspace Woorijib.xcworkspace -scheme WoorijibUITests -destination 'platform=iOS Simulator,name=iPhone 15'
```

## 배포

### TestFlight

```bash
# Archive 생성
xcodebuild archive -workspace Woorijib.xcworkspace -scheme Woorijib -archivePath ./build/Woorijib.xcarchive

# IPA 생성 및 업로드
xcodebuild -exportArchive -archivePath ./build/Woorijib.xcarchive -exportPath ./build -exportOptionsPlist ExportOptions.plist
```

### App Store

1. Xcode에서 Archive 생성
2. Organizer에서 Validate
3. Upload to App Store
4. App Store Connect에서 TestFlight/Release 설정

## 문서

- [iOS 개발 가이드](../../docs/ios-development.md)
- [디자인 시스템](../../docs/design-system/ios.md)
- [API 연동 가이드](../../docs/api-integration.md)

## 라이선스

Proprietary - All Rights Reserved
