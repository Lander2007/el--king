import { Link } from 'react-router';
import { Crown, MapPin, Phone, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export function Footer() {
  const { tr, isRtl } = useLang();

  return (
    <footer className="bg-[#030712] border-t border-slate-900 text-slate-400 py-16" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-cyan-600/25 border border-cyan-500/40">
                <Crown size={18} className="text-cyan-400" strokeWidth={2.5} />
              </div>
              <span className="tracking-widest uppercase text-white font-extrabold text-xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                EL KING
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-500" style={{ textAlign: isRtl ? 'right' : 'left' }}>
              {tr.footer.tagline}
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/201000000000" aria-label="WhatsApp" className="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-950/40 border border-emerald-800/30 text-emerald-400 hover:bg-emerald-950/70 hover:border-emerald-600 transition-all">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs uppercase font-extrabold tracking-widest text-slate-500" style={{ textAlign: isRtl ? 'right' : 'left' }}>
              {tr.footer.links}
            </h4>
            <ul className="space-y-3 text-sm" style={{ textAlign: isRtl ? 'right' : 'left' }}>
              {[
                { label: tr.nav.home, path: '/' },
                { label: tr.nav.phones, path: '/phones' },
                { label: tr.nav.accessories, path: '/accessories' },
                { label: tr.nav.offers, path: '/offers' },
                { label: tr.nav.contact, path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-cyan-400 transition-colors text-slate-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs uppercase font-extrabold tracking-widest text-slate-500" style={{ textAlign: isRtl ? 'right' : 'left' }}>
              {tr.footer.contact}
            </h4>
            <ul className="space-y-4 text-sm" style={{ textAlign: isRtl ? 'right' : 'left' }}>
              <li className={`flex items-start gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                <span className="text-slate-400">{tr.footer.address}</span>
              </li>
              <li className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <Phone size={16} className="shrink-0 text-cyan-400" />
                <span dir="ltr" className="text-slate-400">+20 100 000 0000</span>
              </li>
              <li className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <Clock size={16} className="shrink-0 text-cyan-400" />
                <span className="text-slate-400">10:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600" style={{ textAlign: isRtl ? 'right' : 'left' }}>
            {tr.footer.rights}
          </p>
          <div className="flex items-center gap-1.5 text-slate-600 text-xs">
            <span>Made with</span>
            <span className="text-cyan-500">♦</span>
            <span>in Alexandria</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
