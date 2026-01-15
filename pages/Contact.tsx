
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 전송되었습니다. 곧 연락드리겠습니다.');
  };

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-bold mb-8">당신의 건물을<br /><span className="text-purple-500">지속 가능하게</span></h1>
          <p className="text-gray-400 text-lg mb-12">
            구체적인 상담이 필요하시거나, 견적 문의가 있으시면 아래 연락처 또는 폼을 통해 남겨주세요. 전문가가 24시간 이내에 답변 드립니다.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-zinc-900 rounded-2xl text-purple-500 border border-white/5">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-400 mb-1 uppercase text-xs tracking-widest">Phone</h3>
                <p className="text-xl font-medium">02-1234-5678</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="p-4 bg-zinc-900 rounded-2xl text-purple-500 border border-white/5">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-400 mb-1 uppercase text-xs tracking-widest">Email</h3>
                <p className="text-xl font-medium">info@easygreen.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="p-4 bg-zinc-900 rounded-2xl text-purple-500 border border-white/5">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-400 mb-1 uppercase text-xs tracking-widest">Location</h3>
                <p className="text-xl font-medium leading-relaxed">서울특별시 서초구 서초대로 123-45<br />이지그린 빌딩 7층</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-10 rounded-3xl border border-white/5 relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">성함</label>
                <input type="text" placeholder="홍길동" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">연락처</label>
                <input type="tel" placeholder="010-0000-0000" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">이메일</label>
              <input type="email" placeholder="example@email.com" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">관심 서비스</label>
              <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors">
                <option>그린리모델링</option>
                <option>에너지 진단</option>
                <option>제로에너지빌딩 컨설팅</option>
                <option>기타 문의</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">문의 내용</label>
              <textarea rows={5} placeholder="상세한 문의 내용을 입력해 주세요." className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors" required></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
              <Send size={18} /> 문의 신청하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
