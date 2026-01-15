
import React from 'react';
import { SiteSettings } from '../types';
import { Instagram, MessageCircle, Phone, Mail } from 'lucide-react';

interface FooterProps {
  settings: SiteSettings;
}

const Footer: React.FC<FooterProps> = ({ settings }) => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-xl font-bold mb-4">{settings.brandName}</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
            친환경이지그린은 건물의 에너지 효율을 극대화하고 탄소 배출을 줄이는 그린리모델링 및 제로에너지빌딩 전문 컨설팅 기업입니다. 미래 세대를 위한 지속 가능한 건축 환경을 만들어갑니다.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white"><Instagram size={20}/></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white"><MessageCircle size={20}/></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white"><Phone size={20}/></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white"><Mail size={20}/></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">서비스</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">그린리모델링</a></li>
            <li><a href="#" className="hover:text-white">건물에너지진단</a></li>
            <li><a href="#" className="hover:text-white">제로에너지빌딩 제안</a></li>
            <li><a href="#" className="hover:text-white">에너지 효율 컨설팅</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">고객지원</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">공지사항</a></li>
            <li><a href="#" className="hover:text-white">상담 신청하기</a></li>
            <li><a href="#" className="hover:text-white">오시는 길</a></li>
            <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
        © 2024 {settings.brandName}. All rights reserved. Designed with precision for sustainability.
      </div>
    </footer>
  );
};

export default Footer;
