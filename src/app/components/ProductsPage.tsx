import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LanguageContext';
import { phones } from '../data/products';
import { ProductCard } from './HomePage';

const BRANDS = ['All Brands', 'Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Tecno'];
const BRANDS_AR: Record<string, string> = { 'All Brands': 'كل الماركات', Apple: 'آبل', Samsung: 'سامسونج', Xiaomi: 'شاومي', OPPO: 'أوبو', Tecno: 'تيكنو' };

export function ProductsPage({ onAddToCart }: { onAddToCart?: (id: number) => void }) {
  const { tr, lang, isRtl } = useLang();
  const [activeBrand, setActiveBrand] = useState('All Brands');

  const filtered = activeBrand === 'All Brands' ? phones : phones.filter(p => p.brand === activeBrand);

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header Banner */}
      <div className="bg-slate-950/60 border-b border-slate-900 pt-28 pb-14 mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto px-6" style={{ textAlign: isRtl ? 'right' : 'left' }}>
          <h1 className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {tr.products.title}
          </h1>
          <p className="text-slate-500 mt-2 text-xs sm:text-sm">
            {tr.products.sub}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Brand filter row */}
        <div className={`flex items-center gap-3 mb-10 flex-wrap ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-950 border border-slate-900 text-slate-500 shrink-0">
            <SlidersHorizontal size={16} />
          </div>
          {BRANDS.map(brand => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                activeBrand === brand
                  ? 'bg-cyan-500 text-slate-950 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-950/50 border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
              }`}
            >
              {lang === 'ar' ? (BRANDS_AR[brand] ?? brand) : brand}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((phone, i) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard phone={phone} onAddToCart={onAddToCart} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
