import React from 'react';
import { 
  Building2, 
  Target, 
  Sparkles,
  Leaf
} from 'lucide-react';
import { LEADERSHIP_TEAM } from '../data/mockData';

interface AboutUsPageProps {
  setActiveTab: (tab: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* PAGE HEADER HERO */}
      <section className="relative pt-12 pb-16 hero-glow border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] px-3.5 py-1 rounded-full text-xs font-semibold text-[var(--color-badge-text)]">
            <Building2 className="w-3.5 h-3.5" />
            Corporate Identity & Leadership
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Nexus Dynamics Global</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Empowering 124,000 professionals across 65+ countries to solve humanity's greatest challenges through advanced artificial intelligence, sustainable infrastructure, and capital strategy.
          </p>
        </div>
      </section>

      {/* OUR HERITAGE & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
              Our 35-Year Heritage
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
              From Engineering Pioneer to Fortune 500 Enterprise Leader
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Founded in 1991 as an industrial automation laboratory, Nexus Dynamics has evolved into a global conglomerate generating $52.4 Billion in annual revenue. Today, we operate at the intersection of enterprise software, renewable grid technology, genomic health, and cross-border financial advisory.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our commitment to ethical corporate governance, rigorous scientific research, and environmental stewardship drives long-term value for our shareholders, employees, and client communities worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[var(--color-bg-surface)] p-4 rounded-xl border border-[var(--color-border)]">
                <div className="text-2xl font-bold text-[var(--color-accent)]">1991</div>
                <div className="text-xs text-slate-400 mt-1">Founded in Zurich & New York</div>
              </div>
              <div className="bg-[var(--color-bg-surface)] p-4 rounded-xl border border-[var(--color-border)]">
                <div className="text-2xl font-bold text-emerald-400">65+</div>
                <div className="text-xs text-slate-400 mt-1">Countries with Active Operations</div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Card Box */}
          <div className="glass-panel p-8 rounded-3xl border border-[var(--color-border)] space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-badge-bg)] text-[var(--color-accent)] border border-[var(--color-badge-border)] flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Our Corporate Mission</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  To accelerate global economic and technological progress through responsible innovation, high-throughput cloud infrastructure, and zero-carbon energy grids.
                </p>
              </div>
            </div>

            <hr className="border-[var(--color-border)]" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-badge-bg)] text-[var(--color-primary)] border border-[var(--color-badge-border)] flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Our Vision 2030</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  To become the world’s most trusted multi-sector MNC, achieving 100% net-zero carbon operations while cultivating an inclusive global workforce of over 150,000 leaders.
                </p>
              </div>
            </div>

            <hr className="border-[var(--color-border)]" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Sustainability Standard</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Rated #1 in Corporate Sustainability & Governance (ESG) among global tech conglomerates by MSCI & Dow Jones Sustainability Index.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EXECUTIVE BOARD & LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
            Executive Board
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Global Leadership Team
          </h2>
          <p className="text-slate-400 text-sm">
            Guided by industry visionaries with decades of enterprise experience across technology, finance, and global policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((leader) => (
            <div key={leader.id} className="glass-card rounded-2xl p-6 border border-[var(--color-border)] text-center space-y-4 group">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[var(--color-accent)] p-1">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                  {leader.name}
                </h3>
                <div className="text-xs font-semibold text-[var(--color-accent)] mt-0.5">
                  {leader.title}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-1">
                  {leader.location}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-[var(--color-border)]">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN US CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-bg-surface)] rounded-3xl p-8 sm:p-12 border border-[var(--color-border)] text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Ready to Build Your Career at Nexus Dynamics?
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            We are hiring top-tier talent in over 65 countries. Explore opportunities across engineering, research, finance, law, marketing, and human capital.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('careers')}
              className="theme-btn-primary font-bold text-sm px-8 py-4 rounded-xl shadow-xl transition-all transform hover:scale-105"
            >
              Browse Open Careers & Apply
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
