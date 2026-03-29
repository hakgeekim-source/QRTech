import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'ko';

export interface Post {
  id: string;
  title: { en: string; ko: string };
  content: { en: string; ko: string };
  date: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: { en: string; ko: string };
  description: { en: string; ko: string };
  category: 'fire' | 'electrical' | 'others';
  imageUrl: string;
}

export interface SiteSettings {
  primaryColor: string;
  heroTitle: { en: string; ko: string };
  heroSubtitle: { en: string; ko: string };
}

interface AppState {
  language: Language;
  setLanguage: (lang: Language) => void;

  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;

  products: Product[];
  
  settings: SiteSettings;
  updateSettings: (settings: Partial<SiteSettings>) => void;
}

const initialPosts: Post[] = [];

const initialProducts: Product[] = [
  {
    id: '1',
    name: { en: 'Smart Fire Extinguisher', ko: '배터리화재용 소화기' },
    description: { en: 'KFI certified battery fire extinguisher for lithium-ion battery fires.', ko: 'KFI 배터리소화기 리튬이온전지화재 성능인증제품.' },
    category: 'fire',
    imageUrl: 'https://lh3.googleusercontent.com/d/1zU24xZLcte5ASMxs_4_y82lkdq66oUgo',
  },
  {
    id: '2',
    name: { en: 'Industrial Circuit Breaker', ko: '저압기기용 회로 차단기' },
    description: { en: 'High-capacity circuit breaker for industrial low-voltage applications.', ko: '산업용 저압 회로 차단기.' },
    category: 'electrical',
    imageUrl: 'https://lh3.googleusercontent.com/d/1MJrd97k7R6f_8LfE_6XSHZkT3_AyLoeb',
  },  
  {
    id: '3',
    name: { en: 'Smoke Detector Pro', ko: '기타 제품' },
    description: { en: 'Advanced photoelectric smoke detector.', ko: '단자대, 파워서플라이, 케이블 등.' },
    category: 'others',
    imageUrl: 'https://lh3.googleusercontent.com/d/1zy5CUkFkbaxW6GJkzV6MJqFp-wV8Qip0',
  }
];

const initialSettings: SiteSettings = {
  primaryColor: '#003366',
  heroTitle: { en: 'Securing Your Future with Advanced Safety Solutions', ko: '첨단 안전 솔루션으로\n당신의 미래를 지킵니다' },
  heroSubtitle: { en: 'QRTech provides top-tier fire safety and electrical equipment for industrial and commercial needs.', ko: 'QRTech는 산업 및 상업용 최고 수준의 소방 안전 용품 및 전기 안전 용품을 제공합니다.' }
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'ko',
      setLanguage: (lang) => set({ language: lang }),

      posts: initialPosts,
      addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
      updatePost: (id, updatedPost) => set((state) => ({
        posts: state.posts.map(p => p.id === id ? { ...p, ...updatedPost } : p)
      })),
      deletePost: (id) => set((state) => ({
        posts: state.posts.filter(p => p.id !== id)
      })),

      products: initialProducts,

      settings: initialSettings,
      updateSettings: (newSettings) => set((state) => ({
        settings: { ...state.settings, ...newSettings }
      })),
    }),
    {
      name: 'qrtech-storage-v27',
    }
  )
);
