
import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { SiteSettings, Post, Project } from '../types';
import { 
  LayoutDashboard, 
  Settings as SettingsIcon, 
  FileText, 
  Image as ImageIcon, 
  Home as HomeIcon, 
  BarChart, 
  LogOut,
  Plus,
  Trash2,
  Save
} from 'lucide-react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AdminDashboardProps {
  settings: SiteSettings;
  setSettings: (settings: SiteSettings) => void;
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  settings, 
  setSettings, 
  posts, 
  setPosts,
  projects,
  setProjects 
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-zinc-950">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-white/5 flex flex-col">
        <div className="p-6">
          <h2 className="text-lg font-bold flex items-center gap-2 text-purple-500">
            <SettingsIcon size={20} /> 관리자 패널
          </h2>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <Link to="/admin" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300">
            <LayoutDashboard size={18} /> 대시보드
          </Link>
          <Link to="/admin/content" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300">
            <FileText size={18} /> 게시글 관리
          </Link>
          <Link to="/admin/projects" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300">
            <ImageIcon size={18} /> 프로젝트 관리
          </Link>
          <Link to="/admin/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300">
            <SettingsIcon size={18} /> 사이트 설정
          </Link>
        </nav>
        <div className="p-4 border-t border-white/5">
          <Link to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300 mb-2">
            <HomeIcon size={18} /> 사이트 이동
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 p-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
            <LogOut size={18} /> 로그아웃
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-grow overflow-y-auto bg-black p-10">
        <Routes>
          <Route path="/" element={<StatsOverview posts={posts} projects={projects} />} />
          <Route path="/content" element={<ManagePosts posts={posts} setPosts={setPosts} />} />
          <Route path="/projects" element={<ManageProjects projects={projects} setProjects={setProjects} />} />
          <Route path="/settings" element={<SiteSettingsPage settings={settings} setSettings={setSettings} />} />
        </Routes>
      </main>
    </div>
  );
};

// Helper Components for Admin Area
const StatsOverview = ({ posts, projects }: { posts: any[], projects: any[] }) => {
  const chartData = [
    { name: 'Jan', visits: 400 },
    { name: 'Feb', visits: 700 },
    { name: 'Mar', visits: 1200 },
    { name: 'Apr', visits: 900 },
    { name: 'May', visits: 1500 },
    { name: 'Jun', visits: 2100 },
  ];

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">방문자 통계</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
          <p className="text-gray-400 text-sm mb-2">총 방문자 (오늘)</p>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
          <p className="text-gray-400 text-sm mb-2">총 게시글</p>
          <p className="text-3xl font-bold">{posts.length}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
          <p className="text-gray-400 text-sm mb-2">완료 프로젝트</p>
          <p className="text-3xl font-bold">{projects.length}</p>
        </div>
      </div>
      <div className="bg-zinc-900 p-8 rounded-2xl border border-white/5 h-80">
        <h3 className="font-bold mb-6">월별 트래픽 추이</h3>
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis dataKey="name" stroke="#71717a" />
            <YAxis stroke="#71717a" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
              itemStyle={{ color: '#8A2BE2' }}
            />
            <Bar dataKey="visits" fill="#8A2BE2" radius={[4, 4, 0, 0]} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const ManagePosts = ({ posts, setPosts }: { posts: Post[], setPosts: any }) => {
  const addPost = () => {
    const newPost: Post = {
      id: Date.now().toString(),
      title: "새로운 소식 제목",
      category: "공지사항",
      content: "여기에 내용을 입력하세요.",
      date: new Date().toISOString().split('T')[0],
      imageUrl: "https://picsum.photos/seed/new/800/400"
    };
    setPosts([newPost, ...posts]);
  };

  const removePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">게시글 관리</h1>
        <button onClick={addPost} className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2 font-bold transition-colors">
          <Plus size={18} /> 새 글 작성
        </button>
      </div>
      <div className="bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/5 text-gray-400 text-sm">
            <tr>
              <th className="p-4">날짜</th>
              <th className="p-4">카테고리</th>
              <th className="p-4">제목</th>
              <th className="p-4 text-right">작업</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {posts.map(post => (
              <tr key={post.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-sm text-gray-400">{post.date}</td>
                <td className="p-4 text-sm"><span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">{post.category}</span></td>
                <td className="p-4 font-medium">{post.title}</td>
                <td className="p-4 text-right">
                  <button onClick={() => removePost(post.id)} className="text-gray-500 hover:text-red-400 transition-colors p-2">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ManageProjects = ({ projects, setProjects }: { projects: Project[], setProjects: any }) => {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "신규 프로젝트 명",
      description: "프로젝트 설명을 입력하세요.",
      category: "주거시설",
      imageUrl: "https://picsum.photos/seed/newpj/600/400"
    };
    setProjects([newProject, ...projects]);
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">포트폴리오 관리</h1>
        <button onClick={addProject} className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2 font-bold transition-colors">
          <Plus size={18} /> 새 프로젝트 추가
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(pj => (
          <div key={pj.id} className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden group">
            <div className="h-40 bg-black relative">
              <img src={pj.imageUrl} alt={pj.title} className="w-full h-full object-cover" />
              <button onClick={() => removeProject(pj.id)} className="absolute top-2 right-2 p-2 bg-black/60 rounded-full text-red-400 hover:bg-red-500 hover:text-white transition-all">
                <Trash2 size={16} />
              </button>
            </div>
            <div className="p-4">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-tighter">{pj.category}</span>
              <h3 className="font-bold mb-1 truncate">{pj.title}</h3>
              <p className="text-xs text-gray-500 truncate">{pj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SiteSettingsPage = ({ settings, setSettings }: { settings: SiteSettings, setSettings: any }) => {
  const [localSettings, setLocalSettings] = useState(settings);

  const save = () => {
    setSettings(localSettings);
    alert('설정이 저장되었습니다.');
  };

  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-3xl font-bold">사이트 설정</h1>
      <div className="space-y-6 bg-zinc-900 p-8 rounded-2xl border border-white/5">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">브랜드 이름</label>
          <input 
            type="text" 
            value={localSettings.brandName} 
            onChange={e => setLocalSettings({...localSettings, brandName: e.target.value})}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">포인트 컬러</label>
          <div className="flex gap-4 items-center">
            <input 
              type="color" 
              value={localSettings.primaryColor} 
              onChange={e => setLocalSettings({...localSettings, primaryColor: e.target.value})}
              className="w-12 h-12 bg-transparent border-none outline-none cursor-pointer"
            />
            <span className="text-sm font-mono text-gray-400">{localSettings.primaryColor}</span>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">히어로 타이틀</label>
          <textarea 
            rows={2}
            value={localSettings.heroTitle} 
            onChange={e => setLocalSettings({...localSettings, heroTitle: e.target.value})}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-tighter">히어로 서브타이틀</label>
          <textarea 
            rows={3}
            value={localSettings.heroSubtitle} 
            onChange={e => setLocalSettings({...localSettings, heroSubtitle: e.target.value})}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <button onClick={save} className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl flex items-center gap-2 font-bold transition-all">
          <Save size={18} /> 변경사항 저장
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
