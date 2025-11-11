import { Users, Car, Shield, Building2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function EpicDefinitionSlide() {
  const userTypes = [
    {
      icon: Users,
      color: 'blue',
      title: '학생 / 캠퍼스 이용자',
      device: '모바일 앱 (Android)',
      epics: [
        { name: '위험 신고 관리', priority: 'P0' },
        { name: '실시간 위치 공유', priority: 'P0' },
        { name: '대응 상태 확인', priority: 'P1' },
        { name: '안전 정보 조회', priority: 'P2' }
      ]
    },
    {
      icon: Car,
      color: 'green',
      title: '순찰 차량 운전자',
      device: '차량 앱 (Pleos AAOS)',
      epics: [
        { name: '신고 알림 수신', priority: 'P0' },
        { name: '신고자 위치 추적', priority: 'P0' },
        { name: '대응 상태 관리', priority: 'P0' },
        { name: '실시간 경로 안내', priority: 'P1' }
      ]
    },
    {
      icon: Shield,
      color: 'purple',
      title: '행정안전부 담당자',
      device: '웹 대시보드',
      epics: [
        { name: '통합 모니터링', priority: 'P0' },
        { name: '신고 현황 관리', priority: 'P0' },
        { name: '순찰차 배치 최적화', priority: 'P1' },
        { name: '통계 및 리포트', priority: 'P2' }
      ]
    },
    {
      icon: Building2,
      color: 'orange',
      title: '기숙사 / 당직자',
      device: '웹 또는 모바일',
      epics: [
        { name: '당번별 알림 수신', priority: 'P1' },
        { name: '지역별 상황 조회', priority: 'P1' },
        { name: '민원 접수 관리', priority: 'P2' },
        { name: '근무 기록 관리', priority: 'P2' }
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

  const getIconBgColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100',
      green: 'bg-green-100',
      purple: 'bg-purple-100',
      orange: 'bg-orange-100'
    };
    return colors[color] || 'bg-slate-100';
  };

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600'
    };
    return colors[color] || 'text-slate-600';
  };

  return (
    <div className="h-full bg-slate-50 p-12 overflow-y-auto">
      <h2 className="text-4xl text-slate-900 mb-2">사용자 유형 및 에픽 정의</h2>
      <p className="text-slate-600 mb-8">각 사용자별 주요 업무(Epic)와 우선순위</p>
      
      <div className="grid grid-cols-2 gap-6">
        {userTypes.map((user, index) => {
          const Icon = user.icon;
          return (
            <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow">
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
                  <div key={epicIndex} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-sm text-slate-700">{epic.name}</span>
                    <Badge variant="outline" className={`text-xs ${getPriorityColor(epic.priority)}`}>
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
              <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">P0</Badge>
              <span className="text-slate-600">필수 (MVP 핵심 기능)</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-300">P1</Badge>
              <span className="text-slate-600">중요 (조기 구현 권장)</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">P2</Badge>
              <span className="text-slate-600">선택 (Phase 2 확장)</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
