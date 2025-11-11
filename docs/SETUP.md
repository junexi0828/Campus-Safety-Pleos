# 개발 환경 설정 가이드

이 문서는 프로젝트 개발을 위한 개발 환경 설정 방법을 안내합니다.

## 📋 사전 요구사항

### 필수 소프트웨어
- **Android Studio**: 최신 버전 (Hedgehog 이상)
- **Java JDK**: 17 이상
- **Node.js**: 18 이상 (Backend 개발 시)
- **Python**: 3.10 이상 (Backend 개발 시)
- **PostgreSQL**: 14 이상
- **Git**: 최신 버전

### 계정 및 서비스
- **Pleos Playground 계정**: [https://pleos.ai](https://pleos.ai)
- **Firebase 프로젝트**: FCM 푸시 알림용
- **Google Cloud 계정**: Google Maps API 키
- **AWS 계정**: (배포 시)

## 🚀 단계별 설정

### 1. 저장소 클론

```bash
git clone https://github.com/your-org/pleos.git
cd pleos
```

### 2. Android 개발 환경 설정

#### 2.1 Android Studio 설치
1. [Android Studio 다운로드](https://developer.android.com/studio)
2. 설치 후 실행
3. SDK Manager에서 다음 설치:
   - Android SDK Platform 34
   - Android SDK Build-Tools
   - Android Emulator

#### 2.2 Pleos Connect SDK 설정
1. Pleos Playground에 가입 및 로그인
2. 프로젝트 생성
3. CRN(Connected Resource Name) 획득

#### 2.3 Pleos Emulator 설정
1. Android Studio → SDK Manager
2. SDK Update Sites 탭에서 "+" 클릭
3. URL 추가:
   ```
   https://nexus-playground.pleos.ai/repository/raw-releases/release/connect.v2.0.5/...
   ```
4. Android API Level 34로 Pleos Connect Emulator 설치
5. AVD 생성 및 Cold Boot 설정

#### 2.4 CRN 주입
```bash
adb root on
adb shell su 0 "echo 'propId: 554696961 areaId: 0 values: {YOUR_CRN}' > /data/vendor/vsomeip/vhal_fifo"
adb reboot
```

### 3. Backend 개발 환경 설정

#### 3.1 Node.js 프로젝트 (선택)
```bash
cd backend
npm install
cp .env.example .env
# .env 파일에 필요한 환경 변수 설정
```

#### 3.2 Python 프로젝트 (선택)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# .env 파일에 필요한 환경 변수 설정
```

#### 3.3 PostgreSQL 설정
```bash
# PostgreSQL 설치 (macOS)
brew install postgresql@14
brew services start postgresql@14

# 데이터베이스 생성
createdb campus_safety

# 스키마 생성
psql -d campus_safety -f schema.sql
```

### 4. Firebase 설정

1. [Firebase Console](https://console.firebase.google.com)에서 프로젝트 생성
2. Android 앱 추가
3. `google-services.json` 다운로드
4. `mobile-app/app/` 디렉토리에 복사

### 5. Google Maps API 설정

1. [Google Cloud Console](https://console.cloud.google.com)에서 프로젝트 생성
2. Maps SDK for Android 활성화
3. API 키 생성
4. `mobile-app/app/src/main/res/values/google_maps_api.xml`에 키 추가

### 6. 환경 변수 설정

#### Backend (.env)
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/campus_safety

# Firebase
FIREBASE_SERVER_KEY=your_firebase_server_key

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=3600

# Server
PORT=3000
NODE_ENV=development
```

#### Android (local.properties)
```properties
# Google Maps API
MAPS_API_KEY=your_google_maps_api_key

# Backend API
API_BASE_URL=http://localhost:3000
```

## ✅ 설정 확인

### Android 앱 실행
```bash
cd mobile-app
./gradlew assembleDebug
# 또는 Android Studio에서 실행
```

### Backend 서버 실행
```bash
# Node.js
cd backend
npm run dev

# Python
cd backend
python -m uvicorn main:app --reload
```

### 테스트 실행
```bash
# Backend 테스트
cd backend
npm test  # 또는 pytest

# Android 테스트
cd mobile-app
./gradlew test
```

## 🐛 문제 해결

### Pleos Emulator가 시작되지 않을 때
- Cold Boot로 재시작
- AVD 설정 확인
- CRN 주입 확인

### Firebase 연결 오류
- `google-services.json` 파일 위치 확인
- Firebase 프로젝트 설정 확인
- 인터넷 연결 확인

### 데이터베이스 연결 오류
- PostgreSQL 서비스 실행 확인
- 연결 정보 확인
- 방화벽 설정 확인

## 📚 추가 자료

- [Android Studio 가이드](https://developer.android.com/studio/intro)
- [Pleos SDK 문서](https://pleos.ai/playground/resources)
- [Firebase 설정 가이드](https://firebase.google.com/docs/android/setup)

## 💬 도움이 필요하신가요?

이슈를 생성하거나 팀에 문의해주세요!

