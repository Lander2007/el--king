import { MapPin, Phone, Clock, MessageCircle, Facebook, Instagram, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LanguageContext';

export function ContactPage() {
  const { tr, lang, isRtl } = useLang();

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header Banner */}
      <div className="bg-slate-950/60 border-b border-slate-900 pt-28 pb-14 mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto px-6" style={{ textAlign: isRtl ? 'right' : 'left' }}>
          <h1 className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {tr.contact.title}
          </h1>
          <p className="text-slate-500 mt-2 text-xs sm:text-sm">
            {tr.contact.sub}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Info cards */}
          <div className="space-y-6">
            
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl p-6.5 bg-slate-950/50 border border-slate-900 shadow-2xl"
              style={{ textAlign: isRtl ? 'right' : 'left' }}
            >
              <div className={`flex items-center gap-3 mb-3.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-950/40 border border-cyan-800/30 text-cyan-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <h3 className="font-bold text-base text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {tr.contact.addressLabel}
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {tr.contact.address}
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="rounded-2xl p-6.5 bg-slate-950/50 border border-slate-900 shadow-2xl"
              style={{ textAlign: isRtl ? 'right' : 'left' }}
            >
              <div className={`flex items-center gap-3 mb-3.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-950/40 border border-cyan-800/30 text-cyan-400 shrink-0">
                  <Clock size={18} />
                </div>
                <h3 className="font-bold text-base text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {tr.contact.hoursLabel}
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                {tr.contact.hours.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl p-6.5 bg-slate-950/50 border border-slate-900 shadow-2xl"
              style={{ textAlign: isRtl ? 'right' : 'left' }}
            >
              <div className={`flex items-center gap-3 mb-3.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-950/40 border border-cyan-800/30 text-cyan-400 shrink-0">
                  <Phone size={18} />
                </div>
                <h3 className="font-bold text-base text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {tr.contact.phone}
                </h3>
              </div>
              <a href="tel:+201000000000" dir="ltr" className="text-white hover:text-cyan-400 font-extrabold text-base transition-colors">
                +20 100 000 0000
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="rounded-2xl p-6.5 bg-slate-950/50 border border-slate-900 shadow-2xl"
              style={{ textAlign: isRtl ? 'right' : 'left' }}
            >
              <h3 className="mb-4 font-bold text-base text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {tr.contact.follow}
              </h3>
              <div className={`flex gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <a href="#" className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold bg-[#1877F2] text-white hover:opacity-90 active:scale-95 transition-all">
                  <Facebook size={14} /> <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 active:scale-95 transition-all">
                  <Instagram size={14} /> <span>Instagram</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: WhatsApp CTA + Map */}
          <div className="flex flex-col gap-6">
            
            {/* WhatsApp Block */}
            <motion.a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              className={`flex items-center justify-center gap-4 p-8 rounded-2xl text-center bg-emerald-950/30 border border-emerald-800/40 text-emerald-400 hover:bg-emerald-950/50 hover:border-emerald-600 transition-all shadow-2xl ${isRtl ? 'flex-row-reverse' : ''}`}
            >
              <MessageCircle size={36} />
              <div style={{ textAlign: isRtl ? 'right' : 'left' }}>
                <div className="font-extrabold text-lg leading-tight uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {tr.contact.whatsapp}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold" dir="ltr">
                  +20 100 000 0000
                </div>
              </div>
            </motion.a>

            {/* Map Placeholder Panel */}
            <div className="flex-1 rounded-2xl overflow-hidden flex items-center justify-center relative bg-slate-950/50 border border-slate-900 shadow-2xl p-6" style={{ minHeight: 320 }}>
              
              {/* Subtle mesh background */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              
              <div className="relative text-center z-10 max-w-sm">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-cyan-950/40 border border-cyan-800/30 text-cyan-400 shadow-lg animate-pulse">
                  <Compass size={24} />
                </div>
                <p className="font-extrabold text-lg text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {tr.contact.mapPlaceholder}
                </p>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {tr.contact.address}
                </p>
                
                <a
                  href="https://maps.google.com/?q=El+Raml+Station+Alexandria+Egypt"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-xs font-bold bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95 transition-all"
                >
                  <MapPin size={13} />
                  <span>{lang === 'ar' ? 'افتح في خرائط Google' : 'Open in Google Maps'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
