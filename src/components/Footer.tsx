import React from 'react';
import { 
  Building2, 
  Globe2, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[var(--color-bg-dark)] border-t border-[var(--color-border)] text-slate-400 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-glow)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Newsletter / ESG Banner */}
        <div className="bg-[var(--color-bg-surface)] p-8 rounded-2xl border border-[var(--color-border)] mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-2">
              <Globe2 className="w-4 h-4" />
              Nexus Global Executive Insights
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Stay Ahead of Industry Transformation
            </h3>
            <p className="text-sm text-slate-300">
              Subscribe to quarterly reports on enterprise AI, clean tech infrastructure, and global career opportunities.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your enterprise email"
              className="bg-[var(--color-bg-dark)] border border-[var(--color-border)] text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[var(--color-accent)] min-w-[280px]"
            />
            <button className="theme-btn-primary font-semibold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* 5 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-9 h-9 rounded-xl theme-btn-primary p-0.5 shadow-md">
                <div className="w-full h-full bg-[var(--color-bg-dark)] rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                NEXUS <span className="text-[var(--color-accent)] font-light">DYNAMICS</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Nexus Dynamics Group is a global enterprise leader delivering next-generation Artificial Intelligence, Clean Energy Grids, Bio-Tech Infrastructure, and Strategic Financial Consulting.
            </p>
          </div>

          {/* Col 2: Business Divisions */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Business Divisions</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveTab('services')} className="hover:text-[var(--color-accent)] transition-colors">Artificial Intelligence & Cloud</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-[var(--color-accent)] transition-colors">Renewable Grid Energy</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-[var(--color-accent)] transition-colors">Bio-Genomics & Health</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-[var(--color-accent)] transition-colors">Financial Advisory & M&A</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-[var(--color-accent)] transition-colors">Global Supply Chain Solutions</button></li>
            </ul>
          </div>

          {/* Col 3: Careers & Hiring */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Careers (Hiring All Fields)</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setActiveTab('careers')} className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                  Software & AI Roles
                  <span className="text-[10px] bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)] px-1.5 py-0.2 rounded font-mono">42 Open</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('careers')} className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                  Engineering & Hardware
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono">28 Open</span>
                </button>
              </li>
              <li><button onClick={() => setActiveTab('careers')} className="hover:text-[var(--color-accent)] transition-colors">Finance & Legal Careers</button></li>
              <li><button onClick={() => setActiveTab('careers')} className="hover:text-[var(--color-accent)] transition-colors">Marketing, HR & PR</button></li>
              <li><button onClick={() => setActiveTab('careers')} className="hover:text-[var(--color-accent)] transition-colors">Life at Nexus & Perks</button></li>
            </ul>
          </div>

          {/* Col 4: Corporate Info */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Global Headquarters</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span>One Nexus Plaza, Manhattan, New York, NY 10001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>+1 (212) 555-0190</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>contact@nexusdynamics.global</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Nexus Dynamics Group Inc. All rights reserved. Operating across 65+ countries.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Governance</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security & Trust</a>
            <a href="#" className="hover:text-slate-300 transition-colors">ESG Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
