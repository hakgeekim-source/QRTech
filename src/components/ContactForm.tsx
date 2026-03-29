import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const { language, settings } = useStore();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mbdpgdkj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        {language === 'en' ? 'Send Us a Message' : '메시지 보내기'}
      </h2>
      
      {status === 'success' ? (
        <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-900 mb-2">
            {language === 'en' ? 'Message Sent!' : '메시지가 전송되었습니다!'}
          </h3>
          <p className="text-green-700 mb-6">
            {language === 'en' 
              ? 'Thank you for contacting us. We will get back to you as soon as possible.' 
              : '문의해 주셔서 감사합니다. 가능한 빨리 답변해 드리겠습니다.'}
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-green-700 font-semibold underline hover:text-green-800"
          >
            {language === 'en' ? 'Send another message' : '다른 메시지 보내기'}
          </button>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Full Name' : '이름'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
                placeholder={language === 'en' ? 'John Doe' : '홍길동'}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Email Address' : '이메일 주소'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Phone Number' : '연락처'}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Subject' : '제목'}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
                placeholder={language === 'en' ? 'How can we help you?' : '어떤 도움이 필요하신가요?'}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'en' ? 'Message' : '메시지'}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-shadow resize-none"
              placeholder={language === 'en' ? 'Write your message here...' : '여기에 메시지를 작성해 주세요...'}
            ></textarea>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg border border-red-100">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-medium">
                {language === 'en' 
                  ? 'Something went wrong. Please try again later.' 
                  : '문제가 발생했습니다. 나중에 다시 시도해 주세요.'}
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ backgroundColor: settings.primaryColor }}
          >
            {status === 'loading' ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {language === 'en' ? 'Send Message' : '메시지 전송'}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
