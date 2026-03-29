import { useStore } from '../store/useStore';

export default function Downloads() {
  const { language, settings } = useStore();

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-sans">
            {language === 'en' ? 'Downloads' : '다운로드'}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded mb-8" style={{ backgroundColor: settings.primaryColor }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Technical documentation and resources will be available soon.' 
              : '기술 문서 및 관련 자료가 곧 업데이트될 예정입니다.'}
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-gray-400 italic">
            {language === 'en' ? 'No files available for download at this time.' : '현재 다운로드 가능한 파일이 없습니다.'}
          </p>
        </div>
      </div>
    </div>
  );
}
