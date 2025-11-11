import { Building2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function DormStoryMapSlide() {
  const storyMap = [
    {
      epic: '당번별 알림 수신',
      priority: 'P1',
      stories: [
        {
          story: '담당 지역 신고 알림',
          tasks: [
            '담당 기숙사 구역 설정',
            '해당 구역 신고 알림 수신',
            '긴급 신고 푸시 알림',
            '알림 히스토리 조회'
          ]
        },
        {
          story: '당직 근무 관리',
          tasks: [
            '당직 스케줄 확인',
            '근무 시작/종료 체크인',
            '교대 인수인계',
            '근무 보고서 작성'
          ]
        }
      ]
    },
    {
      epic: '지역별 상황 조회',
      priority: 'P1',
      stories: [
        {
          story: '담당 구역 모니터링',
          tasks: [
            '담당 기숙사 신고 현황',
            '처리 중인 사건 확인',
            '최근 완료된 신고 조회',
            '지역 안전 상태 확인'
          ]
        },
        {
          story: '순찰 현황 확인',
          tasks: [
            '담당 구역 순찰차 위치',
            '순찰 예정 시간 확인',
            '순찰 요청'
          ]
        }
      ]
    },
    {
      epic: '민원 접수 관리',
      priority: 'P2',
      stories: [
        {
          story: '민원 등록 및 관리',
          tasks: [
            '시설 고장 신고 접수',
            '소음 민원 등록',
            '분실물 신고',
            '민원 처리 상태 추적',
            '민원 처리 완료 보고'
          ]
        },
        {
          story: '학생 문의 대응',
          tasks: [
            '안전 관련 문의 답변',
            'FAQ 확인',
            '비상 연락처 제공'
          ]
        }
      ]
    },
    {
      epic: '근무 기록 관리',
      priority: 'P2',
      stories: [
        {
          story: '일지 작성',
          tasks: [
            '당직 일지 작성',
            '특이사항 기록',
            '순찰 기록 확인',
            '인수인계 사항 작성'
          ]
        },
        {
          story: '근무 통계',
          tasks: [
            '월별 근무 시간',
            '처리한 신고 통계',
            '근무 평가'
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
        <div className="bg-orange-100 p-3 rounded-lg">
          <Building2 className="h-8 w-8 text-orange-600" />
        </div>
        <div>
          <h2 className="text-3xl text-slate-900">기숙사 / 당직자</h2>
          <p className="text-slate-600">유저 스토리 맵 (웹 또는 모바일)</p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {epic.stories.map((item, storyIndex) => (
                <div key={storyIndex} className="bg-slate-50 rounded-lg p-3">
                  <div className="text-sm text-slate-900 mb-2">
                    📋 {item.story}
                  </div>
                  <ul className="space-y-1">
                    {item.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5">•</span>
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

      <div className="mt-4 text-xs text-slate-500 bg-orange-50 p-3 rounded">
        💡 핵심 화면: 알림 센터, 담당 구역 대시보드, 민원 관리 화면, 근무 일지 화면
      </div>
    </div>
  );
}
