# 시스템 아키텍처

> 이 문서는 프로젝트의 전체 시스템 아키텍처를 설명합니다.

## 📐 전체 아키텍처 개요

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

## 🏗️ 컴포넌트 상세

### 1. 학생 모바일 앱 (Android)

**기술 스택**:

- Kotlin
- Android SDK
- Fused Location Provider (GPS)
- Camera API

**주요 기능**:

- 위험 상황 신고 (사진, 위치, 설명)
- 실시간 위치 공유
- 신고 상태 조회

**아키텍처 패턴**: MVVM (Model-View-ViewModel)

### 2. 순찰 차량 앱 (Pleos/AAOS)

**기술 스택**:

- Kotlin
- Pleos Connect SDK v2.0.5
  - Fused Location SDK
  - Sync SDK
  - Vehicle SDK (Phase 2)

**주요 기능**:

- 신고 알림 수신 (FCM)
- 신고자 위치 확인
- 대응 상태 업데이트
- 실시간 위치 전송

**아키텍처 패턴**: MVVM + Repository Pattern

### 3. Backend API 서버

**기술 스택**:

- Node.js/Express 또는 Python/FastAPI
- PostgreSQL
- Firebase FCM
- WebSocket (Socket.io)

**주요 기능**:

- REST API 엔드포인트 제공
- 데이터 검증 및 처리
- 푸시 알림 발송
- 실시간 데이터 동기화
- 인증 및 권한 관리 (JWT, RBAC)

**API 엔드포인트**:

```
POST   /api/emergency                 - 위험신호 등록
GET    /api/emergency/{id}            - 신고 상세 조회
PUT    /api/emergency/{id}/status     - 신고 상태 업데이트
GET    /api/patrol/location/{id}      - 순찰차 위치 조회
POST   /api/notification/send         - FCM 푸시 알림 발송
```

### 4. 웹 대시보드

**기술 스택**:

- React.js + TypeScript
- Google Maps API
- WebSocket Client
- Chart.js (데이터 시각화)

**주요 기능**:

- 통합 모니터링 화면
- 신고 현황 관리
- 순찰차 배치 최적화
- 통계 및 분석

### 5. 데이터베이스 (PostgreSQL)

**주요 테이블**:

- `emergency_reports`: 긴급 신고
- `patrol_locations`: 순찰 차량 위치 기록
- `emergency_assignments`: 신고-순찰차 할당
- `users`: 사용자 정보
- `vehicles`: 순찰 차량 정보

## 🔄 데이터 흐름

### 위험신호 송출 프로세스

1. **학생이 위험신호 송출**

   ```
   학생 앱 → Backend API (POST /api/emergency)
   ```

2. **Backend 처리**

   ```
   Backend → PostgreSQL (신고 저장)
   Backend → Firebase FCM (순찰차에 푸시 알림)
   ```

3. **순찰차 알림 수신**

   ```
   FCM → 순찰차 앱 (알림 표시)
   순찰차 앱 → Backend API (위치 전송)
   ```

4. **대시보드 업데이트**
   ```
   Backend → WebSocket → 웹 대시보드 (실시간 업데이트)
   ```

## 🔐 보안 아키텍처

### 인증 및 권한

- **JWT 토큰**: 사용자 인증
- **RBAC**: 역할 기반 접근 제어
  - 학생: 신고 송출, 상태 조회
  - 순찰차 운전자: 알림 수신, 상태 업데이트
  - 관리자: 전체 조회 및 관리

### 데이터 보안

- **HTTPS/TLS 1.3**: 모든 통신 암호화
- **데이터 암호화**: 민감 정보 암호화 저장
- **접근 제어**: IP 화이트리스트, API 키 관리

## 📊 성능 최적화

### 캐싱 전략

- **Redis**: 자주 조회되는 데이터 캐싱
- **CDN**: 정적 자산 배포

### 데이터베이스 최적화

- **인덱싱**: 자주 조회되는 컬럼 인덱스 추가
- **읽기 레플리카**: 읽기 작업 분산

### 네트워크 최적화

- **이미지 압축**: 사진 업로드 시 자동 압축
- **배치 처리**: 위치 데이터 배치 전송

## 🚀 확장성 고려사항

### 수평 확장

- **로드 밸런서**: 다중 서버 인스턴스
- **마이크로서비스**: 기능별 서비스 분리 (향후)

### 모니터링

- **로깅**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **메트릭**: Prometheus + Grafana
- **알림**: 시스템 이상 시 자동 알림

## 📝 참고 자료

- [Pleos Connect SDK 문서](https://pleos.ai)
- [Android Automotive OS 가이드](https://source.android.com/devices/automotive)
- [REST API 설계 가이드](https://restfulapi.net)
