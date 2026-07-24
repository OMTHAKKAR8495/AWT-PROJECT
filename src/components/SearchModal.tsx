import React, { useState } from 'react';
import { Search, X, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { JOBS_LIST, DEPARTMENT_INFOS } from '../data/mockData';
import type { Job } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectJob: (job: Job) => void;
  setActiveTab: (tab: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectJob,
  setActiveTab
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredJobs = query.trim()
    ? JOBS_LIST.filter(j =>
        j.title.toLowerCase().includes(query.toLowerCase()) ||
        j.department.toLowerCase().includes(query.toLowerCase()) ||
        j.location.toLowerCase().includes(query.toLowerCase())
      )
    : JOBS_LIST.slice(0, 4);

  const filteredDepts = query.trim()
    ? DEPARTMENT_INFOS.filter(d =>
        d.title.toLowerCase().includes(query.toLowerCase()) ||
        d.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[var(--color-bg-dark)]/85 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[var(--color-border)] flex items-center gap-3 bg-[var(--color-bg-dark)]/60">
          <Search className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search roles (e.g. AI Scientist, Finance, Legal, Engineer), divisions, hubs..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          
          {/* Quick Page Links */}
          {!query && (
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Quick Navigation
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setActiveTab('careers'); onClose(); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--color-bg-dark)]/60 hover:bg-white/10 border border-[var(--color-border)] text-xs text-slate-300 transition-colors text-left"
                >
                  <Briefcase className="w-4 h-4 text-[var(--color-accent)]" />
                  <span>Careers Portal (10 Fields)</span>
                </button>
                <button
                  onClick={() => { setActiveTab('about'); onClose(); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--color-bg-dark)]/60 hover:bg-white/10 border border-[var(--color-border)] text-xs text-slate-300 transition-colors text-left"
                >
                  <Building2 className="w-4 h-4 text-[var(--color-accent)]" />
                  <span>About Us & Leadership</span>
                </button>
              </div>
            </div>
          )}

          {/* Job Results */}
          <div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              {query ? `Matching Job Openings (${filteredJobs.length})` : 'Popular Job Openings'}
            </div>

            <div className="space-y-2">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <div
                    key={job.id}
                    onClick={() => {
                      onSelectJob(job);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-[var(--color-bg-dark)]/60 hover:bg-white/10 border border-[var(--color-border)] cursor-pointer flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">
                        {job.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-2">
                        <span className="text-[var(--color-accent)] font-medium">{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.workMode}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all" />
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-500 p-4 text-center">
                  No open jobs found matching "{query}". Try searching for AI, Finance, Engineering, or Legal.
                </div>
              )}
            </div>
          </div>

          {/* Divisions Matching */}
          {filteredDepts.length > 0 && (
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Business Divisions
              </div>
              <div className="space-y-2">
                {filteredDepts.map(dept => (
                  <div
                    key={dept.category}
                    onClick={() => {
                      setActiveTab('services');
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-[var(--color-bg-dark)]/60 hover:bg-white/10 border border-[var(--color-border)] cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white">{dept.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{dept.summary}</div>
                    </div>
                    <span className="text-[10px] bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)] px-2 py-0.5 rounded font-mono">
                      {dept.openRolesCount} Jobs
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
