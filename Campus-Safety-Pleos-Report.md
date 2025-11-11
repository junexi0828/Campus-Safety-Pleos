# 교내 안전 통합 관리 플랫폼 개발 프로젝트
## 현대자동차 Pleos Connect SDK 기반 스마트 캠퍼스 시스템
### 전체 종합 보고서

---

## 목차
1. 프로젝트 개요
2. 연구 배경 및 의의
3. 기술 기반 및 아키텍처
4. 개발 프로세스 및 단계별 계획
5. 구현 사항 및 기대 효과
6. 위험 요소 및 완화 방안
7. 추진 일정 및 마일스톤
8. 팀 구성 및 역할 분담
9. 성과 평가 지표
10. 향후 확장 계획

---

## 1. 프로젝트 개요

### 1.1 프로젝트명
**교내 안전 통합 관리 플랫폼 (Smart Campus Safety Management Platform)**

### 1.2 프로젝트 목표
현대자동차 그룹의 Pleos Connect SDK 기반 Android Automotive OS(AAOS)를 활용하여 대학 캠퍼스의 안전을 종합적으로 관리하는 통합 플랫폼 개발

### 1.3 주요 기능
- **HVAC 모니터링**: 순찰 차량의 공조 시스템 온도, 풍량, 습도 실시간 수집 및 전광판 표시
- **차량 위치 추적**: 순찰 차량의 GPS 위치 실시간 추적 및 지도 시각화
- **민원 관리 시스템**: 포트홀, 시설 파손 등 교내 안전 이슈 보고 및 처리
- **통합 대시보드**: 교내 안전 정보를 한 화면에서 종합 조회
- **알림 시스템**: 비정상 상황 발생 시 담당자에게 실시간 푸시 알림
- **당직자 핫라인 연동**: 기숙사, 학생회 등 각 부서와 연계

### 1.4 기대 효과
- 대학 안전 담당부서의 업무 효율성 30% 이상 향상
- 캠퍼스 안전 관리의 시스템화 및 데이터 기반 의사결정
- 학생 안전 만족도 향상
- 현대자동차 Pleos 플랫폼의 실제 활용 사례 창출
- 모빌리티 산업 진출 희망 학생들의 실무 경험 축적

---

## 2. 연구 배경 및 의의

### 2.1 프로젝트 필요성

#### 2.1.1 기술적 배경
- Android Automotive OS(AAOS)는 자동차 산업의 표준 플랫폼으로 부상
- 현대자동차 그룹이 공개한 Pleos Connect SDK는 차량 제어, ADAS, AI 음성 등 다양한 API 제공
- Vehicle SDK, HVAC API, Fused Location SDK 등 여러 모듈이 캠퍼스 관리에 활용 가능

#### 2.1.2 현실적 배경
- 대학 캠퍼스 순찰 차량의 효율적 관리 필요
- 환경 모니터링(공조 시스템)의 체계화 필요
- 포트홀, 시설 파손 등 민원 사항의 빠른 대응 필요
- 당직자 간 정보 공유 및 긴급 상황 대응의 시스템화 필요

### 2.2 프로젝트의 학술적 의의

#### 2.2.1 기술적 가치
- 자동차 OS 기술을 교육/행정 도메인에 응용한 사례
- IoT와 자동차 소프트웨어의 융합 모델 제시
- 실시간 데이터 수집, 처리, 시각화 기술 실전 습득

#### 2.2.2 산업적 가치
- 현대자동차 Pleos 플랫폼의 혁신적 활용 사례
- 스마트 시티/스마트 캠퍼스 구현의 모범 사례
- 모빌리티 산업 진출을 위한 실무 경험 제공

#### 2.2.3 사회적 가치
- 캠퍼스 안전 문화 확산
- 데이터 기반 의사결정 문화 정착
- 대학 행정 효율성 향상을 통한 학생 만족도 증진

---

## 3. 기술 기반 및 아키텍처

### 3.1 기술 스택

| 계층 | 기술 | 설명 |
|------|------|------|
| **모바일 앱** | Kotlin, Android Studio, Pleos Connect SDK v2.0.5 | 순찰 차량 탑재 앱 개발 |
| **에뮬레이터** | Pleos Connect Emulator (ARM64/x86_64) | 개발 및 테스트 환경 |
| **백엔드** | Node.js/Express 또는 Python/FastAPI | REST API 서버 |
| **데이터베이스** | PostgreSQL + MongoDB | 구조화/비구조화 데이터 저장 |
| **클라우드** | AWS EC2/RDS 또는 Google Cloud | 데이터 저장 및 처리 |
| **웹 대시보드** | React.js, TypeScript | 관리자 인터페이스 |
| **지도 시각화** | Google Maps API 또는 Naver Map API | 차량 위치 및 민원 지역 표시 |
| **실시간 통신** | Firebase Realtime DB, WebSocket, FCM | 실시간 데이터 동기화 및 알림 |
| **데이터 시각화** | Chart.js, D3.js, Grafana | 통계 및 분석 그래프 |
| **인증/보안** | JWT, OAuth 2.0 | 사용자 인증 및 권한 관리 |

### 3.2 시스템 아키텍처

