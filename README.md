# 🚨 교내 안전 통합 관리 플랫폼

<div align="center">

**현대자동차 Pleos Connect SDK 기반 스마트 캠퍼스 안전 시스템**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Android%20Automotive-orange.svg)](https://source.android.com/devices/automotive)
[![SDK](https://img.shields.io/badge/SDK-Pleos%20Connect%20v2.0.5-green.svg)](https://pleos.ai)
[![Status](https://img.shields.io/badge/status-Active%20Development-brightgreen.svg)](https://github.com/junexi0828/Campus-Safety-Pleos)

</div>

---

## 📖 프로젝트 개요

대학 캠퍼스의 안전을 종합적으로 관리하는 실시간 안전 응답 플랫폼입니다. 학생이 위험 상황을 신고하면 순찰 차량이 즉시 알림을 받고 현장에 출동할 수 있도록 지원합니다.

### 🎯 핵심 가치 제안

**"5분 이내 순찰차 현장 도착"** - 기존 대비 70% 응답 시간 단축

### 주요 기능

| 기능                    | 설명                                            |
| ----------------------- | ----------------------------------------------- |
| 🚨 **위험신호 송출**    | 학생이 앱으로 위험 상황 신고 (사진, 위치, 설명) |
| 📍 **실시간 위치 추적** | 순찰 차량의 GPS 위치 실시간 업데이트            |
| 🔔 **즉시 알림**        | 신고 즉시 순찰차 앱에 푸시 알림                 |
| 📊 **통합 대시보드**    | 행정안전부 담당자의 통합 모니터링 화면          |
| ✅ **대응 상태 관리**   | 신고 → 접수 → 현장 출동 → 처리 완료 추적        |

---

## 🏗️ 시스템 아키텍처

```
┌─────────────────┐
│  학생 모바일 앱  │
│   (Android)     │
└────────┬────────┘
         │ HTTP/HTTPS
         │ (위험신호 + GPS + 사진)
         ↓
┌─────────────────┐
│  Backend API     │
│  (Node.js/Python)│
└────────┬────────┘
         │
         ├──→ PostgreSQL (구조화 데이터)
         │
         ├──→ Firebase FCM (푸시 알림)
         │
         └──→ WebSocket (실시간 업데이트)
                 │
                 ↓
┌─────────────────┐      ┌─────────────────┐
│ 순찰 차량 앱     │      │  웹 대시보드     │
│ (Pleos/AAOS)    │      │  (React.js)      │
└─────────────────┘      └─────────────────┘
```

---

## 🛠️ 기술 스택

| 계층             | 기술                                      | 용도                          |
| ---------------- | ----------------------------------------- | ----------------------------- |
| **모바일 앱**    | Kotlin, Android Studio, Pleos Connect SDK | 위험신호 발송, 순찰차 알림    |
| **Backend**      | Node.js/Express 또는 Python/FastAPI       | REST API, 데이터 처리         |
| **데이터베이스** | PostgreSQL                                | 신고, 위치, 상태 데이터       |
| **실시간 통신**  | Firebase FCM, WebSocket                   | 푸시 알림, 실시간 위치 동기화 |
| **웹 대시보드**  | React.js, Google Maps API                 | 통합 모니터링 화면            |
| **클라우드**     | AWS (EC2, RDS)                            | 서버 배포 및 호스팅           |
| **보안**         | JWT, SSL/TLS, RBAC                        | 인증, 암호화, 권한 관리       |

---

## 📁 프로젝트 구조

```
pleos/
├── docs/                    # 프로젝트 문서
│   ├── project/            # 프로젝트 관리 문서
│   │   ├── analysis.md    # 방향성 분석
│   │   └── structure.md   # 프로젝트 구조
│   ├── reports/           # 프로젝트 보고서
│   │   ├── final-report.md    # 최종 종합 보고서
│   │   └── pleos-report.md    # 전체 종합 보고서
│   ├── ARCHITECTURE.md    # 시스템 아키텍처
│   ├── API.md            # API 명세서
│   └── SETUP.md          # 개발 환경 설정
├── user-story-map/         # 유저 스토리맵 (React)
├── mobile-app/             # 학생용 모바일 앱
├── vehicle-app/            # 순찰차용 앱 (Pleos)
├── backend/                 # Backend 서버
├── dashboard/               # 웹 대시보드
├── infrastructure/         # 인프라 설정 (Docker, AWS)
└── tests/                  # 통합 테스트
```

> 📖 **자세한 구조 설명**: [프로젝트 구조 문서](docs/project/structure.md)

---

## 🚀 빠른 시작

### 사전 요구사항

- Android Studio (최신 버전)
- Pleos Connect SDK v2.0.5
- Node.js 18+ 또는 Python 3.10+
- PostgreSQL 14+
- AWS 계정 (배포 시)

### 설치 및 실행

자세한 설치 가이드는 [docs/SETUP.md](docs/SETUP.md)를 참고하세요.

## 📅 개발 로드맵

### ✅ 완료된 작업

- [x] 프로젝트 기획 및 방향성 수립
- [x] GitHub 프로젝트 구조 구축
- [x] 문서화 체계 구축

### 🚧 진행 중

- [ ] Phase 1: 기초 구축 (Month 1)
  - [ ] SDK 학습 및 개발 환경 설정
  - [ ] Android 앱 기본 구조 개발
  - [ ] Backend API 기초 구축

### 📋 계획됨

- [ ] Phase 2: 핵심 기능 개발 (Month 2)
  - [ ] Fused Location SDK 연동
  - [ ] FCM 푸시 알림 시스템
  - [ ] 순찰차 앱 알림 UI
- [ ] Phase 3: 통합 및 최적화 (Month 3)
  - [ ] 웹 대시보드 개발
  - [ ] 전체 시스템 통합 테스트
  - [ ] 성능 최적화 및 보안 강화
- [ ] Phase 4: 검증 및 배포 (Month 4)
  - [ ] 실제 캠퍼스 환경 테스트
  - [ ] AWS 클라우드 배포
  - [ ] 사용자 교육 및 최종 점검

---

## 👥 팀 구성

| 역할             | 책임                       | 필요 기술                 |
| ---------------- | -------------------------- | ------------------------- |
| **PM**           | 일정 관리, 이해관계자 소통 | 프로젝트 관리             |
| **Android Dev**  | 사용자 앱, 순찰차 앱 개발  | Kotlin, Pleos SDK         |
| **Backend Dev**  | API 서버, 데이터베이스     | Node.js, PostgreSQL       |
| **Frontend Dev** | 웹 대시보드                | React.js, Google Maps API |
| **DevOps/QA**    | 배포, 테스트, 모니터링     | AWS, 자동화 테스트        |

---

## 📊 성과 지표

### 기술적 목표

| 지표           | 목표       | 측정 방법     |
| -------------- | ---------- | ------------- |
| 시스템 가용성  | 99% 이상   | 모니터링 도구 |
| 알림 전달 시간 | < 2초      | 실시간 로깅   |
| 위치 정확도    | 오차 < 10m | GPS 검증      |
| 응답 시간      | < 500ms    | 성능 테스트   |

### 운영 목표

| 지표           | 목표         | 측정 방법        |
| -------------- | ------------ | ---------------- |
| 평균 대응 시간 | 5분 이내     | 신고 데이터 분석 |
| 신고 접수율    | > 95%        | 시스템 로그      |
| 사용자 만족도  | 4.0/5.0 이상 | 설문 조사        |

---

## 📚 문서

프로젝트의 모든 문서는 `docs/` 디렉토리에 체계적으로 정리되어 있습니다.

### 🚀 빠른 시작

- [개발 환경 설정](docs/SETUP.md) - 프로젝트 개발 환경 구축 가이드
- [시스템 아키텍처](docs/ARCHITECTURE.md) - 전체 시스템 구조 및 컴포넌트 설명
- [API 명세서](docs/API.md) - Backend API 엔드포인트 및 사용 방법

### 📋 프로젝트 관리

- [프로젝트 방향성 분석](docs/project/analysis.md) - 두 보고서 비교 및 권장 방향성
- [프로젝트 구조](docs/project/structure.md) - 디렉토리 구조 및 개발 워크플로우
- [유저 스토리맵](user-story-map/README.md) - 사용자 관점 기능 시각화

### 📊 프로젝트 보고서

- [최종 종합 보고서](docs/reports/final-report.md) - MVP 중심 실행 계획 (권장)
- [전체 종합 보고서](docs/reports/pleos-report.md) - 상세 기술 사양 및 확장 계획

### 🤝 기여 및 가이드

- [기여 가이드](CONTRIBUTING.md) - 코드 기여 방법 및 코딩 스타일
- [라이선스](LICENSE) - MIT 라이선스

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면 [CONTRIBUTING.md](CONTRIBUTING.md)를 참고하세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

---

## 🔗 관련 링크

### 외부 리소스

- [Pleos Playground](https://pleos.ai) - Pleos Connect SDK 공식 사이트
- [Android Automotive OS 문서](https://source.android.com/devices/automotive) - AAOS 개발 가이드
- [Firebase 문서](https://firebase.google.com/docs) - FCM 푸시 알림 설정

### 프로젝트 문서

- [프로젝트 방향성 분석](docs/project/analysis.md) - 프로젝트 전략 및 우선순위
- [최종 보고서](docs/reports/final-report.md) - 프로젝트 계획 및 일정
- [문서 인덱스](docs/README.md) - 모든 문서의 체계적 정리

---

## 📞 문의

프로젝트 관련 문의사항이 있으시면 [이슈를 등록](https://github.com/junexi0828/Campus-Safety-Pleos/issues)해주세요.

---

<div align="center">

**Made with ❤️ for Campus Safety**

[⬆ 맨 위로 이동](#-교내-안전-통합-관리-플랫폼)

</div>
