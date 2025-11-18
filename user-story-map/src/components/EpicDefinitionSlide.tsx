import React, { useMemo } from "react";
import { Users, Car, Shield, Building2, Network } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function EpicDefinitionSlide() {
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

  const getIconBgColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100",
      green: "bg-green-100",
      purple: "bg-purple-100",
      orange: "bg-orange-100",
    };
    return colors[color] || "bg-slate-100";
  };

  const getIconColor = (color: string) => {
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

  return (
    <div className="h-full bg-slate-50 p-12 overflow-y-auto">
      <h2 className="text-4xl text-slate-900 mb-2">사용자 유형 및 에픽 정의</h2>
      <p className="text-slate-600 mb-8">
        각 사용자별 주요 업무(Epic)와 우선순위
      </p>

      <div className="grid grid-cols-2 gap-6">
        {userTypes.map((user, index) => {
          const Icon = user.icon;
          return (
            <Card
              key={index}
              className="p-6 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${getIconBgColor(user.color)} p-3 rounded-lg`}>
                  <Icon className={`h-6 w-6 ${getIconColor(user.color)}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-1">{user.title}</h3>
                  <p className="text-xs text-slate-500">{user.device}</p>
                </div>
              </div>

              <div className="space-y-2">
                {user.epics.map((epic, epicIndex) => (
                  <div
                    key={epicIndex}
                    className="flex items-center justify-between p-2 bg-slate-50 rounded"
                  >
                    <span className="text-sm text-slate-700">{epic.name}</span>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getPriorityColor(epic.priority)}`}
                    >
                      {epic.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6 p-4 bg-blue-50 border-blue-200">
        <div className="flex items-start gap-3">
          <div className="text-xs space-y-1">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-red-100 text-red-700 border-red-300"
              >
                P0
              </Badge>
              <span className="text-slate-600">필수 (MVP 핵심 기능)</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-yellow-100 text-yellow-700 border-yellow-300"
              >
                P1
              </Badge>
              <span className="text-slate-600">중요 (조기 구현 권장)</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-blue-100 text-blue-700 border-blue-300"
              >
                P2
              </Badge>
              <span className="text-slate-600">선택 (Phase 2 확장)</span>
            </div>
          </div>
        </div>
      </Card>

      {/* 네트워크 그래프 - 사용자 간 상호작용 */}
      <Card className="mt-6 p-6 bg-white border-2 border-indigo-200">
        <div className="flex items-center gap-2 mb-4">
          <Network className="h-5 w-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-slate-900">
            에픽 간 상호작용 네트워크
          </h3>
        </div>

        <NetworkGraph
          userTypes={userTypes}
          getIconBgColor={getIconBgColor}
          getIconColor={getIconColor}
          getPriorityColor={getPriorityColor}
        />
      </Card>
    </div>
  );
}

// 네트워크 그래프 컴포넌트
function NetworkGraph({
  userTypes,
  getIconBgColor,
  getIconColor,
  getPriorityColor,
}: any) {
  const [selectedUserIndex, setSelectedUserIndex] = React.useState<
    number | null
  >(null);
  const svgRef = React.useRef<SVGSVGElement>(null);

  // 노드와 엣지 데이터 생성
  const { nodes, edges } = useMemo(() => {
    const nodeList: any[] = [];
    const edgeList: any[] = [];
    let nodeId = 0;

    // 사용자 노드 추가
    const userNodes = userTypes.map((user: any, index: number) => {
      const id = nodeId++;
      const x = 150 + index * 220; // 간격을 넓히고 시작점을 오른쪽으로
      const y = 100; // 상단 여백 줄임
      nodeList.push({
        id,
        label: user.title.split(" / ")[0],
        type: "user",
        color: user.color,
        x,
        y,
        user,
      });
      return { id, user, x, y };
    });

    // 에픽 노드 추가 및 연결
    const epicNodeMap: Record<string, number> = {}; // epicKey -> nodeId 매핑

    userNodes.forEach((userNode: any, userIndex: number) => {
      const epics = userNode.user.epics;
      epics.forEach((epic: any, epicIndex: number) => {
        const epicId = nodeId++;
        const angle =
          (epicIndex / epics.length) * Math.PI * 1.5 - Math.PI * 0.75;
        const radius = 130; // 반경을 키워서 그래프 크기 증가
        const x = userNode.x + Math.cos(angle) * radius;
        const y = userNode.y + Math.sin(angle) * radius + 80; // 간격 줄임

        const epicKey = `${userIndex}-${epic.name}`;
        epicNodeMap[epicKey] = epicId;

        nodeList.push({
          id: epicId,
          label: epic.name,
          type: "epic",
          priority: epic.priority,
          x,
          y,
          userIndex,
          epicName: epic.name,
        });

        // 사용자-에픽 연결
        edgeList.push({
          from: userNode.id,
          to: epicId,
          type: "user-epic",
          color: userNode.user.color,
        });
      });
    });

    // 주요 에픽 간 연결 관계 정의
    const connections = [
      // 학생의 "위험 신고 관리" → 순찰차의 "신고 알림 수신"
      {
        fromUser: 0,
        fromEpic: "위험 신고 관리",
        toUser: 1,
        toEpic: "신고 알림 수신",
        color: "red",
      },
      // 학생의 "실시간 위치 공유" → 순찰차의 "신고자 위치 추적"
      {
        fromUser: 0,
        fromEpic: "실시간 위치 공유",
        toUser: 1,
        toEpic: "신고자 위치 추적",
        color: "blue",
      },
      // 순찰차의 "대응 상태 관리" → 학생의 "대응 상태 확인"
      {
        fromUser: 1,
        fromEpic: "대응 상태 관리",
        toUser: 0,
        toEpic: "대응 상태 확인",
        color: "green",
      },
      // 순찰차의 "대응 상태 관리" → 총무처의 "통합 모니터링"
      {
        fromUser: 1,
        fromEpic: "대응 상태 관리",
        toUser: 2,
        toEpic: "통합 모니터링",
        color: "purple",
      },
      // 총무처의 "신고 현황 관리" → 순찰차의 "신고 알림 수신"
      {
        fromUser: 2,
        fromEpic: "신고 현황 관리",
        toUser: 1,
        toEpic: "신고 알림 수신",
        color: "orange",
      },
    ];

    connections.forEach((conn) => {
      const fromKey = `${conn.fromUser}-${conn.fromEpic}`;
      const toKey = `${conn.toUser}-${conn.toEpic}`;
      const fromNodeId = epicNodeMap[fromKey];
      const toNodeId = epicNodeMap[toKey];

      if (fromNodeId !== undefined && toNodeId !== undefined) {
        edgeList.push({
          from: fromNodeId,
          to: toNodeId,
          type: "epic-epic",
          color: conn.color,
        });
      }
    });

    return { nodes: nodeList, edges: edgeList };
  }, [userTypes]);

  // 동적 크기 계산 - 상단 여백 추가, 하단 여백 최소화
  const actualMaxX = Math.max(...nodes.map((n: any) => n.x));
  const actualMaxY = Math.max(...nodes.map((n: any) => n.y));
  const actualMinX = Math.min(...nodes.map((n: any) => n.x));
  const actualMinY = Math.min(...nodes.map((n: any) => n.y));

  // 여백 설정: 상단 여백 충분히, 하단 여백 최소화
  const topPadding = 70; // 상단 여백
  const bottomPadding = 70; // 하단 여백 최소화
  const sidePadding = 90; // 좌우 여백

  const maxX = actualMaxX + sidePadding;
  const maxY = actualMaxY + bottomPadding; // 하단 여백 최소화
  const minX = actualMinX - sidePadding;
  const minY = actualMinY - topPadding; // 상단 여백 추가

  const width = Math.max(1200, maxX - minX);
  const height = maxY - minY; // 실제 노드 범위 + 여백만큼만

  // 모든 좌표를 양수로 이동 (상단 여백 포함)
  const offsetX = -minX;
  const offsetY = -minY;

  // 사용자 클릭 핸들러 - 해당 사용자의 에픽들로 스크롤
  const handleUserClick = (userIndex: number, userNode: any) => {
    const newSelectedIndex = selectedUserIndex === userIndex ? null : userIndex;
    setSelectedUserIndex(newSelectedIndex);

    if (newSelectedIndex !== null) {
      // 해당 사용자의 에픽 노드 찾기
      const epicNodes = nodes.filter(
        (n: any) => n.type === "epic" && n.userIndex === userIndex
      );
      if (epicNodes.length > 0 && svgRef.current) {
        // 에픽들의 평균 Y 위치 계산
        const avgY =
          epicNodes.reduce((sum: number, n: any) => sum + (n.y + offsetY), 0) /
          epicNodes.length;

        // SVG 내부로 스크롤
        const svgElement = svgRef.current;
        const container = svgElement.parentElement;
        if (container) {
          // SVG의 실제 높이와 컨테이너 높이 비율 계산
          const svgHeight = svgElement.clientHeight || height;
          const containerHeight = container.clientHeight;
          const scaleY = containerHeight / svgHeight;

          const scrollY = avgY * scaleY - containerHeight / 2;
          container.scrollTo({
            top: Math.max(0, scrollY),
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-auto max-h-[600px]">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="border border-slate-200 rounded-lg bg-slate-50"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 엣지 그리기 */}
        {edges.map((edge: any, index: number) => {
          const fromNode = nodes.find((n: any) => n.id === edge.from);
          const toNode = nodes.find((n: any) => n.id === edge.to);
          if (!fromNode || !toNode) return null;

          const colorMap: Record<string, string> = {
            red: "#ef4444",
            blue: "#3b82f6",
            green: "#10b981",
            purple: "#8b5cf6",
            orange: "#f97316",
          };

          const edgeColor =
            edge.type === "epic-epic"
              ? colorMap[edge.color] || "#94a3b8"
              : edge.color === "blue"
              ? "#3b82f6"
              : edge.color === "green"
              ? "#10b981"
              : edge.color === "purple"
              ? "#8b5cf6"
              : "#f97316";

          // 선택된 사용자와 관련된 엣지인지 확인
          const isRelatedToSelected =
            selectedUserIndex !== null &&
            ((fromNode.type === "user" &&
              userTypes.findIndex(
                (u: any) => u.title.split(" / ")[0] === fromNode.label
              ) === selectedUserIndex) ||
              (toNode.type === "epic" &&
                toNode.userIndex === selectedUserIndex) ||
              (fromNode.type === "epic" &&
                fromNode.userIndex === selectedUserIndex) ||
              (toNode.type === "user" &&
                userTypes.findIndex(
                  (u: any) => u.title.split(" / ")[0] === toNode.label
                ) === selectedUserIndex));
          const isUnrelated =
            selectedUserIndex !== null && !isRelatedToSelected;

          return (
            <line
              key={`edge-${index}`}
              x1={fromNode.x + offsetX}
              y1={fromNode.y + offsetY}
              x2={toNode.x + offsetX}
              y2={toNode.y + offsetY}
              stroke={edgeColor}
              strokeWidth={
                isRelatedToSelected
                  ? edge.type === "epic-epic"
                    ? 3
                    : 2.5
                  : edge.type === "epic-epic"
                  ? 2
                  : 1.5
              }
              strokeDasharray={edge.type === "epic-epic" ? "5,5" : "0"} // 사용자-에픽: 실선, 에픽 간: 점선
              opacity={
                isUnrelated
                  ? 0.15
                  : isRelatedToSelected
                  ? edge.type === "epic-epic"
                    ? 0.8
                    : 0.6
                  : edge.type === "epic-epic"
                  ? 0.6
                  : 0.4
              }
              className="transition-all duration-200"
            />
          );
        })}

        {/* 노드 그리기 */}
        {nodes.map((node: any) => {
          if (node.type === "user") {
            const colorMap: Record<string, string> = {
              blue: "#3b82f6",
              green: "#10b981",
              purple: "#8b5cf6",
              orange: "#f97316",
            };
            const userIndex = userTypes.findIndex(
              (u: any) => u.title.split(" / ")[0] === node.label
            );
            const isSelected = selectedUserIndex === userIndex;

            return (
              <g key={`node-${node.id}`}>
                <circle
                  cx={node.x + offsetX}
                  cy={node.y + offsetY}
                  r={isSelected ? 38 : 35} // 선택 시 크기 증가
                  fill={colorMap[node.color] || "#94a3b8"}
                  stroke={isSelected ? "#1e293b" : "white"}
                  strokeWidth={isSelected ? 4 : 3}
                  className="cursor-pointer transition-all duration-200 hover:opacity-90"
                  onClick={() => handleUserClick(userIndex, node)}
                  style={{
                    filter: isSelected
                      ? "drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                      : "none",
                  }}
                />
                <text
                  x={node.x + offsetX}
                  y={node.y + offsetY + 55}
                  textAnchor="middle"
                  className={`text-xs font-semibold fill-slate-700 ${
                    isSelected ? "font-bold" : ""
                  }`}
                >
                  {node.label}
                </text>
                {/* 선택 표시 - 하위 에픽 강조 */}
                {isSelected && (
                  <circle
                    cx={node.x + offsetX}
                    cy={node.y + offsetY}
                    r={45}
                    fill="none"
                    stroke={colorMap[node.color] || "#94a3b8"}
                    strokeWidth={2}
                    strokeDasharray="5,5"
                    opacity={0.5}
                    className="animate-pulse"
                  />
                )}
              </g>
            );
          } else {
            const priorityColors: Record<string, string> = {
              P0: "#ef4444",
              P1: "#eab308",
              P2: "#3b82f6",
            };
            const isEpicSelected =
              selectedUserIndex !== null &&
              node.userIndex === selectedUserIndex;
            const isEpicDimmed =
              selectedUserIndex !== null &&
              node.userIndex !== selectedUserIndex;

            return (
              <g key={`node-${node.id}`}>
                <rect
                  x={node.x + offsetX - 55}
                  y={node.y + offsetY - 14}
                  width={110}
                  height={28}
                  rx={4}
                  fill={priorityColors[node.priority] || "#94a3b8"}
                  stroke={isEpicSelected ? "#1e293b" : "white"}
                  strokeWidth={isEpicSelected ? 3 : 2}
                  opacity={isEpicDimmed ? 0.3 : isEpicSelected ? 1 : 0.85}
                  className="cursor-pointer transition-all duration-200 hover:opacity-100"
                  style={{
                    filter: isEpicSelected
                      ? "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                      : "none",
                    transform: isEpicSelected ? "scale(1.1)" : "scale(1)",
                    transformOrigin: `${node.x + offsetX}px ${
                      node.y + offsetY
                    }px`,
                  }}
                />
                <text
                  x={node.x + offsetX}
                  y={node.y + offsetY + 5}
                  textAnchor="middle"
                  className={`text-[10px] font-medium fill-white ${
                    isEpicSelected ? "font-bold" : ""
                  }`}
                  opacity={isEpicDimmed ? 0.3 : 1}
                >
                  {node.label.length > 10
                    ? node.label.substring(0, 9) + "..."
                    : node.label}
                </text>
              </g>
            );
          }
        })}
      </svg>

      {/* 범례 및 사용 안내 */}
      <div className="mt-3 flex flex-col items-center gap-2 text-xs">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <svg width="16" height="2" className="flex-shrink-0">
              <line
                x1="0"
                y1="1"
                x2="16"
                y2="1"
                stroke="#94a3b8"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-slate-600">사용자-에픽 연결 (실선)</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="2" className="flex-shrink-0">
              <line
                x1="0"
                y1="1"
                x2="16"
                y2="1"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="3,3"
              />
            </svg>
            <span className="text-slate-600">에픽 간 상호작용 (점선)</span>
          </div>
        </div>
        <div className="text-slate-500 italic">
          💡 사용자를 클릭하면 해당 사용자의 상호작용을 확인할 수 있습니다
        </div>
      </div>
    </div>
  );
}
