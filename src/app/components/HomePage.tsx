import { useState, useRef } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Tag,
  Headphones,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Star,
  Zap,
  Cpu,
  Smartphone,
  Award,
  Sparkles,
  Camera,
  Layers,
  Battery,
  Shield,
  ShoppingBag,
  Flame,
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { phones } from '../data/products';
import type { Product } from '../data/products';

const WHY_ICONS = [ShieldCheck, Tag, Headphones, RotateCcw];

const BRANDS = [
  { name: 'Apple', logo: '🍎' },
  { name: 'Samsung', logo: 'S' },
  { name: 'Xiaomi', logo: 'Mi' },
  { name: 'OPPO', logo: 'Op' },
  { name: 'Tecno', logo: 'Tc' },
  { name: 'Huawei', logo: 'Hw' },
];

export function HomePage({ onAddToCart }: { onAddToCart?: (id: number) => void }) {
  const { tr, isRtl, lang } = useLang();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const dealPhones = phones.filter((p) => p.isOffer).slice(0, 4);

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* ── HERO SECTION (Centered Brand Showcase) ── */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 border-b border-slate-900 bg-[#030712] overflow-hidden">
        
        {/* Soft Radial Ambient Background Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] opacity-25 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #06B6D4 0%, #8B5CF6 50%, transparent 70%)'
          }}
        />

        {/* Tech Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center justify-center">
          
          {/* Store Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-900/60 border border-slate-800 text-cyan-400 mb-8 shadow-2xl backdrop-blur-md"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>{tr.hero.badge}</span>
          </motion.div>

          {/* E-Commerce Brand Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1
              className="font-extrabold text-6xl sm:text-8xl leading-none text-white tracking-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400">
                EL KING
              </span>
            </h1>
            
            <h2 className="text-slate-200 text-2xl sm:text-4xl font-extrabold tracking-tight uppercase max-w-2xl mx-auto" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {lang === 'ar' ? 'أفضل متجر هواتف وإكسسوارات في الإسكندرية' : 'Alexandria\'s Premier Mobile & Accessories Store'}
            </h2>
          </motion.div>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          >
            {tr.hero.sub}
          </motion.p>

          {/* Call-to-Actions (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/phones"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
              >
                <span>{tr.hero.cta}</span>
                <Arrow size={16} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/offers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-slate-900 border border-slate-800 text-white hover:bg-slate-800/80 transition-all"
              >
                {tr.hero.cta2}
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── CATEGORY GRID SECTION ── */}
      <section className="bg-[#0b0f19]/40 py-10 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: tr.categories.phones, icon: Smartphone, path: '/phones', accent: 'group-hover:text-cyan-400' },
              { label: tr.categories.accessories, icon: Headphones, path: '/accessories', accent: 'group-hover:text-violet-400' },
              { label: tr.categories.offers, icon: Flame, path: '/offers', accent: 'group-hover:text-rose-400' },
              { label: tr.categories.brands, icon: Award, path: '/phones', accent: 'group-hover:text-amber-400' },
            ].map((cat, i) => {
              const CatIcon = cat.icon;
              return (
                <Link
                  key={i}
                  to={cat.path}
                  className="group flex items-center justify-between p-4.5 rounded-2xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-800 group-hover:bg-slate-800/80 group-hover:border-slate-750 transition-colors">
                      <CatIcon size={16} className={`text-slate-400 ${cat.accent} transition-colors`} />
                    </div>
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{cat.label}</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors transform group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TODAY'S DEALS ── */}
      <section className="py-20 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className={`flex flex-col sm:flex-row items-center sm:items-end justify-between mb-12 gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase text-cyan-400 tracking-widest mb-2 px-2 py-0.5 rounded bg-cyan-950/30 border border-cyan-800/25">
                <Zap size={10} />
                <span>{tr.deals.badge}</span>
              </div>
              <h2 className="font-extrabold text-3xl sm:text-4xl text-white leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {tr.deals.title}
              </h2>
              <p className="mt-1 text-xs text-slate-500">{tr.deals.sub}</p>
            </div>
            
            <Link
              to="/offers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-slate-950 border border-slate-900 text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all shadow-xl"
            >
              <span>{tr.deals.viewAll}</span>
              <Arrow size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealPhones.map((phone, i) => (
              <motion.div
                key={phone.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ProductCard phone={phone} onAddToCart={onAddToCart} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-[#0b0f19]/35 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {tr.why.title}
            </h2>
            <p className="mt-2 text-xs text-slate-500">{tr.why.sub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tr.why.items.map((item, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-6.5 bg-slate-950/60 border border-slate-900 hover:border-slate-800 transition-all text-center hover:-translate-y-1 duration-300 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-cyan-950/30 border border-cyan-800/20 text-cyan-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-base text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── BRANDS GRID ── */}
      <section className="py-16 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-center mb-10 text-xs font-extrabold uppercase tracking-widest text-slate-500">
            {tr.brands.title}
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {BRANDS.map((brand) => (
              <Link
                key={brand.name}
                to="/phones"
                className="flex flex-col items-center justify-center py-6 rounded-2xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/30 transition-all duration-300 shadow-xl group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform mb-2 filter saturate-50 group-hover:saturate-100">{brand.logo}</span>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 group-hover:text-white uppercase transition-colors">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export function ProductCard({
  phone,
  onAddToCart,
}: {
  phone: Product;
  onAddToCart?: (id: number) => void;
}) {
  const { tr, lang, isRtl } = useLang();
  const [hovered, setHovered] = useState(false);

  const name = lang === 'ar' ? phone.nameAr : phone.nameEn;
  const discountPct = phone.oldPrice ? Math.round(((phone.oldPrice - phone.price) / phone.oldPrice) * 100) : null;

  return (
    <div
      className="group relative rounded-2xl overflow-hidden transition-all duration-300 bg-slate-950/50 border border-slate-900 hover:border-cyan-500/40 hover:-translate-y-1.5 shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textAlign: isRtl ? 'right' : 'left' }}
    >
      
      {/* Dynamic Tag Badges */}
      <div className={`absolute top-3.5 z-10 flex flex-col gap-1.5 ${isRtl ? 'right-3.5' : 'left-3.5'}`}>
        {phone.isNew && (
          <span className="rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase bg-cyan-500 text-slate-950 shadow-md">
            NEW
          </span>
        )}
        {discountPct && (
          <span className="rounded-full px-2.5 py-0.5 text-[9px] font-extrabold bg-rose-500 text-white shadow-md">
            -{discountPct}%
          </span>
        )}
        {!phone.inStock && (
          <span className="rounded-full px-2.5 py-0.5 text-[9px] font-extrabold bg-slate-800 text-slate-400">
            {tr.products.outStock}
          </span>
        )}
      </div>

      {/* Product Image Wrap */}
      <Link to={`/product/${phone.id}`}>
        <div className="relative overflow-hidden flex items-center justify-center p-6 bg-slate-900/30 border-b border-slate-900/80" style={{ height: 210 }}>
          <img
            src={phone.image}
            alt={name}
            className="transition-transform duration-500 group-hover:scale-105 object-contain"
            style={{ width: '100%', height: '170px' }}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Phone';
            }}
          />
          
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Quick view details hover banner */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="px-4.5 py-2.5 rounded-full text-xs font-bold bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20">
              {tr.products.quickView}
            </span>
          </motion.div>
        </div>
      </Link>

      {/* Text Details & Price Info */}
      <div className="p-5">
        <p className="text-[10px] font-extrabold uppercase text-cyan-400 tracking-wider mb-1">
          {phone.brand}
        </p>
        
        <Link to={`/product/${phone.id}`}>
          <h3 className="font-bold text-sm text-slate-100 hover:text-cyan-400 transition-colors line-clamp-1 mb-2">
            {name}
          </h3>
        </Link>
        
        {/* Rating Star Row */}
        <div className={`flex items-center gap-1 mb-3.5 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={10} fill="#f59e0b" className="text-amber-500" />
          ))}
        </div>

        {/* Pricing Layout */}
        <div className={`flex items-baseline gap-2 mb-4 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
          <span className="text-base font-extrabold text-white tracking-tight">
            {phone.price.toLocaleString()} <span className="text-[11px] font-bold text-slate-400">{tr.products.egp}</span>
          </span>
          {phone.oldPrice && (
            <span className="text-xs line-through text-slate-500">
              {phone.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Stock visual status indicator */}
        <div className={`flex items-center gap-2 mb-4 ${isRtl ? 'flex-row-reverse justify-end' : ''}`}>
          <div className={`w-2 h-2 rounded-full ${phone.inStock ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
          <span className={`text-[11px] font-bold ${phone.inStock ? 'text-emerald-500' : 'text-rose-500'}`}>
            {phone.inStock ? tr.products.inStock : tr.products.outStock}
          </span>
        </div>

        {/* Add Cart Action Button */}
        <button
          onClick={() => onAddToCart?.(phone.id)}
          disabled={!phone.inStock}
          className="w-full py-2.5 rounded-xl text-xs font-bold transition-all bg-slate-900 border border-slate-800 text-white hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {tr.products.addCart}
        </button>

      </div>
    </div>
  );
}
