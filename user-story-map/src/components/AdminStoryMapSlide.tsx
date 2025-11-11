import { Shield } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function AdminStoryMapSlide() {
  const storyMap = [
    {
      epic: '통합 모니터링',
      priority: 'P0',
      stories: [
        {
          story: '실시간 대시보드',
          tasks: [
            '전체 신고 현황 실시간 표시',
            '순찰차 위치 지도 뷰',
            '대응 중인 사건 목록',
            '긴급도별 신고 분류',
            '대응 시간 통계',
            '알림 센터 (중요 이벤트)'
          ]
        },
        {
          story: '지도 기반 모니터링',
          tasks: [
            '캠퍼스 지도에 신고 위치 표시',
            '순찰차 실시간 위치',
            '사건 클러스터링',
            '히트맵으로 위험 지역 시각화'
          ]
        }
      ]
    },
    {
      epic: '신고 현황 관리',
      priority: 'P0',
      stories: [
        {
          story: '신고 검색 및 필터링',
          tasks: [
            '날짜/시간별 신고 조회',
            '신고 유형별 필터',
            '처리 상태별 필터',
            '지역별 필터',
            '키워드 검색'
          ]
        },
        {
          story: '신고 상세 관리',
          tasks: [
            '신고 상세 정보 확인',
            '첨부 사진/영상 확인',
            '대응 담당자 배정',
            '처리 메모 작성',
            '신고 재분류/우선순위 조정'
          ]
        },
        {
          story: '신고 처리 추적',
          tasks: [
            '신고별 처리 타임라인',
            '담당자 대응 기록',
            '처리 완료 승인',
            '후속 조치 관리'
          ]
        }
      ]
    },
    {
      epic: '순찰차 배치 최적화',
      priority: 'P1',
      stories: [
        {
          story: '순찰 인력 관리',
          tasks: [
            '근무 중인 순찰차 현황',
            '순찰 일정 배정',
            '순찰차별 처리 통계',
            '근무 교대 관리'
          ]
        },
        {
          story: '순찰 경로 분석',
          tasks: [
            '순찰 경로 기록 조회',
            '순찰 밀도 분석',
            '사각지대 식별',
            '최적 순찰 경로 제안'
          ]
        }
      ]
    },
    {
      epic: '통계 및 리포트',
      priority: 'P2',
      stories: [
        {
          story: '안전 통계 분석',
          tasks: [
            '신고 건수 추이 그래프',
            '신고 유형별 통계',
            '시간대별 신고 분석',
            '지역별 안전 지수',
            '평균 대응 시간 분석'
          ]
        },
        {
          story: '보고서 생성',
          tasks: [
            '주간/월간 리포트 자동 생성',
            'PDF/Excel 내보내기',
            '맞춤형 리포트 설정',
            '이메일 자동 발송'
          ]
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'P0': return 'bg-red-100 text-red-700 border-red-300';
      case 'P1': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'P2': return 'bg-blue-100 text-blue-700 border-blue-300';
      default: return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <div className="h-full bg-slate-50 p-12 overflow-y-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-purple-100 p-3 rounded-lg">
          <Shield className="h-8 w-8 text-purple-600" />
        </div>
        <div>
          <h2 className="text-3xl text-slate-900">행정안전부 담당자</h2>
          <p className="text-slate-600">유저 스토리 맵 (웹 대시보드)</p>
        </div>
      </div>

      <div className="space-y-4">
        {storyMap.map((epic, epicIndex) => (
          <Card key={epicIndex} className="p-4 bg-white">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-slate-900">{epic.epic}</h3>
              <Badge variant="outline" className={getPriorityColor(epic.priority)}>
                {epic.priority}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {epic.stories.map((item, storyIndex) => (
                <div key={storyIndex} className="bg-slate-50 rounded-lg p-3">
                  <div className="text-sm text-slate-900 mb-2">
                    📋 {item.story}
                  </div>
                  <ul className="space-y-1">
                    {item.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-purple-500 mt-0.5">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-4 text-xs text-slate-500 bg-purple-50 p-3 rounded">
        💡 핵심 화면: 통합 대시보드, 신고 관리 화면, 순찰차 관리 화면, 통계 및 리포트 화면
      </div>
    </div>
  );
}
