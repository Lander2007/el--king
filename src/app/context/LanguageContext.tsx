"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Lang, t } from '../data/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: typeof t['en'];
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  tr: t.en,
  isRtl: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.dir = t[l].dir;
    document.documentElement.lang = l;
    localStorage.setItem('ks-lang', l);
  };

  useEffect(() => {
    const saved = localStorage.getItem('ks-lang') as Lang;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLang(saved);
    } else {
      setLang('en');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] || t['en'], isRtl: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
