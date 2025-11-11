import { Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function StudentStoryMapSlide() {
  const storyMap = [
    {
      epic: '위험 신고 관리',
      priority: 'P0',
      stories: [
        {
          story: '긴급 위험 신호 발송',
          tasks: [
            '위험 유형 선택 (폭행, 도난, 사고 등)',
            '현재 위치 자동 감지 및 전송',
            '사진/영상 첨부',
            '간단한 설명 입력',
            '원터치 긴급 신고 버튼'
          ]
        },
        {
          story: '신고 내역 조회',
          tasks: [
            '내 신고 목록 확인',
            '신고 상태별 필터링',
            '신고 상세 내용 확인'
          ]
        }
      ]
    },
    {
      epic: '실시간 위치 공유',
      priority: 'P0',
      stories: [
        {
          story: '위치 정보 제공',
          tasks: [
            'GPS 위치 권한 요청',
            '실시간 위치 전송',
            '위치 정확도 표시'
          ]
        }
      ]
    },
    {
      epic: '대응 상태 확인',
      priority: 'P1',
      stories: [
        {
          story: '실시간 대응 상태 추적',
          tasks: [
            '신고 접수 알림 수신',
            '순찰차 출동 알림',
            '예상 도착 시간 확인',
            '처리 완료 알림'
          ]
        },
        {
          story: '순찰차 위치 확인',
          tasks: [
            '지도에서 순찰차 실시간 위치 보기',
            '순찰차와의 거리 표시'
          ]
        }
      ]
    },
    {
      epic: '안전 정보 조회',
      priority: 'P2',
      stories: [
        {
          story: '캠퍼스 안전 정보 확인',
          tasks: [
            '최근 안전 사고 통계',
            '순찰차 현황 조회',
            '비상 연락처 확인'
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
        <div className="bg-blue-100 p-3 rounded-lg">
          <Users className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h2 className="text-3xl text-slate-900">학생 / 캠퍼스 이용자</h2>
          <p className="text-slate-600">유저 스토리 맵</p>
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
                        <span className="text-blue-500 mt-0.5">•</span>
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

      <div className="mt-4 text-xs text-slate-500 bg-blue-50 p-3 rounded">
        💡 핵심 화면: 홈 화면, 긴급 신고 화면, 신고 내역 화면, 실시간 상태 추적 화면
      </div>
    </div>
  );
}
