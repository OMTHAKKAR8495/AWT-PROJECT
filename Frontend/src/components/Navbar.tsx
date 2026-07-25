import React, { useState, useEffect, useRef } from 'react';
import {
  Building2, Search, Sun, Moon, Globe, Menu, X,
  ChevronRight, ShieldCheck, Palette, Check,
  FileCheck, Target, MessageSquareCode, Database
} from 'lucide-react';
import { LANGUAGE_OPTIONS, getTranslation, type SupportedLanguage } from '../data/translations';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeTheme?: string;
  setActiveTheme?: (theme: string) => void;
  selectedLanguage: SupportedLanguage;
  setSelectedLanguage: (lang: SupportedLanguage) => void;
  openSearch: () => void;
  openJobModalWithCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab, setActiveTab,
  darkMode, setDarkMode,
  activeTheme = 'violet', setActiveTheme = () => {},
  selectedLanguage, setSelectedLanguage,
  openSearch
}) => {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen,  setLangOpen]          = useState(false);
  const [themeOpen, setThemeOpen]         = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);
  const langRef  = useRef<HTMLDivElement>(null);

  const t = (key: string) => getTranslation(selectedLanguage, key);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) setThemeOpen(false);
      if (langRef.current  && !langRef.current.contains(e.target as Node))  setLangOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const navItems = [
    { id: 'home',             label: t('nav.home') },
    { id: 'about',            label: t('nav.about') },
    { id: 'services',         label: t('nav.divisions') },
    { id: 'careers',          label: t('nav.careers'),        badge: 'Hiring' },
    { id: 'resume-analyzer',  label: 'Resume Analyzer',       icon: FileCheck, badge: 'AI' },
    { id: 'job-matches',      label: 'Job Matches',           icon: Target },
    { id: 'interview-studio', label: 'Interview Studio',      icon: MessageSquareCode },
    { id: 'candidate-db',     label: 'Database',              icon: Database },
    { id: 'contact',          label: t('nav.contact') },
  ];

  const themePresets = [
    { id: 'violet',   name: 'Electric Violet & Cyan',    color1: '#8b5cf6', color2: '#06b6d4', badge: 'Modern Tech' },
    { id: 'sapphire', name: 'Royal Sapphire & Gold',      color1: '#2563eb', color2: '#f59e0b', badge: 'Executive'   },
    { id: 'emerald',  name: 'Cyber Emerald & Mint',       color1: '#10b981', color2: '#2dd4bf', badge: 'Cyberpunk'   },
    { id: 'crimson',  name: 'Sunset Crimson & Coral',     color1: '#f43f5e', color2: '#f97316', badge: 'High Energy' },
    { id: 'obsidian', name: 'Midnight Titanium & Silver', color1: '#38bdf8', color2: '#e2e8f0', badge: 'Minimal'     },
  ];

  const currentLang = LANGUAGE_OPTIONS.find(l => l.code === selectedLanguage) ?? LANGUAGE_OPTIONS[0];
  const go = (id: string) => { setActiveTab(id); setMobileMenuOpen(false); };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300
        bg-[var(--color-bg-dark)]/95 backdrop-blur-xl border-b border-[var(--color-border)]
        ${scrolled ? 'shadow-2xl' : ''}`}>

        {/* ── Announcement strip ── */}
        <div className="bg-[var(--color-bg-surface)]/70 border-b border-[var(--color-border)] px-4 sm:px-8 py-1.5">
          <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 min-w-0">
              <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-[10px]
                font-extrabold uppercase tracking-wider bg-[var(--color-badge-bg)]
                text-[var(--color-badge-text)] border border-[var(--color-badge-border)]">
                Nexus AI 2026
              </span>
              <p className="text-slate-400 text-xs truncate hidden sm:block">{t('nav.topNotice')}</p>
            </div>
            <button onClick={() => go('resume-analyzer')}
              className="shrink-0 text-xs font-semibold text-[var(--color-accent)] hover:text-white transition-colors">
              {t('nav.launchAnalyzer')} ↗
            </button>
          </div>
        </div>

        {/* ── Main nav row ── */}
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-3">

          {/* LOGO — fixed, never shrinks */}
          <button onClick={() => go('home')}
            className="flex items-center gap-2 cursor-pointer group shrink-0">
            <div className="w-8 h-8 rounded-lg theme-btn-primary p-0.5 shadow-md
              group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[var(--color-bg-dark)] rounded-[7px]
                flex items-center justify-center">
                <Building2 className="w-4 h-4 text-[var(--color-accent)]" />
              </div>
            </div>
            <div className="leading-tight text-left hidden sm:block">
              <div className="flex items-center">
                <span className="font-extrabold text-sm tracking-tight text-white
                  group-hover:text-[var(--color-accent)] transition-colors">NEXUS</span>
                <span className="font-light text-sm tracking-tight text-[var(--color-accent)] ml-1">DYNAMICS</span>
              </div>
              <span className="text-[8px] tracking-widest text-slate-500 uppercase font-semibold">
                Global Enterprise Group
              </span>
            </div>
          </button>

          {/* ══ ALL NAV ITEMS — single scrollable row ══ */}
          <nav className="hidden lg:flex flex-1 items-center gap-0.5 overflow-x-auto scrollbar-none min-w-0">
            {navItems.map(item => {
              const isActive = activeTab === item.id;
              const Icon = (item as any).icon;
              return (
                <button key={item.id} onClick={() => go(item.id)}
                  className={`nav-item relative px-3 py-1.5 rounded-lg text-[11.5px] font-semibold
                    flex items-center gap-1 whitespace-nowrap shrink-0 border border-transparent
                    ${isActive
                      ? 'nav-active text-white theme-btn-primary shadow-md'
                      : 'text-slate-400'}`}
                >
                  {Icon && <Icon className="w-3 h-3 shrink-0 transition-transform duration-300" />}
                  <span>{item.label}</span>
                  {(item as any).badge && (
                    <span
                      className="text-[8px] px-1 py-0.5 rounded bg-amber-500/20 text-amber-300
                        font-extrabold border border-amber-400/30 uppercase tracking-wider"
                      style={{ WebkitTextFillColor: 'unset' }}>
                      {(item as any).badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* ══ RIGHT CONTROLS ══ */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0 ml-auto lg:ml-0">

            {/* Search */}
            <button onClick={openSearch}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px]
                text-slate-400 hover:text-white bg-[var(--color-bg-surface)] hover:bg-white/10
                border border-[var(--color-border)] transition-colors whitespace-nowrap"
              title="Ctrl+K">
              <Search className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
            </button>

            {/* Theme */}
            <div ref={themeRef} className="relative">
              <button onClick={() => { setThemeOpen(o => !o); setLangOpen(false); }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white
                  hover:bg-white/10 border border-[var(--color-border)]
                  bg-[var(--color-bg-surface)] transition-colors"
                title="Color Theme">
                <Palette className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              </button>

              {themeOpen && (
                <div className="dropdown-panel absolute top-[calc(100%+8px)] right-0 z-[60]
                  w-72 bg-[var(--color-bg-surface)] border border-[var(--color-border)]
                  rounded-2xl shadow-2xl glass-panel p-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)] mb-3">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                      <Palette className="w-4 h-4 text-[var(--color-accent)]" /> Color Palette
                    </span>
                    <button onClick={() => setThemeOpen(false)} className="text-slate-400 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {themePresets.map(p => (
                      <button key={p.id} onClick={() => { setActiveTheme(p.id); setThemeOpen(false); }}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between transition-all
                          ${activeTheme === p.id
                            ? 'bg-white/10 border border-[var(--color-accent)]'
                            : 'hover:bg-white/5 border border-transparent'}`}>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border border-white/20"
                            style={{ background: `linear-gradient(135deg,${p.color1},${p.color2})` }} />
                          <div>
                            <div className="text-xs font-bold text-white">{p.name}</div>
                            <div className="text-[10px] text-slate-400">{p.badge}</div>
                          </div>
                        </div>
                        {activeTheme === p.id && <Check className="w-4 h-4 text-[var(--color-accent)]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language */}
            <div ref={langRef} className="relative">
              <button onClick={() => { setLangOpen(o => !o); setThemeOpen(false); }}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-base
                  bg-[var(--color-bg-surface)] hover:bg-white/10
                  border border-[var(--color-border)] transition-colors"
                title="Language">
                {currentLang.flag}
              </button>

              {langOpen && (
                <div className="dropdown-panel absolute top-[calc(100%+8px)] right-0 z-[60]
                  w-56 bg-[var(--color-bg-surface)] border border-[var(--color-border)]
                  rounded-2xl shadow-2xl glass-panel p-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--color-border)] mb-2">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[var(--color-accent)]" /> Language
                    </span>
                    <button onClick={() => setLangOpen(false)} className="text-slate-400 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {LANGUAGE_OPTIONS.map(l => (
                      <button key={l.code} onClick={() => { setSelectedLanguage(l.code); setLangOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-all
                          ${selectedLanguage === l.code
                            ? 'bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-bold border border-[var(--color-badge-border)]'
                            : 'text-slate-300 hover:bg-white/5 border border-transparent'}`}>
                        <span className="flex items-center gap-2.5 text-xs font-semibold">
                          <span className="text-base">{l.flag}</span>
                          <span>{l.name}</span>
                        </span>
                        {selectedLanguage === l.code && <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-accent)]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dark / Light */}
            <button onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title={darkMode ? 'Light mode' : 'Dark mode'}>
              {darkMode
                ? <Sun className="w-4 h-4 text-amber-400" />
                : <Moon className="w-4 h-4 text-[var(--color-accent)]" />}
            </button>

            {/* CTA */}
            <button onClick={() => go('resume-analyzer')}
              className="flex items-center gap-1.5 theme-btn-primary font-bold text-[11px]
                px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
              <FileCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden 2xl:inline">Analyze CV</span>
              <span className="2xl:hidden">AI</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden ml-auto">
            <button onClick={() => setDarkMode(!darkMode)} className="p-1.5 rounded-lg text-slate-400 hover:bg-white/10">
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[var(--color-accent)]" />}
            </button>
            <button onClick={() => setMobileMenuOpen(o => !o)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-40 bg-[var(--color-bg-dark)]/95
          backdrop-blur-xl lg:hidden flex flex-col p-5 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navItems.map(item => {
              const Icon = (item as any).icon;
              return (
                <button key={item.id} onClick={() => go(item.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl text-sm font-semibold transition-colors
                    ${activeTab === item.id ? 'theme-btn-primary text-white' : 'text-slate-300 hover:bg-white/5'}`}>
                  {Icon && <Icon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />}
                  <span className="flex-1">{item.label}</span>
                  {(item as any).badge && (
                    <span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300
                      font-extrabold border border-amber-400/30 uppercase">{(item as any).badge}</span>
                  )}
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </button>
              );
            })}
          </div>
          <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex flex-col gap-2">
            <button onClick={() => { openSearch(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-[var(--color-bg-surface)]
                text-slate-200 py-2.5 rounded-xl border border-[var(--color-border)] text-xs font-medium">
              <Search className="w-4 h-4 text-[var(--color-accent)]" /> {t('nav.search')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
