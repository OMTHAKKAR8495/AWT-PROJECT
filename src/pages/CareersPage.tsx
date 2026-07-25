import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  DollarSign, 
  Filter, 
  Sparkles, 
  ArrowRight, 
  Globe, 
  Heart, 
  ShieldCheck, 
  TrendingUp,
  Cpu,
  HardHat,
  Landmark,
  Activity,
  Megaphone,
  Users,
  Truck,
  Scale,
  Layout,
  ExternalLink,
  FileText
} from 'lucide-react';
import { JOBS_LIST, LIFE_AT_NEXUS_PERKS } from '../data/mockData';
import type { Job, DepartmentCategory, WorkMode } from '../types';
import { getTranslation, type SupportedLanguage } from '../data/translations';

interface CareersPageProps {
  onSelectJob: (job: Job) => void;
  setActiveTab?: (tab: string) => void;
  selectedLanguage?: SupportedLanguage;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onSelectJob, setActiveTab, selectedLanguage = 'en-US' }) => {
  const [selectedDept, setSelectedDept] = useState<DepartmentCategory>('All');
  const [selectedWorkMode, setSelectedWorkMode] = useState<WorkMode>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [trackingIdInput, setTrackingIdInput] = useState('');
  const [trackerResult, setTrackerResult] = useState<string | null>(null);

  const t = (key: string) => getTranslation(selectedLanguage, key);

  const getDeptIcon = (dept: string) => {
    switch (dept) {
      case 'Software & AI': return <Cpu className="w-4 h-4" />;
      case 'Engineering & Hardware': return <HardHat className="w-4 h-4" />;
      case 'Finance & Accounting': return <Landmark className="w-4 h-4" />;
      case 'Healthcare & Biotech': return <Activity className="w-4 h-4" />;
      case 'Marketing & Communications': return <Megaphone className="w-4 h-4" />;
      case 'HR & Talent': return <Users className="w-4 h-4" />;
      case 'Operations & Logistics': return <Truck className="w-4 h-4" />;
      case 'Legal & Compliance': return <Scale className="w-4 h-4" />;
      case 'Sales & Key Accounts': return <TrendingUp className="w-4 h-4" />;
      case 'Product & UX Design': return <Layout className="w-4 h-4" />;
      default: return <Briefcase className="w-4 h-4" />;
    }
  };

  const categories: DepartmentCategory[] = [
    'All',
    'Software & AI',
    'Engineering & Hardware',
    'Finance & Accounting',
    'Healthcare & Biotech',
    'Marketing & Communications',
    'HR & Talent',
    'Operations & Logistics',
    'Legal & Compliance',
    'Sales & Key Accounts',
    'Product & UX Design'
  ];

  const filteredJobs = JOBS_LIST.filter(job => {
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    const matchesMode = selectedWorkMode === 'All' || job.workMode === selectedWorkMode;
    const matchesSearch = searchTerm.trim() === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesMode && matchesSearch;
  });

  const handleTrackApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingIdInput.trim()) return;
    setTrackerResult(`Application ID "${trackingIdInput.toUpperCase()}" is currently undergoing stage 2 Executive Screening at Nexus Talent Hub. Your assigned Talent Partner will contact you within 48 hours.`);
  };

  const handleLaunchAnalyzer = () => {
    if (setActiveTab) {
      setActiveTab('resume-analyzer');
    } else {
      window.open('http://localhost:5173', '_blank');
    }
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* CAREERS HERO BANNER */}
      <section className="relative pt-12 pb-16 hero-glow border-b border-[var(--color-border)]">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-4">
          
          <div className="inline-flex items-center gap-2 bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] px-4 py-1.5 rounded-full text-xs font-bold text-[var(--color-badge-text)]">
            <Sparkles className="w-4 h-4 text-[var(--color-accent)] animate-pulse" />
            GLOBAL TALENT ACQUISITION 2026
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            {t('hero.title')}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Direct CTA Button for Resume Analyzer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleLaunchAnalyzer}
              className="theme-btn-primary font-bold text-sm px-6 py-3.5 rounded-xl shadow-xl flex items-center justify-center gap-2.5 transition-all transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-bounce" />
              <span>{t('hero.aiButton')}</span>
              <FileText className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2 bg-[var(--color-bg-surface)] px-4 py-2 rounded-xl border border-[var(--color-border)]">
              <Briefcase className="w-4 h-4 text-[var(--color-accent)]" />
              <span>{t('hero.openJobs')}</span>
            </div>
            <div className="flex items-center gap-2 bg-[var(--color-bg-surface)] px-4 py-2 rounded-xl border border-[var(--color-border)]">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>{t('hero.operatingCountries')}</span>
            </div>
            <div className="flex items-center gap-2 bg-[var(--color-bg-surface)] px-4 py-2 rounded-xl border border-[var(--color-border)]">
              <Heart className="w-4 h-4 text-pink-400" />
              <span>{t('hero.globalEmployer')}</span>
            </div>
          </div>

        </div>
      </section>

      {/* AI RESUME ANALYZER HIGHLIGHT BANNER */}
      <section className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--color-border)] relative overflow-hidden shadow-2xl bg-gradient-to-r from-[var(--color-bg-surface)] via-[var(--color-badge-bg)] to-[var(--color-bg-surface)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)] animate-pulse" />
                AI Resume Matching Engine
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {t('analyzer.title')}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                {t('analyzer.subtitle')}
              </p>
            </div>

            <button
              onClick={handleLaunchAnalyzer}
              className="theme-btn-primary font-extrabold text-sm px-8 py-4 rounded-2xl shadow-2xl whitespace-nowrap flex items-center gap-3 transition-all transform hover:scale-105 shrink-0 text-white"
            >
              <FileText className="w-5 h-5 text-white" />
              <span>{t('nav.launchAnalyzer')}</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </button>
          </div>
        </div>
      </section>

      {/* DEPARTMENT FIELD SELECTOR TABS */}
      <section className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-display font-bold text-white">
              Filter By Department Field
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Select a category to view active listings</p>
          </div>
          <span className="text-xs bg-[var(--color-bg-surface)] text-[var(--color-accent)] font-mono px-3 py-1 rounded-lg border border-[var(--color-border)]">
            Showing {filteredJobs.length} Positions
          </span>
        </div>

        {/* Scrollable Department Pill Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedDept === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedDept(cat)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? 'theme-btn-primary text-white border-transparent shadow-lg'
                    : 'bg-[var(--color-bg-surface)] text-slate-300 hover:bg-white/10 hover:text-white border-[var(--color-border)]'
                }`}
              >
                {getDeptIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* SEARCH AND FILTERS BAR */}
      <section className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[var(--color-bg-surface)] p-4 rounded-2xl border border-[var(--color-border)] flex flex-col md:flex-row items-center gap-4">
          
          {/* Keyword Search */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by job title, skill (e.g. AI, M&A, Genomics, C++), location..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          {/* Work Mode Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-xs text-slate-400 font-medium">Work Mode:</span>
            <select
              value={selectedWorkMode}
              onChange={e => setSelectedWorkMode(e.target.value as WorkMode)}
              className="bg-[var(--color-bg-dark)] border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
            >
              <option value="All">All Modes (Remote/Hybrid/Onsite)</option>
              <option value="Remote">Remote Only</option>
              <option value="Hybrid">Hybrid Setup</option>
              <option value="Onsite">Onsite Global Hub</option>
            </select>
          </div>

        </div>
      </section>

      {/* JOB LISTINGS GRID */}
      <section className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="glass-card p-6 rounded-2xl border border-[var(--color-border)] flex flex-col justify-between space-y-4 group relative overflow-hidden"
              >
                {/* Card Top Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)] text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                      {getDeptIcon(job.department)}
                      {job.department}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="bg-[var(--color-bg-surface)] text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--color-border)]">
                        {job.workMode}
                      </span>
                      {job.urgentHiring && (
                        <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-400/30 animate-pulse">
                          Urgent
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {job.location}, {job.country}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      {job.salaryRange}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="bg-[var(--color-bg-dark)]/80 p-3 rounded-xl border border-[var(--color-border)] space-y-1">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Key Requirement</div>
                    <div className="text-xs text-slate-300 truncate">
                      {job.requirements[0]}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Posted {job.postedDate}
                  </span>

                  <button
                    onClick={() => onSelectJob(job)}
                    className="theme-btn-primary font-semibold text-xs px-4 py-2 rounded-xl shadow-md flex items-center gap-1.5 transition-all transform group-hover:scale-105"
                  >
                    View & Apply
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel p-12 rounded-2xl text-center space-y-4">
            <Search className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No Openings Match Your Filters</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try adjusting your department selection, search query, or work mode filter to explore our 200+ global vacancies.
            </p>
            <button
              onClick={() => { setSelectedDept('All'); setSelectedWorkMode('All'); setSearchTerm(''); }}
              className="bg-[var(--color-bg-surface)] text-[var(--color-accent)] hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors border border-[var(--color-border)]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* LIFE AT NEXUS & BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">Global Total Rewards</div>
          <h2 className="text-3xl font-display font-bold text-white">Why Join Nexus Dynamics?</h2>
          <p className="text-slate-400 text-sm">
            We provide industry-leading compensation, equity ownership, continuous learning, and total well-being packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIFE_AT_NEXUS_PERKS.map((perk, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-[var(--color-border)] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-badge-bg)] text-[var(--color-accent)] border border-[var(--color-badge-border)] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{perk.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CANDIDATE APPLICATION TRACKER SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[var(--color-border)] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">Candidate Self-Service</span>
              <h2 className="text-2xl font-display font-bold text-white mt-1">
                Track Application Status
              </h2>
              <p className="text-xs text-slate-400">
                Already submitted an application? Enter your Tracking Reference ID below.
              </p>
            </div>

            <form onSubmit={handleTrackApplication} className="flex gap-2 w-full md:w-auto">
              <input
                type="text"
                required
                placeholder="e.g. NX-482910"
                value={trackingIdInput}
                onChange={e => setTrackingIdInput(e.target.value)}
                className="bg-[var(--color-bg-dark)] border border-[var(--color-border)] text-white placeholder-slate-500 px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-[var(--color-accent)] uppercase font-mono min-w-[200px]"
              />
              <button
                type="submit"
                className="theme-btn-primary font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors shrink-0"
              >
                Track Status
              </button>
            </form>
          </div>

          {trackerResult && (
            <div className="bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] p-4 rounded-xl text-xs text-slate-200 animate-in fade-in">
              <div className="font-bold mb-1 flex items-center gap-1.5 text-[var(--color-accent)]">
                <ShieldCheck className="w-4 h-4" />
                Live Candidate Portal Status
              </div>
              {trackerResult}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};
