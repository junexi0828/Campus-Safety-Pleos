# API 명세서

> 이 문서는 Backend API의 엔드포인트와 사용 방법을 설명합니다.

## 📋 기본 정보

- **Base URL**: `https://api.campus-safety.example.com`
- **API Version**: `v1`
- **인증 방식**: JWT Bearer Token

## 🔐 인증

대부분의 API는 JWT 토큰 인증이 필요합니다.

```http
Authorization: Bearer {token}
```

### 토큰 획득
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**응답**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600,
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "role": "student"
  }
}
```

## 📡 API 엔드포인트

### 1. 위험신호 등록

```http
POST /api/emergency
Authorization: Bearer {token}
Content-Type: multipart/form-data

{
  "title": "위험 상황 신고",
  "description": "상세 설명",
  "latitude": 37.5665,
  "longitude": 126.9780,
  "image": <file>
}
```

**응답**:
```json
{
  "success": true,
  "data": {
    "id": "emergency-id",
    "status": "NEW",
    "createdAt": "2025-01-15T10:30:00Z"
  }
}
```

### 2. 신고 상세 조회

```http
GET /api/emergency/{id}
Authorization: Bearer {token}
```

**응답**:
```json
{
  "id": "emergency-id",
  "title": "위험 상황 신고",
  "description": "상세 설명",
  "latitude": 37.5665,
  "longitude": 126.9780,
  "imageUrl": "https://...",
  "status": "ASSIGNED",
  "assignedVehicle": {
    "id": "vehicle-id",
    "name": "순찰차 1호"
  },
  "createdAt": "2025-01-15T10:30:00Z",
  "updatedAt": "2025-01-15T10:35:00Z"
}
```

### 3. 신고 상태 업데이트

```http
PUT /api/emergency/{id}/status
Authorization: Bearer {token}
Content-Type: application/json

{
  "status": "IN_PROGRESS",
  "note": "현장 출동 중"
}
```

**상태 값**:
- `NEW`: 신규 신고
- `ASSIGNED`: 순찰차 배정됨
- `IN_PROGRESS`: 현장 출동 중
- `COMPLETED`: 처리 완료
- `CANCELLED`: 취소됨

### 4. 순찰차 위치 조회

```http
GET /api/patrol/location/{vehicleId}
Authorization: Bearer {token}
```

**응답**:
```json
{
  "vehicleId": "vehicle-id",
  "latitude": 37.5665,
  "longitude": 126.9780,
  "heading": 90.0,
  "speed": 30.5,
  "timestamp": "2025-01-15T10:30:00Z"
}
```

### 5. 순찰차 위치 업데이트

```http
POST /api/patrol/location
Authorization: Bearer {token}
Content-Type: application/json

{
  "vehicleId": "vehicle-id",
  "latitude": 37.5665,
  "longitude": 126.9780,
  "heading": 90.0,
  "speed": 30.5
}
```

### 6. 푸시 알림 발송

```http
POST /api/notification/send
Authorization: Bearer {token}
Content-Type: application/json

{
  "target": "vehicle",
  "vehicleId": "vehicle-id",
  "title": "긴급 신고",
  "body": "새로운 위험신호가 접수되었습니다",
  "data": {
    "emergencyId": "emergency-id",
    "latitude": 37.5665,
    "longitude": 126.9780
  }
}
```

## 🔄 WebSocket (실시간 업데이트)

### 연결
```javascript
const ws = new WebSocket('wss://api.campus-safety.example.com/ws');

ws.onopen = () => {
  // 인증
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'your-jwt-token'
  }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // 실시간 데이터 처리
};
```

### 메시지 타입
- `emergency_new`: 새로운 신고
- `emergency_update`: 신고 상태 업데이트
- `patrol_location`: 순찰차 위치 업데이트

## 📊 상태 코드

| 코드 | 의미 |
|------|------|
| 200 | 성공 |
| 201 | 생성됨 |
| 400 | 잘못된 요청 |
| 401 | 인증 필요 |
| 403 | 권한 없음 |
| 404 | 리소스 없음 |
| 500 | 서버 오류 |

## 🚨 에러 응답 형식

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "에러 메시지",
    "details": {}
  }
}
```

## 📝 참고 자료

- [REST API 설계 가이드](https://restfulapi.net)
- [JWT 인증 가이드](https://jwt.io)

