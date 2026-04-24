import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language = 'ko', setLanguage } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  const navLinks = [
    { path: '/', label: { en: 'Home', ko: '홈' } },
    { path: '/about', label: { en: 'About Us', ko: '회사 소개' } },
    { path: '/products', label: { en: 'Products', ko: '제품' } },
    { path: '/downloads', label: { en: 'Downloads', ko: '다운로드' } },
    { path: '/contact', label: { en: 'Contact', ko: '문의하기' } },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold tracking-tight text-primary transition-colors group-hover:text-primary-dark">QRTech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {link.label[language] || link.label.ko}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l pl-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                {String(language).toUpperCase()}
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-gray-600"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'KO' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-primary'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.label[language] || link.label.ko}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
