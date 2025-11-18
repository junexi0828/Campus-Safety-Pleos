import { Target, Users, Zap, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';

export default function OverviewSlide() {
  return (
    <div className="h-full bg-slate-50 p-12 overflow-y-auto">
      <h2 className="text-4xl text-slate-900 mb-8">프로젝트 개요</h2>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <Card className="p-6 bg-white border-blue-200">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="mb-2 text-slate-900">핵심 목표</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                위험신호 → 즉시 순찰차 알림 → 실시간 위치 확인 및 대응
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-green-200">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="mb-2 text-slate-900">응답 시간 목표</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                평균 5분 이내 순찰차 현장 도착 (기존 대비 70% 단축)
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-purple-200">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="mb-2 text-slate-900">주요 사용자</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                학생, 순찰 차량 운전자, 행정안전부 담당자, 기숙사 당직자
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-orange-200">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="mb-2 text-slate-900">기대 효과</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                안전 체감도 향상, 운영 효율성 개선, Pleos 혁신 사례 창출
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300">
        <h3 className="mb-4 text-slate-900">유저 스토리 맵 작성 방법론</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
            <div>
              <p className="text-slate-700">문제 해결 중심의 액션/오브젝트(A/O) 프레임워크</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
            <div>
              <p className="text-slate-700">사용자 유형별 중요 업무(에픽) 식별 및 범위 설정</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
            <div>
              <p className="text-slate-700">화면 시나리오 기반 스토리 추출 및 구현 가이드</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
            <div>
              <p className="text-slate-700">MVP 중심 핵심 기능 우선순위화</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
