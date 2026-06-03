import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Flame } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { accessories } from '../data/products';

type ACategory = 'all' | 'cases' | 'chargers' | 'earphones' | 'screenProtectors' | 'cables';

export function AccessoriesPage({ onAddToCart }: { onAddToCart?: (id: number) => void }) {
  const { tr, lang, isRtl } = useLang();
  const [activeCategory, setActiveCategory] = useState<ACategory>('all');

  const categories: { key: ACategory; label: string }[] = [
    { key: 'all', label: tr.accessories.all },
    { key: 'cases', label: tr.accessories.cases },
    { key: 'chargers', label: tr.accessories.chargers },
    { key: 'earphones', label: tr.accessories.earphones },
    { key: 'screenProtectors', label: tr.accessories.screenProtectors },
    { key: 'cables', label: tr.accessories.cables },
  ];

  const filtered = activeCategory === 'all' ? accessories : accessories.filter(a => a.category === activeCategory);

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header Banner */}
      <div className="bg-slate-950/60 border-b border-slate-900 pt-28 pb-14 mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto px-6" style={{ textAlign: isRtl ? 'right' : 'left' }}>
          <h1 className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {tr.accessories.title}
          </h1>
          <p className="text-slate-500 mt-2 text-xs sm:text-sm">
            {tr.accessories.sub}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category switcher tabs */}
        <div className={`flex items-center gap-2.5 mb-10 flex-wrap ${isRtl ? 'flex-row-reverse' : ''}`}>
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                activeCategory === cat.key
                  ? 'bg-cyan-500 text-slate-950 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-950/50 border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accessories Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => {
            const name = lang === 'ar' ? item.nameAr : item.nameEn;
            const discountPct = item.oldPrice ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100) : null;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group rounded-2xl overflow-hidden transition-all bg-slate-950/50 border border-slate-900 hover:border-cyan-500/40 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
                style={{ textAlign: isRtl ? 'right' : 'left' }}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden flex items-center justify-center p-6 bg-slate-900/30 border-b border-slate-900/80" style={{ height: 200 }}>
                  <img
                    src={item.image}
                    alt={name}
                    className="transition-transform duration-500 group-hover:scale-105 object-contain"
                    style={{ width: '100%', height: '160px' }}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Accessory';
                    }}
                  />
                  
                  {/* Discount tag badge */}
                  {discountPct && (
                    <span
                      className="absolute top-3.5 rounded-full px-2.5 py-0.5 text-[9px] font-extrabold bg-rose-500 text-white shadow-md"
                      style={{ [isRtl ? 'right' : 'left']: 14 }}
                    >
                      -{discountPct}%
                    </span>
                  )}

                  {/* Stock overlay */}
                  {!item.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm">
                      <span className="text-[10px] font-extrabold uppercase tracking-wide bg-slate-800 text-slate-400 rounded-full px-3 py-1.5 border border-slate-700/50">
                        {tr.products.outStock}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase text-cyan-400 tracking-wider mb-1">{item.brand}</p>
                    <p className="font-bold text-xs sm:text-sm text-slate-100 hover:text-cyan-400 transition-colors line-clamp-2 leading-snug mb-3">
                      {name}
                    </p>
                  </div>
                  
                  <div>
                    {/* Price details */}
                    <div className={`flex items-baseline gap-2 mb-4 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
                      <span className="text-sm font-extrabold text-white tracking-tight">
                        {item.price.toLocaleString()} <span className="text-[10px] font-bold text-slate-500">{tr.products.egp}</span>
                      </span>
                      {item.oldPrice && (
                        <span className="text-xs line-through text-slate-655">
                          {item.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart button */}
                    <button
                      onClick={() => onAddToCart?.(item.id)}
                      disabled={!item.inStock}
                      className={`w-full py-2.5 rounded-xl text-[11px] font-bold transition-all bg-slate-900 border border-slate-800 text-white hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 ${isRtl ? 'flex-row-reverse' : ''}`}
                    >
                      <ShoppingCart size={13} />
                      <span>{tr.products.addCart}</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
