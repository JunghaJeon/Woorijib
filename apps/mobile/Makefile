.PHONY: help install clean android ios start test lint

help: ## 사용 가능한 명령어 보기
	@echo "우리집 Mobile App - Available Commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## 의존성 설치
	npm install
	cd ios && pod install && cd ..

clean: ## 빌드 캐시 삭제
	rm -rf node_modules
	rm -rf ios/Pods
	rm -rf ios/build
	rm -rf android/build
	rm -rf android/app/build

android: ## Android 앱 실행
	npm run android

ios: ## iOS 앱 실행
	npm run ios

start: ## Metro bundler 시작
	npm start

start-reset: ## Metro bundler 캐시 초기화 후 시작
	npm start -- --reset-cache

test: ## 테스트 실행
	npm test

test-coverage: ## 테스트 커버리지 확인
	npm run test:coverage

lint: ## 린트 실행
	npm run lint

lint-fix: ## 린트 자동 수정
	npm run lint -- --fix

type-check: ## TypeScript 타입 체크
	npm run type-check

# Android specific
android-clean: ## Android 빌드 정리
	cd android && ./gradlew clean && cd ..

android-build-debug: ## Android Debug APK 빌드
	cd android && ./gradlew assembleDebug && cd ..

android-build-release: ## Android Release AAB 빌드
	cd android && ./gradlew bundleRelease && cd ..

# iOS specific
ios-clean: ## iOS 빌드 정리
	cd ios && xcodebuild clean && cd ..

ios-pods: ## CocoaPods 재설치
	cd ios && pod deintegrate && pod install && cd ..

# Development
dev: start ## 개발 모드 시작

.DEFAULT_GOAL := help
