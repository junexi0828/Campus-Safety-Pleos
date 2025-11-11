import { Car } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function PatrolStoryMapSlide() {
  const storyMap = [
    {
      epic: '신고 알림 수신',
      priority: 'P0',
      stories: [
        {
          story: '실시간 신고 알림 받기',
          tasks: [
            '푸시 알림으로 신고 수신',
            '신고 유형 및 긴급도 확인',
            '신고자 위치 정보 표시',
            '알림음 및 진동 설정',
            '신고 수락/거절 액션'
          ]
        },
        {
          story: '신고 목록 관리',
          tasks: [
            '대기 중인 신고 목록',
            '처리 중인 신고 확인',
            '완료된 신고 기록'
          ]
        }
      ]
    },
    {
      epic: '신고자 위치 추적',
      priority: 'P0',
      stories: [
        {
          story: '실시간 위치 확인',
          tasks: [
            '차량 내 지도에 신고자 위치 표시',
            '신고자와의 거리 계산',
            '실시간 위치 업데이트',
            '위치 정확도 표시'
          ]
        },
        {
          story: '최적 경로 안내',
          tasks: [
            '신고 위치까지 경로 계산',
            '예상 도착 시간 표시',
            '턴바이턴 내비게이션',
            '교통 상황 반영'
          ]
        }
      ]
    },
    {
      epic: '대응 상태 관리',
      priority: 'P0',
      stories: [
        {
          story: '신고 대응 프로세스',
          tasks: [
            '신고 접수 확인 전송',
            '출동 중 상태 업데이트',
            '현장 도착 확인',
            '처리 완료 보고',
            '추가 조치 필요 표시'
          ]
        },
        {
          story: '신고자와 소통',
          tasks: [
            '신고자에게 메시지 전송',
            '예상 도착 시간 공유',
            '추가 정보 요청'
          ]
        }
      ]
    },
    {
      epic: '순찰 활동 기록',
      priority: 'P1',
      stories: [
        {
          story: '근무 기록 관리',
          tasks: [
            '근무 시작/종료 체크',
            '순찰 경로 자동 기록',
            '처리한 신고 통계',
            '차량 주행 데이터'
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
        <div className="bg-green-100 p-3 rounded-lg">
          <Car className="h-8 w-8 text-green-600" />
        </div>
        <div>
          <h2 className="text-3xl text-slate-900">순찰 차량 운전자</h2>
          <p className="text-slate-600">유저 스토리 맵 (Pleos AAOS 기반)</p>
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
                        <span className="text-green-500 mt-0.5">•</span>
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

      <div className="mt-4 text-xs text-slate-500 bg-green-50 p-3 rounded">
        💡 핵심 화면: 신고 알림 화면, 지도 및 내비게이션 화면, 대응 상태 관리 화면, 신고 목록 화면
      </div>
    </div>
  );
}
