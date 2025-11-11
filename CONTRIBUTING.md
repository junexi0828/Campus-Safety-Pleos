# 기여 가이드

프로젝트에 기여해주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 🤝 기여 방법

1. **Fork** 저장소를 포크합니다
2. **Branch** 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. **Commit** 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. **Push** 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. **Pull Request** Pull Request를 생성합니다

## 📋 코딩 스타일

### Kotlin (Android)

- [Kotlin 코딩 컨벤션](https://kotlinlang.org/docs/coding-conventions.html)을 따릅니다
- 들여쓰기: 4 spaces
- 최대 라인 길이: 120 characters

### JavaScript/TypeScript (Backend, Frontend)

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)를 따릅니다
- 들여쓰기: 2 spaces
- 세미콜론 사용

### Python (Backend)

- [PEP 8](https://www.python.org/dev/peps/pep-0008/)을 따릅니다
- 들여쓰기: 4 spaces
- 최대 라인 길이: 100 characters

## 🧪 테스트

모든 새로운 기능은 테스트를 포함해야 합니다.

```bash
# Backend 테스트 실행
cd backend
npm test  # 또는 python -m pytest

# Android 테스트 실행
cd mobile-app
./gradlew test
```

## 📝 커밋 메시지 규칙

커밋 메시지는 다음 형식을 따릅니다:

```
<type>: <subject>

<body>

<footer>
```

### Type

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드 프로세스 또는 보조 도구 변경

### 예시

```
feat: Add emergency report feature

- Implement emergency report UI
- Add location tracking
- Integrate with backend API

Closes #123
```

## 🔍 코드 리뷰 프로세스

1. PR을 생성하면 자동으로 코드 리뷰가 요청됩니다
2. 최소 1명의 승인이 필요합니다
3. 모든 CI 체크가 통과해야 합니다
4. 리뷰어의 피드백을 반영하여 수정합니다

## 📚 문서화

- 새로운 기능을 추가할 때는 관련 문서를 업데이트해주세요
- 코드에 적절한 주석을 추가해주세요
- 복잡한 로직은 설명 주석을 포함해주세요

## ❓ 질문이 있으신가요?

이슈를 생성하거나 팀에 직접 문의해주세요!

---

**감사합니다! 🎉**