```
[순찰 차량]
    ↓
[Pleos Connect Emulator / 실제 Pleos 차량]
    ↓
[Android App (Kotlin)]
    ├─ HVAC API (온도, 풍량, 습도)
    ├─ Fused Location SDK (GPS 위치)
    ├─ Sync SDK (민원 데이터 동기화)
    └─ Vehicle SDK (차량 상태)
    ↓
[Backend Server]
    ├─ REST API (데이터 수집)
    ├─ 데이터 검증 및 처리
    ├─ 알림 로직 (FCM)
    └─ 권한 관리
    ↓
[Database]
    ├─ PostgreSQL (구조화 데이터: HVAC, 위치, 민원)
    └─ MongoDB (비구조화 데이터: 로그, 이미지)
    ↓
[웹 대시보드 / 모바일 앱]
    ├─ HVAC 실시간 모니터링
    ├─ 차량 위치 지도 시각화
    ├─ 민원 현황 대시보드
    ├─ 통계 및 분석 리포트
    └─ 알림 관리
    ↓
[사용자]
    ├─ 교내 안전 담당자
    ├─ 순찰 담당자
    ├─ 기숙사 당직자
    ├─ 학생회
    └─ 학생
```

### 3.3 Pleos Connect SDK 주요 모듈

| 모듈 | 용도 | API 그룹 |
|------|------|---------|
| **Vehicle SDK** | 차량 제어/상태 조회 | HVAC, Door, Seat, Window, Wiper, Light 등 |
| **Fused Location SDK** | 위치 정보 제공 | GPS 좌표, 위치 기반 서비스 |
| **Sync SDK** | 데이터 동기화 | 차량-클라우드-모바일 실시간 동기화 |
| **ADAS SDK** | 주행 보조 정보 | 차선 이탈, 전방 충돌, 사각지대 (향후 확장) |
| **Gleo AI SDK** | 음성 인식/합성 | STT, TTS, LLM (향후 확장) |

### 3.4 데이터 흐름

**1단계: 데이터 수집**
```
Pleos 차량 → Vehicle SDK (HVAC API) → 온도, 풍량, 습도 수집
Pleos 차량 → Fused Location SDK → GPS 좌표 수집
모바일 앱 → 민원 정보 (사진, 위치, 설명) 입력
```

**2단계: 데이터 전송**
```
Android App → HTTP POST → Backend REST API
민원 데이터 → Sync SDK → 실시간 동기화
```

**3단계: 데이터 저장**
```
Backend → PostgreSQL (HVAC 시계열, 위치 좌표, 민원)
Backend → MongoDB (민원 사진, 기타 메타데이터)
```

**4단계: 데이터 처리 및 시각화**
```
Backend → 통계 계산 (일평균 온도, 민원 다발 지역 등)
Backend → 알림 로직 (비정상 온도 감지 시 FCM 발송)
Dashboard → 실시간 그래프, 지도, 테이블 표시
```

---

## 4. 개발 프로세스 및 단계별 계획

### 4.1 전체 개발 계획 (4-5개월)

```
┌─────────────────────────────────────────────────────────┐
│ Phase 1: 준비 및 학습 (1개월)                             │
│ - SDK 학습, 개발 환경 구축, 프로토타입 개발                 │
├─────────────────────────────────────────────────────────┤
│ Phase 2: 핵심 기능 개발 (2개월)                           │
│ - HVAC 모니터링, 위치 추적, 민원 관리 구현                 │
├─────────────────────────────────────────────────────────┤
│ Phase 3: 통합 및 테스트 (1개월)                          │
│ - 모듈 통합, 성능 최적화, 사용자 테스트                    │
├─────────────────────────────────────────────────────────┤
│ Phase 4: 배포 및 확장 (1개월)                            │
│ - 실제 차량 테스트, Pleos 공모전 제출, 최종 발표            │
└─────────────────────────────────────────────────────────┘
```

### 4.2 Phase 1: 준비 및 학습 (1개월)

#### 4.2.1 목표
- Pleos Connect SDK 및 AAOS 환경에 대한 기본 이해
- 개발 환경 완벽히 구축
- HVAC API 기반 간단한 프로토타입 개발

#### 4.2.2 세부 계획

**주차 1: SDK 학습 및 환경 구축**
- Pleos Playground 가입 및 프로젝트 생성
- Android Studio 설치 및 설정
- Pleos Connect Emulator 설치 (ARM64 또는 x86_64)
  ```
  1. SDK Manager에서 Pleos Connect System Image 추가
  2. URL 입력: https://nexus-playground.pleos.ai/repository/raw-releases/release/connect.v2.0.5/...
  3. Android API Level 34로 Pleos Connect Emulator 설치
  4. AVD 생성 및 Cold Boot 설정 확인
  ```
- CRN(Connected Resource Name) 획득 및 에뮬레이터에 주입
  ```
  adb root on
  adb shell su 0 "echo 'propId: 554696961 areaId: 0 values: {CRN}' > /data/vendor/vsomeip/vhal_fifo"
  adb reboot
  ```

**주차 2: Vehicle SDK 및 HVAC API 학습**
- Vehicle SDK 공식 문서 정독
- HVAC API 구조 이해
  - CarClimateManager 클래스
  - getHvacTemperature(), getHvacFanSpeed(), getHumidity() 메서드
- 샘플 코드 분석 및 실행
- 에뮬레이터에서 기본 HVAC 데이터 읽기 테스트

