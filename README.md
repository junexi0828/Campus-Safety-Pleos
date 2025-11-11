# 🚨 교내 안전 통합 관리 플랫폼

> 현대자동차 Pleos Connect SDK 기반 스마트 캠퍼스 안전 시스템

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Android%20Automotive-orange.svg)](https://source.android.com/devices/automotive)
[![SDK](https://img.shields.io/badge/SDK-Pleos%20Connect%20v2.0.5-green.svg)](https://pleos.ai)

## 📖 프로젝트 개요

대학 캠퍼스의 안전을 종합적으로 관리하는 실시간 안전 응답 플랫폼입니다. 학생이 위험 상황을 신고하면 순찰 차량이 즉시 알림을 받고 현장에 출동할 수 있도록 지원합니다.

### 핵심 가치 제안

**"5분 이내 순찰차 현장 도착"** - 기존 대비 70% 응답 시간 단축

### 주요 기능

- 🚨 **위험신호 송출**: 학생이 앱으로 위험 상황 신고 (사진, 위치, 설명)
- 📍 **실시간 위치 추적**: 순찰 차량의 GPS 위치 실시간 업데이트
- 🔔 **즉시 알림**: 신고 즉시 순찰차 앱에 푸시 알림
- 📊 **통합 대시보드**: 행정안전부 담당자의 통합 모니터링 화면
- ✅ **대응 상태 관리**: 신고 → 접수 → 현장 출동 → 처리 완료 추적

## 🏗️ 시스템 아키텍처

```
[학생 모바일 앱] → [Backend API] → [PostgreSQL]
                          ↓
                   [FCM Push Notification]
                          ↓
[순찰 차량 앱] ← [Pleos Connect SDK] ← [웹 대시보드]
```

## 🛠️ 기술 스택

| 계층             | 기술                                      |
| ---------------- | ----------------------------------------- |
| **모바일 앱**    | Kotlin, Android Studio, Pleos Connect SDK |
| **Backend**      | Node.js/Express 또는 Python/FastAPI       |
| **데이터베이스** | PostgreSQL                                |
| **실시간 통신**  | Firebase FCM, WebSocket                   |
| **웹 대시보드**  | React.js, Google Maps API                 |
| **클라우드**     | AWS (EC2, RDS)                            |
| **보안**         | JWT, SSL/TLS, RBAC                        |

## 📁 프로젝트 구조

```
pleos/
├── docs/                    # 프로젝트 문서
│   ├── PROJECT_ANALYSIS.md # 방향성 분석
│   ├── ARCHITECTURE.md      # 시스템 아키텍처
│   └── API.md              # API 명세서
├── user-story-map/         # 유저 스토리맵 (React)
├── mobile-app/             # 학생용 모바일 앱
├── vehicle-app/            # 순찰차용 앱 (Pleos)
├── backend/                 # Backend 서버
├── dashboard/               # 웹 대시보드
├── infrastructure/         # 인프라 설정 (Docker, AWS)
└── tests/                  # 통합 테스트
```

## 🚀 시작하기

### 사전 요구사항

- Android Studio (최신 버전)
- Pleos Connect SDK v2.0.5
- Node.js 18+ 또는 Python 3.10+
- PostgreSQL 14+
- AWS 계정 (배포 시)

### 설치 및 실행

자세한 설치 가이드는 [docs/SETUP.md](docs/SETUP.md)를 참고하세요.

## 📅 개발 로드맵

- [x] 프로젝트 기획 및 방향성 수립
- [ ] Phase 1: 기초 구축 (Month 1)
  - [ ] SDK 학습 및 개발 환경 설정
  - [ ] Android 앱 기본 구조 개발
  - [ ] Backend API 기초 구축
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

## 👥 팀 구성

- **PM**: 일정 관리, 이해관계자 소통
- **Android Dev**: 사용자 앱, 순찰차 앱 개발
- **Backend Dev**: API 서버, 데이터베이스
- **Frontend Dev**: 웹 대시보드
- **DevOps/QA**: 배포, 테스트, 모니터링

## 📊 성과 지표

### 기술적 목표

- 시스템 가용성: 99% 이상
- 알림 전달 시간: < 2초
- 위치 정확도: 오차 < 10m
- 응답 시간: < 500ms

### 운영 목표

- 평균 대응 시간: 5분 이내
- 신고 접수율: > 95%
- 사용자 만족도: 4.0/5.0 이상

## 📚 문서

- [프로젝트 방향성 분석](PROJECT_ANALYSIS.md)
- [유저 스토리맵](user-story-map/README.md)
- [시스템 아키텍처](docs/ARCHITECTURE.md)
- [API 명세서](docs/API.md)
- [개발 환경 설정](docs/SETUP.md)
- [기여 가이드](CONTRIBUTING.md)

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면 [CONTRIBUTING.md](CONTRIBUTING.md)를 참고하세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

## 🔗 관련 링크

- [Pleos Playground](https://pleos.ai)
- [Android Automotive OS 문서](https://source.android.com/devices/automotive)
- [프로젝트 보고서](Campus-Safety-Final-Report.md)

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.

---

**Made with ❤️ for Campus Safety**
