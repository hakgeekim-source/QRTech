import { useStore } from '../store/useStore';
import { ArrowRight, ShieldCheck, Zap, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const { language = 'ko', settings, products = [], posts = [] } = useStore();

  const heroTitle = settings?.heroTitle?.[language] || 'Welcome to QRTech';
  const heroSubtitle = settings?.heroSubtitle?.[language] || 'Your safety is our priority';
  const primaryColor = settings?.primaryColor || '#003366';

  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: { en: 'Premium Fire Safety', ko: '프리미엄 소방 안전 용품' },
      desc: { en: 'State-of-the-art fire detection and suppression systems.', ko: '최첨단 화재 감지 및 진압 시스템.' }
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: { en: 'Advanced Electrical', ko: '첨단 전기 안전 용품' },
      desc: { en: 'High-performance electrical equipment for industrial use.', ko: '산업용 고성능 전기 안전 용품.' }
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: { en: 'Certified Quality', ko: '인증된 품질' },
      desc: { en: 'All products meet international safety standards.', ko: '모든 제품은 국제 안전 표준을 준수합니다.' }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1615461066841-6116ecaabb04?auto=format&fit=crop&q=80&w=1920" 
            alt="Fire Extinguisher Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 text-white border border-white/20 backdrop-blur-sm"
                style={{ backgroundColor: `${primaryColor}44` }}
              >
                {language === 'en' ? 'Leading Safety Solutions' : '최고의 안전 솔루션'}
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1] font-sans whitespace-pre-line">
                {heroTitle}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                {heroSubtitle}
              </p>
              
              <div className="flex flex-wrap gap-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-primary hover:bg-primary-dark rounded-xl shadow-2xl shadow-primary/20 transition-all duration-300 group"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {language === 'en' ? 'Explore Products' : '제품 둘러보기'}
                    <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-xl transition-all duration-300"
                  >
                    {language === 'en' ? 'Get a Quote' : '견적 문의하기'}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 right-20 hidden lg:block z-10"
        >
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center" style={{ backgroundColor: `${primaryColor}33` }}>
                <ShieldCheck className="w-6 h-6 text-primary" style={{ color: primaryColor }} />
              </div>
              <div>
                <div className="text-white font-bold text-lg">100% Certified</div>
                <div className="text-gray-400 text-sm">KFI & International Standards</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Why Choose QRTech?' : '왜 QRTech를 선택해야 할까요?'}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded" style={{ backgroundColor: primaryColor }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 bg-gray-50">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title[language]}</h3>
                <p className="text-gray-600">{feature.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Featured Products' : '추천 제품'}
              </h2>
              <div className="w-24 h-1 bg-primary rounded" style={{ backgroundColor: primaryColor }}></div>
            </div>
            <Link to="/products" className="text-primary font-medium hover:underline flex items-center" style={{ color: primaryColor }}>
              {language === 'en' ? 'View All' : '모두 보기'} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map(product => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                  <img src={product.imageUrl} alt={product.name[language]} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                    {product.category === 'fire' ? (language === 'en' ? 'Fire Safety' : '소방 안전 용품') : 
                     product.category === 'electrical' ? (language === 'en' ? 'Electrical' : '전기 안전 용품') : 
                     (language === 'en' ? 'Others' : '기타')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name[language]}</h3>
                  <p className="text-gray-600 line-clamp-2">{product.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
                {language === 'en' ? 'Get in Touch' : '문의하기'}
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" style={{ backgroundColor: primaryColor }}></div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {language === 'en' 
                  ? 'Have questions about our products or need a custom solution? Our experts are ready to assist you.' 
                  : '제품에 대해 궁금한 점이 있거나 맞춤형 솔루션이 필요하신가요? 전문가가 도와드리겠습니다.'}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" style={{ color: primaryColor }} />
                  </div>
                  <span className="font-medium">{language === 'en' ? 'Fast Response' : '빠른 답변'}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" style={{ color: primaryColor }} />
                  </div>
                  <span className="font-medium">{language === 'en' ? 'Expert Support' : '전문가 지원'}</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Latest News */}
      {posts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Latest Updates' : '최신 소식'}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded" style={{ backgroundColor: primaryColor }}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {posts.slice(0, 2).map(post => (
                <Link to={`/news`} key={post.id} className="group flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                    <img src={post.imageUrl} alt={post.title[language]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                    <span className="text-sm font-medium text-gray-400 mb-2">{post.date}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{post.title[language]}</h3>
                    <p className="text-gray-600 line-clamp-2">{post.content[language]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
