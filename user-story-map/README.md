# 유저 스토리맵 (User Story Map)

> 교내 안전 통합 관리 플랫폼의 유저 스토리맵

이 디렉토리는 프로젝트의 유저 스토리맵을 시각화하는 React 애플리케이션입니다.

## 📋 개요

유저 스토리맵은 프로젝트의 기능을 사용자 관점에서 시각화한 문서입니다. 각 사용자 유형(학생, 순찰차 운전자, 관리자, 기숙사 담당자)별로 기능을 정리하고 우선순위를 설정합니다.

## 🚀 실행 방법

### 사전 요구사항
- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173` (또는 표시된 포트)로 접속하세요.

## 📁 구조

```
user-story-map/
├── src/
│   ├── components/          # 스토리맵 컴포넌트
│   │   ├── StudentStoryMapSlide.tsx      # 학생 유저 스토리
│   │   ├── PatrolStoryMapSlide.tsx       # 순찰차 운전자 유저 스토리
│   │   ├── AdminStoryMapSlide.tsx        # 관리자 유저 스토리
│   │   ├── DormStoryMapSlide.tsx         # 기숙사 담당자 유저 스토리
│   │   ├── MVPPrioritySlide.tsx          # MVP 우선순위
│   │   ├── RoadmapSlide.tsx              # 로드맵
│   │   └── ...
│   ├── guidelines/         # 가이드라인
│   └── App.tsx             # 메인 앱
├── package.json
└── vite.config.ts
```

## 🎯 주요 기능

- **학생 유저 스토리**: 위험신호 송출, 위치 공유 등
- **순찰차 운전자 유저 스토리**: 신고 알림 수신, 위치 추적 등
- **관리자 유저 스토리**: 통합 모니터링, 현황 관리 등
- **기숙사 담당자 유저 스토리**: 당번별 알림, 지역별 상황 조회 등
- **MVP 우선순위**: Phase 1 핵심 기능 정의
- **로드맵**: 단계별 개발 계획

## 📚 참고 자료

원본 Figma 디자인: https://www.figma.com/design/gNYEyHhN6CyuNseMinSddM/Create-User-Story-Map

## 🔗 관련 문서

- [프로젝트 README](../README.md)
- [프로젝트 구조](../PROJECT_STRUCTURE.md)
- [프로젝트 분석](../PROJECT_ANALYSIS.md)
