# GitHub 프로젝트 구조 가이드

이 디렉토리는 GitHub Actions, Issue 템플릿, Pull Request 템플릿 등 GitHub 관련 설정 파일을 포함합니다.

## 📁 디렉토리 구조

```
.github/
├── ISSUE_TEMPLATE/          # Issue 템플릿
│   ├── bug_report.md
│   ├── feature_request.md
│   └── question.md
├── PULL_REQUEST_TEMPLATE.md  # PR 템플릿
├── workflows/               # GitHub Actions
│   ├── ci.yml              # CI/CD 파이프라인
│   └── release.yml         # 릴리스 자동화
└── CODEOWNERS              # 코드 리뷰어 지정
```

## 🎯 사용 목적

- **Issue 템플릿**: 버그 리포트, 기능 요청, 질문 등을 체계적으로 관리
- **PR 템플릿**: 코드 리뷰 시 필요한 정보를 일관되게 수집
- **GitHub Actions**: 자동화된 테스트, 빌드, 배포 프로세스
- **CODEOWNERS**: 특정 파일/디렉토리 변경 시 자동으로 리뷰어 지정

