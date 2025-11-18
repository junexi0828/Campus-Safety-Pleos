import React from "react";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Target,
  Code,
  Database,
  Smartphone,
  Monitor,
  Car,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function ImplementationScopeSlide() {
  const scopeDefinition = {
    mvp: {
      title: "MVP (Minimum Viable Product) 범위",
      period: "8주 (Phase 1)",
      description: "핵심 가치를 검증하기 위한 최소 기능 세트",
      included: [
        {
          category: "학생 앱 (Android)",
          icon: Smartphone,
          color: "blue",
          features: [
            {
              name: "긴급 신고 발송",
              status: "included",
              details: "위험 유형 선택, 위치 자동 전송, 사진 첨부",
            },
            {
              name: "GPS 위치 공유",
              status: "included",
              details: "실시간 위치 전송, 위치 정확도 표시",
            },
            {
              name: "대응 상태 확인",
              status: "included",
              details: "순찰차 출동 알림, 예상 도착 시간, 순찰차 위치",
            },
            {
              name: "신고 내역 조회",
              status: "included",
              details: "내 신고 목록, 상태별 필터링",
            },
          ],
        },
        {
          category: "순찰차 앱 (Pleos AAOS)",
          icon: Car,
          color: "green",
          features: [
            {
              name: "신고 알림 수신",
              status: "included",
              details: "푸시 알림, 신고 상세 정보, 수락/거절",
            },
            {
              name: "신고자 위치 추적",
              status: "included",
              details: "지도 표시, 거리 계산, 경로 안내",
            },
            {
              name: "대응 상태 관리",
              status: "included",
              details: "접수 → 출동 → 도착 → 완료 상태 변경",
            },
            {
              name: "GPS 위치 전송",
              status: "included",
              details: "차량 위치 실시간 전송",
            },
          ],
        },
        {
          category: "관리자 대시보드 (Web)",
          icon: Monitor,
          color: "purple",
          features: [
            {
              name: "통합 모니터링",
              status: "included",
              details: "실시간 신고 현황, 순찰차 위치, 지도 뷰",
            },
            {
              name: "신고 현황 관리",
              status: "included",
              details: "신고 목록, 검색/필터, 상세 조회, 담당자 배정",
            },
            {
              name: "기본 통계",
              status: "included",
              details: "오늘의 신고 건수, 평균 대응 시간",
            },
          ],
        },
        {
          category: "Backend API",
          icon: Code,
          color: "red",
          features: [
            {
              name: "인증 시스템",
              status: "included",
              details: "JWT 기반 인증, 사용자별 권한 관리",
            },
            {
              name: "신고 관리 API",
              status: "included",
              details: "신고 CRUD, 상태 관리, 알림 발송",
            },
            {
              name: "위치 추적 API",
              status: "included",
              details: "GPS 위치 수집, 거리 계산, 경로 최적화",
            },
            {
              name: "실시간 통신",
              status: "included",
              details: "WebSocket 기반 실시간 알림 및 상태 동기화",
            },
          ],
        },
        {
          category: "데이터베이스",
          icon: Database,
          color: "orange",
          features: [
            {
              name: "사용자 관리",
              status: "included",
              details: "사용자 정보, 권한, 디바이스 정보",
            },
            {
              name: "신고 데이터",
              status: "included",
              details: "신고 정보, 첨부 파일, 처리 기록",
            },
            {
              name: "위치 데이터",
              status: "included",
              details: "GPS 위치 히스토리, 순찰 경로",
            },
            {
              name: "상태 관리",
              status: "included",
              details: "신고 상태, 대응 상태, 타임라인",
            },
          ],
        },
      ],
      excluded: [
        "당직자 앱 (Phase 2로 연기)",
        "민원 관리 시스템",
        "상세 통계 및 리포트",
        "예측 분석 기능",
        "다국어 지원",
        "다크 모드",
        "고급 내비게이션 기능 (기본 경로 안내만 포함)",
      ],
    },
    phase2: {
      title: "Phase 2 확장 범위",
      period: "9-16주",
      description: "MVP 검증 후 추가할 기능들",
      features: [
        "당직자 알림 시스템",
        "신고 내역 상세 조회 및 검색",
        "순찰 경로 최적화 및 분석",
        "신고자-순찰차 간 메시징",
        "순찰 활동 기록 및 통계",
        "UI/UX 개선 (다크 모드, 접근성)",
      ],
    },
  };

  const technicalScope = {
    frontend: {
      student: {
        framework: "React Native 또는 Flutter",
        mustHave: [
          "GPS 위치 서비스",
          "카메라/갤러리 접근",
          "푸시 알림",
          "지도 통합 (Google Maps)",
        ],
        optional: ["오프라인 모드", "다국어 지원"],
      },
      patrol: {
        framework: "Android Automotive OS (Pleos SDK)",
        mustHave: [
          "차량 GPS 통합",
          "대형 화면 UI",
          "음성 안내",
          "내비게이션 통합",
        ],
        optional: ["차량 센서 데이터 수집"],
      },
      admin: {
        framework: "React 또는 Vue.js",
        mustHave: [
          "반응형 웹 디자인",
          "실시간 지도 (Leaflet/Mapbox)",
          "차트 라이브러리",
          "데이터 테이블",
        ],
        optional: ["다크 모드", "인쇄 기능"],
      },
    },
    backend: {
      mustHave: [
        "RESTful API 설계",
        "WebSocket 서버 (실시간 통신)",
        "JWT 인증",
        "파일 업로드/저장",
        "GPS 데이터 처리",
        "알림 서비스 (FCM/APNS)",
      ],
      optional: [
        "GraphQL API",
        "캐싱 레이어 (Redis)",
        "메시지 큐 (RabbitMQ/Kafka)",
        "분석 엔진",
      ],
    },
    infrastructure: {
      mustHave: [
        "클라우드 호스팅 (AWS/GCP)",
        "데이터베이스 (PostgreSQL/MongoDB)",
        "파일 스토리지 (S3)",
        "CI/CD 파이프라인",
        "모니터링 (로그, 에러 추적)",
      ],
      optional: ["CDN", "로드 밸런서", "자동 스케일링"],
    },
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "included":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case "excluded":
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
    }
  };

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      red: "text-red-600 bg-red-100",
      orange: "text-orange-600 bg-orange-100",
    };
    return colors[color] || "text-slate-600 bg-slate-100";
  };

  return (
    <div className="h-full bg-slate-50 p-12 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-4xl text-slate-900 mb-2">구현 범위 정의</h2>
        <p className="text-slate-600">
          MVP와 Phase 2의 명확한 범위 구분 및 기술 스택
        </p>
      </div>

      {/* MVP 범위 */}
      <Card className="p-6 bg-white border-2 border-red-200 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-8 w-8 text-red-600" />
          <div>
            <h3 className="text-2xl text-slate-900">
              {scopeDefinition.mvp.title}
            </h3>
            <p className="text-sm text-slate-600">
              {scopeDefinition.mvp.period} • {scopeDefinition.mvp.description}
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {scopeDefinition.mvp.included.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="border-l-4 border-blue-300 pl-4">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={getIconColor(category.color) + " p-2 rounded-lg"}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-slate-900">
                    {category.category}
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.features.map((feature, featIndex) => (
                    <div
                      key={featIndex}
                      className="flex items-start gap-2 bg-slate-50 p-3 rounded"
                    >
                      {getStatusIcon(feature.status)}
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-slate-900">
                          {feature.name}
                        </div>
                        <div className="text-xs text-slate-600">
                          {feature.details}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-600" />
            MVP에서 제외된 기능
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {scopeDefinition.mvp.excluded.map((item, idx) => (
              <div
                key={idx}
                className="text-sm text-slate-600 flex items-center gap-2"
              >
                <span className="text-red-500">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Phase 2 범위 */}
      <Card className="p-6 bg-white border-2 border-yellow-200 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-8 w-8 text-yellow-600" />
          <div>
            <h3 className="text-2xl text-slate-900">
              {scopeDefinition.phase2.title}
            </h3>
            <p className="text-sm text-slate-600">
              {scopeDefinition.phase2.period} •{" "}
              {scopeDefinition.phase2.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {scopeDefinition.phase2.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-yellow-50 p-3 rounded"
            >
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <span className="text-sm text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* 기술 스택 범위 */}
      <Card className="p-6 bg-white border-2 border-blue-200">
        <h3 className="text-2xl text-slate-900 mb-4">
          기술 스택 및 필수 요구사항
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Frontend</h4>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(technicalScope.frontend).map(([key, value]) => (
                <div key={key} className="bg-slate-50 p-3 rounded">
                  <div className="text-sm font-semibold text-slate-900 mb-2">
                    {key === "student"
                      ? "학생 앱"
                      : key === "patrol"
                      ? "순찰차 앱"
                      : "관리자 대시보드"}
                  </div>
                  <div className="text-xs text-slate-600 mb-2">
                    Framework: {value.framework}
                  </div>
                  <div className="text-xs text-slate-700">
                    <div className="font-semibold mb-1">필수:</div>
                    {value.mustHave.map((item, idx) => (
                      <div key={idx} className="text-slate-600">
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Backend</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded">
                <div className="text-sm font-semibold text-slate-900 mb-2">
                  필수
                </div>
                {technicalScope.backend.mustHave.map((item, idx) => (
                  <div key={idx} className="text-xs text-slate-600">
                    • {item}
                  </div>
                ))}
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <div className="text-sm font-semibold text-slate-900 mb-2">
                  선택
                </div>
                {technicalScope.backend.optional.map((item, idx) => (
                  <div key={idx} className="text-xs text-slate-600">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-2">
              Infrastructure
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded">
                <div className="text-sm font-semibold text-slate-900 mb-2">
                  필수
                </div>
                {technicalScope.infrastructure.mustHave.map((item, idx) => (
                  <div key={idx} className="text-xs text-slate-600">
                    • {item}
                  </div>
                ))}
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <div className="text-sm font-semibold text-slate-900 mb-2">
                  선택
                </div>
                {technicalScope.infrastructure.optional.map((item, idx) => (
                  <div key={idx} className="text-xs text-slate-600">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
