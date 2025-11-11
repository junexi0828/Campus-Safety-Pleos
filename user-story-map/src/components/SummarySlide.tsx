import { CheckCircle2, Users, Target, TrendingUp, Lightbulb } from 'lucide-react';
import { Card } from './ui/card';

export default function SummarySlide() {
  const keyPoints = [
    {
      icon: Users,
      color: 'blue',
      title: '4개 사용자 유형',
      description: '학생, 순찰차, 관리자, 당직자의 명확한 역할 정의'
    },
    {
      icon: Target,
      color: 'red',
      title: 'P0 핵심 기능',
      description: '위험 신고, 위치 추적, 알림, 대시보드 - MVP 구현 범위 명확화'
    },
    {
      icon: TrendingUp,
      color: 'green',
      title: '3단계 로드맵',
      description: 'MVP → 확장 → 고도화로 이어지는 체계적 개발 계획'
    },
    {
      icon: Lightbulb,
      color: 'purple',
      title: '문제 해결 중심',
      description: 'A/O 프레임워크 기반 사용자 니즈 반영 스토리맵'
    }
  ];

  const nextSteps = [
    {
      phase: '1단계',
      title: '팀 구성 및 환경 설정',
      items: ['역할 분담', 'Pleos SDK 설정', 'Git 저장소 구축']
    },
    {
      phase: '2단계',
      title: '설계 및 프로토타입',
      items: ['API 설계', '화면 설계', 'DB 스키마']
    },
    {
      phase: '3단계',
      title: 'MVP 개발 착수',
      items: ['학생 앱 개발', '순찰차 앱 개발', 'Backend API']
    },
    {
      phase: '4단계',
      title: '통합 및 테스트',
      items: ['시스템 통합', '테스트', '내부 시연']
    }
  ];

  const getIconBgColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100',
      red: 'bg-red-100',
      green: 'bg-green-100',
      purple: 'bg-purple-100'
    };
    return colors[color] || 'bg-slate-100';
  };

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'text-blue-600',
      red: 'text-red-600',
      green: 'text-green-600',
      purple: 'text-purple-600'
    };
    return colors[color] || 'text-slate-600';
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-50 to-blue-50 p-12 overflow-y-auto">
      <h2 className="text-4xl text-slate-900 mb-2 text-center">유저 스토리 맵 요약</h2>
      <p className="text-slate-600 mb-8 text-center">교내 안전 통합 관리 플랫폼 개발 가이드</p>

      <Card className="p-6 bg-white mb-6 border-2 border-blue-200">
        <h3 className="text-slate-900 mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-blue-600" />
          핵심 성과물
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {keyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex items-start gap-3">
                <div className={`${getIconBgColor(point.color)} p-2 rounded-lg flex-shrink-0`}>
                  <Icon className={`h-5 w-5 ${getIconColor(point.color)}`} />
                </div>
                <div>
                  <div className="text-sm text-slate-900">{point.title}</div>
                  <div className="text-xs text-slate-600">{point.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card className="p-6 bg-white">
          <h3 className="text-slate-900 mb-4">구현 원칙</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>사용자 중심:</strong> 각 사용자 유형의 실제 업무 흐름 반영</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>우선순위:</strong> P0 핵심 기능 먼저 완성 후 확장</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>실시간성:</strong> 5분 이내 대응 목표로 최적화</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>확장성:</strong> Phase 2, 3로 점진적 기능 추가</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>측정 가능:</strong> 데이터 기반 의사결정 지원</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-white">
          <h3 className="text-slate-900 mb-4">기대 효과</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>응답 시간 70% 단축:</strong> 평균 5분 이내 현장 도착</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>안전 체감도 향상:</strong> 실시간 대응으로 신뢰 구축</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>운영 효율성:</strong> 데이터 기반 순찰 계획 수립</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>기술 혁신:</strong> Pleos AAOS 혁신 사례 창출</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>확장 가능성:</strong> 타 캠퍼스 및 지역사회 적용</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h3 className="mb-4">다음 단계 (Next Steps)</h3>
        <div className="grid grid-cols-4 gap-4">
          {nextSteps.map((step, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-xs text-blue-100 mb-1">{step.phase}</div>
              <div className="text-sm mb-2">{step.title}</div>
              <ul className="space-y-1">
                {step.items.map((item, idx) => (
                  <li key={idx} className="text-xs text-blue-100">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-6 text-center text-sm text-slate-600">
        이 유저 스토리 맵은 개발팀의 구현 가이드이자 사용자 문제 해결을 위한 청사진입니다
      </div>
    </div>
  );
}
