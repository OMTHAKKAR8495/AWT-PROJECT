import React, { useState } from 'react';
import { 
  Sparkles, 
  FileText, 
  Briefcase, 
  MessageSquareCode, 
  Bot, 
  Download,
  Mail,
  Zap,
  Award,
  Database
} from 'lucide-react';
import type { CandidateProfile, ATSAnalysis, JobMatchResult } from '../types/resume';
import { EmailReportModal } from './EmailReportModal';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  candidateProfile: CandidateProfile | null;
  atsAnalysis: ATSAnalysis | null;
  jobMatches: JobMatchResult[];
  onExportPdf: () => void;
  onSelectSampleResume: (key: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  candidateProfile,
  atsAnalysis,
  jobMatches,
  onExportPdf,
  onSelectSampleResume,
}) => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div 
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-sky-400 animate-pulse-slow" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  Career<span className="text-gradient">Match</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded-full">
                  AI PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Resume Analyzer & Automated Job Matcher
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Zap },
              { id: 'analyzer', label: 'Resume Analyzer', icon: FileText },
              { id: 'jobs', label: 'Job Matches', icon: Briefcase },
              { id: 'interview', label: 'Interview Studio', icon: MessageSquareCode },
              { id: 'database', label: 'Candidate Database', icon: Database },
              { id: 'widget', label: 'Career Bot Widget', icon: Bot },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-400 border border-sky-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs text-slate-400">Demo Profiles:</span>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    onSelectSampleResume(e.target.value);
                  }
                }}
                className="bg-transparent text-xs text-sky-400 focus:outline-none cursor-pointer font-medium"
                defaultValue=""
              >
                <option value="" disabled className="bg-slate-900 text-slate-400">Load Candidate...</option>
                <option value="software_engineer" className="bg-slate-900 text-slate-200">Aarav Sharma (Full Stack)</option>
                <option value="ai_data_scientist" className="bg-slate-900 text-slate-200">Priya Patel (AI Specialist)</option>
                <option value="ui_ux_designer" className="bg-slate-900 text-slate-200">Rohan Mehta (UI Designer)</option>
              </select>
            </div>

            {candidateProfile && (
              <div className="flex items-center gap-2">
                <button
                  onClick={onExportPdf}
                  className="flex items-center gap-1.5 px-3 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded-xl shadow-lg shadow-sky-500/25 transition-all"
                  title="Download 1-Page PDF Report"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download PDF</span>
                </button>

                <button
                  onClick={() => setShowEmailModal(true)}
                  className="flex items-center gap-1.5 px-3 py-2 bg-purple-500 hover:bg-purple-400 text-white font-semibold text-xs rounded-xl shadow-lg shadow-purple-500/25 transition-all"
                  title="Email Report Directly"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mail Report</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-around border-t border-slate-800/80 px-2 py-2 bg-slate-950/90">
        {[
          { id: 'dashboard', label: 'Dash', icon: Zap },
          { id: 'analyzer', label: 'Resume', icon: FileText },
          { id: 'jobs', label: 'Jobs', icon: Briefcase },
          { id: 'interview', label: 'Prep', icon: MessageSquareCode },
          { id: 'database', label: 'Database', icon: Database },
          { id: 'widget', label: 'Widget', icon: Bot },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg text-[11px] ${
                isActive ? 'text-sky-400 font-bold' : 'text-slate-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {showEmailModal && candidateProfile && atsAnalysis && (
        <EmailReportModal
          profile={candidateProfile}
          ats={atsAnalysis}
          jobMatches={jobMatches}
          onClose={() => setShowEmailModal(false)}
        />
      )}
    </header>
  );
};
