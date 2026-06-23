'use client';
import { createContext, useContext } from 'react';
import { zh } from './dictionaries/zh';

type Dictionary = typeof zh;
const DictContext = createContext<Dictionary | null>(null);

export function LocaleProvider({ locale, children }: { locale: 'en' | 'zh'; children: React.ReactNode }) {
  const dict = locale === 'zh' ? zh : null;
  return <DictContext.Provider value={dict}>{children}</DictContext.Provider>;
}

export function useDictionary(): Dictionary | null {
  return useContext(DictContext);
}
