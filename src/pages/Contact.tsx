import React from 'react';
import { useStore } from '../store/useStore';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const { language, settings } = useStore();

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: { en: 'Our Location', ko: '오시는 길' },
      details: { en: '37, Baekjegobun-ro 42-gil, Songpa-gu, Seoul, Republic of Korea', ko: '대한민국 서울특별시 송파구 백제고분로42길 37, 지하1층(송파동)' }
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: { en: 'Phone Number', ko: '전화번호' },
      details: { en: '+82 10-4668-5357', ko: '+82 10-4668-5357' }
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: { en: 'Email Address', ko: '이메일 주소' },
      details: { en: 'qrtech@qrtech.kr', ko: 'qrtech@qrtech.kr' }
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: { en: 'Working Hours', ko: '업무 시간' },
      details: { en: 'Mon - Fri: 09:00 AM - 06:00 PM\nSat - Sun: Closed', ko: '월 - 금: 오전 09:00 - 오후 06:00\n토 - 일: 휴무' }
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 font-sans">
            {language === 'en' ? 'Contact Us' : '문의하기'}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded mb-8" style={{ backgroundColor: settings.primaryColor }}></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Have questions about our products or services? We are here to help.' 
              : '제품이나 서비스에 대해 궁금한 점이 있으신가요? 저희가 도와드리겠습니다.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title[language]}</h3>
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed">{info.details[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
