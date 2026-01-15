
import React from 'react';
import { SiteSettings, Post, Project } from '../types';
import { ArrowRight, Zap, Leaf, Building2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  settings: SiteSettings;
  posts: Post[];
  projects: Project[];
}

const Home: React.FC<HomeProps> = ({ settings, posts, projects }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: `url('https://picsum.photos/seed/energy/1920/1080')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div 
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase border"
            style={{ borderColor: settings.primaryColor, color: settings.primaryColor }}
          >
            Sustainable Building Solution
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {settings.heroTitle}
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {settings.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: settings.primaryColor }}
            >
              무료 진단 신청하기
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all"
            >
              서비스 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Value Props */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <Zap />, label: "에너지 효율", value: "최대 40% 절감", desc: "고효율 설비와 단열 기술 적용" },
            { icon: <Leaf />, label: "탄소 저감", value: "연간 수톤 감축", desc: "친환경 소재 및 재생 에너지 활용" },
            { icon: <Building2 />, label: "ZEB 인증", value: "1등급 컨설팅", desc: "정부 지원금 및 인센티브 확보" },
            { icon: <BarChart3 />, label: "자산 가치", value: "20% 이상 상승", desc: "그린 빌딩으로 건물 가치 재평가" }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${settings.primaryColor}20`, color: settings.primaryColor }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.label}</h3>
              <p className="text-2xl font-bold mb-2" style={{ color: settings.primaryColor }}>{item.value}</p>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Snapshot */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">대표 포트폴리오</h2>
              <p className="text-gray-400">친환경이지그린의 기술력이 녹아든 최신 사례입니다.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-sm font-medium hover:underline">
              전체 보기 <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((pj) => (
              <div key={pj.id} className="group relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/5]">
                <img src={pj.imageUrl} alt={pj.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-xs font-bold uppercase tracking-wider mb-2 text-white/60">{pj.category}</span>
                  <h3 className="text-xl font-bold mb-2">{pj.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{pj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto rounded-3xl p-12 relative overflow-hidden bg-zinc-900 border border-white/5">
          <div className="absolute -top-24 -right-24 w-64 h-64 blur-3xl rounded-full opacity-20" style={{ backgroundColor: settings.primaryColor }} />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 blur-3xl rounded-full opacity-20" style={{ backgroundColor: settings.primaryColor }} />
          
          <h2 className="text-4xl font-bold mb-6">지금 바로 상담받으세요</h2>
          <p className="text-gray-400 mb-10 text-lg">
            건물 에너지 효율 진단부터 시공, 정부 지원금 신청까지<br />전문가가 모든 과정을 도와드립니다.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: settings.primaryColor }}
          >
            무료 컨설팅 예약 <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
