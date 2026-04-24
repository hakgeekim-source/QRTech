import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';

export default function Footer() {
  const { language = 'ko' } = useStore();

  const navLinks = [
    { path: '/', label: { en: 'Home', ko: '홈' } },
    { path: '/about', label: { en: 'About Us', ko: '회사 소개' } },
    { path: '/products', label: { en: 'Products', ko: '제품' } },
    { path: '/downloads', label: { en: 'Downloads', ko: '다운로드' } },
    { path: '/contact', label: { en: 'Contact', ko: '문의하기' } },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">QRTech</span>
            </div>
            <p className="text-gray-400 text-sm">
              {language === 'en'
                ? 'Specializing in high-end Fire Safety and Electrical Equipment.'
                : '최고급 소방 안전 용품 및 전기 안전 용품 전문 기업.'}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : '빠른 링크'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.label[language] || (link.label as any).ko}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Contact Us' : '문의하기'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>qrtech@qrtech.kr</li>
              <li>+82 10-4668-5357</li>
              <li>Seoul, South Korea</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} QRTech Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
