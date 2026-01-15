
import React from 'react';
import { Post } from '../types';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

interface NewsProps {
  posts: Post[];
}

const News: React.FC<NewsProps> = ({ posts }) => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-4">그린 뉴스 & 소식</h1>
        <p className="text-gray-400">친환경 건축 에너지 트렌드와 친환경이지그린의 새로운 소식입니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col md:flex-row gap-8 group">
            <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden shrink-0">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1 text-purple-400 font-bold"><Tag size={14} /> {post.category}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{post.title}</h2>
              <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                {post.content}
              </p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter hover:text-purple-400 transition-colors">
                Read More <ChevronRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
