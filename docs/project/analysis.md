# 프로젝트 방향성 분석 보고서

## 📊 두 보고서 비교 분석

### 1. Campus-Safety-Final-Report.md (최종 종합 보고서)

**특징**: MVP 중심, 실행 가능한 접근

**핵심 포인트**:

- ✅ **핵심 콘셉트**: "사용자 위험신호 → 즉시 순찰차 알림 → 실시간 위치 확인 및 대응"
- ✅ **Phase 1 우선순위**: 위험신호, 위치추적, 알림, 대시보드, 상태관리
- ✅ **HVAC 모니터링**: Phase 2 확장 기능으로 분류
- ✅ **팀 규모**: 5-6명 (더 효율적)
- ✅ **일정**: 4-5개월 (명확한 마일스톤)
- ✅ **목표**: 평균 5분 이내 순찰차 현장 도착 (70% 단축)

### 2. Campus-Safety-Pleos-Report.md (전체 종합 보고서)

**특징**: 포괄적, 상세한 기술 사양

**핵심 포인트**:

- 📋 **주요 기능**: HVAC 모니터링, 위치 추적, 민원 관리, 통합 대시보드
- 📋 **HVAC 모니터링**: Phase 1 주요 기능으로 포함
- 📋 **민원 관리**: 핵심 기능으로 강조
- 📋 **팀 규모**: 6-8명 (더 큰 규모)
- 📋 **일정**: 4-5개월 (더 상세한 단계별 계획)
- 📋 **목표**: 순찰 효율성 60% 향상, 민원 처리 70% 단축

---

## 🎯 권장 방향성

### 추천 전략: **MVP First, Expand Later**

**1단계: Final Report 기반 MVP 개발 (4-5개월)**

```
✅ Phase 1 핵심 기능 우선 개발
   - 위험신호 송출 (학생 앱)
   - 순찰차 위치 추적 (Fused Location SDK)
   - 실시간 알림 시스템 (FCM)
   - 통합 대시보드 (React + Google Maps)
   - 대응 상태 관리

⏸️ Phase 2는 MVP 완성 후 확장
   - HVAC 모니터링
   - 민원 관리 시스템
   - 순찰 경로 최적화
```

**이유**:

1. **실현 가능성**: MVP 중심으로 범위를 좁혀 성공 확률 향상
2. **빠른 검증**: 핵심 가치(안전 대응)를 먼저 검증 가능
3. **점진적 확장**: MVP 성공 후 HVAC, 민원 관리 등 추가
4. **리소스 효율**: 5-6명 팀으로도 충분히 개발 가능

---

## 📋 통합된 프로젝트 방향

### 핵심 가치 제안

**"5분 이내 순찰차 현장 도착"** - 이것이 프로젝트의 핵심 가치

### 기술 스택 (최종 결정)

```
Frontend (학생 앱)
├─ Kotlin + Android Studio
└─ Pleos Connect SDK (Fused Location SDK)

Frontend (순찰차 앱)
├─ Kotlin + Android Studio
├─ Pleos Connect SDK (Fused Location SDK, Vehicle SDK)
└─ Pleos Emulator

Backend
├─ Node.js/Express 또는 Python/FastAPI
├─ PostgreSQL (구조화 데이터)
└─ Firebase FCM (푸시 알림)

Web Dashboard
├─ React.js + TypeScript
├─ Google Maps API
└─ WebSocket (실시간 업데이트)

Infrastructure
├─ AWS (EC2, RDS)
└─ Docker (컨테이너화)
```

### 개발 우선순위

1. **🔥 최우선 (MVP)**

   - 위험신호 송출 시스템
   - 순찰차 위치 추적
   - 실시간 알림 (FCM)
   - 통합 대시보드

2. **⭐ Phase 2 (확장)**

   - HVAC 모니터링 (Pleos Report 참고)
   - 민원 관리 시스템
   - 순찰 경로 최적화

3. **🚀 Phase 3 (장기)**
   - ADAS SDK 활용
   - Gleo AI SDK (음성 인식)
   - IoT 센서 통합

---

## 🎯 최종 권장 사항

### 즉시 착수할 작업

1. ✅ **Final Report 기반으로 MVP 개발 시작**
2. ✅ **Pleos Report의 상세 기술 사양을 참고 문서로 활용**
3. ✅ **GitHub 프로젝트 구조 구축** (오늘 작업)
4. ✅ **개발 환경 설정 가이드 작성**

### 팀 구성 권장

- **5-6명** (Final Report 기준)
  - PM: 1명
  - Android Dev: 2명
  - Backend Dev: 1-2명
  - Frontend Dev: 1명
  - DevOps/QA: 1명

### 일정 권장

- **4-5개월** (Final Report 기준)
  - Month 1: 기초 구축
  - Month 2: 핵심 기능 개발
  - Month 3: 통합 및 최적화
  - Month 4: 검증 및 배포

---

## 📝 결론

**Final Report의 MVP 중심 접근을 기본 전략으로 채택**하고, **Pleos Report의 상세한 기술 사양과 확장 계획을 참고 자료로 활용**하는 것이 가장 현실적이고 성공 가능성이 높은 방향입니다.

**핵심 메시지**:

> "완벽한 시스템보다 빠르게 동작하는 MVP를 먼저 만들고, 사용자 피드백을 받아 점진적으로 확장하자"
