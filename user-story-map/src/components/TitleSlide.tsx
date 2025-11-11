import { Shield, Smartphone, Car } from 'lucide-react';

export default function TitleSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex flex-col items-center justify-center text-white p-12">
      <div className="flex gap-6 mb-8 opacity-90">
        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
          <Shield className="h-12 w-12" />
        </div>
        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
          <Smartphone className="h-12 w-12" />
        </div>
        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
          <Car className="h-12 w-12" />
        </div>
      </div>
      
      <h1 className="text-5xl text-center mb-4 tracking-tight">
        교내 안전 통합 관리 플랫폼
      </h1>
      <h2 className="text-2xl text-center mb-12 text-blue-100">
        유저 스토리 맵 (User Story Map)
      </h2>
      
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-2xl">
        <p className="text-center text-lg mb-4">
          현대자동차 Pleos Connect SDK 기반
        </p>
        <p className="text-center text-blue-100">
          스마트 캠퍼스 안전 시스템 개발 프로젝트
        </p>
      </div>
      
      <div className="mt-12 text-sm text-blue-200">
        2025년 11월 11일
      </div>
    </div>
  );
}
