import { useStore } from '../store/useStore';
import { ShieldCheck, Award, Users, Globe2 } from 'lucide-react';

export default function About() {
  const { language = 'ko', settings } = useStore();
  const primaryColor = settings?.primaryColor || '#003366';

  const stats = [
    { label: { en: 'Years Experience', ko: '년의 경험' }, value: '25+' },
    { label: { en: 'Global Partners', ko: '글로벌 파트너' }, value: '150+' },
    { label: { en: 'Projects Completed', ko: '완료된 프로젝트' }, value: '5000+' },
    { label: { en: 'Certified Experts', ko: '인증된 전문가' }, value: '200+' },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" style={{ color: primaryColor }} />,
      title: { en: 'Safety First', ko: '안전 제일' },
      desc: { en: 'Uncompromising commitment to protecting lives and property.', ko: '생명과 재산을 보호하기 위한 타협 없는 헌신.' }
    },
    {
      icon: <Award className="w-8 h-8 text-primary" style={{ color: primaryColor }} />,
      title: { en: 'Excellence', ko: '탁월함' },
      desc: { en: 'Delivering the highest quality products and services.', ko: '최고 품질의 제품과 서비스를 제공합니다.' }
    },
    {
      icon: <Users className="w-8 h-8 text-primary" style={{ color: primaryColor }} />,
      title: { en: 'Customer Focus', ko: '고객 중심' },
      desc: { en: 'Tailored solutions to meet specific client needs.', ko: '고객의 특정 요구에 맞춘 맞춤형 솔루션.' }
    },
    {
      icon: <Globe2 className="w-8 h-8 text-primary" style={{ color: primaryColor }} />,
      title: { en: 'Global Standards', ko: '글로벌 표준' },
      desc: { en: 'Adhering to international safety and quality regulations.', ko: '국제 안전 및 품질 규정을 준수합니다.' }
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://picsum.photos/seed/abouthero/1920/1080" alt="About QRTech" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'About QRTech' : 'QRTech 소개'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Leading the industry in innovative fire safety and electrical solutions.' 
              : '혁신적인 소방 안전 용품 및 전기 안전 용품 분야를 선도하고 있습니다.'}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Our Story' : '우리의 이야기'}
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" style={{ backgroundColor: primaryColor }}></div>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  {language === 'en' 
                    ? 'Founded with a vision to revolutionize industrial safety, QRTech has grown from a local supplier to a global leader in fire protection and electrical systems.' 
                    : '산업 안전에 혁명을 일으키겠다는 비전으로 설립된 QRTech는 지역 공급업체에서 소방 및 전기 안전 분야의 전문 기업으로 성장했습니다.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'We believe that safety is not just a compliance requirement, but a fundamental right. Our dedicated team of engineers and safety experts work tirelessly to develop products that you can trust when it matters most.'
                    : '우리는 안전이 단순한 규정 준수 요구 사항이 아니라 기본적인 권리라고 믿습니다. 엔지니어와 안전 전문가로 구성된 전담 팀은 가장 중요한 순간에 신뢰할 수 있는 제품을 개발하기 위해 끊임없이 노력합니다.'}
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/office/800/600" alt="Office" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl hidden md:block border border-gray-100">
                <div className="text-4xl font-bold text-primary mb-2" style={{ color: primaryColor }}>25+</div>
                <div className="text-gray-600 font-medium">
                  {language === 'en' ? 'Years of Excellence' : '탁월함의 25년'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6">
                <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wide">{stat.label[language]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Core Values' : '핵심 가치'}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded" style={{ backgroundColor: primaryColor }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title[language]}</h3>
                <p className="text-gray-600">{val.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
