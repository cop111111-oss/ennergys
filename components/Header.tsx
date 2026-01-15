
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { SiteSettings } from '../types';
import { Menu, X, Settings } from 'lucide-react';

interface HeaderProps {
  settings: SiteSettings;
}

const Header: React.FC<HeaderProps> = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: settings.primaryColor }}>E</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {settings.brandName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:opacity-100 ${location.pathname === item.path ? 'text-white border-b-2' : 'text-gray-400'}`}
              style={{ borderColor: location.pathname === item.path ? settings.primaryColor : 'transparent' }}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/admin" 
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
            title="관리자 페이지"
          >
            <Settings size={20} />
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/admin" 
            className="flex items-center gap-2 text-xl text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            <Settings size={24} /> 관리자 설정
          </Link>
          <button 
            className="absolute top-6 right-6 text-white" 
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
