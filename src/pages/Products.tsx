import { useState } from 'react';
import { useStore } from '../store/useStore';
import { Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const { language = 'ko', products = [], settings } = useStore();
  const primaryColor = settings?.primaryColor || '#003366';
  const [filter, setFilter] = useState<'all' | 'fire' | 'electrical' | 'others'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      (product.name[language] || '').toLowerCase().includes(searchLower) ||
      (product.description[language] || '').toLowerCase().includes(searchLower);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 font-sans">
            {language === 'en' ? 'Our Products' : '제품 소개'}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded mb-8" style={{ backgroundColor: primaryColor }}></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Discover our comprehensive range of high-quality fire safety and electrical equipment.' 
              : '고품질 소방 안전 용품 및 전기 안전 용품의 포괄적인 제품군을 만나보세요.'}
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <span className="text-gray-500 font-medium flex items-center gap-2 whitespace-nowrap">
              <Filter className="w-5 h-5" />
              {language === 'en' ? 'Filter by:' : '필터:'}
            </span>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                filter === 'all' ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={filter === 'all' ? { backgroundColor: primaryColor } : {}}
            >
              {language === 'en' ? 'All Products' : '모든 제품'}
            </button>
            <button
              onClick={() => setFilter('fire')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                filter === 'fire' ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={filter === 'fire' ? { backgroundColor: primaryColor } : {}}
            >
              {language === 'en' ? 'Fire Safety' : '소방 안전 용품'}
            </button>
            <button
              onClick={() => setFilter('electrical')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                filter === 'electrical' ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={filter === 'electrical' ? { backgroundColor: primaryColor } : {}}
            >
              {language === 'en' ? 'Electrical' : '전기 안전 용품'}
            </button>
            <button
              onClick={() => setFilter('others')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                filter === 'others' ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={filter === 'others' ? { backgroundColor: primaryColor } : {}}
            >
              {language === 'en' ? 'Others' : '기타'}
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={language === 'en' ? 'Search products...' : '제품 검색...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
                <div className="h-64 overflow-hidden relative bg-gray-100">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name[language]} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                    {product.category === 'fire' ? (language === 'en' ? 'Fire Safety' : '소방 안전 용품') : 
                     product.category === 'electrical' ? (language === 'en' ? 'Electrical' : '전기 안전 용품') : 
                     (language === 'en' ? 'Others' : '기타')}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">{product.name[language]}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">{product.description[language]}</p>
                  <Link 
                    to="/contact"
                    className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors mt-auto text-center block"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {language === 'en' ? 'Request Quote' : '견적 요청'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {language === 'en' ? 'No products found' : '제품을 찾을 수 없습니다'}
            </h3>
            <p className="text-gray-500">
              {language === 'en' ? 'Try adjusting your search or filter criteria.' : '검색어 또는 필터 조건을 조정해 보세요.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
