import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Shield, Car, Building2, Target, Map, CheckCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Card } from './components/ui/card';

// Slide components
import TitleSlide from './components/TitleSlide';
import OverviewSlide from './components/OverviewSlide';
import EpicDefinitionSlide from './components/EpicDefinitionSlide';
import IntegratedFlowSlide from './components/IntegratedFlowSlide';
import StudentStoryMapSlide from './components/StudentStoryMapSlide';
import PatrolStoryMapSlide from './components/PatrolStoryMapSlide';
import AdminStoryMapSlide from './components/AdminStoryMapSlide';
import DormStoryMapSlide from './components/DormStoryMapSlide';
import ScreenFlowSlide from './components/ScreenFlowSlide';
import MVPPrioritySlide from './components/MVPPrioritySlide';
import ImplementationScopeSlide from './components/ImplementationScopeSlide';
import RoadmapSlide from './components/RoadmapSlide';
import MockupPrototypeSlide from './components/MockupPrototypeSlide';
import SummarySlide from './components/SummarySlide';

const slides = [
  { id: 1, component: TitleSlide, title: '표지' },
  { id: 2, component: OverviewSlide, title: '프로젝트 개요' },
  { id: 3, component: EpicDefinitionSlide, title: '사용자 유형 및 에픽' },
  { id: 4, component: IntegratedFlowSlide, title: '전체 시스템 플로우' },
  { id: 5, component: StudentStoryMapSlide, title: '학생 스토리맵' },
  { id: 6, component: PatrolStoryMapSlide, title: '순찰차 스토리맵' },
  { id: 7, component: AdminStoryMapSlide, title: '관리자 스토리맵' },
  { id: 8, component: DormStoryMapSlide, title: '당직자 스토리맵' },
  { id: 9, component: ScreenFlowSlide, title: '에픽별 화면 구성 및 흐름' },
  { id: 10, component: MVPPrioritySlide, title: 'MVP 우선순위' },
  { id: 11, component: ImplementationScopeSlide, title: '구현 범위 정의' },
  { id: 12, component: RoadmapSlide, title: '개발 로드맵' },
  { id: 13, component: MockupPrototypeSlide, title: '목업 프로토타입' },
  { id: 14, component: SummarySlide, title: '요약' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col">
      {/* Slide Container */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden relative">
          <CurrentSlideComponent />

          {/* Slide Number */}
          <div className="absolute bottom-6 right-6 text-slate-400 text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pb-8 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            onClick={prevSlide}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            이전
          </Button>

          {/* Slide Indicators */}
          <div className="flex gap-2 overflow-x-auto max-w-2xl">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`px-3 py-1 rounded text-xs transition-all ${
                  currentSlide === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            다음
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
