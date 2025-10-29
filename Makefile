.PHONY: help install dev up down logs clean test

help: ## 도움말 표시
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## 모든 서비스의 의존성 설치
	@echo "Installing mobile app dependencies..."
	cd apps/mobile && npm install
	@echo "Installing auth service dependencies..."
	cd services/auth-service && npm install
	@echo "Installing family service dependencies..."
	cd services/family-service && npm install
	@echo "Installing media service dependencies..."
	cd services/media-service && npm install
	@echo "Installing notification service dependencies..."
	cd services/notification-service && npm install
	@echo "Installing question service dependencies..."
	cd services/question-service && pip install -r requirements.txt
	@echo "✅ All dependencies installed!"

dev: ## 개발 모드로 모든 서비스 시작 (Docker Compose)
	docker-compose up -d

up: dev ## dev 명령어 별칭

down: ## 모든 서비스 중지
	docker-compose down

logs: ## 서비스 로그 확인
	docker-compose logs -f

clean: ## Docker 볼륨 포함 모든 컨테이너 삭제
	docker-compose down -v
	@echo "✅ All containers and volumes removed!"

restart: ## 모든 서비스 재시작
	docker-compose restart

test: ## 모든 서비스 테스트 실행
	@echo "Testing mobile app..."
	cd apps/mobile && npm test
	@echo "Testing auth service..."
	cd services/auth-service && npm test
	@echo "Testing question service..."
	cd services/question-service && pytest
	@echo "✅ All tests passed!"

lint: ## 모든 서비스 린트 실행
	@echo "Linting mobile app..."
	cd apps/mobile && npm run lint
	@echo "Linting auth service..."
	cd services/auth-service && npm run lint
	@echo "✅ All linting passed!"

db-migrate: ## 데이터베이스 마이그레이션 실행
	docker-compose exec postgres psql -U postgres -d woorijib -f /docker-entrypoint-initdb.d/01_init_schema.sql
	@echo "✅ Database migration completed!"

db-seed: ## 시드 데이터 삽입
	docker-compose exec postgres psql -U postgres -d woorijib -f /docker-entrypoint-initdb.d/01_seed_test_data.sql
	docker-compose exec mongodb mongosh /docker-entrypoint-initdb.d/init_collections.js
	@echo "✅ Seed data inserted!"

mobile-ios: ## iOS 앱 실행
	cd apps/mobile && npm run ios

mobile-android: ## Android 앱 실행
	cd apps/mobile && npm run android

ps: ## 실행 중인 컨테이너 확인
	docker-compose ps

stats: ## 컨테이너 리소스 사용량 확인
	docker stats

