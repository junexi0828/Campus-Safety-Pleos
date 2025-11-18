import React from "react";
import {
  ArrowRight,
  Users,
  Car,
  Shield,
  Building2,
  AlertTriangle,
  MapPin,
  CheckCircle,
  GitBranch,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function IntegratedFlowSlide() {
  // 사용자 유형 및 에픽 정의
  const userTypes = [
    {
      icon: Users,
      color: "blue",
      title: "학생 / 캠퍼스 이용자",
      device: "모바일 앱 (Android)",
      epics: [
        { name: "위험 신고 관리", priority: "P0" },
        { name: "실시간 위치 공유", priority: "P0" },
        { name: "대응 상태 확인", priority: "P1" },
        { name: "안전 정보 조회", priority: "P2" },
      ],
    },
    {
      icon: Car,
      color: "green",
      title: "순찰 차량 운전자",
      device: "차량 앱 (Pleos AAOS)",
      epics: [
        { name: "신고 알림 수신", priority: "P0" },
        { name: "신고자 위치 추적", priority: "P0" },
        { name: "대응 상태 관리", priority: "P0" },
        { name: "실시간 경로 안내", priority: "P1" },
      ],
    },
    {
      icon: Shield,
      color: "purple",
      title: "행정안전부 담당자",
      device: "웹 대시보드",
      epics: [
        { name: "통합 모니터링", priority: "P0" },
        { name: "신고 현황 관리", priority: "P0" },
        { name: "순찰차 배치 최적화", priority: "P1" },
        { name: "통계 및 리포트", priority: "P2" },
      ],
    },
    {
      icon: Building2,
      color: "orange",
      title: "기숙사 / 당직자",
      device: "웹 또는 모바일",
      epics: [
        { name: "당번별 알림 수신", priority: "P1" },
        { name: "지역별 상황 조회", priority: "P1" },
        { name: "민원 접수 관리", priority: "P2" },
        { name: "근무 기록 관리", priority: "P2" },
      ],
    },
  ];

  const getIconBgColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100",
      green: "bg-green-100",
      purple: "bg-purple-100",
      orange: "bg-orange-100",
    };
    return colors[color] || "bg-slate-100";
  };

  const getIconColorForUser = (color: string) => {
    const colors: Record<string, string> = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
    };
    return colors[color] || "text-slate-600";
  };

  const getBorderColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "border-blue-300",
      green: "border-green-300",
      purple: "border-purple-300",
      orange: "border-orange-300",
    };
    return colors[color] || "border-slate-300";
  };
  const userFlows = [
    {
      id: "flow1",
      title: "긴급 신고 → 즉시 대응 플로우",
      description:
        "학생이 위험 신호를 발송하면 순찰차와 관리자가 동시에 알림을 받고 실시간으로 대응",
      steps: [
        {
          user: "학생",
          action: "위험 신호 발송",
          icon: Users,
          color: "blue",
          details: [
            "위험 유형 선택",
            "위치 자동 전송",
            "사진/영상 첨부",
            "설명 입력",
          ],
        },
        {
          user: "시스템",
          action: "신고 처리 및 알림",
          icon: AlertTriangle,
          color: "red",
          details: ["신고 접수", "긴급도 판단", "순찰차 배정", "알림 발송"],
        },
        {
          user: "순찰차",
          action: "신고 알림 수신 및 출동",
          icon: Car,
          color: "green",
          details: [
            "푸시 알림 수신",
            "신고자 위치 확인",
            "경로 계산",
            "출동 시작",
          ],
        },
        {
          user: "관리자",
          action: "실시간 모니터링",
          icon: Shield,
          color: "purple",
          details: ["대시보드에서 확인", "순찰차 위치 추적", "대응 상태 관리"],
        },
        {
          user: "학생",
          action: "대응 상태 확인",
          icon: CheckCircle,
          color: "blue",
          details: ["순찰차 출동 알림", "예상 도착 시간", "순찰차 위치 확인"],
        },
        {
          user: "순찰차",
          action: "현장 도착 및 처리",
          icon: Car,
          color: "green",
          details: ["도착 확인", "상황 파악", "처리 완료 보고"],
        },
      ],
    },
    {
      id: "flow2",
      title: "실시간 위치 추적 플로우",
      description:
        "순찰차와 신고자의 위치를 실시간으로 추적하여 최적의 대응 경로 제공",
      steps: [
        {
          user: "학생",
          action: "위치 정보 제공",
          icon: MapPin,
          color: "blue",
          details: ["GPS 위치 전송", "실시간 위치 업데이트"],
        },
        {
          user: "순찰차",
          action: "GPS 위치 전송",
          icon: Car,
          color: "green",
          details: ["차량 GPS 위치 수집", "실시간 위치 전송"],
        },
        {
          user: "시스템",
          action: "위치 정보 통합",
          icon: MapPin,
          color: "red",
          details: ["거리 계산", "예상 도착 시간", "최적 경로 제안"],
        },
        {
          user: "관리자",
          action: "지도 기반 모니터링",
          icon: Shield,
          color: "purple",
          details: ["전체 위치 지도 뷰", "실시간 업데이트", "상황 파악"],
        },
      ],
    },
    {
      id: "flow3",
      title: "대응 상태 관리 플로우",
      description:
        "신고 접수부터 처리 완료까지의 전체 프로세스를 단계별로 추적",
      steps: [
        {
          user: "시스템",
          action: "신고 접수",
          icon: AlertTriangle,
          color: "red",
          details: ["상태: 접수됨", "담당자 배정"],
        },
        {
          user: "순찰차",
          action: "출동 시작",
          icon: Car,
          color: "green",
          details: ["상태: 출동 중", "예상 도착 시간 전송"],
        },
        {
          user: "순찰차",
          action: "현장 도착",
          icon: CheckCircle,
          color: "green",
          details: ["상태: 도착", "상황 파악 중"],
        },
        {
          user: "순찰차",
          action: "처리 완료",
          icon: CheckCircle,
          color: "green",
          details: ["상태: 완료", "처리 내용 보고"],
        },
        {
          user: "관리자",
          action: "처리 확인 및 승인",
          icon: Shield,
          color: "purple",
          details: ["처리 내용 검토", "승인 또는 재처리 요청"],
        },
      ],
    },
  ];

  const epicConnections = [
    {
      from: { user: "학생", epic: "위험 신고 관리" },
      to: { user: "순찰차", epic: "신고 알림 수신" },
      type: "실시간 알림",
    },
    {
      from: { user: "학생", epic: "실시간 위치 공유" },
      to: { user: "순찰차", epic: "신고자 위치 추적" },
      type: "GPS 데이터",
    },
    {
      from: { user: "순찰차", epic: "대응 상태 관리" },
      to: { user: "학생", epic: "대응 상태 확인" },
      type: "상태 업데이트",
    },
    {
      from: { user: "순찰차", epic: "대응 상태 관리" },
      to: { user: "관리자", epic: "통합 모니터링" },
      type: "실시간 동기화",
    },
    {
      from: { user: "관리자", epic: "신고 현황 관리" },
      to: { user: "순찰차", epic: "신고 알림 수신" },
      type: "배정 및 우선순위",
    },
    {
      from: { user: "관리자", epic: "순찰차 배치 최적화" },
      to: { user: "순찰차", epic: "순찰 활동 기록" },
      type: "데이터 수집",
    },
  ];

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
    <div className="h-full bg-gradient-to-br from-slate-50 to-blue-50 p-12 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-4xl text-slate-900 mb-2">전체 시스템 플로우</h2>
        <p className="text-slate-600">
          사용자 간 상호작용과 에픽 간 연결 관계를 한눈에 파악
        </p>
      </div>

      {/* 사용자-에픽 연결 관계 그래프 */}
      <Card className="mb-6 p-6 bg-white border-2 border-indigo-200">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch className="h-5 w-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-slate-900">
            사용자-에픽 연결 관계
          </h3>
        </div>

        <div className="relative">
          {/* 사용자 레이어 */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {userTypes.map((user, userIndex) => {
              const Icon = user.icon;
              return (
                <div key={userIndex} className="relative">
                  <div
                    className={`${getIconBgColor(user.color)} ${getBorderColor(
                      user.color
                    )} p-4 rounded-xl border-2 shadow-md`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <Icon
                        className={`h-6 w-6 ${getIconColorForUser(
                          user.color
                        )} mb-2`}
                      />
                      <div className="text-xs font-semibold text-slate-900 leading-tight">
                        {user.title.split(" / ")[0]}
                      </div>
                    </div>
                  </div>

                  {/* 연결선 */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-slate-300"></div>

                  {/* 에픽 레이어 */}
                  <div className="mt-8 space-y-2">
                    {user.epics.map((epic, epicIndex) => (
                      <div key={epicIndex} className="relative">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-slate-300"></div>
                        <div
                          className={`p-2 rounded-lg border text-xs text-center ${
                            epic.priority === "P0"
                              ? "bg-red-50 border-red-200 text-red-700"
                              : epic.priority === "P1"
                              ? "bg-yellow-50 border-yellow-200 text-yellow-700"
                              : "bg-blue-50 border-blue-200 text-blue-700"
                          }`}
                        >
                          {epic.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 범례 */}
        <div className="mt-4 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-blue-100 border border-blue-300"></div>
              <span className="text-slate-600">학생</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-green-100 border border-green-300"></div>
              <span className="text-slate-600">순찰차</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-purple-100 border border-purple-300"></div>
              <span className="text-slate-600">총무처</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-orange-100 border border-orange-300"></div>
              <span className="text-slate-600">당직자</span>
            </div>
          </div>
        </div>
      </Card>

      {/* 주요 플로우 */}
      <div className="space-y-6 mb-8">
        {userFlows.map((flow, flowIndex) => (
          <Card key={flow.id} className="p-6 bg-white border-2 border-blue-200">
            <div className="mb-4">
              <h3 className="text-xl text-slate-900 mb-1">{flow.title}</h3>
              <p className="text-sm text-slate-600">{flow.description}</p>
            </div>

            <div className="flex items-center gap-4 overflow-x-auto pb-4">
              {flow.steps.map((step, stepIndex) => {
                const Icon = step.icon;
                return (
                  <div
                    key={stepIndex}
                    className="flex items-center flex-shrink-0"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`${getIconColor(
                          step.color
                        )} p-4 rounded-xl mb-2`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-xs text-slate-600 mb-1">
                        {step.user}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 text-center max-w-[120px]">
                        {step.action}
                      </div>
                      <div className="mt-2 space-y-1">
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded"
                          >
                            • {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                    {stepIndex < flow.steps.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-slate-400 mx-2 flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>

      {/* 에픽 간 연결 관계 */}
      <Card className="p-6 bg-white border-2 border-purple-200">
        <h3 className="text-xl text-slate-900 mb-4">에픽 간 연결 관계</h3>
        <div className="grid grid-cols-2 gap-4">
          {epicConnections.map((connection, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
            >
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-900">
                  {connection.from.user} - {connection.from.epic}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400" />
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-300"
              >
                {connection.type}
              </Badge>
              <ArrowRight className="h-4 w-4 text-slate-400" />
              <div className="flex-1 text-right">
                <div className="text-sm font-semibold text-slate-900">
                  {connection.to.user} - {connection.to.epic}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 핵심 가치 */}
      <Card className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h3 className="text-xl mb-4">핵심 가치</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-lg font-semibold mb-2">⚡ 실시간성</div>
            <div className="text-sm text-blue-100">
              신고 즉시 알림, 위치 실시간 추적, 상태 즉시 반영
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold mb-2">🔄 연동성</div>
            <div className="text-sm text-blue-100">
              사용자 간 자동 연동, 데이터 실시간 동기화, 통합 모니터링
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold mb-2">📊 투명성</div>
            <div className="text-sm text-blue-100">
              전체 프로세스 추적, 상태 공개, 처리 기록 관리
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
