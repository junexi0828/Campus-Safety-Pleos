import { Calendar, Rocket, Code, TestTube, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function RoadmapSlide() {
  const roadmap = [
    {
      phase: 'Phase 1',
      period: '1-2개월',
      status: 'MVP 개발',
      color: 'red',
      milestones: [
        {
          title: '프로젝트 착수',
          tasks: [
            '팀 구성 및 역할 분담',
            '개발 환경 설정',
            'Pleos SDK 연동 테스트',
            '데이터베이스 설계'
          ]
        },
        {
          title: '핵심 기능 개발',
          tasks: [
            '학생 앱 개발 (신고 발송)',
            '순찰차 앱 개발 (알림 수신)',
            'GPS 위치 추적 시스템',
            '대응 상태 관리 API'
          ]
        },
        {
          title: '대시보드 개발',
          tasks: [
            '웹 대시보드 UI 구현',
            '실시간 지도 통합',
            '신고 현황 모니터링',
            '알림 시스템 구축'
          ]
        },
        {
          title: 'MVP 완성 및 테스트',
          tasks: [
            '통합 테스트',
            '버그 수정',
            '성능 최적화',
            '내부 시연'
          ]
        }
      ]
    },
    {
      phase: 'Phase 2',
      period: '3-4개월',
      status: '확장 및 최적화',
      color: 'yellow',
      milestones: [
        {
          title: 'P1 기능 추가',
          tasks: [
            '신고 내역 조회 시스템',
            '순찰 경로 최적화',
            '메시징 기능',
            '당직자 알림 시스템'
          ]
        },
        {
          title: '사용자 경험 개선',
          tasks: [
            'UI/UX 리팩토링',
            '접근성 개선',
            '다크 모드 지원',
            '반응형 디자인 강화'
          ]
        },
        {
          title: '파일럿 테스트',
          tasks: [
            '실제 캠퍼스 환경 테스트',
            '사용자 피드백 수집',
            '개선사항 반영',
            '안정성 검증'
          ]
        }
      ]
    },
    {
      phase: 'Phase 3',
      period: '5-6개월',
      status: '고도화 및 확산',
      color: 'blue',
      milestones: [
        {
          title: 'P2 고급 기능',
          tasks: [
            '민원 관리 시스템',
            '예측 분석 기능',
            '환경 데이터 수집',
            '상세 리포트 생성'
          ]
        },
        {
          title: '운영 최적화',
          tasks: [
            '자동화 시스템 구축',
            '모니터링 강화',
            '로그 분석',
            '장애 대응 체계'
          ]
        },
        {
          title: '확산 및 홍보',
          tasks: [
            '다른 캠퍼스 확대 적용',
            '기술 문서화',
            '사용자 교육',
            '공모전 출품'
          ]
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; badge: string }> = {
      red: { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-500' },
      yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', badge: 'bg-yellow-500' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-500' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="h-full bg-slate-50 p-12 overflow-y-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
          <Calendar className="h-8 w-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl text-slate-900">개발 로드맵</h2>
          <p className="text-slate-600">6개월 단계별 추진 계획</p>
        </div>
      </div>

      <div className="space-y-4">
        {roadmap.map((phase, phaseIndex) => {
          const colors = getColorClasses(phase.color);
          return (
            <Card key={phaseIndex} className={`p-5 bg-white ${colors.border} border-2`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Badge className={`${colors.badge} text-white`}>
                    {phase.phase}
                  </Badge>
                  <h3 className="text-slate-900">{phase.status}</h3>
                </div>
                <div className="text-sm text-slate-600">{phase.period}</div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {phase.milestones.map((milestone, milestoneIndex) => (
                  <div key={milestoneIndex} className={`${colors.bg} rounded-lg p-3`}>
                    <h4 className="text-sm text-slate-900 mb-2">{milestone.title}</h4>
                    <ul className="space-y-1">
                      {milestone.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-xs text-slate-600 flex items-start gap-1">
                          <span className="text-slate-400 mt-0.5">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-5 gap-3">
        <Card className="p-3 bg-gradient-to-br from-red-500 to-red-600 text-white">
          <Rocket className="h-6 w-6 mb-2" />
          <div className="text-xs">즉시 시작</div>
          <div className="text-lg">Week 1</div>
        </Card>
        <Card className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <Code className="h-6 w-6 mb-2" />
          <div className="text-xs">MVP 완성</div>
          <div className="text-lg">8주차</div>
        </Card>
        <Card className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
          <TestTube className="h-6 w-6 mb-2" />
          <div className="text-xs">파일럿</div>
          <div className="text-lg">16주차</div>
        </Card>
        <Card className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <Award className="h-6 w-6 mb-2" />
          <div className="text-xs">고도화</div>
          <div className="text-lg">24주차</div>
        </Card>
        <Card className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <Award className="h-6 w-6 mb-2" />
          <div className="text-xs">확산</div>
          <div className="text-lg">26주차</div>
        </Card>
      </div>
    </div>
  );
}
