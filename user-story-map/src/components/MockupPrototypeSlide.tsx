import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Car,
  Monitor,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock,
  Send,
  Camera,
  X,
  Search,
  Filter,
  Bell,
  TrendingUp,
  Activity,
  Users,
  Shield,
  BarChart3,
  Eye,
  MessageSquare,
  Phone,
  FileText,
  Download,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

// 확장된 더미 데이터
const initialReports = [
  {
    id: 1,
    type: "폭행",
    location: "공대 3호관 앞",
    time: "14:23",
    status: "출동 중",
    priority: "긴급",
    student: "김학생",
    studentPhone: "010-1234-5678",
    patrol: "순찰차 #1",
    eta: "3분",
    distance: "1.2km",
    description: "다수의 학생들이 싸움 중입니다. 즉시 출동이 필요합니다.",
    photo: true,
    createdAt: "2025-01-15 14:23:15",
    timeline: [
      { time: "14:23:15", action: "신고 접수", user: "시스템" },
      { time: "14:23:20", action: "순찰차 배정", user: "관리자" },
      { time: "14:23:45", action: "출동 시작", user: "순찰차 #1" },
    ],
  },
  {
    id: 2,
    type: "도난",
    location: "도서관 주차장",
    time: "13:45",
    status: "처리 중",
    priority: "보통",
    student: "이학생",
    studentPhone: "010-2345-6789",
    patrol: "순찰차 #2",
    eta: "도착",
    distance: "0km",
    description: "자전거 도난 신고입니다.",
    photo: false,
    createdAt: "2025-01-15 13:45:30",
    timeline: [
      { time: "13:45:30", action: "신고 접수", user: "시스템" },
      { time: "13:45:35", action: "순찰차 배정", user: "관리자" },
      { time: "13:46:10", action: "출동 시작", user: "순찰차 #2" },
      { time: "13:50:25", action: "현장 도착", user: "순찰차 #2" },
    ],
  },
  {
    id: 3,
    type: "사고",
    location: "체육관 입구",
    time: "12:30",
    status: "완료",
    priority: "긴급",
    student: "박학생",
    studentPhone: "010-3456-7890",
    patrol: "순찰차 #1",
    eta: "-",
    distance: "-",
    description: "자전거 충돌 사고 발생",
    photo: true,
    createdAt: "2025-01-15 12:30:00",
    completedAt: "2025-01-15 12:45:00",
    timeline: [
      { time: "12:30:00", action: "신고 접수", user: "시스템" },
      { time: "12:30:05", action: "순찰차 배정", user: "관리자" },
      { time: "12:30:20", action: "출동 시작", user: "순찰차 #1" },
      { time: "12:33:15", action: "현장 도착", user: "순찰차 #1" },
      { time: "12:45:00", action: "처리 완료", user: "순찰차 #1" },
    ],
  },
  {
    id: 4,
    type: "기타",
    location: "학생회관 2층",
    time: "11:15",
    status: "접수",
    priority: "낮음",
    student: "최학생",
    studentPhone: "010-4567-8901",
    patrol: null,
    eta: "-",
    distance: "-",
    description: "시설 고장 신고",
    photo: false,
    createdAt: "2025-01-15 11:15:20",
    timeline: [{ time: "11:15:20", action: "신고 접수", user: "시스템" }],
  },
];

const initialPatrols = [
  {
    id: 1,
    name: "순찰차 #1",
    status: "출동 중",
    location: "공대 근처",
    reports: 1,
    driver: "김운전",
    phone: "010-1111-2222",
    lastUpdate: "14:25",
    battery: 85,
    speed: 45,
  },
  {
    id: 2,
    name: "순찰차 #2",
    status: "처리 중",
    location: "도서관 근처",
    reports: 1,
    driver: "이운전",
    phone: "010-2222-3333",
    lastUpdate: "13:50",
    battery: 92,
    speed: 0,
  },
  {
    id: 3,
    name: "순찰차 #3",
    status: "대기 중",
    location: "본관 앞",
    reports: 0,
    driver: "박운전",
    phone: "010-3333-4444",
    lastUpdate: "14:20",
    battery: 78,
    speed: 0,
  },
];

