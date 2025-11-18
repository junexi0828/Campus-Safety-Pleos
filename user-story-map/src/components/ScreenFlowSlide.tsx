import React from "react";
import {
  Smartphone,
  Monitor,
  Car,
  ArrowRight,
  Layout,
  FileText,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function ScreenFlowSlide() {
  const epicScreens = [
    {
      user: "학생",
      device: "모바일 앱",
      icon: Smartphone,
      color: "blue",
      epics: [
        {
          name: "위험 신고 관리",
          priority: "P0",
          screens: [
            {
              name: "홈 화면",
              description: "메인 진입점, 빠른 신고 버튼",
              flow: ["홈 화면", "긴급 신고 화면", "신고 내역 화면"],
            },
            {
              name: "긴급 신고 화면",
              description: "위험 유형 선택, 위치/사진 첨부, 신고 발송",
              flow: ["긴급 신고 화면", "신고 접수 확인", "대응 상태 화면"],
            },
            {
              name: "신고 내역 화면",
              description: "내 신고 목록, 상태별 필터, 상세 조회",
              flow: ["신고 내역 화면", "신고 상세 화면"],
            },
          ],
        },
        {
          name: "실시간 위치 공유",
          priority: "P0",
          screens: [
            {
              name: "위치 설정 화면",
              description: "GPS 권한 설정, 위치 정확도 확인",
              flow: ["위치 설정 화면", "홈 화면"],
            },
          ],
        },
        {
          name: "대응 상태 확인",
          priority: "P1",
          screens: [
            {
              name: "대응 상태 화면",
              description: "순찰차 위치, 예상 도착 시간, 처리 진행 상황",
              flow: ["대응 상태 화면", "지도 뷰 화면"],
            },
            {
              name: "지도 뷰 화면",
              description: "내 위치, 순찰차 위치, 거리 표시",
              flow: ["지도 뷰 화면", "대응 상태 화면"],
            },
          ],
        },
      ],
    },
    {
      user: "순찰차",
      device: "차량 앱 (Pleos AAOS)",
      icon: Car,
      color: "green",
      epics: [
        {
          name: "신고 알림 수신",
          priority: "P0",
          screens: [
            {
              name: "대기 화면",
              description: "순찰 대기 중, 현재 위치 표시",
              flow: ["대기 화면", "신고 알림 팝업", "신고 상세 화면"],
            },
            {
              name: "신고 알림 팝업",
              description: "긴급 알림, 신고 유형, 위치, 수락/거절",
              flow: [
                "신고 알림 팝업",
                "신고 상세 화면",
                "지도/내비게이션 화면",
              ],
            },
            {
              name: "신고 목록 화면",
              description: "대기/처리 중/완료 신고 목록",
              flow: ["신고 목록 화면", "신고 상세 화면"],
            },
          ],
        },
        {
          name: "신고자 위치 추적",
          priority: "P0",
          screens: [
            {
              name: "지도/내비게이션 화면",
              description: "신고자 위치, 경로, 예상 도착 시간, 턴바이턴 안내",
              flow: ["지도/내비게이션 화면", "현장 도착 화면"],
            },
          ],
        },
        {
          name: "대응 상태 관리",
          priority: "P0",
          screens: [
            {
              name: "대응 상태 화면",
              description: "접수 → 출동 → 도착 → 완료 상태 변경",
              flow: ["대응 상태 화면", "처리 완료 화면"],
            },
            {
              name: "처리 완료 화면",
              description: "처리 내용 입력, 사진 첨부, 완료 보고",
              flow: ["처리 완료 화면", "대기 화면"],
            },
          ],
        },
      ],
    },
    {
      user: "관리자",
      device: "웹 대시보드",
      icon: Monitor,
      color: "purple",
      epics: [
        {
          name: "통합 모니터링",
          priority: "P0",
          screens: [
            {
              name: "통합 대시보드",
              description: "실시간 신고 현황, 순찰차 위치, 통계, 알림",
              flow: ["통합 대시보드", "신고 상세 화면", "지도 모니터링 화면"],
            },
            {
              name: "지도 모니터링 화면",
              description: "전체 지도 뷰, 신고 위치, 순찰차 위치, 클러스터링",
              flow: ["지도 모니터링 화면", "신고 상세 화면"],
            },
          ],
        },
        {
          name: "신고 현황 관리",
          priority: "P0",
          screens: [
            {
              name: "신고 관리 화면",
              description: "신고 목록, 필터/검색, 상태별 분류",
              flow: ["신고 관리 화면", "신고 상세 화면", "신고 배정 화면"],
            },
            {
              name: "신고 상세 화면",
              description: "신고 정보, 첨부 파일, 처리 타임라인, 담당자 배정",
              flow: ["신고 상세 화면", "신고 관리 화면"],
            },
          ],
        },
        {
          name: "순찰차 배치 최적화",
          priority: "P1",
          screens: [
            {
              name: "순찰차 관리 화면",
              description: "순찰차 목록, 근무 상태, 배정 관리",
              flow: ["순찰차 관리 화면", "순찰차 상세 화면"],
            },
            {
              name: "순찰 경로 분석 화면",
              description: "순찰 경로 기록, 밀도 분석, 최적 경로 제안",
              flow: ["순찰 경로 분석 화면", "순찰차 관리 화면"],
            },
          ],
        },
      ],
    },
    {
      user: "당직자",
      device: "웹 또는 모바일",
      icon: Smartphone,
      color: "orange",
      epics: [
        {
          name: "당번별 알림 수신",
          priority: "P1",
          screens: [
            {
              name: "알림 센터",
              description: "담당 구역 신고 알림, 긴급 알림, 알림 히스토리",
              flow: ["알림 센터", "신고 상세 화면"],
            },
          ],
        },
        {
          name: "지역별 상황 조회",
          priority: "P1",
          screens: [
            {
              name: "담당 구역 대시보드",
              description: "담당 구역 신고 현황, 처리 중 사건, 순찰 현황",
              flow: ["담당 구역 대시보드", "신고 상세 화면"],
            },
          ],
        },
      ],
    },
  ];

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      orange: "text-orange-600 bg-orange-100",
    };
    return colors[color] || "text-slate-600 bg-slate-100";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "P0":
        return "bg-red-100 text-red-700 border-red-300";
      case "P1":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "P2":
        return "bg-blue-100 text-blue-700 border-blue-300";
      default:
        return "bg-slate-100 text-slate-700 border-slate-300";
    }
  };

  return (
    <div className="h-full bg-slate-50 p-12 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-4xl text-slate-900 mb-2">
          에픽별 화면 구성 및 흐름
        </h2>
        <p className="text-slate-600">
          각 에픽별로 필요한 화면과 화면 간 네비게이션 흐름
        </p>
      </div>

      <div className="space-y-8">
        {epicScreens.map((userType, userIndex) => {
          const DeviceIcon = userType.icon;
          return (
            <Card key={userIndex} className="p-6 bg-white border-2">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={getIconColor(userType.color) + " p-3 rounded-lg"}
                >
                  <DeviceIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl text-slate-900">{userType.user}</h3>
                  <p className="text-sm text-slate-600">{userType.device}</p>
                </div>
              </div>

              <div className="space-y-6">
                {userType.epics.map((epic, epicIndex) => (
                  <div
                    key={epicIndex}
                    className="border-l-4 border-blue-300 pl-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className="text-lg text-slate-900">{epic.name}</h4>
                      <Badge
                        variant="outline"
                        className={getPriorityColor(epic.priority)}
                      >
                        {epic.priority}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {epic.screens.map((screen, screenIndex) => (
                        <Card key={screenIndex} className="p-4 bg-slate-50">
                          <div className="flex items-start gap-3 mb-3">
                            <Layout className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div className="flex-1">
                              <div className="font-semibold text-slate-900 mb-1">
                                {screen.name}
                              </div>
                              <div className="text-xs text-slate-600 mb-3">
                                {screen.description}
                              </div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs text-slate-500">
                                  화면 흐름:
                                </span>
                                {screen.flow.map((step, flowIndex) => (
                                  <div
                                    key={flowIndex}
                                    className="flex items-center gap-1"
                                  >
                                    <span className="text-xs bg-white px-2 py-1 rounded border border-slate-200">
                                      {step}
                                    </span>
                                    {flowIndex < screen.flow.length - 1 && (
                                      <ArrowRight className="h-3 w-3 text-slate-400" />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h3 className="text-lg text-slate-900 mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-600" />
          화면 설계 원칙
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-semibold text-slate-900 mb-2">
              1. 직관적 네비게이션
            </div>
            <div className="text-slate-600">
              사용자가 3회 이내 클릭으로 원하는 기능에 도달할 수 있도록 설계
            </div>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">
              2. 상태 피드백
            </div>
            <div className="text-slate-600">
              모든 액션에 대한 즉각적인 시각적 피드백 제공 (로딩, 성공, 실패)
            </div>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">
              3. 일관된 디자인
            </div>
            <div className="text-slate-600">
              사용자 유형별로 일관된 UI 패턴 적용, 학습 곡선 최소화
            </div>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">
              4. 반응형 레이아웃
            </div>
            <div className="text-slate-600">
              다양한 화면 크기와 디바이스에 최적화된 레이아웃 설계
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