**주차 3: 프로토타입 개발 (HVAC 센서 읽기)**
```kotlin
// 기본 코드 구조
import android.car.Car
import android.car.CarNotConnectedException
import android.car.climate.CarClimateManager

class HvacMonitorService {
    private lateinit var car: Car
    private lateinit var climateManager: CarClimateManager
    
    fun startMonitoring() {
        car = Car.createCar(context, null, Car.CAR_WAIT_TIMEOUT_WAIT_FOREVER, null)
        climateManager = car.getCarManager(Car.CLIMATE_SERVICE) as CarClimateManager
        
        // 주기적으로 HVAC 데이터 읽기
        val temperature = climateManager.getFloatProperty(CarClimateManager.HVAC_TEMPERATURE_CURRENT)
        val fanSpeed = climateManager.getFloatProperty(CarClimateManager.HVAC_FAN_SPEED)
        val humidity = climateManager.getFloatProperty(CarClimateManager.HVAC_HUMIDITY)
        
        Log.d("HVAC", "Temp: $temperature, Fan: $fanSpeed, Humidity: $humidity")
    }
}
```

**주차 4: 기본 UI 및 로컬 저장소 구현**
- RecyclerView를 이용한 실시간 HVAC 데이터 표시
- Room Database를 이용한 로컬 데이터 저장
- 간단한 그래프(MPAndroidChart) 시각화

#### 4.2.3 결과물
- Pleos Connect Emulator 정상 동작 환경
- HVAC 센서 데이터 5초 주기로 읽기 가능한 안드로이드 앱
- 에뮬레이터에서 테스트 완료

---

### 4.3 Phase 2: 핵심 기능 개발 (2개월)

#### 4.3.1 목표
- HVAC 모니터링 완성 (Backend 연동)
- 차량 위치 추적 시스템 구축
- 민원 관리 시스템 개발

#### 4.3.2 세부 계획

**주차 5-6: Backend 서버 개발 (Node.js/Express)**

기본 구조:
```javascript
// server.js
const express = require('express');
const app = express();
const mqtt = require('mqtt');
const PostgreSQL = require('pg');

// HVAC 데이터 수집 API
app.post('/api/hvac', (req, res) => {
  const { vehicleId, temperature, fanSpeed, humidity, timestamp } = req.body;
  // DB에 저장
  db.query('INSERT INTO hvac_data VALUES ...', [vehicleId, temperature, ...]);
  res.json({ success: true });
});

// 위치 데이터 수집 API
app.post('/api/location', (req, res) => {
  const { vehicleId, latitude, longitude, timestamp } = req.body;
  // DB에 저장
  db.query('INSERT INTO vehicle_location VALUES ...', [vehicleId, latitude, longitude, timestamp]);
  res.json({ success: true });
});

// 민원 데이터 수집 API
app.post('/api/complaint', (req, res) => {
  const { title, description, image, location, status } = req.body;
  // DB 및 S3에 저장
  s3.putObject({ Bucket: 'campus-complaints', Key: image.name, Body: image.data });
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

**주차 7-8: Fused Location SDK 구현**

```kotlin
// LocationService.kt
import android.location.Location
import android.location.LocationListener
import android.location.LocationManager
import com.hyundai.pleos.connect.fused.FusedLocationClient

class LocationTrackingService {
    private lateinit var fusedLocationClient: FusedLocationClient
    
    fun startLocationUpdates() {
        fusedLocationClient = FusedLocationClient(context)
        
        // 5초 주기로 위치 업데이트
        val locationRequest = LocationRequest.create().apply {
            interval = 5000  // 5초
            fastestInterval = 3000
            priority = LocationRequest.PRIORITY_HIGH_ACCURACY
        }
        
        fusedLocationClient.requestLocationUpdates(locationRequest, object : LocationCallback() {
            override fun onLocationResult(locationResult: LocationResult) {
                val location = locationResult.lastLocation
                val latitude = location?.latitude
                val longitude = location?.longitude
                
                // Backend에 전송
                sendLocationToServer(latitude, longitude)
            }
        })
    }
    
    private fun sendLocationToServer(lat: Double, lng: Double) {
        val request = Request.Builder()
            .url("http://backend-server/api/location")
            .post(RequestBody.create(
                """{"vehicleId": "VEHICLE_001", "latitude": $lat, "longitude": $lng, "timestamp": ${System.currentTimeMillis()}}""".toByteArray()
            ))
            .build()
        
        httpClient.newCall(request).enqueue(object : Callback {
            override fun onResponse(call: Call, response: Response) {
                Log.d("Location", "Location sent: $lat, $lng")
            }
            override fun onFailure(call: Call, e: IOException) {
                Log.e("Location", "Error: ${e.message}")
            }
        })
    }
}
```

**주차 9-10: 민원 관리 시스템**

모바일 앱 (카메라, GPS, 텍스트 입력):
```kotlin
// ComplaintReportActivity.kt
class ComplaintReportActivity : AppCompatActivity() {
    private lateinit var imageCapture: ImageCapture
    private var capturedImageUri: Uri? = null
    
    fun captureComplaintPhoto() {
        val takePhotoIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
        startActivityForResult(takePhotoIntent, CAMERA_REQUEST)
    }
    
