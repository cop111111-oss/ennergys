
import React, { useState } from 'react';
import { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">포트폴리오</h1>
          <p className="text-gray-400">친환경이지그린의 성공적인 프로젝트 사례들입니다.</p>
        </div>
        <div className="flex gap-2 bg-zinc-900 p-1 rounded-full border border-white/5 overflow-x-auto no-scrollbar max-w-full">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${filter === cat ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {cat === 'All' ? '전체' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((pj) => (
          <div key={pj.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-zinc-900">
              <img src={pj.imageUrl} alt={pj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-6 py-2 rounded-full border border-white text-sm font-bold">자세히 보기</span>
              </div>
            </div>
            <span className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-2 block">{pj.category}</span>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{pj.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{pj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
