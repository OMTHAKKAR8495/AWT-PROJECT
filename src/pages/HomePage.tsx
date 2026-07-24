import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Globe2, 
  ChevronRight,
  Briefcase,
  TrendingUp,
  Zap,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_STATS, DEPARTMENT_INFOS, GLOBAL_HUBS, NEWS_ARTICLES } from '../data/mockData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden hero-glow">
        
        {/* Glowing Orbit Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-glow)] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[var(--color-accent)]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Enterprise Tag */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] rounded-full px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[var(--color-accent)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-[var(--color-badge-text)] uppercase">
                FORTUNE 500 MULTINATIONAL CONGLOMERATE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
              Architecting the Future of <br className="hidden sm:inline" />
              <span className="gradient-text">Global Enterprise & Technology</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
              Nexus Dynamics powers global transformation across <strong className="text-white">Artificial Intelligence, Renewable Energy, Healthcare Systems, and Financial Advisory</strong> for Fortune 500 corporations worldwide.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setActiveTab('careers')}
                className="w-full sm:w-auto theme-btn-primary font-bold text-base px-8 py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <Briefcase className="w-5 h-5 text-white" />
                Explore Careers (Hiring All Fields)
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className="w-full sm:w-auto bg-[var(--color-bg-surface)] hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-base px-8 py-4 rounded-2xl border border-[var(--color-border)] backdrop-blur-md flex items-center justify-center gap-2 transition-all"
              >
                <Layers className="w-5 h-5 text-[var(--color-accent)]" />
                Global Business Divisions
              </button>
            </div>

            {/* Hiring Alert Ticker */}
            <div className="pt-6">
              <div className="inline-flex items-center gap-3 bg-[var(--color-bg-surface)] border border-[var(--color-border)] px-4 py-2 rounded-xl text-xs text-slate-300 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span><strong className="text-emerald-400">NOW HIRING GLOBALLY:</strong> Software & AI, Engineering, Finance, Biotech, HR, Legal & Sales</span>
              </div>
            </div>

          </div>

          {/* Key Metrics Counter Card Grid */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-[var(--color-border)] relative overflow-hidden group">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white group-hover:text-[var(--color-accent)] transition-colors">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-medium text-[var(--color-accent)] flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HIRING TICKER ACROSS ALL FIELDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest bg-[var(--color-badge-bg)] px-3 py-1 rounded-full border border-[var(--color-badge-border)]">
                Global Talent Opportunity
              </span>
              <h2 className="text-3xl font-display font-bold text-white">
                We Are Hiring Globally Across <span className="gradient-text">All Corporate & Tech Fields</span>
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                Whether you specialize in artificial intelligence research, renewable grid engineering, corporate law, biotech informatics, global supply chain, or HR talent strategy—Nexus Dynamics offers unprecedented career growth.
              </p>
            </div>

            <button
              onClick={() => setActiveTab('careers')}
              className="theme-btn-primary font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl whitespace-nowrap flex items-center gap-2 transition-all transform hover:scale-105"
            >
              Browse Open Positions (10 Disciplines)
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* BUSINESS DIVISIONS & SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
            Enterprise Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Our Business Divisions
          </h2>
          <p className="text-slate-400 text-base">
            Delivering cross-sector innovation and specialized industrial solutions across 65+ countries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENT_INFOS.slice(0, 6).map((dept) => (
            <div 
              key={dept.category} 
              onClick={() => setActiveTab('services')}
              className="glass-card p-6 rounded-2xl border border-[var(--color-border)] cursor-pointer group transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-badge-bg)] text-[var(--color-accent)] border border-[var(--color-badge-border)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs bg-[var(--color-bg-surface)] text-slate-300 px-3 py-1 rounded-full font-mono border border-[var(--color-border)]">
                  {dept.openRolesCount} Open Roles
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                {dept.title}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {dept.summary}
              </p>

              <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-semibold text-[var(--color-accent)]">
                <span>Explore Solutions & Roles</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL FOOTPRINT & HUBS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[var(--color-border)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <div>
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest flex items-center gap-2">
                <Globe2 className="w-4 h-4" /> Global Presence
              </span>
              <h2 className="text-3xl font-display font-bold text-white mt-2">
                Our Strategic Global Hubs
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Headquartered in New York, with regional decision hubs across EMEA and APAC.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('about')}
              className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              View All 65+ Office Locations
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_HUBS.map((hub) => (
              <div key={hub.city} className="bg-[var(--color-bg-surface)] p-5 rounded-2xl border border-[var(--color-border)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">{hub.city}, {hub.country}</span>
                  <span className="text-[10px] bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] px-2 py-0.5 rounded font-semibold border border-[var(--color-badge-border)]">
                    {hub.type}
                  </span>
                </div>
                <div className="text-xs text-slate-400">{hub.address}</div>
                <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-slate-400">
                  <span>Workforce: <strong className="text-white">{hub.employees.toLocaleString()}</strong></span>
                  <span className="text-[var(--color-accent)]">{hub.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST PRESS & CORPORATE INSIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
              Newsroom & Insights
            </div>
            <h2 className="text-3xl font-display font-bold text-white mt-1">
              Latest Enterprise News
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('about')}
            className="text-xs font-semibold text-[var(--color-accent)] hover:text-white flex items-center gap-1"
          >
            Visit Global Newsroom <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <div key={article.id} className="glass-card rounded-2xl overflow-hidden border border-[var(--color-border)] flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[var(--color-bg-dark)]/90 backdrop-blur-md text-[var(--color-accent)] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[var(--color-border)]">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-[11px] text-slate-400 mb-2">{article.date} • {article.readTime}</div>
                  <h3 className="text-base font-bold text-white group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <span className="text-xs font-semibold text-[var(--color-accent)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Press Release <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
