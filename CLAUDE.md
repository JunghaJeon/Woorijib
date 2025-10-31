# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Woorijib (우리집) is a family communication app that helps family members understand each other better through:
- Daily customized questions for family engagement
- Gamification via "Famong" (family pet) system
- Generation-specific content for mutual understanding
- Privacy-first approach to family communication

## Architecture

**Microservices architecture** with:
- **Mobile App**: React Native (iOS & Android)
- **Backend Services**: 5 independent microservices
  - Auth Service (Node.js/Express, Port 3001): JWT auth, social login (Kakao/Naver/Google/Apple)
  - Family Service (Node.js/Express, Port 3002): Family management, member relations, pet data
  - Question Service (Python/FastAPI, Port 3003): Daily question generation, AI-based recommendations
  - Media Service (Node.js/Express, Port 3004): Image/video upload, S3 storage, CDN
  - Notification Service (Node.js/Express, Port 3005): Push notifications (FCM/APNS), Bull queue scheduling

**Databases**:
- PostgreSQL: Relational data (users, families, family_members, pets, emotions, invitations)
- MongoDB: Document data (questions, answers, missions)
- Redis: Caching, JWT blacklist, Bull queues

**Communication**:
- REST APIs for client-service and inter-service communication
- Message queues (Bull/Redis) for async operations

## Development Commands

### Initial Setup
```bash
make install              # Install all dependencies
cp .env.example .env      # Configure environment variables
```

### Running Services
```bash
make dev                  # Start all services with Docker Compose
make down                 # Stop all services
make restart              # Restart all services
```

### Database Operations
```bash
make db-migrate           # Run PostgreSQL migrations
make db-seed              # Insert seed data into PostgreSQL and MongoDB
```

### Mobile App
```bash
make mobile-ios           # Run iOS app (cd apps/mobile && npm run ios)
make mobile-android       # Run Android app (cd apps/mobile && npm run android)
```

### Testing
```bash
make test                 # Run all tests (Jest for Node.js, pytest for Python)
cd apps/mobile && npm test                    # Test mobile app
cd services/auth-service && npm test          # Test auth service
cd services/question-service && pytest        # Test question service
```

### Linting
```bash
make lint                 # Lint all services
cd apps/mobile && npm run lint                # Lint mobile app
cd services/auth-service && npm run lint      # Lint individual service
```

### Individual Service Commands
For Node.js services (auth-service, family-service, media-service, notification-service):
```bash
npm run dev               # Run in development mode with nodemon
npm run build             # Compile TypeScript to dist/
npm run typecheck         # Type checking without emitting files
npm test                  # Run tests with Jest
npm run test:coverage     # Run tests with coverage report (80% threshold)
```

For Python question-service:
```bash
uvicorn main:app --reload # Development server
pytest                    # Run tests
flake8 .                  # Lint code
```

### Monitoring
```bash
make logs                 # View logs from all services
make ps                   # Check running containers
make stats                # View container resource usage
```

### Cleanup
```bash
make clean                # Remove all containers and volumes
```

## Key Technical Details

### Service Ports
- 3001: Auth Service
- 3002: Family Service
- 3003: Question Service
- 3004: Media Service
- 3005: Notification Service
- 5432: PostgreSQL
- 27017: MongoDB
- 6379: Redis

### Database Relationships
```
users (1) ──── (N) family_members (N) ──── (1) families
                                                │
                                                └──── (1) pets
```

### Authentication Flow
- JWT-based authentication with refresh tokens
- Social login integration (Kakao, Naver, Google, Apple)
- Token blacklisting in Redis
- Passport.js strategies for social auth

### Question System Architecture
- Daily question generation scheduled at 8:00 AM
- AI/ML-based family customization using MongoDB data
- Answer storage supports text, photo, and voice formats
- Age-group and generation-based question targeting

### Testing Requirements
- Jest for JavaScript/TypeScript services (80% coverage threshold configured)
- pytest for Python services
- Test files: `*.test.ts` for TypeScript, `test_*.py` for Python

### Tech Stack Specifics
- **Mobile**: React Native 0.73, TypeScript, Zustand (state), React Query, React Navigation 6
- **Node.js Services**: Express, TypeScript, Sequelize (PostgreSQL ORM), Passport.js, Winston (logging)
- **Python Service**: FastAPI, MongoDB client, Pydantic models
- **Infrastructure**: Docker Compose (dev), AWS EKS (prod), GitHub Actions (CI/CD)

## Important Files & Directories

```
woorijib/
├── apps/mobile/                      # React Native mobile app
├── services/
│   ├── auth-service/                 # Authentication & social login
│   ├── family-service/               # Family & member management
│   ├── question-service/             # Question generation & answers
│   ├── media-service/                # Media upload & S3
│   └── notification-service/         # Push notifications & scheduling
├── database/
│   ├── init/                         # PostgreSQL schema scripts
│   ├── seeds/                        # Seed data
│   └── mongodb/init_collections.js   # MongoDB initialization
├── docker-compose.yml                # Local development environment
├── Makefile                          # Common commands
├── ARCHITECTURE.md                   # Detailed architecture documentation
└── Woorijib_PRD_v1.0.md             # Product requirements document
```

## Development Workflow

1. **Start databases and services**: `make dev`
2. **Verify services are running**: `make ps`
3. **Run migrations and seeds**: `make db-migrate && make db-seed`
4. **Start mobile development**: `make mobile-ios` or `make mobile-android`
5. **Watch logs during development**: `make logs`
6. **Run tests before committing**: `make test && make lint`

## Environment Configuration

Each service requires its own `.env` file. Key environment variables:
- **Auth Service**: JWT secrets, social login API keys, DB credentials
- **Question Service**: MongoDB URI, Redis connection
- **Media Service**: AWS credentials, S3 bucket name, CloudFront CDN
- **Notification Service**: FCM/APNS credentials, Redis connection

Copy `.env.example` files in each service directory and configure appropriately.

## Code Style & Standards

- **TypeScript**: ESLint + Prettier configured per service
- **Python**: Flake8 for linting
- Pre-commit hooks: lint-staged with Prettier and ESLint (configured in root package.json)
- Import validation and input validation enforced (express-validator for Node.js, Pydantic for Python)

## Security Considerations

- HTTPS/TLS 1.3 for all production traffic
- Bcrypt password hashing
- SQL injection prevention via prepared statements (Sequelize ORM)
- Rate limiting and CORS configured
- Helmet.js security headers
- JWT token rotation with refresh tokens

## Deployment

- **Development**: Local Docker Compose
- **Staging**: AWS EKS (automated via GitHub Actions on `develop` branch)
- **Production**: AWS EKS (automated via GitHub Actions on `main` branch)
- Blue-Green deployment strategy with automatic rollback on health check failures
