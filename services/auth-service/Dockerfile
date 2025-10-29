FROM node:18-alpine

WORKDIR /app

# 의존성 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm ci --only=production

# 소스 코드 복사
COPY . .

# TypeScript 빌드
RUN npm run build

# 로그 디렉토리 생성
RUN mkdir -p logs

# 포트 노출
EXPOSE 3001

# 앱 실행
CMD ["node", "dist/index.js"]

