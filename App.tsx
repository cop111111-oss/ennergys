
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import { DEFAULT_SETTINGS, INITIAL_POSTS, INITIAL_PROJECTS } from './constants';
import { SiteSettings, Post, Project } from './types';

const App: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('site_settings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('site_posts');
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('site_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  useEffect(() => {
    localStorage.setItem('site_settings', JSON.stringify(settings));
    localStorage.setItem('site_posts', JSON.stringify(posts));
    localStorage.setItem('site_projects', JSON.stringify(projects));
  }, [settings, posts, projects]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white">
        <Routes>
          {/* Admin layout is separate */}
          <Route 
            path="/admin/*" 
            element={
              <AdminDashboard 
                settings={settings} 
                setSettings={setSettings} 
                posts={posts} 
                setPosts={setPosts}
                projects={projects}
                setProjects={setProjects}
              />
            } 
          />
          
          {/* Main Public site layout */}
          <Route
            path="*"
            element={
              <>
                <Header settings={settings} />
                <main className="flex-grow pt-20">
                  <Routes>
                    <Route path="/" element={<Home settings={settings} posts={posts} projects={projects} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio projects={projects} />} />
                    <Route path="/news" element={<News posts={posts} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </main>
                <Footer settings={settings} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
