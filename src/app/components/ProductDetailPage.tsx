import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, ArrowRight, ShoppingCart, MessageCircle, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LanguageContext';
import { phones } from '../data/products';
import { ProductCard } from './HomePage';

export function ProductDetailPage({ onAddToCart }: { onAddToCart?: (id: number) => void }) {
  const { id } = useParams<{ id: string }>();
  const { tr, lang, isRtl } = useLang();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const Arrow = isRtl ? ArrowRight : ArrowLeft;

  const phone = phones.find(p => p.id === Number(id)) ?? phones[0];
  const related = phones.filter(p => p.id !== phone.id && p.brand === phone.brand).slice(0, 4);
  const fallbackRelated = phones.filter(p => p.id !== phone.id).slice(0, 4);

  const name = lang === 'ar' ? phone.nameAr : phone.nameEn;
  const specs = lang === 'ar' ? phone.specsAr : phone.specsEn;
  const color = lang === 'ar' ? phone.colorAr : phone.color;

  const images = [phone.image, phone.image, phone.image];

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Breadcrumb Row */}
      <div className="bg-slate-950/80 border-b border-slate-900 py-3.5 mt-16 sm:mt-20">
        <div className={`max-w-7xl mx-auto px-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider ${isRtl ? 'flex-row-reverse' : ''} text-slate-500`}>
          <Link to="/" className="hover:text-cyan-400 transition-colors">{tr.nav.home}</Link>
          <ChevronRight size={10} style={{ transform: isRtl ? 'rotate(180deg)' : undefined }} />
          <Link to="/phones" className="hover:text-cyan-400 transition-colors">{tr.nav.phones}</Link>
          <ChevronRight size={10} style={{ transform: isRtl ? 'rotate(180deg)' : undefined }} />
          <span className="text-cyan-400">{name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          to="/phones"
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-8 hover:text-cyan-400 transition-colors ${isRtl ? 'flex-row-reverse' : ''} text-slate-400`}
        >
          <Arrow size={14} />
          <span>{tr.nav.phones}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Image Gallery */}
          <div>
            <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-900 shadow-2xl mb-4 flex items-center justify-center" style={{ height: 420 }}>
              <motion.img
                key={activeImg}
                src={images[activeImg]}
                alt={name}
                className="w-full h-full object-contain p-6"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.65))' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Phone';
                }}
              />
            </div>
            
            {/* Gallery Thumbnails */}
            <div className={`flex gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`rounded-xl overflow-hidden transition-all bg-slate-950 p-1 ${
                    activeImg === i ? 'border-2 border-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]' : 'border border-slate-900 hover:border-slate-800'
                  }`}
                  style={{ width: 80, height: 80 }}
                >
                  <img
                    src={img}
                    alt={`${name} thumbnail ${i+1}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=Phone';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Info Details */}
          <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <p className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider mb-2">{phone.brand}</p>
            <h1 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {name}
            </h1>

            {/* Stock Badge */}
            <div className={`inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase ${isRtl ? 'flex-row-reverse' : ''} ${
              phone.inStock ? 'bg-emerald-950/40 border border-emerald-800/30 text-emerald-400' : 'bg-rose-950/40 border border-rose-800/30 text-rose-400'
            }`}>
              <div className={`w-1.5 h-1.5 rounded-full ${phone.inStock ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
              {phone.inStock ? tr.detail.inStock : tr.detail.outStock}
            </div>

            {/* Price section */}
            <div className={`flex items-baseline gap-3 mt-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className="text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {phone.price.toLocaleString()} <span className="text-lg font-bold text-slate-400">{tr.products.egp}</span>
              </span>
              {phone.oldPrice && (
                <span className="text-base line-through text-slate-650" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {phone.oldPrice.toLocaleString()} {tr.products.egp}
                </span>
              )}
            </div>

            {/* Product Configuration */}
            <div className="mt-8 space-y-6">
              
              {/* Color */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {tr.detail.color}: <span className="text-slate-300 normal-case font-normal ml-1">{color}</span>
                </label>
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-cyan-500/25 bg-cyan-950/10 text-xs font-bold text-cyan-400">
                  <Check size={12} />
                  <span>{color}</span>
                </div>
              </div>

              {/* Storage */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {tr.detail.storage}: <span className="text-slate-300 ml-1">{phone.storage}</span>
                </label>
                <div className="inline-flex items-center px-4 py-2 rounded-xl border border-cyan-500/25 bg-cyan-950/10 text-xs font-bold text-cyan-400">
                  <span>{phone.storage}</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{tr.detail.qty}</label>
                <div className={`inline-flex items-center rounded-xl border border-slate-900 bg-slate-950 gap-0 overflow-hidden ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-900/60 transition-colors">−</button>
                  <span className="w-12 text-center text-xs font-bold text-slate-200">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-900/60 transition-colors">+</button>
                </div>
              </div>

            </div>

            {/* Purchase CTA Buttons */}
            <div className={`flex gap-4 mt-8 flex-wrap ${isRtl ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={() => onAddToCart?.(phone.id)}
                disabled={!phone.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm bg-cyan-500 text-slate-950 hover:bg-cyan-450 hover:shadow-lg hover:shadow-cyan-500/10 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed ${isRtl ? 'flex-row-reverse' : ''}`}
                style={{ minWidth: 170 }}
              >
                <ShoppingCart size={15} />
                <span>{tr.detail.addCart}</span>
              </button>
              
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95 transition-all ${isRtl ? 'flex-row-reverse' : ''}`}
                style={{ minWidth: 170 }}
              >
                <MessageCircle size={15} />
                <span>{tr.detail.buyNow}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Specifications Table */}
        <div className="bg-slate-950/40 border border-slate-900 rounded-2xl overflow-hidden shadow-2xl mb-16">
          <div className="px-6 py-4.5 border-b border-slate-900 bg-slate-950/70">
            <h2 className="font-extrabold text-lg text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {tr.detail.specs}
            </h2>
          </div>
          <div className="divide-y divide-slate-900/60">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key} className={`flex px-6 py-4 text-xs ${isRtl ? 'flex-row-reverse' : ''}`}>
                <span className="w-1/3 font-bold text-slate-500" style={{ textAlign: isRtl ? 'right' : 'left' }}>{key}</span>
                <span className="text-slate-300" style={{ textAlign: isRtl ? 'right' : 'left' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Grid */}
        <div>
          <h2 className="mb-8 font-extrabold text-2xl text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", textAlign: isRtl ? 'right' : 'left' }}>
            {tr.detail.related}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {(related.length > 0 ? related : fallbackRelated).map(p => (
              <ProductCard key={p.id} phone={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
