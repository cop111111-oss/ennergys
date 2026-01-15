
import React from 'react';
import { CheckCircle2, Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h1 className="text-5xl font-bold mb-8">지속 가능한 미래를<br /><span className="text-purple-500">디자인하다</span></h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            친환경이지그린은 2018년 설립 이후 건물의 생애주기 전반에 걸친 에너지 효율화 솔루션을 제공해 왔습니다. 단순한 리모델링을 넘어, 데이터 기반의 에너지 진단과 혁신적인 공법을 통해 건물의 가치를 새롭게 정의합니다.
          </p>
          <div className="space-y-4">
            {[
              "에너지 절감 기술 특허 12건 보유",
              "전국 그린리모델링 우수 사업자 선정",
              "누적 에너지 절감량 5,000 MWh 달성",
              "전문 진단사 및 설계 인력 50명 이상"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-purple-500" size={20} />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full" />
          <img src="https://picsum.photos/seed/office/800/600" alt="Office" className="relative rounded-2xl shadow-2xl border border-white/10" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {[
          { icon: <Award size={40} className="mx-auto mb-6 text-purple-500" />, title: "신뢰와 품질", desc: "검증된 자재와 기술력으로 최상의 시공 품질을 보장합니다." },
          { icon: <Users size={40} className="mx-auto mb-6 text-purple-500" />, title: "전문가 그룹", desc: "에너지 진단사, 건축사, 설비 기술자가 협업하여 최적의 제안을 도출합니다." },
          { icon: <Globe size={40} className="mx-auto mb-6 text-purple-500" />, title: "탄소중립 실현", desc: "국가 2050 탄소중립 목표 달성을 위해 건물의 친환경 전환을 선도합니다." }
        ].map((item, i) => (
          <div key={i} className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5">
            {item.icon}
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