    fun submitComplaint() {
        val title = findViewById<EditText>(R.id.complaint_title).text.toString()
        val description = findViewById<EditText>(R.id.complaint_description).text.toString()
        val location = getCurrentLocation()
        
        // 이미지를 멀티파트 요청으로 서버에 전송
        val requestBody = MultipartBody.Builder()
            .setType(MultipartBody.FORM)
            .addFormDataPart("title", title)
            .addFormDataPart("description", description)
            .addFormDataPart("latitude", location.latitude.toString())
            .addFormDataPart("longitude", location.longitude.toString())
            .addFormDataPart("image", capturedImageUri.toString(), File(capturedImageUri.path!!).asRequestBody())
            .build()
        
        val request = Request.Builder()
            .url("http://backend-server/api/complaint")
            .post(requestBody)
            .build()
        
        httpClient.newCall(request).enqueue(object : Callback {
            override fun onResponse(call: Call, response: Response) {
                Toast.makeText(this@ComplaintReportActivity, "민원이 접수되었습니다", Toast.LENGTH_SHORT).show()
            }
            override fun onFailure(call: Call, e: IOException) {
                Toast.makeText(this@ComplaintReportActivity, "전송 실패: ${e.message}", Toast.LENGTH_SHORT).show()
            }
        })
    }
}
```

Backend (이미지 저장 및 DB 업데이트):
```python
# Python/FastAPI 예제
from fastapi import FastAPI, File, UploadFile, Form
import boto3
from datetime import datetime

app = FastAPI()
s3_client = boto3.client('s3')
db = PostgreSQL()

