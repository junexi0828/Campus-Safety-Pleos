import { Target, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function MVPPrioritySlide() {
  const mvpFeatures = {
    p0: [
      {
        title: '위험 신고 시스템',
        features: [
          '학생 앱: 긴급 신고 발송 (위치, 사진, 설명)',
          '학생 앱: GPS 위치 자동 전송',
          '순찰차 앱: 실시간 신고 알림 수신',
          '순찰차 앱: 신고자 위치 지도 표시'
        ]
      },
      {
        title: '실시간 위치 추적',
        features: [
          '순찰차 GPS 위치 실시간 수집',
          '대시보드: 순찰차 위치 지도 뷰',
          '신고자와 순찰차 거리 계산',
          '예상 도착 시간 표시'
        ]
      },
      {
        title: '대응 상태 관리',
        features: [
          '신고 상태: 접수 → 출동 → 도착 → 완료',
          '순찰차: 상태 변경 액션',
          '학생 앱: 대응 상태 실시간 표시',
          '대시보드: 전체 신고 현황 모니터링'
        ]
      },
      {
        title: '통합 대시보드',
        features: [
          '실시간 신고 목록',
          '순찰차 현황 및 위치',
          '대응 중인 사건 표시',
          '기본 통계 (오늘의 신고 건수, 평균 대응 시간)'
        ]
      }
    ],
    p1: [
      {
        title: '확장 기능 (조기 구현 권장)',
        features: [
          '신고 내역 조회 및 검색',
          '순찰 경로 최적화 및 내비게이션',
          '당직자 알림 시스템',
          '신고자-순찰차 간 메시징',
          '순찰 활동 기록 및 통계'
        ]
      }
    ],
    p2: [
      {
        title: 'Phase 2 확장 (선택)',
        features: [
          '민원 관리 시스템',
          '예측 기반 순찰 경로',
          '환경 데이터 수집 (온도, HVAC)',
          '상세 리포트 및 분석',
          '다국어 지원'
        ]
      }
    ]
  };

  const implementationOrder = [
    {
      phase: 'Week 1-2',
      title: '기본 인프라 구축',
      tasks: [
        'Backend API 서버 구축',
        '데이터베이스 설계 및 구축',
        '인증 시스템 (JWT)',
        '기본 프로젝트 구조 설정'
      ]
    },
    {
      phase: 'Week 3-4',
      title: 'P0 핵심 기능 개발',
      tasks: [
        '학생 앱: 신고 발송 기능',
        '순찰차 앱: 알림 수신 및 위치 추적',
        'GPS 위치 실시간 동기화',
        '대응 상태 관리 시스템'
      ]
    },
    {
      phase: 'Week 5-6',
      title: '대시보드 및 통합',
      tasks: [
        '웹 대시보드 개발',
        '실시간 지도 뷰',
        '신고 현황 모니터링',
        '시스템 통합 테스트'
      ]
    },
    {
      phase: 'Week 7-8',
      title: 'P1 기능 및 최적화',
      tasks: [
        'P1 기능 구현',
        '성능 최적화',
        'UI/UX 개선',
        '최종 테스트 및 버그 수정'
      ]
    }
  ];

  return (
    <div className="h-full bg-slate-50 p-12 overflow-y-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gradient-to-br from-red-500 to-orange-500 p-3 rounded-lg">
          <Target className="h-8 w-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl text-slate-900">MVP 범위 및 우선순위</h2>
          <p className="text-slate-600">Phase 1 필수 구현 기능</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        {/* P0 Features */}
        <Card className="p-5 bg-white border-2 border-red-200">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-red-500 text-white">P0 - 필수</Badge>
            <h3 className="text-slate-900">MVP 핵심 기능 (반드시 구현)</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {mvpFeatures.p0.map((feature, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-4">
                <h4 className="text-sm text-slate-900 mb-2">🎯 {feature.title}</h4>
                <ul className="space-y-1">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* P1 Features */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-5 bg-white border-yellow-200">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-yellow-500 text-white">P1 - 중요</Badge>
              <h3 className="text-slate-900">조기 구현 권장</h3>
            </div>
            {mvpFeatures.p1.map((feature, index) => (
              <div key={index}>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>

          <Card className="p-5 bg-white border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-blue-500 text-white">P2 - 선택</Badge>
              <h3 className="text-slate-900">Phase 2 확장</h3>
            </div>
            {mvpFeatures.p2.map((feature, index) => (
              <div key={index}>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        </div>
      </div>

      <Card className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h3 className="text-slate-900 mb-4">구현 순서 (8주 계획)</h3>
        <div className="grid grid-cols-4 gap-3">
          {implementationOrder.map((phase, index) => (
            <div key={index} className="bg-white rounded-lg p-3 border border-slate-200">
              <div className="text-sm text-blue-600 mb-2">{phase.phase}</div>
              <div className="text-xs text-slate-900 mb-2">{phase.title}</div>
              <ul className="space-y-1">
                {phase.tasks.map((task, idx) => (
                  <li key={idx} className="text-xs text-slate-600">• {task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
