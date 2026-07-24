import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Search, 
  Sun, 
  Moon, 
  Globe, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck,
  ArrowUpRight,
  Palette,
  Check,
  FileCheck,
  Target,
  MessageSquareCode,
  Database
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeTheme?: string;
  setActiveTheme?: (theme: string) => void;
  openSearch: () => void;
  openJobModalWithCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  activeTheme = 'violet',
  setActiveTheme = () => {},
  openSearch
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langModalOpen, setLangModalOpen] = useState(false);
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English (US)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Divisions' },
    { id: 'careers', label: 'Careers', badge: 'Hiring' },
    { id: 'resume-analyzer', label: 'Resume Analyzer', icon: FileCheck, badge: 'AI' },
    { id: 'job-matches', label: 'AI Job Matches', icon: Target },
    { id: 'interview-studio', label: 'Interview Studio', icon: MessageSquareCode },
    { id: 'candidate-db', label: 'Database', icon: Database },
    { id: 'contact', label: 'Contact' }
  ];

  const themePresets = [
    { id: 'violet', name: 'Electric Violet & Cyan', color1: '#8b5cf6', color2: '#06b6d4', badge: 'Modern Tech' },
    { id: 'sapphire', name: 'Royal Sapphire & Gold', color1: '#2563eb', color2: '#f59e0b', badge: 'Executive' },
    { id: 'emerald', name: 'Cyber Emerald & Mint', color1: '#10b981', color2: '#2dd4bf', badge: 'Cyberpunk' },
    { id: 'crimson', name: 'Sunset Crimson & Coral', color1: '#f43f5e', color2: '#f97316', badge: 'High Energy' },
    { id: 'obsidian', name: 'Midnight Titanium & Silver', color1: '#38bdf8', color2: '#e2e8f0', badge: 'Minimal' },
  ];

  const languages = [
    { name: 'English (US)', flag: '🇺🇸' },
    { name: 'English (UK)', flag: '🇬🇧' },
    { name: 'Deutsch (Germany)', flag: '🇩🇪' },
    { name: 'Français (France)', flag: '🇫🇷' },
    { name: '日本語 (Japan)', flag: '🇯🇵' },
    { name: 'Español (LatAm)', flag: '🇪🇸' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[var(--color-bg-surface)] text-white text-xs py-2 px-4 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)]">
              Nexus AI Integration 2026
            </span>
            <p className="text-slate-300 truncate">
              Unified Portal with AI Resume Analyzer, ATS Evaluation & Job Matching.
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('resume-analyzer')}
            className="flex items-center gap-1 text-[var(--color-accent)] hover:text-white font-medium transition-colors text-xs group"
          >
            Launch Resume Analyzer 
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'glass-panel shadow-2xl py-2.5' 
          : 'bg-[var(--color-bg-dark)]/90 backdrop-blur-md py-3.5 border-b border-[var(--color-border)]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 rounded-xl theme-btn-primary p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[var(--color-bg-dark)] rounded-[10px] flex items-center justify-center">
                <Building2 className="w-4 h-4 text-[var(--color-accent)] group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
                  NEXUS
                </span>
                <span className="font-display font-light text-lg tracking-tight text-[var(--color-accent)]">
                  DYNAMICS
                </span>
              </div>
              <span className="text-[9px] tracking-widest text-slate-400 uppercase font-semibold block -mt-1">
                Global Enterprise Group
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-[var(--color-bg-surface)] p-1 rounded-full border border-[var(--color-border)]">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-white theme-btn-primary font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {item.label}
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-400/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Quick Search Launcher */}
            <button
              onClick={openSearch}
              className="flex items-center gap-1.5 text-xs text-slate-300 bg-[var(--color-bg-surface)] hover:bg-white/10 px-2.5 py-1.5 rounded-lg border border-[var(--color-border)] transition-colors"
              title="Search Portal (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span className="hidden xl:inline">Search...</span>
            </button>

            {/* Theme Selector Button */}
            <button
              onClick={() => {
                setThemeModalOpen(!themeModalOpen);
                setLangModalOpen(false);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[var(--color-bg-surface)] hover:bg-white/10 border border-[var(--color-border)] transition-colors relative"
              title="Change Color Theme"
            >
              <Palette className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="capitalize hidden xl:inline">{activeTheme}</span>
            </button>

            {/* Language Selector */}
            <button
              onClick={() => {
                setLangModalOpen(!langModalOpen);
                setThemeModalOpen(false);
              }}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors relative"
              title="Language / Region"
            >
              <Globe className="w-4 h-4 text-slate-300" />
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--color-accent)]" />
              )}
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => setActiveTab('resume-analyzer')}
              className="flex items-center gap-1.5 theme-btn-primary font-semibold text-xs px-3.5 py-2 rounded-lg shadow-lg"
            >
              <FileCheck className="w-3.5 h-3.5" />
              AI Resume Match
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setThemeModalOpen(!themeModalOpen)}
              className="p-2 rounded-lg text-slate-300 hover:bg-white/10"
              title="Theme Picker"
            >
              <Palette className="w-4 h-4 text-[var(--color-primary)]" />
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-300 hover:bg-white/10"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[var(--color-accent)]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Color Theme Selector Popup */}
      {themeModalOpen && (
        <div className="fixed top-16 right-4 sm:right-28 z-50 bg-[var(--color-bg-surface)] border border-[var(--color-border)] shadow-2xl rounded-2xl p-4 w-72 glass-panel animate-in fade-in zoom-in-95">
          <div className="flex items-center justify-between px-1 pb-2 border-b border-[var(--color-border)] mb-3">
            <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[var(--color-accent)]" />
              Select UI Color Palette
            </span>
            <button 
              onClick={() => setThemeModalOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {themePresets.map((preset) => {
              const isSelected = activeTheme === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    setActiveTheme(preset.id);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between transition-all ${
                    isSelected 
                      ? 'bg-white/10 border border-[var(--color-accent)] shadow-md' 
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center p-0.5 border border-white/20 shadow-inner" style={{
                      background: `linear-gradient(135deg, ${preset.color1}, ${preset.color2})`
                    }} />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        {preset.name}
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {preset.badge}
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[var(--color-accent)]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Language Popup */}
      {langModalOpen && (
        <div className="fixed top-16 right-16 z-50 bg-[var(--color-bg-surface)] border border-[var(--color-border)] shadow-2xl rounded-xl p-3 w-64 glass-panel animate-in fade-in zoom-in-95">
          <div className="text-xs font-semibold text-slate-400 px-3 py-1 uppercase tracking-wider">
            Select Language & Region
          </div>
          <div className="mt-2 space-y-1">
            {languages.map((lang) => (
              <button
                key={lang.name}
                onClick={() => {
                  setSelectedLang(lang.name);
                  setLangModalOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between ${
                  selectedLang === lang.name 
                    ? 'bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-semibold border border-[var(--color-badge-border)]' 
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
                {selectedLang === lang.name && <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-accent)]" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] z-40 bg-[var(--color-bg-dark)]/95 backdrop-blur-xl lg:hidden flex flex-col p-6 animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl text-left text-sm font-semibold transition-colors ${
                  activeTab === item.id 
                    ? 'theme-btn-primary shadow-lg' 
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--color-border)] space-y-3">
            <button
              onClick={() => {
                openSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[var(--color-bg-surface)] text-slate-200 py-2.5 rounded-xl border border-[var(--color-border)] font-medium text-xs"
            >
              <Search className="w-4 h-4 text-[var(--color-accent)]" />
              Search Global Portal
            </button>

            <button
              onClick={() => {
                setActiveTab('resume-analyzer');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 theme-btn-primary py-3 rounded-xl font-bold text-xs shadow-xl"
            >
              <FileCheck className="w-4 h-4" />
              Launch Resume Analyzer
            </button>
          </div>
        </div>
      )}
    </>
  );
};
