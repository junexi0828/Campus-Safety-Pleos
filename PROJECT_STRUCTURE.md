# 프로젝트 구조

> 이 문서는 프로젝트의 디렉토리 구조와 각 디렉토리의 역할을 설명합니다.

## 📁 전체 디렉토리 구조

```
pleos/
├── .github/                    # GitHub 설정
│   ├── ISSUE_TEMPLATE/         # Issue 템플릿
│   ├── workflows/              # GitHub Actions
│   ├── CODEOWNERS             # 코드 리뷰어 지정
│   └── PULL_REQUEST_TEMPLATE.md
│
├── docs/                       # 프로젝트 문서
│   ├── ARCHITECTURE.md        # 시스템 아키텍처
│   ├── API.md                 # API 명세서
│   └── SETUP.md               # 개발 환경 설정
│
├── mobile-app/                 # 학생용 모바일 앱 (Android)
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/      # Kotlin 소스 코드
│   │   │   │   ├── res/       # 리소스 파일
│   │   │   │   └── AndroidManifest.xml
│   │   │   └── test/          # 단위 테스트
│   │   └── build.gradle
│   └── build.gradle
│
├── vehicle-app/                # 순찰차용 앱 (Pleos/AAOS)
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/      # Kotlin 소스 코드
│   │   │   │   ├── res/       # 리소스 파일
│   │   │   │   └── AndroidManifest.xml
│   │   │   └── test/          # 단위 테스트
│   │   └── build.gradle
│   └── build.gradle
│
├── backend/                     # Backend 서버
│   ├── src/
│   │   ├── routes/            # API 라우트
│   │   ├── models/            # 데이터 모델
│   │   ├── services/          # 비즈니스 로직
│   │   ├── middleware/        # 미들웨어
│   │   └── utils/             # 유틸리티 함수
│   ├── tests/                 # 테스트
│   ├── package.json           # 또는 requirements.txt
│   └── .env.example          # 환경 변수 예시
│
├── dashboard/                   # 웹 대시보드 (React)
│   ├── src/
│   │   ├── components/        # React 컴포넌트
│   │   ├── pages/             # 페이지
│   │   ├── services/          # API 서비스
│   │   ├── hooks/             # Custom Hooks
│   │   └── utils/             # 유틸리티
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
│
├── infrastructure/             # 인프라 설정
│   ├── docker/                # Docker 설정
│   │   ├── Dockerfile
│   │   └── docker-compose.yml
│   ├── aws/                   # AWS 설정
│   │   ├── terraform/         # Terraform 스크립트
│   │   └── cloudformation/   # CloudFormation 템플릿
│   └── kubernetes/            # Kubernetes 설정 (선택)
│
├── tests/                       # 통합 테스트
│   ├── e2e/                   # End-to-End 테스트
│   └── integration/           # 통합 테스트
│
├── scripts/                     # 유틸리티 스크립트
│   ├── setup.sh               # 초기 설정 스크립트
│   └── deploy.sh              # 배포 스크립트
│
├── .gitignore                  # Git 무시 파일
├── LICENSE                     # 라이선스
├── README.md                   # 프로젝트 메인 README
├── CONTRIBUTING.md            # 기여 가이드
├── PROJECT_ANALYSIS.md        # 방향성 분석
├── PROJECT_STRUCTURE.md       # 이 파일
│
└── Campus-Safety-Final-Report.md    # 프로젝트 보고서
    Campus-Safety-Pleos-Report.md
```

## 📂 디렉토리 상세 설명

### `.github/`
GitHub 관련 설정 파일
- **ISSUE_TEMPLATE/**: 버그 리포트, 기능 요청 등 Issue 템플릿
- **workflows/**: CI/CD 파이프라인 (GitHub Actions)
- **CODEOWNERS**: 코드 리뷰어 자동 지정
- **PULL_REQUEST_TEMPLATE.md**: PR 템플릿

### `docs/`
프로젝트 문서
- **ARCHITECTURE.md**: 시스템 아키텍처 설명
- **API.md**: API 명세서
- **SETUP.md**: 개발 환경 설정 가이드

### `mobile-app/`
학생용 Android 모바일 앱
- 위험신호 송출 기능
- 위치 공유 기능
- 신고 상태 조회 기능

### `vehicle-app/`
순찰차용 Android Automotive 앱
- Pleos Connect SDK 연동
- 신고 알림 수신
- 위치 추적 및 전송
- 대응 상태 업데이트

### `backend/`
Backend API 서버
- REST API 엔드포인트
- 데이터베이스 연동
- 푸시 알림 발송
- 인증 및 권한 관리

### `dashboard/`
웹 대시보드 (React + TypeScript)
- 통합 모니터링 화면
- 실시간 데이터 시각화
- 신고 현황 관리

### `infrastructure/`
인프라 설정 및 배포 스크립트
- Docker 컨테이너 설정
- AWS 클라우드 설정
- CI/CD 파이프라인

### `tests/`
통합 테스트 및 E2E 테스트

### `scripts/`
유틸리티 스크립트
- 초기 설정
- 배포 자동화
- 데이터 마이그레이션

## 🎯 개발 워크플로우

### 새로운 기능 개발
1. `develop` 브랜치에서 `feature/feature-name` 브랜치 생성
2. 해당 디렉토리에서 개발
3. 테스트 작성 및 실행
4. PR 생성 및 코드 리뷰
5. `develop` 브랜치로 머지

### 버그 수정
1. `develop` 브랜치에서 `fix/bug-name` 브랜치 생성
2. 버그 수정 및 테스트
3. PR 생성 및 코드 리뷰
4. `develop` 브랜치로 머지

### 배포
1. `develop` 브랜치를 `main` 브랜치로 머지
2. GitHub Actions가 자동으로 빌드 및 배포
3. 배포 확인 및 모니터링

## 📝 네이밍 컨벤션

### 브랜치 네이밍
- `feature/feature-name`: 새로운 기능
- `fix/bug-name`: 버그 수정
- `docs/document-name`: 문서 업데이트
- `refactor/code-name`: 코드 리팩토링

### 커밋 메시지
- `feat: Add emergency report feature`
- `fix: Fix location tracking issue`
- `docs: Update API documentation`
- `refactor: Refactor authentication logic`

## 🔗 관련 문서

- [README.md](README.md): 프로젝트 개요
- [CONTRIBUTING.md](CONTRIBUTING.md): 기여 가이드
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): 시스템 아키텍처
- [docs/SETUP.md](docs/SETUP.md): 개발 환경 설정