@app.post("/api/complaint")
async def submit_complaint(
    title: str = Form(...),
    description: str = Form(...),
    latitude: float = Form(...),
    longitude: float = Form(...),
    image: UploadFile = File(...)
):
    # S3에 이미지 저장
    image_filename = f"complaints/{datetime.now().timestamp()}_{image.filename}"
    s3_client.upload_fileobj(
        image.file,
        "campus-complaints",
        image_filename
    )
    
    # DB에 민원 정보 저장
    query = """
    INSERT INTO complaints (title, description, latitude, longitude, image_url, status, created_at)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    db.execute(query, (title, description, latitude, longitude, image_filename, "NEW", datetime.now()))
    
    return {"success": True, "message": "민원이 접수되었습니다"}
```

#### 4.3.3 결과물
- REST API 서버 완전히 동작
- Android 앱에서 HVAC, Location 데이터 수집 및 Backend 전송 가능
- 민원 사진 촬영 및 업로드 기능
- PostgreSQL DB에 데이터 저장 확인

---

### 4.4 Phase 3: 통합 및 테스트 (1개월)

#### 4.4.1 목표
- 모든 모듈의 통합 및 성능 최적화
- 웹 대시보드 개발 완성
- 사용자 인수 테스트(UAT)

#### 4.4.2 세부 계획

**주차 11-12: 웹 대시보드 개발 (React)**

```jsx
// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Dashboard() {
  const [hvacData, setHvacData] = useState([]);
  const [vehicleLocations, setVehicleLocations] = useState([]);
  const [complaints, setComplaints] = useState([]);
  
  useEffect(() => {
    // 실시간 데이터 구독 (Firebase 또는 WebSocket)
    const ws = new WebSocket('ws://backend-server/api/live');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setHvacData(prev => [...prev, data.hvac]);
      setVehicleLocations(prev => [...prev, data.location]);
    };
    
    return () => ws.close();
  }, []);
  
  const handleComplaintClick = (complaint) => {
    alert(`민원: ${complaint.title}\n위치: ${complaint.latitude}, ${complaint.longitude}`);
  };
  
  return (
    <div className="dashboard">
      {/* HVAC 모니터링 그래프 */}
      <div className="hvac-section">
        <h2>공조 시스템 모니터링</h2>
        <LineChart width={600} height={300} data={hvacData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
      </div>
      
      {/* 차량 위치 맵 */}
      <div className="map-section">
        <h2>순찰 차량 위치</h2>
        <GoogleMapReact
          defaultCenter={{ lat: 37.5, lng: 127.0 }}
          defaultZoom={15}
        >
          {vehicleLocations.map((loc, idx) => (
            <div key={idx} lat={loc.latitude} lng={loc.longitude}>
              🚗 Vehicle {loc.vehicleId}
            </div>
          ))}
        </GoogleMapReact>
      </div>
      
      {/* 민원 현황 */}
      <div className="complaints-section">
        <h2>민원 현황</h2>
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>위치</th>
              <th>상태</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint, idx) => (
              <tr key={idx} onClick={() => handleComplaintClick(complaint)}>
                <td>{complaint.title}</td>
                <td>{complaint.latitude}, {complaint.longitude}</td>
                <td>{complaint.status}</td>
                <td>{new Date(complaint.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```

**주차 13: 성능 최적화 및 부하 테스트**
- 데이터베이스 쿼리 최적화 (인덱싱 추가)
- 캐싱 구현 (Redis)
- 동시 사용자 1000명 기준 부하 테스트
- 네트워크 대역폭 최적화

**주차 14: 사용자 인수 테스트(UAT)**
- 대학 안전 담당자 테스트
- 순찰 담당자 테스트
- 당직자 테스트
- 피드백 수집 및 개선

#### 4.4.3 결과물
- 웹 대시보드 완전 동작
- 모바일 앱 + Backend + Dashboard 통합 테스트 완료
- 성능 지표 확보 (응답 시간 < 500ms, 동시 사용자 1000+ 지원)
- UAT 통과

---

### 4.5 Phase 4: 배포 및 확장 (1개월)

#### 4.5.1 목표
- 실제 캠퍼스 환경에서 시스템 배포
- Pleos 공모전 제출
- 향후 확장 계획 수립

#### 4.5.2 세부 계획

**주차 15: 실제 차량 테스트**
- 대학 순찰 차량 1-2대에 앱 설치 및 테스트
- GPS 위치 정확도 검증
- 실시간 데이터 전송 안정성 검증
- 배터리 소비 측정

**주차 16: 프로덕션 배포**
- AWS 또는 Google Cloud에 Backend 배포
- 웹 대시보드 서버 운영 개시
- 모바일 앱 Google Play Store 등록
- SSL/TLS 보안 설정

**주차 17: Pleos 공모전 제출**
- 프로젝트 기획서 작성
- 동영상 데모 촬영
- 발표 자료 준비
- 공식 제출

**주차 18: 최종 발표 및 확장 계획**
- 학교 내 프로젝트 발표
- 현대자동차 관계자 초청 발표 (가능 시)
- 향후 확장 계획 수립 (ADAS, AI 음성 등)

#### 4.5.3 결과물
- 실제 캠퍼스에서 운영 중인 시스템
- Pleos 공모전 제출 및 평가
- 향후 확장을 위한 기술 문서 및 아키텍처 설계

---

## 5. 구현 사항 및 기대 효과

### 5.1 주요 구현 기능

#### 5.1.1 HVAC 모니터링 시스템

**기능 설명**
- 순찰 차량의 공조 시스템에서 실시간 온도, 풍량, 습도 수집
- 교내 전광판과 웹 대시보드에 실시간 표시
- 이상 징후 감지 시 담당자에게 알림

**기술 상세**
- Vehicle SDK의 CarClimateManager 활용
- 5초 주기 데이터 수집
- 데이터베이스 저장 (시계열 데이터 최적화)
- Grafana를 통한 고급 시각화

**기대 효과**
- 차량 공조 시스템 상태 실시간 파악
- 유지보수 시기 사전 예측 (예측적 유지보수)
- 에너지 효율성 증진

#### 5.1.2 차량 위치 추적 시스템

**기능 설명**
- 순찰 차량의 GPS 위치 실시간 추적
- 지도상에 차량 아이콘으로 표시
- 특정 지역 진입 시 자동 알림 (Geofencing)

**기술 상세**
- Fused Location SDK 활용
- Google Maps API 연동
- 10초 주기 위치 업데이트
- 배터리 최적화 (도플러 기반 이동 예측)

**기대 효과**
- 순찰 효율성 60% 향상
- 비상 상황 발생 시 즉시 위치 파악
- 순찰 경로 최적화 데이터 제공

#### 5.1.3 민원 관리 시스템

**기능 설명**
- 당직자가 모바일 앱에서 포트홀, 시설 파손 등 촬영 및 보고
- 사진, GPS 좌표, 상세 설명 함께 저장
- 상태 추적 (접수 → 처리 중 → 완료)

**기술 상세**
- 카메라 API를 통한 사진 촬영
- AWS S3에 이미지 저장
- PostgreSQL에 메타데이터 저장
- Sync SDK를 통한 실시간 동기화

**기대 효과**
- 민원 처리 시간 70% 단축
- 민원 재발 방지 (이력 관리)
- 교내 안전 개선

#### 5.1.4 통합 대시보드

**기능 설명**
- HVAC, 위치, 민원 정보를 한 화면에서 통합 조회
- 실시간 알림 및 통계
- 사용자별 맞춤 정보 표시

**기술 상세**
- React + TypeScript로 구현
- WebSocket을 통한 실시간 업데이트
- 역할 기반 접근 제어 (RBAC)
- 반응형 디자인 (모바일/태블릿/PC)

**기대 효과**
- 행정 업무 효율성 50% 향상
- 데이터 기반 의사결정 가능
- 캠퍼스 안전 관리의 과학화

### 5.2 기대 효과

#### 5.2.1 정량적 효과
- 순찰 효율성: 60% 향상
- 민원 처리 시간: 70% 단축
- 행정 업무 효율성: 50% 향상
- 비용 절감: 연 500만원 이상 (자동화로 인한 인건비 절감)

#### 5.2.2 정성적 효과
- 학생 안전 만족도 향상
- 캠퍼스 안전 문화 확산
- 데이터 기반 의사결정 정착
- 대학 이미지 향상 (스마트 캠퍼스 구현)

#### 5.2.3 산업적 효과
- 현대자동차 Pleos 플랫폼의 혁신적 활용 사례
- 자동차 OS 기술의 교육/행정 도메인 확대
- 모빌리티 산업 진출 희망 학생들의 실무 경험 제공

---

## 6. 위험 요소 및 완화 방안

### 6.1 기술적 위험

| 위험 요소 | 심각도 | 완화 방안 |
|---------|--------|---------|
| Pleos SDK 버전 변경 | 중간 | 공식 문서 지속적 모니터링, 버전 호환성 테스트 |
| 에뮬레이터 불안정성 | 중간 | 실제 차량 테스트 병행, 임시 우회 방법 개발 |
| 네트워크 연결 불안정 | 높음 | 로컬 캐싱, 재시도 로직, Sync SDK 활용 |
| GPS 신호 약화 | 중간 | WiFi 기반 위치 결정 추가, 실내 맵 매칭 |
| 데이터베이스 성능 | 중간 | 인덱싱 최적화, 캐싱(Redis), 읽기 레플리카 |

### 6.2 조직적 위험

| 위험 요소 | 심각도 | 완화 방안 |
|---------|--------|---------|
| 팀 구성원 부족 | 높음 | 단계별 인원 모집, 외부 전문가 자문 |
| 기술 레벨 차이 | 중간 | 정기적 교육, 코드 리뷰, 페어 프로그래밍 |
| 일정 지연 | 높음 | 위험 버퍼 포함, 애자일 방식 적용 |
| 학기 중단 | 중간 | 상세한 문서화, 인수인계 프로세스 수립 |

### 6.3 운영적 위험

| 위험 요소 | 심각도 | 완화 방안 |
|---------|--------|---------|
| 실제 차량 미확보 | 높음 | 에뮬레이터 기반 개발 집중, 시뮬레이션 환경 강화 |
| 사용자 저항 | 중간 | 변화 관리, 사용자 교육, 점진적 도입 |
| 보안/개인정보 우려 | 높음 | 보안 감시, 암호화, 접근 제어, 규정 준수 |
| 유지보수 부담 | 중간 | 자동화 테스트, 모니터링 시스템, 지원 체계 |

---

## 7. 추진 일정 및 마일스톤

### 7.1 전체 일정표

```
Month 1 (주 1-4): Phase 1 - 준비 및 학습
├─ W1: SDK 학습 및 환경 구축
├─ W2: Vehicle SDK 및 HVAC API 학습
├─ W3: HVAC 프로토타입 개발
├─ W4: 기본 UI 및 로컬 저장소 구현
└─ Milestone 1: Pleos Emulator 환경 완성 ✓

Month 2-3 (주 5-10): Phase 2 - 핵심 기능 개발
├─ W5-6: Backend 서버 개발 (Node.js)
├─ W7-8: Fused Location SDK 구현
├─ W9-10: 민원 관리 시스템 개발
└─ Milestone 2: 핵심 3가지 기능 구현 완료 ✓

Month 4 (주 11-14): Phase 3 - 통합 및 테스트
├─ W11-12: 웹 대시보드 개발
├─ W13: 성능 최적화 및 부하 테스트
├─ W14: 사용자 인수 테스트(UAT)
└─ Milestone 3: 전체 시스템 통합 완료 ✓

Month 5 (주 15-18): Phase 4 - 배포 및 확장
├─ W15: 실제 차량 테스트
├─ W16: 프로덕션 배포
├─ W17: Pleos 공모전 제출
├─ W18: 최종 발표 및 확장 계획 수립
└─ Milestone 4: 시스템 운영 시작 ✓
```

### 7.2 주요 마일스톤

| 마일스톤 | 목표 | 완료 기한 |
|---------|------|---------|
| **M1: 개발 환경 완성** | Pleos Emulator 설치 및 CRN 주입 완료 | W4 |
| **M2: HVAC 데이터 수집** | 에뮬레이터에서 실시간 HVAC 데이터 읽기 | W4 |
| **M3: Backend API 완성** | REST API 서버 완전 동작 | W6 |
| **M4: 위치 추적 기능** | GPS 위치 수집 및 지도 표시 | W8 |
| **M5: 민원 관리 앱** | 사진 촬영 및 업로드 기능 | W10 |
| **M6: 웹 대시보드** | HVAC, 위치, 민원 통합 시각화 | W12 |
| **M7: 시스템 통합** | 모든 모듈 연동 및 성능 확보 | W14 |
| **M8: 실제 차량 테스트** | 1-2대 순찰 차량에서 검증 | W15 |
| **M9: 프로덕션 배포** | AWS에 시스템 배포 및 운영 시작 | W16 |
| **M10: Pleos 공모전** | 공식 제출 및 평가 | W17 |

---

## 8. 팀 구성 및 역할 분담

### 8.1 팀 구성 (총 6-8명)

```
┌─────────────────────────────────────┐
│  Project Manager (1명)               │
│  - 일정 관리, 진행 상황 추적          │
│  - 위험 관리, 이해관계자 소통         │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│  Technical Lead (1명)                │
│  - 아키텍처 설계, 기술 결정           │
│  - 코드 리뷰, 성능 최적화             │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│  Android Dev (2명)                   │
│  - Android 앱 개발 (HVAC, Location) │
│  - 에뮬레이터 테스트                 │
│  - UI/UX 구현                        │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│  Backend Dev (2명)                   │
│  - REST API 서버 개발               │
│  - 데이터베이스 설계 및 구현          │
│  - 서버 배포 및 운영                 │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│  Web Frontend Dev (1명)              │
│  - React 대시보드 개발               │
│  - 지도/그래프 시각화                │
│  - 웹 배포                           │
└─────────────────────────────────────┘
          ↓
┌─────────────────────────────────────┐
│  DevOps/QA (1명)                    │
│  - 인프라 구축 (AWS)                 │
│  - 자동화 테스트                     │
│  - CI/CD 파이프라인                  │
└─────────────────────────────────────┘
```

### 8.2 역할별 책임

| 역할 | 주요 책임 | 필요 기술 |
|------|---------|---------|
| **PM** | 일정 관리, 이해관계자 소통, 위험 관리 | 프로젝트 관리, 커뮤니케이션 |
| **Tech Lead** | 기술 아키텍처, 코드 리뷰, 성능 최적화 | Kotlin, Node.js, Database |
| **Android Dev** | Vehicle SDK, Location SDK, UI 개발 | Kotlin, Android Studio, AAOS |
| **Backend Dev** | API 개발, DB 설계, 서버 배포 | Node.js, PostgreSQL, AWS |
| **Web Frontend** | React 개발, 시각화, 대시보드 | React, TypeScript, D3.js |
| **DevOps/QA** | 인프라, 테스트, 모니터링 | AWS, Docker, Testing |

### 8.3 주간 미팅 및 보고

- **주 1회 팀 회의** (화 14:00): 진행 상황 공유, 이슈 해결
- **주 1회 기술 회의** (목 14:00): 기술 결정, 코드 리뷰
- **월 1회 경영 보고** (마지막 주 금): 이사진/담당 부서 보고
- **Slack/Discord 채널**: 일상적 커뮤니케이션

---

## 9. 성과 평가 지표

### 9.1 기술적 성과 지표

| 지표 | 목표 | 측정 방법 |
|------|------|---------|
| **시스템 가용성** | 99% | 모니터링 도구 (Datadog) |
| **응답 시간** | < 500ms | 성능 테스트 |
| **데이터 정확도** | > 99% | 검증 테스트 |
| **동시 사용자 수** | 1000+ | 부하 테스트 |
| **데이터 동기화 지연** | < 2초 | 실시간 모니터링 |
| **배터리 소비** | < 5% (1시간) | 실제 차량 테스트 |

### 9.2 기능적 성과 지표

| 기능 | 목표 | 측정 방법 |
|------|------|---------|
| **HVAC 모니터링** | 99% 정확도 | 데이터 검증 |
| **차량 위치 추적** | 오차 < 5m | GPS 검증 |
| **민원 처리** | 평균 처리 시간 < 24시간 | 시스템 로그 |
| **사용자 만족도** | > 4.0/5.0 | 설문 조사 |

### 9.3 비즈니스 성과 지표

| 지표 | 목표 | 측정 방법 |
|------|------|---------|
| **순찰 효율성 증가** | 60% | 순찰 시간 비교 |
| **민원 처리 시간 단축** | 70% | 처리 기록 분석 |
| **행정 업무 효율성** | 50% | 설문 조사 |
| **비용 절감** | 연 500만원 | 재무 분석 |
| **사용자 채택율** | > 80% | 사용 기록 |

### 9.4 학습 성과 지표

| 지표 | 목표 | 측정 방법 |
|------|------|---------|
| **팀원 기술 역량** | Pleos SDK 전문성 확보 | 기술 평가 |
| **산출 문서 수** | 20+ | 문서 수 계산 |
| **공모전 수상** | 1건 이상 | 공식 발표 |
| **학회 발표** | 1건 이상 | 학회 발표 |
| **취업/진학** | 50% 이상 모빌리티 분야 | 졸업 후 추적 |

---

## 10. 향후 확장 계획

### 10.1 단기 확장 (6개월 이내)

#### 10.1.1 ADAS SDK 활용 (주행 보조)
```
기능: 차선 이탈 감지, 전방 충돌 경고, 사각지대 경고
목표: 안전 운전 점수 계산
예상 효과: 안전 운전 문화 확산
```

#### 10.1.2 Gleo AI SDK 활용 (음성 인식)
```
기능: 음성 기반 민원 보고, 음성 명령으로 차량 제어
기술: STT (Speech-to-Text), TTS (Text-to-Speech), LLM
예상 효과: 사용 편의성 향상, 운전 중 안전성 강화
```

#### 10.1.3 모바일 앱 고도화
```
기능: AR 기반 지도, 실시간 알림, 오프라인 모드
예상 효과: 사용자 경험 개선, 네트워크 불안정 상황 대응
```

### 10.2 중기 확장 (6-12개월)

#### 10.2.1 IoT 시스템 통합
```
기기: 캠퍼스 CCTV, 조명, 보안 시스템
기능: 통합 제어, 이상 탐지
예상 효과: 캠퍼스 안전 종합 관리
```

#### 10.2.2 AI 기반 이상 탐지
```
알고리즘: 머신러닝 (Isolation Forest, LSTM)
기능: 비정상 온도, 비정상 경로, 다발 민원 지역 자동 탐지
예상 효과: 사전 대응 가능, 의사결정 지원
```

#### 10.2.3 분석 및 보고 기능 강화
```
기능: 월간 보고서 자동 생성, 트렌드 분석, 예측 분석
도구: Tableau, PowerBI
예상 효과: 데이터 기반 전략 수립
```

### 10.3 장기 확장 (12개월 이상)

#### 10.3.1 다중 캠퍼스 확대
```
적용: 타 대학, 산단, 스마트 시티
예상 효과: 플랫폼 사업화
```

#### 10.3.2 자율주행 연동
```
기능: 자율주행 차량의 경로 최적화, 자동 순찰
기술: 자율주행 SDK, 맵 매칭
예상 효과: 완전 자동화된 순찰 시스템
```

#### 10.3.3 국제 표준화
```
목표: ISO 27001 (정보 보안), ISO 9001 (품질 관리)
기대효과: 상용화 기반 마련
```

### 10.4 확장을 위한 투자 계획

| 항목 | 단기 | 중기 | 장기 | 합계 |
|------|------|------|------|------|
| 개발 인력 | 2명 | 3명 | 5명 | 10명 |
| 서버 비용 | 200만원 | 500만원 | 1000만원 | 1700만원 |
| 외부 도구/라이선스 | 100만원 | 300만원 | 500만원 | 900만원 |
| 마케팅 | 0원 | 100만원 | 500만원 | 600만원 |
| **총 예상 투자** | **2.3억원** | **3.9억원** | **6.5억원** | **12.7억원** |

---

## 결론 및 종합 의의

### 종합 평가

**교내 안전 통합 관리 플랫폼 프로젝트**는 다음 측면에서 매우 의미 있는 프로젝트입니다:

#### 1. 기술적 의의
- **최신 기술 도입**: 현대자동차 Pleos Connect SDK, AAOS, Android Automotive 등 최첨단 자동차 소프트웨어 기술 습득
- **실무 역량 강화**: 시스템 아키텍처 설계, 백엔드 개발, 웹 프론트엔드, DevOps 등 풀스택 개발 경험
- **산업 트렌드 선도**: 모빌리티 산업의 미래 기술 선제적 습득

#### 2. 실무적 의의
- **실제 문제 해결**: 대학 캠퍼스의 실제 안전 관리 문제를 기술로 해결
- **사용자 중심 개발**: 행정안전부, 순찰 담당자 등 실제 사용자의 요구를 반영한 개발
- **운영 경험**: 개발 후 실제 운영하면서 얻는 귀중한 경험

#### 3. 교육적 의의
- **통합 프로젝트 경험**: 기획부터 배포, 운영까지 전 단계를 경험
- **팀 협업 능력**: 다양한 분야의 개발자들이 협력하는 경험
- **문제 해결 능력**: 예상치 못한 문제들을 해결하는 과정

#### 4. 산업적 의의
- **현대자동차와의 협력**: Pleos 플랫폼 공급사와의 관계 형성
- **모빌리티 생태계 확대**: 자동차 기술의 교육/행정 도메인 확장
- **사업화 기반 마련**: 향후 스타트업 또는 기업 진출의 기반

#### 5. 사회적 의의
- **캠퍼스 안전 향상**: 학생, 교직원의 안전 만족도 증진
- **대학 이미지 개선**: 스마트 캠퍼스 구현으로 선진 교육기관 이미지
- **정부 정책 지원**: 스마트 시티, 모빌리티 혁신 정책 실현

### 최종 권고사항

1. **즉시 착수**: 프로젝트의 높은 실현 가능성과 기대 효과를 고려해 **즉시 착수 권장**
2. **학교 행정과 협력**: 대학 행정, 안전 담당부서, 기숙사, 학생회 등과 협력 체계 구축
3. **현대자동차 접촉**: 개발 과정에서 현대자동차 Pleos 팀과의 기술 자문 협력 추진
4. **단계별 확장**: MVP 완성 후 단계적으로 기능 확대
5. **문서화 강화**: 개발 과정 전반을 상세히 기록해 확산 및 인수인계 기반 마련

### 최종 결론

**이 프로젝트는 최신 기술, 실제 문제 해결, 교육적 가치, 산업적 의미를 모두 갖춘 대학 동아리 프로젝트의 이상적 모델입니다.** 성공적으로 수행될 경우 팀원들의 기술 역량 강화, 학교의 혁신 이미지 제고, 현대자동차 등 산업계와의 협력 기회 창출 등 다층적 기대 효과를 기대할 수 있습니다.

---

## 부록: 참고 자료 및 링크

### A. 공식 문서
- Pleos Playground: https://pleos.ai
- Android Automotive OS 공식 문서: https://source.android.com/devices/automotive
- Google Maps API: https://developers.google.com/maps
- Firebase Documentation: https://firebase.google.com/docs

### B. 개발 환경 설정 가이드
- Android Studio 설치: https://developer.android.com/studio
- Pleos Emulator 설정: https://pleos.ai/playground/resources/en/setup/emulator
- Node.js 설치: https://nodejs.org
- PostgreSQL 설치: https://www.postgresql.org

### C. 추천 학습 자료
- Kotlin 프로그래밍: https://kotlinlang.org
- Android 개발 기초: https://developer.android.com/docs
- REST API 설계: https://restfulapi.net
- React 튜토리얼: https://react.dev

### D. 커뮤니티 및 지원
- Pleos Developer Community (Slack)
- Stack Overflow Android Automotive 태그
- GitHub Issues 및 Discussions

---

**보고서 작성일**: 2025년 11월 10일  
**최종 검토**: 프로젝트 팀  
**승인**: [서명 예정]

---

*이 보고서는 교내 안전 통합 관리 플랫폼 개발 프로젝트의 전체 계획 및 기대 효과를 종합적으로 정리한 문서입니다. 프로젝트 진행 중 상황 변화에 따라 수정 및 보완될 수 있습니다.*
