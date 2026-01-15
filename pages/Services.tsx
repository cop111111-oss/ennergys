
import React from 'react';
import { Home, Lightbulb, ClipboardCheck, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "그린리모델링",
      description: "노후 건물의 창호, 단열, 환기 시스템을 전면 교체하여 에너지 성능을 높이고 쾌적한 주거/업무 환경을 만듭니다.",
      features: ["고성능 창호 시스템", "친환경 외단열 공법", "폐열 회수형 환기 장치", "냉난방 설비 현대화"],
      icon: <Home className="text-purple-500" size={32} />
    },
    {
      title: "건물 에너지 진단",
      description: "데이터 로그 및 시뮬레이션을 통해 건물의 에너지 사용 현황을 분석하고 누수 지점을 찾아 개선안을 제시합니다.",
      features: ["열화상 카메라 진단", "Blower Door 테스트", "에너지 시뮬레이션", "LCC 분석 보고서"],
      icon: <ClipboardCheck className="text-purple-500" size={32} />
    },
    {
      title: "제로에너지빌딩 제안",
      description: "신축 및 증축 시 에너지 자립률을 높이는 설계 컨설팅을 제공하여 ZEB 인증 및 세제 혜택을 돕습니다.",
      features: ["BEMS 구축 지원", "태양광/지열 시스템 연계", "고효율 인증 획득", "정부 지원 사업 매칭"],
      icon: <Lightbulb className="text-purple-500" size={32} />
    },
    {
      title: "스마트 그린 솔루션",
      description: "IoT 기술을 활용한 실시간 에너지 모니터링 및 자동 제어 시스템을 구축하여 상시 효율을 관리합니다.",
      features: ["에너지 대시보드", "AI 기반 최적 운전", "클라우드 관리 서비스", "유지보수 알림"],
      icon: <Sparkles className="text-purple-500" size={32} />
    }
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">전문 서비스 영역</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">친환경이지그린은 체계적인 프로세스를 통해 완벽한 친환경 솔루션을 제공합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <div key={i} className="group bg-zinc-900 border border-white/5 p-12 rounded-3xl hover:border-purple-500/50 transition-all duration-300">
            <div className="mb-8">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {service.features.map((f, fi) => (
                <div key={fi} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1 h-1 rounded-full bg-purple-500" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