export default function MockupPrototypeSlide() {
  const [selectedView, setSelectedView] = useState<
    "student" | "patrol" | "admin"
  >("student");
  const [studentView, setStudentView] = useState<"home" | "report" | "status">(
    "home"
  );
  const [patrolView, setPatrolView] = useState<
    "waiting" | "alert" | "navigation" | "detail"
  >("waiting");
  const [adminView, setAdminView] = useState<
    "dashboard" | "reports" | "map" | "analytics"
  >("dashboard");
  const [selectedReport, setSelectedReport] = useState<number | null>(null);
  const [reports, setReports] = useState(initialReports);
  const [patrols, setPatrols] = useState(initialPatrols);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedReportDetail, setSelectedReportDetail] = useState<
    number | null
  >(null);
  const [adminNotificationCount, setAdminNotificationCount] = useState(4);
  const [studentNotificationCount, setStudentNotificationCount] = useState(0);
  const [realTimeCounter, setRealTimeCounter] = useState(0);

  // 학생 앱 신고 화면 상태
  const [selectedReportType, setSelectedReportType] = useState<string>("");
  const [reportDescription, setReportDescription] = useState<string>("");
  const [reportLocation, setReportLocation] =
    useState<string>("공대 3호관 앞 (자동 감지)");
  const [hasPhoto, setHasPhoto] = useState<boolean>(false);

  // 순찰차 앱 처리 화면 상태
  const [patrolReportDescription, setPatrolReportDescription] =
    useState<string>("");
  const [patrolHasPhoto, setPatrolHasPhoto] = useState<boolean>(false);

  // 관리자 대시보드 상태
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");

  // 실시간 카운터 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 실시간 업데이트 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      // 랜덤하게 신고 상태 업데이트
      if (Math.random() > 0.7) {
        setReports((prev) =>
          prev.map((report) => {
            if (report.status === "출동 중" && Math.random() > 0.5) {
              // 상태가 변경되면 학생에게 알림
              setStudentNotificationCount((prev) => prev + 1);
              return {
                ...report,
                status: "처리 중",
                eta: "도착",
                distance: "0km",
              };
            }
            return report;
          })
        );
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 신고 상세 모달이 열릴 때 알림 감소 (한 번만 실행)
  const prevSelectedReportDetail = React.useRef<number | null>(null);
  useEffect(() => {
    if (
      selectedReportDetail &&
      selectedReportDetail !== prevSelectedReportDetail.current
    ) {
      const report = reports.find((r) => r.id === selectedReportDetail);
      if (report && report.status === "접수" && adminNotificationCount > 0) {
        setAdminNotificationCount((prev) => Math.max(0, prev - 1));
      }
      prevSelectedReportDetail.current = selectedReportDetail;
    }
  }, [selectedReportDetail]);

  const handleReportSubmit = () => {
    if (!selectedReportType) {
      alert("위험 유형을 선택해주세요.");
      return;
    }

    const locationText = reportLocation.replace(" (자동 감지)", "");
    const newReport = {
      id: reports.length + 1,
      type: selectedReportType,
      location: locationText,
      time: new Date().toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "접수",
      priority:
        selectedReportType === "폭행"
          ? "긴급"
          : selectedReportType === "사고"
          ? "긴급"
          : "보통",
      student: "신규신고자",
      studentPhone: "010-9999-9999",
      patrol: null,
      eta: "-",
      distance: "-",
      description: reportDescription || "상황 설명 없음",
      photo: hasPhoto,
      createdAt: new Date().toISOString(),
      timeline: [
        {
          time: new Date().toLocaleTimeString("ko-KR"),
          action: "신고 접수",
          user: "시스템",
        },
      ],
    };
    setReports([newReport, ...reports]);
    setAdminNotificationCount((prev) => prev + 1);
    setStudentNotificationCount(0); // 신고 발송 후 학생 알림 초기화
    setStudentView("status");
    setSelectedReport(newReport.id);

    // 폼 초기화
    setSelectedReportType("");
    setReportDescription("");
    setReportLocation("공대 3호관 앞 (자동 감지)");
    setHasPhoto(false);
  };

  const handlePhotoUpload = () => {
    setHasPhoto(true);
    alert("사진이 첨부되었습니다.");
  };

  const handlePatrolPhotoUpload = () => {
    setPatrolHasPhoto(true);
    alert("사진이 첨부되었습니다.");
  };

  const handlePatrolReject = () => {
    if (confirm("신고를 거절하시겠습니까?")) {
      setPatrolView("waiting");
      alert("신고가 거절되었습니다.");
    }
  };

  const handleRefresh = () => {
    setRealTimeCounter(0);
    alert("데이터를 새로고침했습니다.");
  };

  const handleDownloadReport = () => {
    alert("리포트 다운로드가 시작됩니다.");
    // 실제 구현 시 PDF 또는 Excel 파일 다운로드
  };

  const handleContact = (phone: string) => {
    alert(`전화 연결: ${phone}`);
  };

  const handleMessage = (phone: string) => {
    alert(`메시지 전송: ${phone}`);
  };

  const handlePatrolAccept = () => {
    setPatrolView("navigation");
    setReports((prev) =>
      prev.map((report) =>
        report.id === 1
          ? { ...report, status: "출동 중", patrol: "순찰차 #1" }
          : report
      )
    );
  };

  const handleStatusChange = (reportId: number, newStatus: string) => {
    setReports((prev) =>
      prev.map((report) => {
        if (report.id === reportId) {
          // 순찰차가 출동하거나 상태가 변경되면 학생에게 알림
          if (newStatus === "출동 중" || newStatus === "처리 중") {
            setStudentNotificationCount((prev) => prev + 1);
          }
          return {
            ...report,
            status: newStatus,
            timeline: [
              ...report.timeline,
              {
                time: new Date().toLocaleTimeString("ko-KR"),
                action: `상태 변경: ${newStatus}`,
                user: "관리자",
              },
            ],
          };
        }
        return report;
      })
    );
  };

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || report.status === statusFilter;
    const matchesType = typeFilter === "all" || report.type === typeFilter;
    const matchesPriority =
      priorityFilter === "all" || report.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesType && matchesPriority;
  });

  const stats = {
    total: reports.length,
    pending: reports.filter((r) => r.status === "접수").length,
    inProgress: reports.filter(
      (r) => r.status === "출동 중" || r.status === "처리 중"
    ).length,
    completed: reports.filter((r) => r.status === "완료").length,
    avgResponseTime: "4.2분",
  };

  return (
    <div className="h-full bg-slate-50 p-12 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-4xl text-slate-900 mb-2">목업 프로토타입</h2>
        <p className="text-slate-600">
          실제 보안 솔루션처럼 동작하는 인터랙티브 프로토타입
        </p>
      </div>

      {/* 뷰 선택 */}
      <div className="flex gap-4 mb-6">
        <Button
          onClick={() => setSelectedView("student")}
          variant={selectedView === "student" ? "default" : "outline"}
          className="flex items-center gap-2"
        >
          <Smartphone className="h-4 w-4" />
          학생 앱
        </Button>
        <Button
          onClick={() => setPatrolView("waiting") || setSelectedView("patrol")}
          variant={selectedView === "patrol" ? "default" : "outline"}
          className="flex items-center gap-2"
        >
          <Car className="h-4 w-4" />
          순찰차 앱
        </Button>
        <Button
          onClick={() => setSelectedView("admin")}
          variant={selectedView === "admin" ? "default" : "outline"}
          className="flex items-center gap-2 relative"
        >
          <Monitor className="h-4 w-4" />
          <span>관리</span>
          {adminNotificationCount > 0 && (
            <Badge className="h-5 min-w-5 flex items-center justify-center px-1.5 bg-red-500 text-white text-xs font-semibold rounded-full">
              {adminNotificationCount}
            </Badge>
          )}
          <span>대시보드</span>
        </Button>
      </div>

      {/* 학생 앱 프로토타입 */}
      {selectedView === "student" && (
        <div className="space-y-6">
          {/* 학생 앱 네비게이션 탭 */}
          <Card className="p-4 bg-white border-2 border-blue-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl text-slate-900">학생 앱</h3>
                <p className="text-sm text-slate-600">
                  화면을 전환하여 각 기능을 확인하세요
                </p>
              </div>
            </div>
            <div className="flex gap-2 border-b">
              <Button
                variant={studentView === "home" ? "default" : "ghost"}
                onClick={() => setStudentView("home")}
                className="rounded-b-none font-semibold"
              >
                홈 화면
              </Button>
              <Button
                variant={studentView === "report" ? "default" : "ghost"}
                onClick={() => setStudentView("report")}
                className="rounded-b-none font-semibold"
              >
                긴급 신고
              </Button>
              <Button
                variant={studentView === "status" ? "default" : "ghost"}
                onClick={() => setStudentView("status")}
                className="rounded-b-none font-semibold"
              >
                대응 상태
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-6">
            {studentView === "home" && (
              <Card className="col-span-3 p-6 bg-white">
                <div className="max-w-sm mx-auto bg-slate-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 min-h-[600px]">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-slate-900">
                        안전 신고
                      </h4>
                      <button
                        onClick={() => {
                          if (studentNotificationCount > 0) {
                            alert(`새로운 알림 ${studentNotificationCount}개`);
                            setStudentNotificationCount(0);
                          } else {
                            alert("새로운 알림이 없습니다.");
                          }
                        }}
                        className="relative"
                      >
                        <Bell className="h-5 w-5 text-slate-600" />
                        {studentNotificationCount > 0 && (
                          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-semibold">
                            {studentNotificationCount}
                          </span>
                        )}
                      </button>
                    </div>

                    <div className="space-y-3 mb-6">
                      {reports
                        .filter((r) => r.status !== "완료")
                        .slice(0, 3)
                        .map((report) => (
                          <div
                            key={report.id}
                            className="bg-slate-50 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors"
                            onClick={() => {
                              setSelectedReport(report.id);
                              setStudentView("status");
                            }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <Badge
                                variant="outline"
                                className={
                                  report.priority === "긴급"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }
                              >
                                {report.type}
                              </Badge>
                              <span className="text-xs text-slate-500">
                                {report.time}
                              </span>
                            </div>
                            <div className="text-sm font-semibold text-slate-700 mb-1">
                              {report.location}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <Badge variant="outline" className="text-xs">
                                {report.status}
                              </Badge>
                              {report.patrol && (
                                <span className="text-blue-600">
                                  • {report.patrol}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>

                    <Button
                      onClick={() => setStudentView("report")}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg shadow-lg mb-4"
                    >
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      긴급 신고
                    </Button>

                    {/* 하단 네비게이션 */}
                    <div className="flex gap-2 pt-4 border-t border-slate-200">
                      <div className="flex-1 text-xs text-slate-500 text-center">
                        홈 화면
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setStudentView("report")}
                        className="flex-1 bg-blue-50 border-blue-300 text-blue-600 hover:bg-blue-100 font-semibold"
                      >
                        다음
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {studentView === "report" && (
              <Card className="col-span-3 p-6 bg-white">
                <div className="mb-6">
                  <h3 className="text-2xl text-slate-900 mb-2">
                    긴급 신고 화면
                  </h3>
                  <p className="text-sm text-slate-600">
                    위험 유형을 선택하고 신고를 발송합니다
                  </p>
                </div>

                <div className="max-w-sm mx-auto bg-slate-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 min-h-[600px]">
                    <div className="flex items-center justify-between mb-6">
                      <Button
                        variant="ghost"
                        onClick={() => setStudentView("home")}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                      <h4 className="text-lg font-bold text-slate-900">
                        긴급 신고
                      </h4>
                      <div className="w-10" />
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">
                          위험 유형
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {["폭행", "도난", "사고", "기타"].map((type) => (
                            <Button
                              key={type}
                              variant={
                                selectedReportType === type
                                  ? "default"
                                  : "outline"
                              }
                              className={`h-12 font-semibold ${
                                selectedReportType === type
                                  ? "bg-blue-600 text-white hover:bg-blue-700"
                                  : "bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400"
                              }`}
                              onClick={() => setSelectedReportType(type)}
                            >
                              {type}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">
                          위치
                        </label>
                        <div className="bg-slate-50 p-3 rounded-lg flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <input
                            type="text"
                            value={reportLocation}
                            onChange={(e) => setReportLocation(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-sm text-slate-700"
                            placeholder="위치를 입력하세요"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">
                          사진 첨부
                        </label>
                        <Button
                          variant="outline"
                          className={`w-full h-24 border-2 border-dashed font-medium ${
                            hasPhoto
                              ? "bg-green-50 border-green-400 text-green-700"
                              : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-blue-400"
                          }`}
                          onClick={handlePhotoUpload}
                        >
                          <Camera className="h-6 w-6 mr-2" />
                          {hasPhoto ? "사진 첨부됨 ✓" : "사진 추가"}
                        </Button>
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">
                          설명
                        </label>
                        <textarea
                          className="w-full h-24 p-3 border rounded-lg"
                          placeholder="상황을 설명해주세요..."
                          value={reportDescription}
                          onChange={(e) => setReportDescription(e.target.value)}
                        />
                      </div>
                    </div>

                    <Button
                      onClick={handleReportSubmit}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg shadow-lg mb-4"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      신고 발송
                    </Button>

                    {/* 하단 네비게이션 */}
                    <div className="flex gap-2 pt-4 border-t border-slate-200">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setStudentView("home")}
                        className="flex-1 bg-slate-50 border-slate-300 text-slate-600 hover:bg-slate-100 font-semibold"
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        이전
                      </Button>
                      <div className="flex-1 text-xs text-slate-500 text-center flex items-center justify-center">
                        긴급 신고
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (selectedReportType) {
                            handleReportSubmit();
                          } else {
                            alert("위험 유형을 선택해주세요.");
                          }
                        }}
                        className="flex-1 bg-blue-50 border-blue-300 text-blue-600 hover:bg-blue-100 font-semibold"
                      >
                        다음
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {studentView === "status" && (
              <Card className="col-span-3 p-6 bg-white">
                <div className="mb-6">
                  <h3 className="text-2xl text-slate-900 mb-2">
                    대응 상태 화면
                  </h3>
                  <p className="text-sm text-slate-600">
                    순찰차의 출동 상태와 위치를 실시간으로 확인합니다
                  </p>
                </div>

                <div className="max-w-sm mx-auto bg-slate-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 min-h-[600px]">
                    <div className="flex items-center justify-between mb-6">
                      <Button
                        variant="ghost"
                        onClick={() => setStudentView("home")}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                      <h4 className="text-lg font-bold text-slate-900">
                        대응 상태
                      </h4>
                      <div className="w-10" />
                    </div>

                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-green-700">
                            신고 접수 완료
                          </span>
                        </div>
                        <div className="text-sm text-slate-600">
                          순찰차가 출동했습니다
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-900">
                            순찰차 #1
                          </span>
                          <Badge className="bg-blue-600 animate-pulse">
                            출동 중
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 mt-2">
                          <Clock className="h-4 w-4" />
                          <span>예상 도착 시간: 약 3분</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>거리: 1.2km</span>
                        </div>
                      </div>

                      <div className="bg-slate-100 h-48 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-50"></div>
                        <div className="relative text-center z-10">
                          <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-sm text-slate-600 font-semibold">
                            지도 뷰
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            내 위치와 순찰차 위치 표시
                          </div>
                        </div>
                      </div>

                      {/* 하단 네비게이션 */}
                      <div className="flex gap-2 pt-4 border-t border-slate-200 mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setStudentView("report")}
                          className="flex-1 bg-slate-50 border-slate-300 text-slate-600 hover:bg-slate-100 font-semibold"
                        >
                          <ChevronLeft className="mr-1 h-4 w-4" />
                          이전
                        </Button>
                        <div className="flex-1 text-xs text-slate-500 text-center flex items-center justify-center">
                          대응 상태
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setStudentView("home")}
                          className="flex-1 bg-blue-50 border-blue-300 text-blue-600 hover:bg-blue-100 font-semibold"
                        >
                          홈으로
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* 순찰차 앱 프로토타입 */}
      {selectedView === "patrol" && (
        <div className="space-y-6">
          {/* 순찰차 앱 네비게이션 탭 */}
          <Card className="p-4 bg-white border-2 border-green-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Car className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl text-slate-900">순찰차 앱</h3>
                <p className="text-sm text-slate-600">
                  화면을 전환하여 각 기능을 확인하세요
                </p>
              </div>
            </div>
            <div className="flex gap-2 border-b">
              <Button
                variant={patrolView === "waiting" ? "default" : "ghost"}
                onClick={() => setPatrolView("waiting")}
                className="rounded-b-none font-semibold"
              >
                대기 화면
              </Button>
              <Button
                variant={patrolView === "alert" ? "default" : "ghost"}
                onClick={() => setPatrolView("alert")}
                className="rounded-b-none font-semibold"
              >
                신고 알림
              </Button>
              <Button
                variant={patrolView === "navigation" ? "default" : "ghost"}
                onClick={() => setPatrolView("navigation")}
                className="rounded-b-none font-semibold"
              >
                내비게이션
              </Button>
              <Button
                variant={patrolView === "detail" ? "default" : "ghost"}
                onClick={() => setPatrolView("detail")}
                className="rounded-b-none font-semibold"
              >
                처리 상세
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-6">
            {patrolView === "waiting" && (
              <Card className="col-span-3 p-6 bg-white">
                <div className="mb-6">
                  <h3 className="text-2xl text-slate-900 mb-2">대기 화면</h3>
                  <p className="text-sm text-slate-600">
                    신고 알림을 기다리는 화면
                  </p>
                </div>

                <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 min-h-[400px]">
                    <div className="text-center mb-6">
                      <Car className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">
                        순찰 대기 중
                      </h4>
                      <p className="text-slate-600">현재 위치: 본관 앞</p>
                      <div className="mt-2 flex items-center justify-center gap-2 text-sm text-slate-500">
                        <Activity className="h-4 w-4 text-green-500" />
                        <span>GPS 연결됨</span>
                      </div>
                    </div>

                    <div className="bg-slate-100 h-64 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-30"></div>
                      <div className="relative text-center z-10">
                        <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-sm text-slate-600">
                          현재 위치 지도
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => setPatrolView("alert")}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 mb-4"
                    >
                      신고 알림 수신 시뮬레이션
                    </Button>

                    {/* 하단 네비게이션 */}
                    <div className="flex gap-2 pt-4 border-t border-slate-200">
                      <div className="flex-1 text-xs text-slate-500 text-center flex items-center justify-center">
                        대기 화면
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPatrolView("alert")}
                        className="flex-1 bg-blue-50 border-blue-300 text-blue-600 hover:bg-blue-100 font-semibold"
                      >
                        다음
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {patrolView === "alert" && (
              <Card className="col-span-3 p-6 bg-white">
                <div className="mb-6">
                  <h3 className="text-2xl text-slate-900 mb-2">
                    신고 알림 화면
                  </h3>
                  <p className="text-sm text-slate-600">
                    긴급 신고 알림을 받고 수락/거절할 수 있습니다
                  </p>
                </div>

                <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 min-h-[400px]">
                    <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="h-8 w-8 text-red-600" />
                        <div>
                          <h4 className="text-xl font-bold text-red-700">
                            긴급 신고
                          </h4>
                          <p className="text-sm text-slate-600">
                            폭행 • 공대 3호관 앞
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-600" />
                          <span>위치: 공대 3호관 앞</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-slate-600" />
                          <span>시간: 14:23</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>거리: 1.2km</span>
                          <span>•</span>
                          <span>예상 도착: 3분</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        onClick={handlePatrolAccept}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4"
                      >
                        수락 및 출동
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 py-4 bg-white border-2 border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 font-semibold"
                        onClick={handlePatrolReject}
                      >
                        거절
                      </Button>
                    </div>

                    {/* 하단 네비게이션 */}
                    <div className="flex gap-2 pt-4 border-t border-slate-200 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPatrolView("waiting")}
                        className="flex-1 bg-slate-50 border-slate-300 text-slate-600 hover:bg-slate-100 font-semibold"
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        이전
                      </Button>
                      <div className="flex-1 text-xs text-slate-500 text-center flex items-center justify-center">
                        신고 알림
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePatrolAccept}
                        className="flex-1 bg-blue-50 border-blue-300 text-blue-600 hover:bg-blue-100 font-semibold"
                      >
                        다음
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {patrolView === "navigation" && (
              <Card className="col-span-3 p-6 bg-white">
                <div className="mb-6">
                  <h3 className="text-2xl text-slate-900 mb-2">
                    내비게이션 화면
                  </h3>
                  <p className="text-sm text-slate-600">
                    신고자 위치까지의 경로 안내
                  </p>
                </div>

                <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 min-h-[400px]">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        신고자 위치로 이동 중
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>거리: 1.2km</span>
                        <span>•</span>
                        <span>예상 도착: 3분</span>
                        <span>•</span>
                        <Badge className="bg-green-600">출동 중</Badge>
                      </div>
                    </div>

                    <div className="bg-slate-100 h-64 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-100 to-red-100 opacity-40"></div>
                      <div className="relative text-center z-10">
                        <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2 animate-bounce" />
                        <div className="text-sm text-slate-600 font-semibold">
                          신고자 위치
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          경로 안내 및 턴바이턴 내비게이션
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="flex-1 bg-white border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 font-semibold"
                        onClick={() => {
                          handleStatusChange(1, "처리 중");
                          setPatrolView("detail");
                        }}
                      >
                        도착 확인
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-white border-2 border-green-300 text-green-600 hover:bg-green-50 hover:border-green-400 font-semibold"
                        onClick={() => {
                          handleStatusChange(1, "완료");
                          setPatrolView("waiting");
                          alert("처리가 완료되었습니다.");
                        }}
                      >
                        처리 완료
                      </Button>
                    </div>

                    {/* 하단 네비게이션 */}
                    <div className="flex gap-2 pt-4 border-t border-slate-200 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPatrolView("alert")}
                        className="flex-1 bg-slate-50 border-slate-300 text-slate-600 hover:bg-slate-100 font-semibold"
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        이전
                      </Button>
                      <div className="flex-1 text-xs text-slate-500 text-center flex items-center justify-center">
                        내비게이션
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          handleStatusChange(1, "처리 중");
                          setPatrolView("detail");
                        }}
                        className="flex-1 bg-blue-50 border-blue-300 text-blue-600 hover:bg-blue-100 font-semibold"
                      >
                        다음
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {patrolView === "detail" && (
              <Card className="col-span-3 p-6 bg-white">
                <div className="mb-6">
                  <h3 className="text-2xl text-slate-900 mb-2">
                    처리 상세 화면
                  </h3>
                  <p className="text-sm text-slate-600">
                    신고 처리 내용을 입력합니다
                  </p>
                </div>

                <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 min-h-[400px]">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-4">
                        신고 처리
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-semibold text-slate-700 mb-2 block">
                            처리 내용
                          </label>
                          <textarea
                            className="w-full h-32 p-3 border rounded-lg"
                            placeholder="처리 내용을 입력하세요..."
                            value={patrolReportDescription}
                            onChange={(e) =>
                              setPatrolReportDescription(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-slate-700 mb-2 block">
                            사진 첨부
                          </label>
                          <Button
                            variant="outline"
                            className={`w-full h-24 border-2 border-dashed font-medium ${
                              patrolHasPhoto
                                ? "bg-green-50 border-green-400 text-green-700"
                                : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-blue-400"
                            }`}
                            onClick={handlePatrolPhotoUpload}
                          >
                            <Camera className="h-6 w-6 mr-2" />
                            {patrolHasPhoto ? "사진 첨부됨 ✓" : "사진 추가"}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="flex-1 bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-semibold"
                        onClick={() => setPatrolView("waiting")}
                      >
                        취소
                      </Button>
                      <Button
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={() => {
                          handleStatusChange(1, "완료");
                          setPatrolView("waiting");
                        }}
                      >
                        처리 완료
                      </Button>
                    </div>

                    {/* 하단 네비게이션 */}
                    <div className="flex gap-2 pt-4 border-t border-slate-200 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPatrolView("navigation")}
                        className="flex-1 bg-slate-50 border-slate-300 text-slate-600 hover:bg-slate-100 font-semibold"
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        이전
                      </Button>
                      <div className="flex-1 text-xs text-slate-500 text-center flex items-center justify-center">
                        처리 상세
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          handleStatusChange(1, "완료");
                          setPatrolView("waiting");
                        }}
                        className="flex-1 bg-blue-50 border-blue-300 text-blue-600 hover:bg-blue-100 font-semibold"
                      >
                        완료
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* 관리자 대시보드 프로토타입 */}
      {selectedView === "admin" && (
        <div className="space-y-6">
          {/* 대시보드 헤더 */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl text-slate-900">관리자 대시보드</h3>
              <p className="text-sm text-slate-600">
                실시간 신고 현황과 순찰차 위치를 모니터링합니다
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleRefresh}>
                <RefreshCw className="h-4 w-4 mr-2" />
                새로고침
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadReport}
              >
                <Download className="h-4 w-4 mr-2" />
                리포트
              </Button>
            </div>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-4 gap-4">
            <Card className="p-4 bg-red-50 border-red-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">오늘의 신고</div>
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600">
                {stats.total}건
              </div>
              <div className="text-xs text-slate-500 mt-1">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                전일 대비 +2건
              </div>
            </Card>
            <Card className="p-4 bg-yellow-50 border-yellow-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">처리 중</div>
                <Activity className="h-4 w-4 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-yellow-600">
                {stats.inProgress}건
              </div>
              <div className="text-xs text-slate-500 mt-1">실시간 업데이트</div>
            </Card>
            <Card className="p-4 bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">완료</div>
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">
                {stats.completed}건
              </div>
              <div className="text-xs text-slate-500 mt-1">처리율 83%</div>
            </Card>
            <Card className="p-4 bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-600">평균 대응 시간</div>
                <Clock className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">
                {stats.avgResponseTime}
              </div>
              <div className="text-xs text-slate-500 mt-1">목표: 5분 이내</div>
            </Card>
          </div>

          {/* 탭 네비게이션 */}
          <div className="flex gap-2 border-b">
            <Button
              variant={adminView === "dashboard" ? "default" : "ghost"}
              onClick={() => setAdminView("dashboard")}
              className="rounded-b-none"
            >
              대시보드
            </Button>
            <Button
              variant={adminView === "reports" ? "default" : "ghost"}
              onClick={() => setAdminView("reports")}
              className="rounded-b-none"
            >
              신고 관리
            </Button>
            <Button
              variant={adminView === "map" ? "default" : "ghost"}
              onClick={() => setAdminView("map")}
              className="rounded-b-none"
            >
              지도 모니터링
            </Button>
            <Button
              variant={adminView === "analytics" ? "default" : "ghost"}
              onClick={() => setAdminView("analytics")}
              className="rounded-b-none"
            >
              통계 분석
            </Button>
          </div>

          {/* 대시보드 뷰 */}
          {adminView === "dashboard" && (
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-slate-900">
                    실시간 신고 목록
                  </h4>
                  <Badge className="bg-red-500 animate-pulse">
                    {
                      reports.filter(
                        (r) => r.status === "접수" || r.status === "출동 중"
                      ).length
                    }
                    건
                  </Badge>
                </div>
                <div className="space-y-3 max-h-[500px] overflow-y-auto">
                  {filteredReports.map((report) => (
                    <div
                      key={report.id}
                      className="border rounded-lg p-4 hover:bg-slate-50 cursor-pointer transition-all"
                      onClick={() => {
                        setSelectedReportDetail(report.id);
                        // 신고를 확인하면 알림 감소
                        if (
                          adminNotificationCount > 0 &&
                          report.status === "접수"
                        ) {
                          setAdminNotificationCount((prev) =>
                            Math.max(0, prev - 1)
                          );
                        }
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="outline"
                          className={
                            report.priority === "긴급"
                              ? "bg-red-100 text-red-700"
                              : report.priority === "보통"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        >
                          {report.type}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{report.status}</Badge>
                          {report.status === "출동 중" && (
                            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                          )}
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">
                        {report.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="h-3 w-3" />
                        <span>{report.time}</span>
                        <span>•</span>
                        <span>{report.student}</span>
                        {report.patrol && (
                          <>
                            <span>•</span>
                            <span className="text-blue-600">
                              {report.patrol}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-slate-900">
                    순찰차 현황
                  </h4>
                  <Badge variant="outline">
                    {patrols.filter((p) => p.status !== "대기 중").length}/
                    {patrols.length} 활성
                  </Badge>
                </div>
                <div className="space-y-3">
                  {patrols.map((patrol) => (
                    <div
                      key={patrol.id}
                      className="border rounded-lg p-4 hover:bg-slate-50 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-slate-900">
                            {patrol.name}
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            patrol.status === "대기 중"
                              ? "bg-green-100 text-green-700"
                              : patrol.status === "출동 중"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        >
                          {patrol.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-slate-600 mb-2">
                        {patrol.location}
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <div className="text-slate-500">처리 중</div>
                          <div className="font-semibold">
                            {patrol.reports}건
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-500">배터리</div>
                          <div className="font-semibold">{patrol.battery}%</div>
                        </div>
                        <div>
                          <div className="text-slate-500">속도</div>
                          <div className="font-semibold">
                            {patrol.speed}km/h
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* 신고 관리 뷰 */}
          {adminView === "reports" && (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-slate-900">
                  신고 관리
                </h4>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="검색..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <X className="h-4 w-4 text-slate-400" />
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowFilterModal(!showFilterModal)}
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      필터
                    </Button>
                    {showFilterModal && (
                      <Card className="absolute right-0 mt-2 p-4 bg-white border-2 border-blue-200 shadow-lg z-10 w-64">
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs font-semibold text-slate-700 mb-1 block">
                              신고 유형
                            </label>
                            <select
                              value={typeFilter}
                              onChange={(e) => setTypeFilter(e.target.value)}
                              className="w-full p-2 border rounded text-sm"
                            >
                              <option value="all">전체</option>
                              <option value="폭행">폭행</option>
                              <option value="도난">도난</option>
                              <option value="사고">사고</option>
                              <option value="기타">기타</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-slate-700 mb-1 block">
                              우선순위
                            </label>
                            <select
                              value={priorityFilter}
                              onChange={(e) =>
                                setPriorityFilter(e.target.value)
                              }
                              className="w-full p-2 border rounded text-sm"
                            >
                              <option value="all">전체</option>
                              <option value="긴급">긴급</option>
                              <option value="보통">보통</option>
                              <option value="낮음">낮음</option>
                            </select>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => {
                              setTypeFilter("all");
                              setPriorityFilter("all");
                              setShowFilterModal(false);
                            }}
                          >
                            초기화
                          </Button>
                        </div>
                      </Card>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mb-4 flex-wrap">
                <Button
                  variant={statusFilter === "all" ? "default" : "outline"}
                  size="sm"
                  className={
                    statusFilter === "all"
                      ? ""
                      : "bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400 font-medium"
                  }
                  onClick={() => setStatusFilter("all")}
                >
                  전체 ({reports.length})
                </Button>
                <Button
                  variant={statusFilter === "접수" ? "default" : "outline"}
                  size="sm"
                  className={
                    statusFilter === "접수"
                      ? ""
                      : "bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400 font-medium"
                  }
                  onClick={() => setStatusFilter("접수")}
                >
                  접수 ({reports.filter((r) => r.status === "접수").length})
                </Button>
                <Button
                  variant={statusFilter === "출동 중" ? "default" : "outline"}
                  size="sm"
                  className={
                    statusFilter === "출동 중"
                      ? ""
                      : "bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400 font-medium"
                  }
                  onClick={() => setStatusFilter("출동 중")}
                >
                  출동 중 (
                  {reports.filter((r) => r.status === "출동 중").length})
                </Button>
                <Button
                  variant={statusFilter === "처리 중" ? "default" : "outline"}
                  size="sm"
                  className={
                    statusFilter === "처리 중"
                      ? ""
                      : "bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400 font-medium"
                  }
                  onClick={() => setStatusFilter("처리 중")}
                >
                  처리 중 (
                  {reports.filter((r) => r.status === "처리 중").length})
                </Button>
                <Button
                  variant={statusFilter === "완료" ? "default" : "outline"}
                  size="sm"
                  className={
                    statusFilter === "완료"
                      ? ""
                      : "bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400 font-medium"
                  }
                  onClick={() => setStatusFilter("완료")}
                >
                  완료 ({reports.filter((r) => r.status === "완료").length})
                </Button>
              </div>

              <div className="space-y-3">
                {filteredReports.map((report) => (
                  <Card
                    key={report.id}
                    className="p-4 hover:shadow-md cursor-pointer transition-all"
                    onClick={() => {
                      setSelectedReportDetail(report.id);
                      // 신고를 확인하면 알림 감소
                      if (
                        adminNotificationCount > 0 &&
                        report.status === "접수"
                      ) {
                        setAdminNotificationCount((prev) =>
                          Math.max(0, prev - 1)
                        );
                      }
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className={
                              report.priority === "긴급"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }
                          >
                            {report.type}
                          </Badge>
                          <Badge variant="outline">{report.status}</Badge>
                          <span className="text-xs text-slate-500">
                            {report.time}
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-slate-900 mb-1">
                          {report.location}
                        </div>
                        <div className="text-xs text-slate-600 mb-2">
                          {report.description}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span>신고자: {report.student}</span>
                          {report.patrol && <span>담당: {report.patrol}</span>}
                          {report.photo && (
                            <span className="flex items-center gap-1">
                              <Camera className="h-3 w-3" />
                              사진
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 font-medium"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (report.status === "접수") {
                              handleStatusChange(report.id, "출동 중");
                            } else if (report.status === "출동 중") {
                              handleStatusChange(report.id, "처리 중");
                            } else if (report.status === "처리 중") {
                              handleStatusChange(report.id, "완료");
                            }
                          }}
                        >
                          {report.status === "접수"
                            ? "배정"
                            : report.status === "출동 중"
                            ? "도착"
                            : report.status === "처리 중"
                            ? "완료"
                            : "완료됨"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedReportDetail(report.id);
                            // 신고를 확인하면 알림 감소
                            if (
                              adminNotificationCount > 0 &&
                              report.status === "접수"
                            ) {
                              setAdminNotificationCount((prev) =>
                                Math.max(0, prev - 1)
                              );
                            }
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          )}

          {/* 지도 모니터링 뷰 */}
          {adminView === "map" && (
            <Card className="p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                지도 모니터링
              </h4>
              <div className="bg-slate-100 h-96 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-red-50"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <div className="text-slate-700 font-semibold mb-2">
                    실시간 지도 뷰
                  </div>
                  <div className="text-sm text-slate-600 mb-4">
                    신고 위치와 순찰차 위치를 지도에 표시
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>신고 위치</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>순찰차</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>완료된 신고</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* 통계 분석 뷰 */}
          {adminView === "analytics" && (
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  시간대별 신고 현황
                </h4>
                <div className="h-64 flex items-center justify-center bg-slate-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm text-slate-600">차트 데이터</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  신고 유형별 통계
                </h4>
                <div className="space-y-3">
                  {["폭행", "도난", "사고", "기타"].map((type) => {
                    const count = reports.filter((r) => r.type === type).length;
                    const percentage = (count / reports.length) * 100;
                    return (
                      <div key={type}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-slate-700">{type}</span>
                          <span className="text-sm font-semibold text-slate-900">
                            {count}건 ({percentage.toFixed(0)}%)
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          )}

          {/* 신고 상세 모달 */}
          {selectedReportDetail && (
            <Card className="p-6 bg-white border-2 border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-slate-900">
                  신고 상세 정보
                </h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedReportDetail(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              {(() => {
                const report = reports.find(
                  (r) => r.id === selectedReportDetail
                );
                if (!report) return null;
                return (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">
                          신고 유형
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-red-100 text-red-700"
                        >
                          {report.type}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">상태</div>
                        <Badge variant="outline">{report.status}</Badge>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">위치</div>
                        <div className="text-sm font-semibold">
                          {report.location}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">
                          신고 시간
                        </div>
                        <div className="text-sm">{report.time}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">
                          신고자
                        </div>
                        <div className="text-sm">{report.student}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">
                          담당 순찰차
                        </div>
                        <div className="text-sm">
                          {report.patrol || "미배정"}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">설명</div>
                      <div className="text-sm bg-slate-50 p-3 rounded-lg">
                        {report.description}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-2">
                        처리 타임라인
                      </div>
                      <div className="space-y-2">
                        {report.timeline.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-sm"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-slate-500">{item.time}</span>
                            <span className="text-slate-700">
                              {item.action}
                            </span>
                            <span className="text-slate-400">
                              • {item.user}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 bg-white border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 font-medium"
                        onClick={() => {
                          const report = reports.find(
                            (r) => r.id === selectedReportDetail
                          );
                          if (report) {
                            handleContact(report.studentPhone);
                          }
                        }}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        연락하기
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-white border-2 border-green-300 text-green-600 hover:bg-green-50 hover:border-green-400 font-medium"
                        onClick={() => {
                          const report = reports.find(
                            (r) => r.id === selectedReportDetail
                          );
                          if (report) {
                            handleMessage(report.studentPhone);
                          }
                        }}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        메시지
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-white border-2 border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 font-medium"
                        onClick={() => {
                          if (report.status === "접수") {
                            handleStatusChange(report.id, "출동 중");
                          } else if (report.status === "출동 중") {
                            handleStatusChange(report.id, "처리 중");
                          } else if (report.status === "처리 중") {
                            handleStatusChange(report.id, "완료");
                          }
                        }}
                      >
                        상태 변경
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
