import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingCart, Search, Menu, X, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../context/LanguageContext';
import { phones, accessories } from '../data/products';

export function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const { lang, setLang, tr, isRtl } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === '/') {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setSearchOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: tr.nav.home, path: '/' },
    { label: tr.nav.phones, path: '/phones' },
    { label: tr.nav.accessories, path: '/accessories' },
    { label: tr.nav.offers, path: '/offers' },
    { label: tr.nav.contact, path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const filteredPhones = searchQuery.trim() === '' ? [] : phones.filter(p =>
    p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.nameAr.includes(searchQuery) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const filteredAccessories = searchQuery.trim() === '' ? [] : accessories.filter(a =>
    a.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.nameAr.includes(searchQuery) ||
    a.brand.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const hasResults = filteredPhones.length > 0 || filteredAccessories.length > 0;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/40 border-b border-slate-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 sm:h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-600/25 border border-cyan-500/40">
            <Crown size={16} className="text-cyan-400 animate-pulse" strokeWidth={2.5} />
          </div>
          <span
            className="tracking-widest uppercase text-white font-extrabold text-lg sm:text-xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            EL KING
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-2 text-sm font-medium transition-colors rounded-md relative text-slate-300 hover:text-white"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
              {isActive(link.path) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {/* Search trigger */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex w-9 h-9 items-center justify-center rounded-full transition-colors bg-slate-800/40 border border-slate-700/30 text-slate-300 hover:text-white hover:bg-slate-800/70"
            aria-label="Search"
          >
            <Search size={16} />
          </button>

          {/* Cart */}
          <Link
            to="/phones"
            className="relative flex w-9 h-9 items-center justify-center rounded-full transition-colors bg-slate-800/40 border border-slate-700/30 text-slate-300 hover:text-white hover:bg-slate-800/70"
          >
            <ShoppingCart size={16} />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: [1, 1.25, 1], opacity: 1 }}
                className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full flex items-center justify-center text-[10px] font-extrabold bg-cyan-500 text-slate-950 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>

          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="relative flex items-center rounded-full border border-slate-700/50 text-xs font-semibold overflow-hidden shrink-0 bg-slate-900/60"
            style={{ width: 76, height: 32 }}
            aria-label="Toggle language"
          >
            <motion.div
              className="absolute top-0.5 bottom-0.5 w-[35px] rounded-full bg-cyan-500"
              style={{ left: 2 }}
              animate={{ x: lang === 'ar' ? 0 : 37 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
            <span className="relative z-10 flex-1 text-center text-[10px] font-bold" style={{ color: lang === 'ar' ? '#090d16' : 'rgba(255,255,255,0.7)' }}>
              عربي
            </span>
            <span className="relative z-10 flex-1 text-center text-[10px] font-bold" style={{ color: lang === 'en' ? '#090d16' : 'rgba(255,255,255,0.7)' }}>
              EN
            </span>
          </button>

          {/* Mobile menu trigger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Expanded search overlay panel inside navbar flow */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-xl px-6 py-4 overflow-visible"
          >
            <div className="max-w-3xl mx-auto relative">
              <Search size={16} className="absolute top-1/2 -translate-y-1/2 text-slate-400" style={{ [isRtl ? 'right' : 'left']: 14 }} />
              <input
                type="text"
                placeholder={tr.nav.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full rounded-xl py-3 pl-10 pr-16 bg-slate-900 border border-slate-800/80 text-white text-sm outline-none focus:border-cyan-500/50 transition-colors"
                style={{
                  paddingLeft: isRtl ? 44 : 38,
                  paddingRight: isRtl ? 38 : 76,
                  fontFamily: "'DM Sans', sans-serif",
                }}
                autoFocus
              />
              <div className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-0.5 px-2 py-0.5 rounded border border-slate-800 bg-slate-950/80 text-[9px] font-bold text-slate-500 select-none ${isRtl ? 'left-3' : 'right-3'}`}>
                <span>ESC</span>
              </div>
            </div>

            {/* Premium Dark Search Results Dropdown */}
            {searchQuery.trim() !== '' && (
              <div className="max-w-3xl mx-auto mt-4 bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-slate-850 p-4 shadow-2xl max-h-[350px] overflow-y-auto z-50">
                {!hasResults ? (
                  <div className="text-center py-6 text-sm text-slate-400">
                    {lang === 'ar' ? 'لا توجد نتائج تطابق بحثك' : 'No results matched your search'}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Phones Category */}
                    {filteredPhones.length > 0 && (
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2 px-2">
                          {lang === 'ar' ? 'الهواتف' : 'Phones'}
                        </div>
                        <div className="space-y-1.5">
                          {filteredPhones.map(phone => (
                            <Link
                              key={`search-phone-${phone.id}`}
                              to={`/product/${phone.id}`}
                              onClick={() => {
                                setSearchQuery('');
                                setSearchOpen(false);
                              }}
                              className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-800"
                            >
                              <img src={phone.image} alt={phone.nameEn} className="w-10 h-10 object-contain rounded-lg bg-slate-950 p-1 border border-slate-800" />
                              <div className="flex-1 min-w-0">
                                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wide">{phone.brand}</div>
                                <div className="text-sm font-semibold truncate text-white">{lang === 'ar' ? phone.nameAr : phone.nameEn}</div>
                              </div>
                              <div className="text-xs font-bold text-cyan-400 shrink-0">
                                {phone.price.toLocaleString()} {tr.products.egp}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Accessories Category */}
                    {filteredAccessories.length > 0 && (
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2 px-2">
                          {lang === 'ar' ? 'الإكسسوارات' : 'Accessories'}
                        </div>
                        <div className="space-y-1.5">
                          {filteredAccessories.map(acc => (
                            <Link
                              key={`search-acc-${acc.id}`}
                              to="/accessories"
                              onClick={() => {
                                setSearchQuery('');
                                setSearchOpen(false);
                              }}
                              className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-800"
                            >
                              <img src={acc.image} alt={acc.nameEn} className="w-10 h-10 object-contain rounded-lg bg-slate-950 p-1 border border-slate-800" />
                              <div className="flex-1 min-w-0">
                                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wide">{acc.brand}</div>
                                <div className="text-sm font-semibold truncate text-white">{lang === 'ar' ? acc.nameAr : acc.nameEn}</div>
                              </div>
                              <div className="text-xs font-bold text-cyan-400 shrink-0">
                                {acc.price.toLocaleString()} {tr.products.egp}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-2xl"
          >
            <nav className="py-3 px-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-medium transition-colors text-slate-300 hover:text-white border-b border-slate-900 last:border-0"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    textAlign: isRtl ? 'right' : 'left',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
